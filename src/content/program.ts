/**
 * Dua belas ruang lingkup kegiatan Mataruma.
 *
 * Ini adalah satu-satunya sumber konten untuk halaman /program dan
 * /program/[slug]. Ketika backend Spring Boot siap, cukup ganti pemanggilan
 * data di kedua halaman itu (lihat src/lib/api.ts) tanpa mengubah tampilan.
 */
export type ProgramArea = {
  slug: string;
  number: number;
  title: string;
  /** Satu kalimat untuk daftar di halaman indeks. */
  lead: string;
  /** Paragraf pembuka di halaman detail. */
  paragraphs: string[];
  /** Label daftar kegiatan, mis. "Program yang dapat dikembangkan". */
  itemsLabel: string;
  items: string[];
  /** Kalimat penutup bidang (opsional). */
  closing?: string[];
};

export const programAreas: ProgramArea[] = [
  {
    slug: 'pendidikan-dan-kompetensi',
    number: 1,
    title: 'Pendidikan dan Pengembangan Kompetensi',
    lead:
      'Pelatihan, kursus, seminar, dan mentoring di luar pendidikan formal untuk membuka akses belajar yang relevan dengan kebutuhan zaman.',
    paragraphs: [
      'Mataruma menyelenggarakan berbagai kegiatan pendidikan dan pengembangan kapasitas di luar pendidikan formal, termasuk pelatihan, kursus, seminar, workshop, mentoring, pengembangan kepemimpinan, komunikasi, literasi, kewirausahaan, kreativitas, dan pengembangan potensi masyarakat.',
      'Melalui Rumah Belajar Mataruma dan berbagai program pendidikan lainnya, Mataruma berupaya membuka akses pembelajaran yang relevan dengan kebutuhan zaman.',
    ],
    itemsLabel: 'Program yang dapat dikembangkan',
    items: [
      'Rumah Belajar Mataruma',
      'Mataruma Leadership Academy',
      'Mataruma Writing Academy',
      'Mataruma Public Speaking',
      'Mataruma Entrepreneurship',
      'Pelatihan dan workshop',
      'Seminar dan kelas pengembangan diri',
      'Mentoring pelajar dan mahasiswa',
      'Program pengembangan kapasitas masyarakat',
    ],
  },
  {
    slug: 'teknologi-digital',
    number: 2,
    title: 'Pendidikan Komputer dan Teknologi Digital',
    lead:
      'Pembelajaran teknologi yang mendorong generasi muda menjadi pengguna sekaligus pencipta teknologi.',
    paragraphs: [
      'Perubahan teknologi membuka kesempatan baru bagi generasi muda untuk belajar, berkarya, dan menciptakan sumber penghasilan.',
      'Melalui bidang pendidikan komputer dan teknologi informasi dan komunikasi, Mataruma mengembangkan pembelajaran yang mendorong generasi muda menjadi pengguna teknologi sekaligus pencipta teknologi.',
    ],
    itemsLabel: 'Bidang yang dapat dikembangkan',
    items: [
      'Komputer dan teknologi informasi',
      'Pemrograman',
      'Web development',
      'Desain digital',
      'Digital marketing',
      'Multimedia',
      'Data dan teknologi',
      'Pengembangan aplikasi',
      'Game development',
      'Literasi digital',
      'Kewirausahaan digital',
    ],
    closing: [
      'Program ini dikembangkan melalui gagasan Mataruma Digital Academy dan berbagai kelas teknologi berbasis kebutuhan generasi muda.',
    ],
  },
  {
    slug: 'penunjang-pendidikan-dan-karier',
    number: 3,
    title: 'Penunjang Pendidikan dan Pengembangan Karier',
    lead:
      'Bimbingan, pendampingan, dan pengembangan kapasitas pendidik untuk ekosistem belajar yang tidak berhenti di ruang kelas.',
    paragraphs: [
      'Mataruma juga mengembangkan berbagai kegiatan yang mendukung proses pendidikan dan pengembangan sumber daya manusia.',
    ],
    itemsLabel: 'Kegiatan tersebut dapat meliputi',
    items: [
      'Bimbingan pendidikan',
      'Mentoring',
      'Pengembangan karier',
      'Konseling dan pendampingan pendidikan',
      'Pengembangan kurikulum',
      'Evaluasi dan pengembangan program pembelajaran',
      'Program pertukaran dan jejaring pendidikan',
      'Pendampingan pelajar dan mahasiswa',
      'Pengembangan kapasitas pendidik dan komunitas belajar',
    ],
    closing: ['Tujuannya adalah membangun ekosistem belajar yang tidak berhenti di ruang kelas.'],
  },
  {
    slug: 'literasi-dan-perpustakaan',
    number: 4,
    title: 'Perpustakaan, Literasi dan Pengetahuan',
    lead:
      'Mataruma Library dan Mataruma Digital Library: ruang membaca, meneliti, mendokumentasikan, dan mewariskan pengetahuan.',
    paragraphs: [
      'Mataruma mengembangkan perpustakaan dan pusat pengetahuan sebagai ruang untuk membaca, belajar, meneliti, mendokumentasikan, dan berbagi pengetahuan.',
      'Melalui Mataruma Library dan Mataruma Digital Library, pengetahuan tidak hanya disimpan, tetapi juga dihidupkan dan diwariskan.',
    ],
    itemsLabel: 'Koleksi dan kegiatan dapat mencakup',
    items: [
      'Buku',
      'Jurnal dan karya ilmiah',
      'Arsip',
      'Manuskrip',
      'Dokumentasi sejarah',
      'Foto dan rekaman',
      'Literatur kebudayaan',
      'Koleksi digital',
      'Ruang baca',
      'Kegiatan literasi',
      'Diskusi buku',
      'Kelas menulis',
      'Dokumentasi pengetahuan lokal',
    ],
    closing: ['Apa yang tidak didokumentasikan dapat hilang.', 'Apa yang tidak diwariskan dapat dilupakan.'],
  },
  {
    slug: 'kesenian-dan-kebudayaan',
    number: 5,
    title: 'Kesenian dan Kebudayaan',
    lead:
      'Festival, pertunjukan, pameran, dan dokumentasi tradisi sebagai upaya merawat identitas dan warisan peradaban Nusantara.',
    paragraphs: [
      'Kebudayaan merupakan salah satu fondasi utama Mataruma.',
      'Mataruma menyelenggarakan dan mendukung berbagai kegiatan kesenian dan kebudayaan sebagai bagian dari upaya merawat identitas, kreativitas, dan warisan peradaban Nusantara.',
    ],
    itemsLabel: 'Kegiatan dapat berupa',
    items: [
      'Festival kebudayaan',
      'Pertunjukan seni',
      'Musik',
      'Tari',
      'Teater',
      'Pameran seni',
      'Pameran fotografi',
      'Festival film',
      'Diskusi kebudayaan',
      'Pertunjukan budaya',
      'Dokumentasi tradisi',
      'Pengenalan budaya kepada generasi muda',
    ],
    closing: [
      'Salah satu bentuk pengembangan kegiatan tersebut adalah Festival Mataruma dan Malam Peradaban Mataruma.',
    ],
  },
  {
    slug: 'heritage-center',
    number: 6,
    title: 'Heritage Center dan Ruang Kebudayaan',
    lead:
      'Ruang untuk merawat, mempelajari, mendokumentasikan, dan memperkenalkan warisan budaya.',
    paragraphs: [
      'Mataruma mengembangkan gagasan Heritage Center sebagai ruang untuk merawat, mempelajari, mendokumentasikan, dan memperkenalkan warisan budaya.',
    ],
    itemsLabel: 'Dalam pengembangannya, fasilitas budaya dapat mencakup',
    items: [
      'Ruang pamer',
      'Galeri',
      'Ruang pertunjukan',
      'Ruang diskusi',
      'Ruang workshop',
      'Pusat dokumentasi',
      'Ruang komunitas',
      'Ruang edukasi budaya',
      'Pusat kegiatan seni',
    ],
    closing: [
      'Heritage Center diharapkan menjadi ruang pertemuan antara masa lalu, masa kini, dan masa depan.',
    ],
  },
  {
    slug: 'kepemudaan-dan-olahraga',
    number: 7,
    title: 'Kepemudaan, Olahraga dan Rekreasi',
    lead:
      'Olahraga, kompetisi, dan kegiatan komunitas sebagai sarana membangun disiplin, kerja sama, dan kepemimpinan.',
    paragraphs: [
      'Mataruma memandang pemuda sebagai pewaris sekaligus pencipta masa depan.',
      'Karena itu, kegiatan kepemudaan dikembangkan melalui olahraga, rekreasi, kreativitas, kompetisi, pembinaan karakter, dan kegiatan komunitas.',
    ],
    itemsLabel: 'Kegiatan dapat meliputi',
    items: [
      'Pertandingan olahraga',
      'Kompetisi pemuda',
      'E-sport',
      'Youth games',
      'Youth camp',
      'Kegiatan rekreasi edukatif',
      'Kegiatan komunitas',
      'Pembinaan karakter',
      'Kegiatan olahraga berbasis pendidikan',
    ],
    closing: [
      'Melalui kegiatan tersebut, olahraga tidak hanya dipandang sebagai aktivitas fisik, tetapi juga sebagai sarana membangun disiplin, kerja sama, kepemimpinan, sportivitas, dan kepercayaan diri.',
    ],
  },
  {
    slug: 'olahraga-tradisional',
    number: 8,
    title: 'Olahraga Tradisional dan Warisan Budaya',
    lead:
      'Permainan rakyat dan olahraga tradisional yang dihidupkan kembali sebagai bagian dari kehidupan generasi sekarang.',
    paragraphs: [
      'Mataruma memberikan ruang khusus bagi olahraga dan permainan tradisional sebagai bagian dari kekayaan budaya Nusantara.',
    ],
    itemsLabel: 'Kegiatan dapat mencakup',
    items: [
      'Permainan tradisional',
      'Olahraga tradisional',
      'Festival permainan rakyat',
      'Demonstrasi olahraga tradisional',
      'Dokumentasi olahraga tradisional',
      'Pembinaan generasi muda',
      'Kegiatan edukasi budaya',
    ],
    closing: [
      'Dengan demikian, tradisi tidak hanya dikenang sebagai masa lalu, tetapi dapat menjadi bagian dari kehidupan generasi sekarang.',
    ],
  },
  {
    slug: 'kesehatan-dan-kesejahteraan',
    number: 9,
    title: 'Kesehatan dan Kesejahteraan Masyarakat',
    lead:
      'Edukasi kesehatan, kegiatan promotif dan preventif, serta kerja sama layanan kesehatan sesuai ketentuan yang berlaku.',
    paragraphs: [
      'Mataruma membuka ruang bagi pengembangan kegiatan di bidang kesehatan dan kesejahteraan masyarakat, termasuk edukasi kesehatan, kegiatan sosial, serta pengembangan pelayanan kesehatan sesuai kebutuhan dan ketentuan peraturan perundang-undangan.',
    ],
    itemsLabel: 'Pengembangan bidang ini dapat dilakukan melalui',
    items: [
      'Edukasi kesehatan',
      'Seminar dan kampanye kesehatan',
      'Kegiatan sosial kesehatan',
      'Pemeriksaan kesehatan melalui kerja sama dengan tenaga dan fasilitas kesehatan',
      'Kegiatan promotif dan preventif',
      'Pengembangan fasilitas pelayanan kesehatan apabila memenuhi persyaratan yang berlaku',
    ],
    closing: [
      'Prinsipnya: manusia yang sehat memiliki kesempatan yang lebih besar untuk belajar, berkarya, dan membangun masa depan.',
    ],
  },
  {
    slug: 'literasi-dan-pendampingan-hukum',
    number: 10,
    title: 'Layanan dan Pendampingan Hukum',
    lead:
      'Literasi hukum masyarakat serta konsultasi dan pendampingan melalui tenaga profesional yang berwenang.',
    paragraphs: [
      'Mataruma juga membuka ruang pengembangan kegiatan di bidang hukum melalui kerja sama dan/atau penyelenggaraan kegiatan hukum sesuai kompetensi, kewenangan, dan ketentuan peraturan perundang-undangan.',
    ],
    itemsLabel: 'Bidang ini dapat mendukung',
    items: [
      'Edukasi hukum masyarakat',
      'Literasi hukum',
      'Seminar dan diskusi hukum',
      'Konsultasi dan pendampingan hukum melalui tenaga profesional yang berwenang',
      'Kegiatan bantuan hukum sesuai ketentuan yang berlaku',
      'Penguatan kesadaran hukum masyarakat',
    ],
    closing: [
      'Mataruma memandang literasi hukum sebagai bagian dari pembangunan masyarakat yang berpengetahuan dan bertanggung jawab.',
    ],
  },
  {
    slug: 'penunjang-program',
    number: 11,
    title: 'Kegiatan Penunjang Penyelenggaraan Program',
    lead:
      'Dukungan operasional penyelenggaraan acara — ditempatkan sebagai penunjang, bukan identitas utama Mataruma.',
    paragraphs: [
      'Dalam melaksanakan seminar, pelatihan, konferensi, festival, camp, kegiatan sosial, dan berbagai program lainnya, Mataruma dapat mengembangkan kegiatan pendukung penyelenggaraan acara, termasuk penyediaan konsumsi dan kebutuhan operasional kegiatan sesuai ketentuan yang berlaku.',
    ],
    itemsLabel: 'Cakupan dukungan',
    items: [
      'Penyelenggaraan seminar dan pelatihan',
      'Konferensi dan festival',
      'Camp dan kegiatan lapangan',
      'Kegiatan sosial',
      'Penyediaan konsumsi kegiatan',
      'Kebutuhan operasional kegiatan',
    ],
    closing: ['Kegiatan ini ditempatkan sebagai pendukung, bukan sebagai identitas utama Mataruma.'],
  },
  {
    slug: 'kolaborasi-dan-jejaring',
    number: 12,
    title: 'Kolaborasi dan Jejaring',
    lead:
      'Ruang kerja bersama pemerintah, kampus, sekolah, dunia usaha, komunitas, hingga mitra internasional.',
    paragraphs: [
      'Mataruma percaya bahwa perubahan besar tidak dibangun sendirian.',
      'Karena itu, Mataruma membuka ruang kolaborasi dengan berbagai pemangku kepentingan, melalui program pendidikan, kebudayaan, penelitian, literasi, kepemudaan, teknologi, kesehatan, sosial, dan pengembangan masyarakat.',
    ],
    itemsLabel: 'Mitra kolaborasi',
    items: [
      'Pemerintah',
      'Perguruan tinggi',
      'Sekolah',
      'Dunia usaha',
      'Industri',
      'Komunitas',
      'Lembaga kebudayaan',
      'Organisasi sosial',
      'Lembaga filantropi',
      'Profesional',
      'Peneliti',
      'Seniman',
      'Pemuda',
      'Diaspora',
      'Mitra nasional dan internasional',
    ],
  },
];

export function getProgramArea(slug: string): ProgramArea | undefined {
  return programAreas.find((area) => area.slug === slug);
}
