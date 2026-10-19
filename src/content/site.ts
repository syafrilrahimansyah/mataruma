/**
 * Identitas, kontak, dan legalitas yayasan.
 * Sumber: Akta Pendirian No. 19 (10 September 2026) dan NIB 2809260093821.
 */
export const site = {
  name: 'Yayasan Mataruma Peradaban Nusantara',
  shortName: 'Mataruma',
  acronym: 'MATARUMA',
  tagline: 'Merawat Akar, Menumbuhkan Masa Depan',
  taglineEn: 'Building Legacy Through Education, Culture, Research, and Collaboration',
  description:
    'Mataruma adalah organisasi nirlaba yang mengembangkan pendidikan, kebudayaan, literasi, teknologi, kepemudaan, olahraga, kesehatan, serta kegiatan sosial dan pengembangan masyarakat.',
  // TODO: ganti dengan domain resmi setelah tersedia (dipakai metadata dan sitemap).
  url: 'https://mataruma.or.id',
  logo: '/images/logo-mataruma.png',

  contact: {
    email: 'matarumaperadabannusantara@gmail.com',
    /** Alamat email yang menerima usulan kolaborasi. */
    kolaborasiEmail: 'matarumaperadabannusantara@gmail.com',
    phone: '0821-2347-2229',
    phoneHref: 'tel:+6282123472229',
    whatsappUrl: 'https://wa.me/6282123472229',
    address:
      'Jl. Asem No. 8, RT 005/RW 010, Kelurahan Tengah, Kecamatan Kramat Jati, Jakarta Timur, DKI Jakarta 13540',
    addressShort: 'Kramat Jati, Jakarta Timur',
  },

  legal: {
    aktaNomor: 'Nomor 19',
    aktaTanggal: '10 September 2026',
    notaris: 'Mundji Salim, S.H., Notaris di Jakarta Timur',
    nib: '2809260093821',
    nibTanggal: '28 September 2026',
    npwp: '1000000011285798',
  },

  /** Organ yayasan sesuai Akta Pendirian. */
  organ: [
    { jabatan: 'Ketua Pembina', nama: 'Mohamad Rusdy Parman, S.E., M.M.' },
    { jabatan: 'Ketua Pengurus', nama: 'Syafril Rahimansyah Parman, S.T.' },
    { jabatan: 'Sekretaris', nama: 'Rizqollah Aulia Parman, S.Sos.' },
    { jabatan: 'Bendahara', nama: 'Neil Ahnaf Parman' },
    { jabatan: 'Ketua Pengawas', nama: 'Fadhila Al Habsyi' },
  ],

  /** Isi bila akun resmi sudah ada, contoh: { label: 'Instagram', href: 'https://instagram.com/...' } */
  social: [] as { label: string; href: string }[],
} as const;

export const nav = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang', href: '/tentang' },
  { label: 'Ruang Lingkup', href: '/program' },
  { label: 'Kolaborasi', href: '/kolaborasi' },
] as const;
