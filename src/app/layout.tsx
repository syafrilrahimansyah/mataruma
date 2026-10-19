import type { Metadata, Viewport } from 'next';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { media } from '@/content/media';
import { site } from '@/content/site';

// Gambar pratinjau tautan. Terpakai otomatis begitu media.ogImage.src diisi.
const ogImages = media.ogImage.src
  ? [
      {
        url: media.ogImage.src,
        width: media.ogImage.width,
        height: media.ogImage.height,
        alt: media.ogImage.alt || site.name,
      },
    ]
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.acronym}`,
  },
  description: site.description,
  keywords: [
    'Yayasan Mataruma',
    'Mataruma Peradaban Nusantara',
    'pendidikan',
    'kebudayaan',
    'literasi',
    'teknologi',
    'kepemudaan',
    'kolaborasi',
  ],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: ogImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ogImages,
  },
};

export const viewport: Viewport = {
  themeColor: '#06232a',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@300..700&family=Gloock&display=swap"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'NGO',
              name: site.name,
              alternateName: site.acronym,
              url: site.url,
              logo: `${site.url}${site.logo}`,
              description: site.description,
              email: site.contact.email,
              telephone: '+6282123472229',
              foundingDate: '2026-09-10',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Asem No. 8, RT 005/RW 010, Kelurahan Tengah, Kramat Jati',
                addressLocality: 'Jakarta Timur',
                addressRegion: 'DKI Jakarta',
                postalCode: '13540',
                addressCountry: 'ID',
              },
            }),
          }}
        />
        <a className="sr-only" href="#konten">
          Lewati ke konten utama
        </a>
        <SiteHeader />
        <main id="konten">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
