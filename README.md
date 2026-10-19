# Website Yayasan Mataruma Peradaban Nusantara

Website statis dengan **Next.js (App Router) + TypeScript**, tanpa backend. Dibangun dengan
`output: 'export'`, sehingga `npm run build` menghasilkan folder `out/` berisi HTML/CSS/JS siap
diunggah ke hosting statis mana pun. Struktur datanya sudah disiapkan untuk dipindah ke
**Spring Boot** tanpa mengubah tampilan.

## Menjalankan

```bash
npm install
npm run dev          # http://localhost:3000
```

Build situs statis:

```bash
npm run build        # hasil ada di folder out/
npm start            # pratinjau folder out/ lewat server statis
```

Perintah bantu lain:

```bash
npm run typecheck    # cek TypeScript tanpa build
```

Node 20 ke atas. Diuji pada Node 22 dan 26.

## Struktur

```
src/
  app/
    layout.tsx            kerangka halaman, font, metadata
    page.tsx              beranda
    globals.css           seluruh sistem visual (warna, tipografi, komponen)
    tentang/page.tsx      tentang, visi, misi, ekosistem
    program/page.tsx      indeks 12 ruang lingkup
    program/[slug]/       halaman detail tiap bidang (dibuat statis saat build)
    kolaborasi/page.tsx   halaman "Kolaborasi Bersama Mataruma" + formulir
    not-found.tsx         halaman 404
    sitemap.ts            sitemap.xml
    icon.svg              favicon
  components/
    SiteHeader.tsx        header + menu ponsel
    SiteFooter.tsx        footer
    CollaborationCta.tsx  panel ajakan kolaborasi (dipakai di banyak halaman)
    KolaborasiForm.tsx    formulir usulan kolaborasi
    MediaSlot.tsx         penampil satu slot gambar (+ kotak penanda bila kosong)
  content/
    media.ts              SEMUA slot gambar website
    site.ts               nama, tagline, kontak, menu
    yayasan.ts            naskah pembuka, tentang, ekosistem, visi, misi, penutup
    program.ts            12 ruang lingkup kegiatan
    kolaborasi.ts         8 jenis mitra + naskah halaman kolaborasi
  lib/
    api.ts                kontrak data ke backend (Spring Boot)
```

**Semua teks ada di `src/content/`.** Mengubah isi website tidak perlu menyentuh komponen.

## Yang perlu diisi sebelum publikasi

Identitas, kontak, legalitas, dan susunan organ yayasan sudah terisi di `src/content/site.ts`
(sumber: Akta Pendirian No. 19 tanggal 10 September 2026 dan NIB 2809260093821). Yang masih perlu
disesuaikan:

- `url` — domain final; sekarang masih `https://mataruma.or.id`. Dipakai metadata, JSON-LD, dan
  sitemap, jadi ganti juga `Sitemap:` di `public/robots.txt`.
- `social` — masih kosong. Isi bila akun resmi sudah ada; blok "Ikuti" di footer otomatis muncul.
- `legal.npwp` — tampil di footer dan halaman Tentang. Hapus barisnya di kedua berkas itu bila
  tidak ingin ditampilkan publik.

Logo resmi dipakai di header, footer, favicon (`src/app/icon.png`), dan gambar pratinjau tautan
(`public/images/og-mataruma.jpg`).

## Mengisi gambar

Semua gambar diatur dari satu berkas: `src/content/media.ts`. Setiap slot masih kosong
(`src: ''`), dan selama kosong akan tampil kotak putus-putus berisi nama slot, ukuran
anjuran, dan nama berkas yang disarankan — jadi mudah terlihat mana yang belum terisi.

Langkahnya:

1. Taruh gambar di `public/images/` (gambar bidang di `public/images/program/`).
2. Buka `src/content/media.ts`, isi `src` dan `alt`:

   ```ts
   heroBanner: {
     id: 'banner-beranda',
     src: '/images/banner-beranda.jpg',          // <- diisi
     alt: 'Anak-anak membaca di Rumah Belajar Mataruma',
     width: 2400,
     height: 1200,
     hint: '/images/banner-beranda.jpg',
     focal: 'center 40%',                        // titik fokus bila terpotong
   },
   ```

**Banner utama beranda** bekerja khusus: selama kosong, beranda tetap memakai latar gelap
bermotif tenun dan hanya menampilkan satu catatan kecil penanda slot. Begitu `src` diisi,
gambar langsung menjadi latar banner, dengan lapisan peredup otomatis agar judul dan tombol
tetap terbaca.

Daftar lengkap slot, nama berkas, dan ukuran anjuran ada di `public/images/PANDUAN-GAMBAR.md`.
Untuk menyembunyikan semua kotak penanda, ubah `showPlaceholders` di `media.ts` menjadi `false`.

## Menyambungkan ke Spring Boot

Website ini sudah menyiapkan satu titik integrasi: `src/lib/api.ts`.

1. Salin `env.contoh.txt` menjadi `.env.local`, isi:

   ```
   NEXT_PUBLIC_API_BASE_URL=https://api.mataruma.or.id
   ```

2. Sediakan endpoint di Spring Boot:

   ```
   POST /api/v1/collaborations
   Content-Type: application/json
   ```

   Body yang dikirim website (lihat tipe `CollaborationPayload`):

   ```json
   {
     "collaboratorType": "dunia-usaha",
     "contactName": "Nama Pengusul",
     "organization": "PT Contoh",
     "role": "Manajer Program",
     "email": "nama@contoh.id",
     "phone": "0812xxxxxxx",
     "interests": ["teknologi-digital", "literasi-dan-perpustakaan"],
     "subject": "Kelas coding untuk SMA",
     "message": "Uraian usulan…",
     "submittedAt": "2026-01-31T04:05:06.000Z",
     "source": "website"
   }
   ```

   Balasan yang diharapkan: `200/201` dengan body opsional `{ "reference": "MTR-2026-0001" }`.

3. Aktifkan CORS di Spring Boot untuk domain website, karena situs statis memanggil API dari
   browser:

   ```java
   @Configuration
   public class CorsConfig implements WebMvcConfigurer {
     @Override
     public void addCorsMappings(CorsRegistry registry) {
       registry.addMapping("/api/**")
               .allowedOrigins("https://mataruma.or.id")
               .allowedMethods("GET", "POST");
     }
   }
   ```

Selama `NEXT_PUBLIC_API_BASE_URL` kosong, formulir berjalan dalam **mode offline**: data tetap
divalidasi, lalu pengusul diberi ringkasan dan tombol kirim lewat email. Tidak ada error.

### Kalau nanti konten ikut pindah ke backend

`src/content/program.ts` dan `yayasan.ts` berperan sebagai sumber data. Untuk menariknya dari
Spring Boot, tambahkan fungsi `fetch` di `src/lib/api.ts` dan panggil dari komponen server
(`async function Page()`), lalu jalankan build ulang setiap konten berubah — pola yang umum untuk
situs statis.

## Hosting

Isi folder `out/` bisa langsung dilayani oleh Nginx, Apache, S3 + CloudFront, Netlify, Vercel, atau
Cloudflare Pages. Karena `trailingSlash: true`, setiap halaman berupa folder dengan `index.html`,
sehingga aman untuk server statis biasa.

## Sistem visual

Semua token ada di `:root` dalam `src/app/globals.css`:

| Token        | Nilai     | Pemakaian                           |
| ------------ | --------- | ----------------------------------- |
| `--laut-900` | `#06232a` | panel gelap, header, footer         |
| `--pasang`   | `#1f6b70` | aksen teks, nomor, garis fokus      |
| `--kenari`   | `#d8a23f` | tombol utama, sambungan balok       |
| `--pala`     | `#8c4a2c` | pesan kesalahan                     |
| `--kapur`    | `#e9efeb` | latar halaman                       |

Tipografi: **Gloock** (judul) dan **Archivo** (teks), dimuat dari Google Fonts di `layout.tsx`.
Motif visualnya "tiang dan balok" rumah tua: pembatas bagian berupa garis tipis dengan sambungan
kenari di ujung kiri (`.beam`), dan tekstur anyaman halus pada panel gelap (`.woven`).
