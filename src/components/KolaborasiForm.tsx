'use client';

import { useState } from 'react';
import { collaboratorTypes, kolaborasiPage } from '@/content/kolaborasi';
import { programAreas } from '@/content/program';
import { site } from '@/content/site';
import {
  buildMailtoLink,
  isApiConfigured,
  submitCollaboration,
  type CollaborationPayload,
} from '@/lib/api';

type FormState = {
  collaboratorType: string;
  contactName: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  interests: string[];
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type Status = 'idle' | 'submitting' | 'sent' | 'offline' | 'error';

const emptyForm: FormState = {
  collaboratorType: '',
  contactName: '',
  organization: '',
  role: '',
  email: '',
  phone: '',
  interests: [],
  subject: '',
  message: '',
};

const fieldLabels: Record<keyof FormState, string> = {
  collaboratorType: 'Jenis mitra',
  contactName: 'Nama',
  organization: 'Instansi atau organisasi',
  role: 'Jabatan',
  email: 'Email',
  phone: 'Telepon atau WhatsApp',
  interests: 'Bidang kolaborasi',
  subject: 'Judul usulan',
  message: 'Uraian usulan',
};

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.collaboratorType) {
    errors.collaboratorType = 'Pilih satu jenis mitra di atas.';
  }
  if (!form.contactName.trim()) {
    errors.contactName = 'Tulis nama orang yang bisa dihubungi.';
  }
  if (!form.email.trim()) {
    errors.email = 'Tulis email yang aktif.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Format email belum benar. Contoh: nama@domain.id';
  }
  if (!form.subject.trim()) {
    errors.subject = 'Beri judul singkat, misalnya "Kelas coding untuk SMA di Ambon".';
  }
  if (form.message.trim().length < 20) {
    errors.message = 'Uraikan usulan minimal 20 karakter agar bisa ditindaklanjuti.';
  }

  return errors;
}

function labelOfType(value: string): string {
  return collaboratorTypes.find((item) => item.value === value)?.label ?? '—';
}

function labelsOfInterests(slugs: string[]): string[] {
  return slugs
    .map((slug) => programAreas.find((area) => area.slug === slug)?.title)
    .filter((title): title is string => typeof title === 'string');
}

export default function KolaborasiForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [reference, setReference] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string>('');
  const [sentPayload, setSentPayload] = useState<CollaborationPayload | null>(null);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    setErrors((previous) => {
      if (!previous[key]) return previous;
      const next = { ...previous };
      delete next[key];
      return next;
    });
  };

  const toggleInterest = (slug: string) => {
    setForm((previous) => ({
      ...previous,
      interests: previous.interests.includes(slug)
        ? previous.interests.filter((item) => item !== slug)
        : [...previous.interests, slug],
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const found = validate(form);
    setErrors(found);

    const firstInvalid = (Object.keys(found) as Array<keyof FormState>)[0];
    if (firstInvalid) {
      setStatus('idle');
      window.requestAnimationFrame(() => {
        document.getElementById(firstInvalid)?.focus();
      });
      return;
    }

    const payload: CollaborationPayload = {
      collaboratorType: form.collaboratorType,
      contactName: form.contactName.trim(),
      organization: form.organization.trim(),
      role: form.role.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      interests: form.interests,
      subject: form.subject.trim(),
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
      source: 'website',
    };

    setStatus('submitting');
    setServerMessage('');

    try {
      const outcome = await submitCollaboration(payload);
      setSentPayload(payload);
      if (outcome.status === 'sent') {
        setReference(outcome.reference);
        setStatus('sent');
      } else {
        setStatus('offline');
      }
    } catch (error) {
      setSentPayload(payload);
      setServerMessage(
        error instanceof Error
          ? error.message
          : 'Usulan belum terkirim karena gangguan jaringan.',
      );
      setStatus('error');
    }
  };

  const resetForm = () => {
    setForm(emptyForm);
    setErrors({});
    setStatus('idle');
    setReference(null);
    setServerMessage('');
    setSentPayload(null);
  };

  if (status === 'sent' || status === 'offline' || status === 'error') {
    const payload = sentPayload;
    const mailto = payload
      ? buildMailtoLink(
          payload,
          site.contact.kolaborasiEmail,
          labelOfType(payload.collaboratorType),
          labelsOfInterests(payload.interests),
        )
      : `mailto:${site.contact.kolaborasiEmail}`;

    return (
      <div className="result-panel" role="status" aria-live="polite">
        <h3 className="display-m">
          {status === 'sent' ? 'Usulan kolaborasi terkirim' : 'Usulan Anda sudah tersusun'}
        </h3>

        {status === 'sent' && (
          <p>
            Terima kasih. Tim Mataruma akan membaca usulan ini dan menghubungi Anda melalui{' '}
            {payload?.email}.
            {reference ? ` Nomor rujukan: ${reference}.` : ''}
          </p>
        )}

        {status === 'offline' && (
          <p>
            Website Mataruma belum tersambung ke sistem penerimaan usulan. Kirim ringkasan di bawah
            ini lewat email agar langsung masuk ke tim Mataruma.
          </p>
        )}

        {status === 'error' && (
          <p>
            Usulan belum sampai ke server Mataruma. {serverMessage} Kirim lewat email sebagai jalur
            cadangan, atau coba lagi beberapa saat.
          </p>
        )}

        {payload && (
          <dl>
            <div>
              <dt>Jenis mitra</dt>
              <dd>{labelOfType(payload.collaboratorType)}</dd>
            </div>
            <div>
              <dt>Pengusul</dt>
              <dd>
                {payload.contactName}
                {payload.organization ? ` · ${payload.organization}` : ''}
              </dd>
            </div>
            <div>
              <dt>Judul usulan</dt>
              <dd>{payload.subject}</dd>
            </div>
            {labelsOfInterests(payload.interests).length > 0 && (
              <div>
                <dt>Bidang</dt>
                <dd>{labelsOfInterests(payload.interests).join(', ')}</dd>
              </div>
            )}
          </dl>
        )}

        <div className="btn-row">
          {status !== 'sent' && (
            <a className="btn btn-primary" href={mailto}>
              Kirim lewat email
            </a>
          )}
          <button type="button" className="btn btn-outline" onClick={resetForm}>
            Ajukan usulan lain
          </button>
        </div>
      </div>
    );
  }

  const errorList = (Object.keys(errors) as Array<keyof FormState>).filter((key) => errors[key]);

  return (
    <form className="form-stack" onSubmit={handleSubmit} noValidate>
      {errorList.length > 0 && (
        <div className="form-alert" role="alert">
          <strong>Ada {errorList.length} bagian yang perlu dilengkapi:</strong>
          <ul>
            {errorList.map((key) => (
              <li key={key}>
                {fieldLabels[key]} — {errors[key]}
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset>
        <legend className="display-m" id="collaboratorType" tabIndex={-1}>
          {kolaborasiPage.formHeading}
        </legend>
        {errors.collaboratorType && (
          <p className="field-error" style={{ marginTop: '0.75rem' }}>
            {errors.collaboratorType}
          </p>
        )}
        <div className="choice-grid">
          {collaboratorTypes.map((type) => (
            <label
              key={type.value}
              className={`choice${form.collaboratorType === type.value ? ' is-selected' : ''}`}
            >
              <input
                type="radio"
                name="collaboratorType"
                value={type.value}
                checked={form.collaboratorType === type.value}
                onChange={() => update('collaboratorType', type.value)}
              />
              <span className="choice-emoji" aria-hidden="true">
                {type.emoji}
              </span>
              <span>
                <span className="choice-label">{type.label}</span>
                <span className="choice-hint">{type.hint}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="display-m">Kontak pengusul</legend>
        <div className="field-grid">
          <div className={`field${errors.contactName ? ' field-invalid' : ''}`}>
            <label htmlFor="contactName">Nama lengkap</label>
            <input
              id="contactName"
              name="contactName"
              type="text"
              autoComplete="name"
              value={form.contactName}
              onChange={(event) => update('contactName', event.target.value)}
              aria-invalid={errors.contactName ? true : undefined}
              aria-describedby={errors.contactName ? 'contactName-error' : undefined}
            />
            {errors.contactName && (
              <p className="field-error" id="contactName-error">
                {errors.contactName}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="organization">Instansi atau organisasi</label>
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              value={form.organization}
              onChange={(event) => update('organization', event.target.value)}
            />
            <p className="field-note">Kosongkan bila mengajukan sebagai individu.</p>
          </div>

          <div className="field">
            <label htmlFor="role">Jabatan atau peran</label>
            <input
              id="role"
              name="role"
              type="text"
              autoComplete="organization-title"
              value={form.role}
              onChange={(event) => update('role', event.target.value)}
            />
          </div>

          <div className={`field${errors.email ? ' field-invalid' : ''}`}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              value={form.email}
              onChange={(event) => update('email', event.target.value)}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p className="field-error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="field">
            <label htmlFor="phone">Telepon atau WhatsApp</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => update('phone', event.target.value)}
            />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="display-m">Bidang yang ingin dikerjakan bersama</legend>
        <p className="field-note" style={{ marginTop: '0.5rem' }}>
          Pilih satu atau beberapa bidang. Lewati bila usulan Anda lintas bidang.
        </p>
        <div className="chip-grid">
          {programAreas.map((area) => (
            <label
              key={area.slug}
              className={`chip${form.interests.includes(area.slug) ? ' is-selected' : ''}`}
            >
              <input
                type="checkbox"
                name="interests"
                value={area.slug}
                checked={form.interests.includes(area.slug)}
                onChange={() => toggleInterest(area.slug)}
              />
              {area.title}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="display-m">Usulan kolaborasi</legend>
        <div className="field-grid">
          <div className={`field field-full${errors.subject ? ' field-invalid' : ''}`}>
            <label htmlFor="subject">Judul usulan</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={(event) => update('subject', event.target.value)}
              aria-invalid={errors.subject ? true : undefined}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p className="field-error" id="subject-error">
                {errors.subject}
              </p>
            )}
          </div>

          <div className={`field field-full${errors.message ? ' field-invalid' : ''}`}>
            <label htmlFor="message">Uraian usulan</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(event) => update('message', event.target.value)}
              placeholder="Bentuk kerja sama yang Anda bayangkan, sasaran peserta, lokasi, perkiraan waktu, dan dukungan yang bisa Anda bawa."
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Mengirim…' : 'KIRIM USULAN KOLABORASI →'}
        </button>
        <p className="field-note">
          {isApiConfigured
            ? 'Usulan masuk ke sekretariat Mataruma dan dijawab melalui email yang Anda tulis.'
            : `Sistem penerimaan usulan sedang disiapkan. Setelah dikirim, Anda akan mendapat ringkasan untuk diteruskan ke ${site.contact.kolaborasiEmail}.`}
        </p>
      </div>
    </form>
  );
}
