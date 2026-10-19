import Link from 'next/link';
import { nav, site } from '@/content/site';
import { programAreas } from '@/content/program';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const highlighted = programAreas.slice(0, 5);

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="footer-mark" src={site.logo} alt="" width={512} height={512} />
          <p className="display-m" style={{ marginTop: '1.25rem', maxWidth: '18ch' }}>
            {site.name}
          </p>
          <p className="tagline" style={{ marginTop: '1rem' }}>
            {site.tagline}
          </p>
          <p style={{ marginTop: '1.25rem', maxWidth: '38ch', color: 'rgba(233,239,235,.72)' }}>
            {site.taglineEn}
          </p>
        </div>

        <div>
          <h2>Halaman</h2>
          <div className="footer-links">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <h2 style={{ marginTop: '2rem' }}>Ruang lingkup</h2>
          <div className="footer-links">
            {highlighted.map((area) => (
              <Link key={area.slug} href={`/program/${area.slug}`}>
                {area.title}
              </Link>
            ))}
            <Link href="/program">Lihat dua belas bidang</Link>
          </div>
        </div>

        <div>
          <h2>Kontak</h2>
          <div className="footer-links">
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <a href={site.contact.whatsappUrl} rel="noreferrer noopener" target="_blank">
              WhatsApp {site.contact.phone}
            </a>
            <span style={{ color: 'rgba(233,239,235,.72)' }}>{site.contact.address}</span>
          </div>

          {site.social.length > 0 && (
            <>
              <h2 style={{ marginTop: '2rem' }}>Ikuti</h2>
              <div className="footer-links">
                {site.social.map((item) => (
                  <a key={item.label} href={item.href} rel="noreferrer noopener" target="_blank">
                    {item.label}
                  </a>
                ))}
              </div>
            </>
          )}

          <h2 style={{ marginTop: '2rem' }}>Legalitas</h2>
          <div className="footer-links" style={{ color: 'rgba(233,239,235,.72)' }}>
            <span>
              Akta Pendirian {site.legal.aktaNomor}, {site.legal.aktaTanggal}
            </span>
            <span>{site.legal.notaris}</span>
            <span>NIB {site.legal.nib}</span>
            <span>NPWP {site.legal.npwp}</span>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>
          © {year} {site.name}
        </span>
        <span>Merawat Akar, Menumbuhkan Masa Depan</span>
      </div>
    </footer>
  );
}
