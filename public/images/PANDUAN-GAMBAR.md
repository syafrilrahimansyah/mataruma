# Panduan gambar website Mataruma

Taruh berkas gambar di folder ini (`public/images/`), lalu daftarkan path-nya di
`src/content/media.ts`. Path yang dipakai di kode **tidak memuat kata "public"**:

| Berkas disimpan di                    | Ditulis di media.ts sebagai  |
| ------------------------------------- | ---------------------------- |
| `public/images/banner-beranda.jpg`    | `/images/banner-beranda.jpg` |

## Daftar slot

| Slot                 | Nama berkas yang disarankan        | Ukuran anjuran | Dipakai di                 |
| -------------------- | ---------------------------------- | -------------- | -------------------------- |
| `banner-beranda`     | `banner-beranda.jpg`               | 2400 × 1200    | banner utama beranda       |
| `beranda-tentang`    | `beranda-tentang.jpg`              | 1200 × 1500    | beranda, bagian "Mengapa"  |
| `beranda-galeri-1`   | `beranda-galeri-1.jpg`             | 1200 × 900     | beranda, potret kegiatan   |
| `beranda-galeri-2`   | `beranda-galeri-2.jpg`             | 1200 × 900     | beranda, potret kegiatan   |
| `beranda-galeri-3`   | `beranda-galeri-3.jpg`             | 1200 × 900     | beranda, potret kegiatan   |
| `banner-tentang`     | `banner-tentang.jpg`               | 2000 × 1000    | halaman Tentang            |
| `banner-ruang-lingkup` | `banner-ruang-lingkup.jpg`       | 2000 × 900     | halaman Ruang Lingkup      |
| `banner-kolaborasi`  | `banner-kolaborasi.jpg`            | 2000 × 900     | halaman Kolaborasi         |
| `og-image`           | `og-mataruma.jpg`                  | 1200 × 630     | pratinjau tautan WA/FB/X   |

Dua belas gambar bidang, simpan di subfolder `public/images/program/`:

| Bidang | Nama berkas |
| ------ | ----------- |
| 01 Pendidikan dan Pengembangan Kompetensi | `program/pendidikan-dan-kompetensi.jpg` |
| 02 Pendidikan Komputer dan Teknologi Digital | `program/teknologi-digital.jpg` |
| 03 Penunjang Pendidikan dan Pengembangan Karier | `program/penunjang-pendidikan-dan-karier.jpg` |
| 04 Perpustakaan, Literasi dan Pengetahuan | `program/literasi-dan-perpustakaan.jpg` |
| 05 Kesenian dan Kebudayaan | `program/kesenian-dan-kebudayaan.jpg` |
| 06 Heritage Center dan Ruang Kebudayaan | `program/heritage-center.jpg` |
| 07 Kepemudaan, Olahraga dan Rekreasi | `program/kepemudaan-dan-olahraga.jpg` |
| 08 Olahraga Tradisional dan Warisan Budaya | `program/olahraga-tradisional.jpg` |
| 09 Kesehatan dan Kesejahteraan Masyarakat | `program/kesehatan-dan-kesejahteraan.jpg` |
| 10 Layanan dan Pendampingan Hukum | `program/literasi-dan-pendampingan-hukum.jpg` |
| 11 Kegiatan Penunjang Penyelenggaraan Program | `program/penunjang-program.jpg` |
| 12 Kolaborasi dan Jejaring | `program/kolaborasi-dan-jejaring.jpg` |

Semua gambar bidang: ukuran anjuran 1800 × 1000 px.

## Anjuran teknis

- Format `.jpg` untuk foto, `.svg` atau `.png` untuk logo dan ilustrasi garis.
- Ukuran berkas di bawah 400 KB per gambar (banner utama boleh sampai 600 KB).
  Kompres dulu di squoosh.app atau tinypng.com — ini situs statis, jadi tidak ada
  pengecilan gambar otomatis.
- Banner utama: sisi kiri gambar sebaiknya lapang, karena judul dan tombol berada
  di sana. Bila titik penting gambar terpotong, atur `focal` pada slot tersebut,
  misalnya `focal: 'center 25%'` atau `focal: 'right center'`.
- Isi `alt` dengan deskripsi singkat (contoh: "Anak-anak membaca di Rumah Belajar
  Mataruma"). Untuk gambar yang murni hiasan, biarkan `alt: ''`.
- Nama berkas: huruf kecil, tanpa spasi, pakai tanda hubung.

Berkas ini hanya panduan dan boleh dihapus sebelum rilis.
