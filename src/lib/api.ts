/**
 * Lapisan penghubung ke backend.
 *
 * Saat ini website berjalan sebagai situs statis tanpa backend. Semua kontrak
 * data sudah disiapkan di sini supaya integrasi Spring Boot nanti hanya
 * menyentuh file ini:
 *
 *   1. Isi NEXT_PUBLIC_API_BASE_URL di .env.local
 *   2. Sediakan endpoint POST /api/v1/collaborations yang menerima
 *      CollaborationPayload dan membalas { reference: string }
 *
 * Selama variabel itu kosong, form berjalan dalam mode offline: data tetap
 * tervalidasi dan pengusul diberi jalur kirim lewat email.
 */

export type CollaborationPayload = {
  /** value dari collaboratorTypes (src/content/kolaborasi.ts) */
  collaboratorType: string;
  contactName: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  /** slug bidang dari src/content/program.ts */
  interests: string[];
  subject: string;
  message: string;
  submittedAt: string;
  source: 'website';
};

export type SubmitOutcome =
  | { status: 'sent'; reference: string | null }
  | { status: 'offline' };

const rawBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? '';
export const apiBaseUrl: string = rawBaseUrl.replace(/\/+$/, '');
export const isApiConfigured: boolean = apiBaseUrl.length > 0;

export class ApiError extends Error {
  readonly status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

export async function submitCollaboration(payload: CollaborationPayload): Promise<SubmitOutcome> {
  if (!isApiConfigured) {
    return { status: 'offline' };
  }

  const response = await fetch(`${apiBaseUrl}/api/v1/collaborations`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new ApiError(
      `Server membalas dengan status ${response.status}.`,
      response.status,
    );
  }

  let reference: string | null = null;
  try {
    const data: unknown = await response.json();
    if (data && typeof data === 'object' && 'reference' in data) {
      const value = (data as { reference?: unknown }).reference;
      if (typeof value === 'string') reference = value;
    }
  } catch {
    // Backend boleh membalas tanpa body. Pengiriman tetap dianggap berhasil.
  }

  return { status: 'sent', reference };
}

/** Jalur cadangan: ringkasan usulan sebagai email siap kirim. */
export function buildMailtoLink(
  payload: CollaborationPayload,
  to: string,
  typeLabel: string,
  interestLabels: string[],
): string {
  const lines = [
    `Jenis mitra: ${typeLabel}`,
    `Nama: ${payload.contactName}`,
    `Instansi/organisasi: ${payload.organization || '-'}`,
    `Jabatan: ${payload.role || '-'}`,
    `Email: ${payload.email}`,
    `Telepon/WhatsApp: ${payload.phone || '-'}`,
    `Bidang yang diminati: ${interestLabels.length ? interestLabels.join(', ') : '-'}`,
    '',
    'Usulan kolaborasi:',
    payload.message,
  ];

  const subject = `Usulan kolaborasi: ${payload.subject}`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
}
