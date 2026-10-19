/**
 * ============================================================
 *  SLOT GAMBAR — semua gambar website diatur dari berkas ini
 * ============================================================
 *
 * Cara mengisi:
 *   1. Taruh berkas gambar di folder `public/images/`
 *      contoh: public/images/banner-beranda.jpg
 *   2. Isi `src` dengan path tanpa kata "public", contoh: '/images/banner-beranda.jpg'
 *      (boleh juga URL penuh, misalnya dari CDN: 'https://...')
 *   3. Isi `alt` dengan deskripsi singkat isi gambar (dibaca pembaca layar
 *      dan muncul bila gambar gagal dimuat). Gambar hiasan boleh alt: ''.
 *
 * Selama `src` masih kosong:
 *   - Banner beranda tetap tampil memakai latar gelap bermotif tenun.
 *   - Slot lain tampil sebagai kotak bertanda berisi nama slot + ukuran anjuran,
 *     supaya mudah dilihat mana yang belum terisi.
 *
 * Kalau ingin menyembunyikan semua kotak bertanda (misalnya sebelum rilis
 * padahal gambar belum siap), ubah `showPlaceholders` menjadi false.
 */

export type ImageSlot = {
  /** Nama slot, muncul di kotak penanda saat masih kosong. */
  id: string;
  /** Path gambar. Kosongkan ('') bila belum ada. */
  src: string;
  /** Deskripsi gambar untuk pembaca layar. */
  alt: string;
  /** Ukuran anjuran (px) — menentukan rasio kotak penanda. */
  width: number;
  height: number;
  /** Nama berkas yang disarankan, ditampilkan di kotak penanda. */
  hint: string;
  /**
   * Lebar varian yang tersedia untuk srcset, mis. [640, 1024, 1600, 2400].
   * Berkasnya dinamai dengan akhiran lebar: banner-beranda-1024.jpg
   * Browser memilih sendiri ukuran yang paling pas dengan layar pembaca.
   */
  widths?: number[];
  /** Petunjuk lebar tampil gambar (atribut sizes). Wajib bila widths diisi. */
  sizes?: string;
  /** Keterangan di bawah gambar (opsional). */
  caption?: string;
  /** Sumber atau nama pemotret (opsional). */
  credit?: string;
  /**
   * Titik fokus gambar bila dipotong, nilai CSS object-position.
   * Contoh: 'center 30%' agar wajah tidak terpotong.
   */
  focal?: string;
};

/** Tampilkan kotak penanda untuk slot yang masih kosong. */
export const showPlaceholders: boolean = true;

export const media = {
  /** ---------- BANNER UTAMA HALAMAN BERANDA ---------- */
  heroBanner: {
    id: 'banner-beranda',
    src: '/images/banner-beranda.jpg',
    alt: 'Warga dan anak-anak duduk di teras rumah panggung kayu yang dihias umbul-umbul',
    width: 2400,
    height: 1200,
    hint: '/images/banner-beranda.jpg',
    widths: [640, 1024, 1600, 2400],
    sizes: '100vw',
    focal: 'center 45%',
  } satisfies ImageSlot,

  /** Gambar pendamping bagian "Mengapa Mataruma ada" di beranda. */
  berandaTentang: {
    id: 'beranda-tentang',
    src: '/images/beranda-tentang.jpg',
    alt: 'Barisan anak berseragam batik melambaikan bendera di depan bangunan sekolah',
    width: 1600,
    height: 1200,
    hint: '/images/beranda-tentang.jpg',
    widths: [480, 768, 1200],
    sizes: '(max-width: 54rem) 100vw, 40vw',
  } satisfies ImageSlot,

  /** Tiga gambar sejajar sebelum ajakan kolaborasi di beranda. */
  berandaGaleri: [
    {
      id: 'beranda-galeri-1',
      src: '/images/beranda-galeri-1.jpg',
      alt: 'Peserta upacara berseragam mengangkat bendera Merah Putih dengan latar matahari sore',
      width: 1200,
      height: 900,
      hint: '/images/beranda-galeri-1.jpg',
      widths: [480, 720, 1080],
      sizes: '(max-width: 40rem) 100vw, (max-width: 72rem) 45vw, 360px',
    },
    {
      id: 'beranda-galeri-2',
      src: '/images/beranda-galeri-2.jpg',
      alt: 'Seorang pria berikat kepala merah putih membawa bendera besar yang berkibar',
      width: 1200,
      height: 900,
      hint: '/images/beranda-galeri-2.jpg',
      widths: [480, 720, 1080],
      sizes: '(max-width: 40rem) 100vw, (max-width: 72rem) 45vw, 360px',
    },
    {
      id: 'beranda-galeri-3',
      src: '/images/beranda-galeri-3.jpg',
      alt: 'Kerumunan peserta berseragam dan berbusana adat dalam sebuah kegiatan di luar ruangan',
      width: 1200,
      height: 900,
      hint: '/images/beranda-galeri-3.jpg',
      widths: [480, 720, 1080],
      sizes: '(max-width: 40rem) 100vw, (max-width: 72rem) 45vw, 360px',
    },
  ] satisfies ImageSlot[],

  /** Banner halaman Tentang. */
  tentangBanner: {
    id: 'banner-tentang',
    src: '/images/banner-tentang.jpg',
    alt: 'Siswa berseragam duduk melingkar di lapangan rumput sambil membaca bersama guru',
    width: 2000,
    height: 1000,
    hint: '/images/banner-tentang.jpg',
    widths: [640, 1024, 1600, 2400],
    sizes: '(max-width: 76rem) 100vw, 1152px',
    focal: 'center 55%',
  } satisfies ImageSlot,

  /** Banner halaman Ruang Lingkup. */
  programBanner: {
    id: 'banner-ruang-lingkup',
    src: '/images/banner-ruang-lingkup.jpg',
    alt: 'Dua bangunan beratap tradisional saling berhadapan di sebuah kompleks',
    width: 2000,
    height: 900,
    hint: '/images/banner-ruang-lingkup.jpg',
    widths: [640, 1024, 1600, 2400],
    sizes: '(max-width: 76rem) 100vw, 1152px',
    focal: 'center 60%',
  } satisfies ImageSlot,

  /** Banner halaman Kolaborasi. */
  kolaborasiBanner: {
    id: 'banner-kolaborasi',
    src: '/images/banner-kolaborasi.jpg',
    alt: 'Penari berbusana adat berdiri melingkar dengan tangan menyatu di tengah',
    width: 2000,
    height: 900,
    hint: '/images/banner-kolaborasi.jpg',
    widths: [640, 1024, 1600, 2400],
    sizes: '(max-width: 76rem) 100vw, 1152px',
  } satisfies ImageSlot,

  /** Gambar untuk pratinjau tautan di WhatsApp, Facebook, X. */
  ogImage: {
    id: 'og-image',
    src: '/images/og-mataruma.jpg',
    alt: 'Logo dan nama Yayasan Mataruma Peradaban Nusantara',
    width: 1200,
    height: 630,
    hint: '/images/og-mataruma.jpg',
  } satisfies ImageSlot,
};

/**
 * ---------- GAMBAR TIAP BIDANG (halaman /program/<slug>) ----------
 * Kunci objek di bawah ini harus sama dengan slug di src/content/program.ts.
 */
export const programImages: Record<string, ImageSlot> = {
  'pendidikan-dan-kompetensi': {
    id: 'program/pendidikan-dan-kompetensi',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/pendidikan-dan-kompetensi.jpg',
  },
  'teknologi-digital': {
    id: 'program/teknologi-digital',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/teknologi-digital.jpg',
  },
  'penunjang-pendidikan-dan-karier': {
    id: 'program/penunjang-pendidikan-dan-karier',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/penunjang-pendidikan-dan-karier.jpg',
  },
  'literasi-dan-perpustakaan': {
    id: 'program/literasi-dan-perpustakaan',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/literasi-dan-perpustakaan.jpg',
  },
  'kesenian-dan-kebudayaan': {
    id: 'program/kesenian-dan-kebudayaan',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/kesenian-dan-kebudayaan.jpg',
  },
  'heritage-center': {
    id: 'program/heritage-center',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/heritage-center.jpg',
  },
  'kepemudaan-dan-olahraga': {
    id: 'program/kepemudaan-dan-olahraga',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/kepemudaan-dan-olahraga.jpg',
  },
  'olahraga-tradisional': {
    id: 'program/olahraga-tradisional',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/olahraga-tradisional.jpg',
  },
  'kesehatan-dan-kesejahteraan': {
    id: 'program/kesehatan-dan-kesejahteraan',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/kesehatan-dan-kesejahteraan.jpg',
  },
  'literasi-dan-pendampingan-hukum': {
    id: 'program/literasi-dan-pendampingan-hukum',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/literasi-dan-pendampingan-hukum.jpg',
  },
  'penunjang-program': {
    id: 'program/penunjang-program',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/penunjang-program.jpg',
  },
  'kolaborasi-dan-jejaring': {
    id: 'program/kolaborasi-dan-jejaring',
    src: '',
    alt: '',
    width: 1800,
    height: 1000,
    hint: '/images/program/kolaborasi-dan-jejaring.jpg',
  },
};

/** Ubah '/images/banner.jpg' menjadi '/images/banner-1024.jpg'. */
export function imageVariant(src: string, width: number): string {
  return src.replace(/(\.[a-z0-9]+)$/i, `-${width}$1`);
}

/**
 * Susun atribut srcset dari daftar `widths`.
 * Browser memakainya untuk mengunduh ukuran yang paling pas dengan lebar layar
 * dan kerapatan piksel perangkat pembaca.
 */
export function buildSrcSet(slot: ImageSlot): string | undefined {
  if (!slot.src || !slot.widths || slot.widths.length === 0) return undefined;
  return slot.widths.map((w) => `${imageVariant(slot.src, w)} ${w}w`).join(', ');
}

export function getProgramImage(slug: string): ImageSlot {
  return (
    programImages[slug] ?? {
      id: `program/${slug}`,
      src: '',
      alt: '',
      width: 1800,
      height: 1000,
      hint: `/images/program/${slug}.jpg`,
    }
  );
}
