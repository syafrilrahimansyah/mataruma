/** Konten halaman "Kolaborasi Bersama Mataruma". */

export type CollaboratorType = {
  value: string;
  emoji: string;
  label: string;
  /** Satu baris bantu: bentuk kolaborasi yang paling sering cocok. */
  hint: string;
};

export const collaboratorTypes: CollaboratorType[] = [
  {
    value: 'pemerintah',
    emoji: '🏛️',
    label: 'Pemerintah',
    hint: 'Program daerah, kebijakan, pendanaan publik, penyelenggaraan bersama.',
  },
  {
    value: 'kampus-sekolah',
    emoji: '🎓',
    label: 'Perguruan Tinggi / Sekolah',
    hint: 'Penelitian, pengabdian masyarakat, kuliah umum, kelas bersama.',
  },
  {
    value: 'dunia-usaha',
    emoji: '🏢',
    label: 'Dunia Usaha / Industri',
    hint: 'Program CSR, pelatihan kerja, beasiswa, dukungan fasilitas.',
  },
  {
    value: 'organisasi-komunitas',
    emoji: '🤝',
    label: 'Organisasi / Komunitas',
    hint: 'Festival, kegiatan literasi, program kepemudaan, kerja komunitas.',
  },
  {
    value: 'profesional-akademisi',
    emoji: '💡',
    label: 'Profesional / Akademisi',
    hint: 'Menjadi pengajar, mentor, kurator, peneliti, atau narasumber.',
  },
  {
    value: 'donor',
    emoji: '💰',
    label: 'Donor / Philanthropist',
    hint: 'Pendanaan program, hibah, endowment, dukungan jangka panjang.',
  },
  {
    value: 'mitra-internasional',
    emoji: '🌏',
    label: 'Mitra Internasional',
    hint: 'Pertukaran, program lintas negara, riset dan jejaring diaspora.',
  },
  {
    value: 'individu-relawan',
    emoji: '👥',
    label: 'Individu / Relawan',
    hint: 'Ikut menjalankan kegiatan, dokumentasi, pengajaran, kerja lapangan.',
  },
];

export const kolaborasiPage = {
  title: 'Kolaborasi Bersama Mataruma',
  lead:
    'Mataruma percaya bahwa perubahan besar tidak dibangun sendirian. Sampaikan bentuk kolaborasi yang Anda bawa, dan tim Mataruma akan menindaklanjutinya.',
  formHeading: 'Saya ingin berkolaborasi sebagai',
  submitLabel: 'Kirim Usulan Kolaborasi',
  cta: {
    label: 'Ajukan Kolaborasi',
    sub:
      'Mari menjadi bagian dari gerakan Mataruma untuk merawat akar, menumbuhkan masa depan, dan membangun peradaban melalui pendidikan, kebudayaan, pengetahuan, teknologi, dan kolaborasi.',
  },
  steps: [
    {
      title: 'Kirim usulan',
      body: 'Isi formulir dengan gambaran kolaborasi yang Anda bayangkan — sedetail atau sesingkat yang Anda punya.',
    },
    {
      title: 'Pembacaan bersama',
      body: 'Tim Mataruma membaca usulan dan mencocokkannya dengan bidang serta program yang sedang berjalan.',
    },
    {
      title: 'Perancangan program',
      body: 'Kita susun bentuk kerja sama, lingkup, jadwal, dan peran masing-masing pihak.',
    },
  ],
};
