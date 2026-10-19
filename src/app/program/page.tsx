import type { Metadata } from 'next';
import Link from 'next/link';
import CollaborationCta from '@/components/CollaborationCta';
import MediaSlot from '@/components/MediaSlot';
import { media } from '@/content/media';
import { programAreas } from '@/content/program';

export const metadata: Metadata = {
  title: 'Ruang Lingkup Kegiatan',
  description:
    'Dua belas ruang lingkup kegiatan Yayasan Mataruma Peradaban Nusantara: pendidikan, teknologi, literasi, kebudayaan, heritage, kepemudaan, olahraga tradisional, kesehatan, hukum, dan kolaborasi.',
};

export default function ProgramPage() {
  return (
    <>
      <section className="shell page-head">
        <nav className="breadcrumb" aria-label="Posisi halaman">
          <Link href="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <span>Ruang Lingkup</span>
        </nav>
        <h1 className="display-xl" style={{ maxWidth: '14ch' }}>
          Ruang lingkup kegiatan
        </h1>
        <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '58ch' }}>
          Mataruma bekerja di dua belas bidang yang saling terhubung. Setiap bidang terbuka untuk
          dikerjakan bersama sekolah, kampus, pemerintah, dunia usaha, komunitas, dan individu.
        </p>
      </section>

      <div className="shell">
        <MediaSlot slot={media.programBanner} priority />
      </div>

      <section className="section-tight">
        <div className="shell">
          <ol className="index-list" style={{ marginTop: 0 }}>
            {programAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/program/${area.slug}`} className="index-row">
                  <span className="index-num">{String(area.number).padStart(2, '0')}</span>
                  <span>
                    <span className="index-title">{area.title}</span>
                    <span className="index-lead" style={{ display: 'block' }}>
                      {area.lead}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CollaborationCta heading="Ada bidang yang ingin Anda kerjakan bersama?" />
    </>
  );
}
