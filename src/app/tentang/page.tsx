import type { Metadata } from 'next';
import Link from 'next/link';
import CollaborationCta from '@/components/CollaborationCta';
import MediaSlot from '@/components/MediaSlot';
import { media } from '@/content/media';
import { ekosistem, generasiMendatang, misi, pembuka, tentang, visi } from '@/content/yayasan';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: 'Tentang Mataruma',
  description: tentang.paragraphs[0],
};

export default function TentangPage() {
  return (
    <>
      <section className="shell page-head">
        <nav className="breadcrumb" aria-label="Posisi halaman">
          <Link href="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <span>Tentang</span>
        </nav>
        <h1 className="display-xl" style={{ maxWidth: '16ch' }}>
          {tentang.heading}
        </h1>
        <p className="lead" style={{ marginTop: '1.5rem', maxWidth: '54ch' }}>
          {tentang.paragraphs[0]}
        </p>
      </section>

      <div className="shell">
        <MediaSlot slot={media.tentangBanner} priority />
      </div>

      <section className="section-tight">
        <div className="shell">
          <div className="beam two-col">
            <p className="pull">{tentang.pull}</p>
            <div className="prose">
              {tentang.paragraphs.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell">
          <div className="beam prose">
            <h2 className="display-l" style={{ maxWidth: '20ch' }}>
              Keyakinan yang menggerakkan
            </h2>
            <div style={{ marginTop: '1.25rem' }}>
              {pembuka.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p className="couplet" style={{ marginTop: '2rem' }}>
              {pembuka.couplet.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      <section className="on-dark woven">
        <div className="shell section two-col">
          <div>
            <p className="kicker">Satu gerakan</p>
            <h2 className="display-l" style={{ marginTop: '0.75rem' }}>
              {ekosistem.heading}
            </h2>
            <div className="prose" style={{ marginTop: '1.25rem', color: 'rgba(233,239,235,.78)' }}>
              {ekosistem.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <p style={{ marginTop: '1.75rem' }}>
              <Link href="/program" className="btn btn-outline">
                Lihat dua belas bidang
              </Link>
            </p>
          </div>

          <ol className="thread">
            {ekosistem.chain.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="visi">
        <div className="shell two-col">
          <div>
            <p className="kicker">{visi.heading}</p>
          </div>
          <p className="visi-text">{visi.text}</p>
        </div>
      </section>

      <section className="section-tight" id="misi">
        <div className="shell">
          <div className="beam">
            <h2 className="display-l">{misi.heading}</h2>
            <ol className="misi-list">
              {misi.items.map((item, index) => (
                <li key={item.slice(0, 40)}>
                  <span className="misi-num">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell">
          <div className="beam">
            <h2 className="display-l" style={{ maxWidth: '20ch' }}>
              {generasiMendatang.heading}
            </h2>
            <div className="prose" style={{ marginTop: '1.25rem' }}>
              {generasiMendatang.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <ol className="steps">
              {generasiMendatang.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <div className="prose" style={{ marginTop: '2.25rem' }}>
              {generasiMendatang.closing.map((line) => (
                <p key={line.slice(0, 40)}>{line}</p>
              ))}
            </div>
            <p className="tagline" style={{ marginTop: '2.5rem', color: 'var(--kenari-600)' }}>
              {site.taglineEn}
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight" id="legalitas">
        <div className="shell">
          <div className="beam two-col">
            <div>
              <h2 className="display-l" style={{ maxWidth: '14ch' }}>
                Legalitas dan tata kelola
              </h2>
              <p className="field-note" style={{ marginTop: '0.75rem', maxWidth: '34ch' }}>
                Mataruma berbadan hukum yayasan, berkedudukan dan berkantor di Jakarta Timur.
              </p>
            </div>

            <div className="stack-lg">
              <dl className="legal-list">
                <div>
                  <dt>Nama resmi</dt>
                  <dd>{site.name}</dd>
                </div>
                <div>
                  <dt>Akta Pendirian</dt>
                  <dd>
                    {site.legal.aktaNomor}, {site.legal.aktaTanggal}
                    <br />
                    {site.legal.notaris}
                  </dd>
                </div>
                <div>
                  <dt>Nomor Induk Berusaha</dt>
                  <dd>
                    {site.legal.nib} (terbit {site.legal.nibTanggal})
                  </dd>
                </div>
                <div>
                  <dt>NPWP</dt>
                  <dd>{site.legal.npwp}</dd>
                </div>
                <div>
                  <dt>Alamat sekretariat</dt>
                  <dd>{site.contact.address}</dd>
                </div>
                <div>
                  <dt>Kontak</dt>
                  <dd>
                    <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
                    <br />
                    <a href={site.contact.whatsappUrl} rel="noreferrer noopener" target="_blank">
                      WhatsApp {site.contact.phone}
                    </a>
                  </dd>
                </div>
              </dl>

              <div>
                <h3 className="display-m">Susunan organ yayasan</h3>
                <ul className="organ-list">
                  {site.organ.map((item) => (
                    <li key={item.jabatan}>
                      <span className="organ-role">{item.jabatan}</span>
                      <span>{item.nama}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CollaborationCta heading="Mari bangun program bersama" tone="dark" />
    </>
  );
}
