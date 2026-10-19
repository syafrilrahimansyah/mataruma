import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CollaborationCta from '@/components/CollaborationCta';
import MediaSlot from '@/components/MediaSlot';
import { getProgramImage } from '@/content/media';
import { getProgramArea, programAreas } from '@/content/program';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return programAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getProgramArea(slug);

  if (!area) {
    return { title: 'Bidang tidak ditemukan' };
  }

  return {
    title: area.title,
    description: area.lead,
  };
}

export default async function ProgramAreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getProgramArea(slug);

  if (!area) {
    return notFound();
  }

  const index = programAreas.findIndex((item) => item.slug === area.slug);
  const previous = index > 0 ? programAreas[index - 1] : null;
  const next = index < programAreas.length - 1 ? programAreas[index + 1] : null;

  return (
    <>
      <section className="shell page-head">
        <nav className="breadcrumb" aria-label="Posisi halaman">
          <Link href="/">Beranda</Link>
          <span aria-hidden="true">/</span>
          <Link href="/program">Ruang Lingkup</Link>
          <span aria-hidden="true">/</span>
          <span>Bidang {String(area.number).padStart(2, '0')}</span>
        </nav>

        <h1 className="display-xl" style={{ maxWidth: '18ch' }}>
          {area.title}
        </h1>
      </section>

      <div className="shell">
        <MediaSlot slot={getProgramImage(area.slug)} priority />
      </div>

      <section className="section-tight">
        <div className="shell">
          <div className="beam two-col">
            <p className="kicker">Bidang {String(area.number).padStart(2, '0')} dari 12</p>
            <div className="prose">
              {area.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight">
        <div className="shell">
          <div className="beam">
            <h2 className="display-m">{area.itemsLabel}</h2>
            <ul className="bullets">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {area.closing && (
              <div className="prose" style={{ marginTop: '2.25rem' }}>
                {area.closing.map((line) => (
                  <p key={line.slice(0, 40)} className="couplet" style={{ maxWidth: '40ch' }}>
                    {line}
                  </p>
                ))}
              </div>
            )}

            <div className="area-nav">
              {previous ? (
                <Link href={`/program/${previous.slug}`}>
                  <span>Bidang sebelumnya</span>
                  {previous.title}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`/program/${next.slug}`} style={{ textAlign: 'right' }}>
                  <span>Bidang berikutnya</span>
                  {next.title}
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </section>

      <CollaborationCta heading="Kerjakan bidang ini bersama Mataruma" />
    </>
  );
}
