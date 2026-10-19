import Link from 'next/link';
import CollaborationCta from '@/components/CollaborationCta';
import MediaSlot from '@/components/MediaSlot';
import { buildSrcSet, media, showPlaceholders } from '@/content/media';
import { programAreas } from '@/content/program';
import { ekosistem, generasiMendatang, pembuka, tentang, visi } from '@/content/yayasan';
import { site } from '@/content/site';

export default function BerandaPage() {
  const banner = media.heroBanner;
  const galeriTampil = media.berandaGaleri.some((slot) => slot.src) || showPlaceholders;

  return (
    <>
      <section className="hero woven">
        {banner.src && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-bg"
              src={banner.src}
              srcSet={buildSrcSet(banner)}
              sizes={banner.sizes}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: banner.focal }}
            />
            <div className="hero-scrim" aria-hidden="true" />
          </>
        )}

        <div className="shell hero-inner">
          <div>
            <h1 className="display-xl rise rise-1">
              <span className="hero-title-line">Yayasan Mataruma</span>
              <span className="hero-title-line">Peradaban Nusantara</span>
            </h1>
            <p className="tagline rise rise-2" style={{ marginTop: '1.5rem' }}>
              {site.tagline}
            </p>
            <div className="btn-row rise rise-3" style={{ marginTop: '2.25rem' }}>
              <Link href="/kolaborasi" className="btn btn-primary btn-lg">
                🤝 AJUKAN KOLABORASI →
              </Link>
              <Link href="/program" className="btn btn-outline btn-lg">
                Dua belas ruang lingkup
              </Link>
            </div>
          </div>

          <div className="hero-meta rise rise-4">
            <p className="lead">{pembuka.paragraphs[0]}</p>
            <p className="couplet">
              {pembuka.couplet.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>

          {!banner.src && showPlaceholders && (
            <p className="hero-slot-note">
              <strong>Slot banner utama belum diisi.</strong>
              <span>Taruh gambar di</span>
              <code>public{banner.hint}</code>
              <span>
                lalu isi &quot;src&quot; pada src/content/media.ts. Ukuran anjuran {banner.width} ×{' '}
                {banner.height} px.
              </span>
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="shell two-col">
          <div>
            <p className="kicker">Mengapa Mataruma ada</p>
            <p className="pull" style={{ marginTop: '1.5rem' }}>
              {tentang.pull}
            </p>
            <div style={{ marginTop: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
              <MediaSlot slot={media.berandaTentang} />
            </div>
          </div>
          <div className="prose">
            {pembuka.paragraphs.slice(1).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <p style={{ marginTop: '1.75rem' }}>
              <Link href="/tentang" className="btn btn-outline">
                Tentang Mataruma
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell">
          <div className="beam">
            <div className="two-col">
              <div>
                <h2 className="display-l">Ruang lingkup kegiatan</h2>
              </div>
              <p className="lead">
                Dua belas bidang yang dikerjakan Mataruma — dari pendidikan dan teknologi sampai
                kebudayaan, olahraga tradisional, kesehatan, dan literasi hukum.
              </p>
            </div>

            <ol className="index-list">
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
          </div>

          <ol className="thread">
            {ekosistem.chain.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="beam two-col">
            <div>
              <p className="kicker">{visi.heading}</p>
            </div>
            <div>
              <p className="visi-text">{visi.text}</p>
              <p style={{ marginTop: '1.75rem' }}>
                <Link href="/tentang#misi" className="btn btn-outline">
                  Delapan misi Mataruma
                </Link>
              </p>
            </div>
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
          </div>
        </div>
      </section>

      {galeriTampil && (
        <section className="section-tight">
          <div className="shell">
            <div className="beam">
              <h2 className="display-m">Potret kegiatan</h2>
              <div className="media-strip">
                {media.berandaGaleri.map((slot) => (
                  <MediaSlot key={slot.id} slot={slot} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CollaborationCta />
    </>
  );
}
