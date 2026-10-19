import Link from 'next/link';
import { kolaborasiPage } from '@/content/kolaborasi';

type Props = {
  heading?: string;
  tone?: 'dark' | 'teal';
};

export default function CollaborationCta({
  heading = 'Katong kerja bersama',
  tone = 'teal',
}: Props) {
  return (
    <section className={`${tone === 'dark' ? 'on-dark' : 'on-teal'} woven`}>
      <div className="shell section">
        <div className="cta-panel">
          <div>
            <p className="kicker">Kolaborasi</p>
            <h2 className="display-l" style={{ marginTop: '0.75rem', maxWidth: '22ch' }}>
              {heading}
            </h2>
            <p className="cta-sub">{kolaborasiPage.cta.sub}</p>
          </div>

          <div className="btn-row">
            <Link href="/kolaborasi" className="btn btn-primary btn-lg">
              🤝 AJUKAN KOLABORASI →
            </Link>
            <Link href="/kolaborasi#alur" className="btn btn-outline">
              Lihat alur kolaborasi
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
