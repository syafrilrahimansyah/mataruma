import type { Metadata } from 'next';
import Link from 'next/link';
import KolaborasiForm from '@/components/KolaborasiForm';
import MediaSlot from '@/components/MediaSlot';
import { media } from '@/content/media';
import { kolaborasiPage } from '@/content/kolaborasi';
import { getProgramArea } from '@/content/program';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: kolaborasiPage.title,
  description: kolaborasiPage.lead,
};

const mitra = getProgramArea('kolaborasi-dan-jejaring');

export default function KolaborasiPageView() {
  return (
    <>
      <section className="hero woven">
        <div className="shell" style={{ paddingBlock: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
          <nav className="breadcrumb" aria-label="Posisi halaman">
            <Link href="/">Beranda</Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: 'rgba(233,239,235,.6)' }}>Kolaborasi</span>
          </nav>

          <h1 className="display-xl" style={{ maxWidth: '16ch' }}>
            {kolaborasiPage.title}
          </h1>
          <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '56ch', color: 'rgba(233,239,235,.8)' }}>
            {kolaborasiPage.lead}
          </p>
          <p className="btn-row" style={{ marginTop: '2rem' }}>
            <a href="#formulir" className="btn btn-primary btn-lg">
              Isi formulir kolaborasi
            </a>
          </p>
        </div>
      </section>

      <div className="shell" style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
        <MediaSlot slot={media.kolaborasiBanner} priority />
      </div>

      <section className="section-tight" id="alur">
        <div className="shell">
          <div className="beam">
            <h2 className="display-l" style={{ maxWidth: '20ch' }}>
              Bagaimana kolaborasi berjalan
            </h2>
            <ol className="step-cards">
              {kolaborasiPage.steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {mitra && (
        <section className="section-tight">
          <div className="shell">
            <div className="beam two-col">
              <div>
                <h2 className="display-m" style={{ maxWidth: '16ch' }}>
                  Siapa saja yang berkolaborasi dengan Mataruma
                </h2>
                <p className="field-note" style={{ marginTop: '0.75rem', maxWidth: '36ch' }}>
                  Tidak ada bentuk kerja sama yang terlalu kecil. Yang menentukan adalah manfaatnya
                  bagi masyarakat.
                </p>
              </div>
              <ul className="bullets" style={{ marginTop: 0 }}>
                {mitra.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section" id="formulir">
        <div className="shell shell-narrow">
          <KolaborasiForm />
        </div>
      </section>

      <section className="on-dark">
        <div className="shell section-tight">
          <h2 className="display-m" style={{ maxWidth: '22ch' }}>
            Lebih nyaman bicara langsung?
          </h2>
          <p style={{ marginTop: '1rem', color: 'rgba(233,239,235,.78)', maxWidth: '52ch' }}>
            Hubungi sekretariat Mataruma lewat{' '}
            <a href={`mailto:${site.contact.email}`} style={{ color: 'var(--kenari)' }}>
              {site.contact.email}
            </a>{' '}
            atau WhatsApp{' '}
            <a
              href={site.contact.whatsappUrl}
              rel="noreferrer noopener"
              target="_blank"
              style={{ color: 'var(--kenari)' }}
            >
              {site.contact.phone}
            </a>
            . Sekretariat berada di {site.contact.addressShort}.
          </p>
        </div>
      </section>
    </>
  );
}
