import { buildSrcSet, showPlaceholders, type ImageSlot } from '@/content/media';

type Props = {
  slot: ImageSlot;
  className?: string;
  /** true untuk gambar di layar pertama (tidak ditunda pemuatannya). */
  priority?: boolean;
  /** 'frame' memberi bingkai tipis; 'plain' tanpa bingkai. */
  variant?: 'frame' | 'plain';
};

/**
 * Menampilkan satu slot gambar dari src/content/media.ts.
 * Selama `src` kosong, yang tampil adalah kotak penanda berisi nama slot,
 * ukuran anjuran, dan nama berkas yang disarankan.
 */
export default function MediaSlot({
  slot,
  className,
  priority = false,
  variant = 'frame',
}: Props) {
  const ratio = `${slot.width} / ${slot.height}`;
  // Gambar yang sangat lebar dibuat sedikit lebih tinggi di layar ponsel,
  // supaya tidak menjadi pita tipis. Lihat .media-wide di globals.css.
  const wide = slot.width / slot.height >= 1.8;
  const classes = ['media', `media-${variant}`, wide ? 'media-wide' : null, className]
    .filter(Boolean)
    .join(' ');
  const ratioVar = { '--ratio': ratio } as React.CSSProperties;

  if (slot.src) {
    return (
      <figure className={classes} style={ratioVar}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slot.src}
          srcSet={buildSrcSet(slot)}
          sizes={slot.sizes}
          alt={slot.alt}
          width={slot.width}
          height={slot.height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding="async"
          style={{ objectPosition: slot.focal }}
        />
        {(slot.caption || slot.credit) && (
          <figcaption>
            {slot.caption}
            {slot.caption && slot.credit ? ' · ' : ''}
            {slot.credit}
          </figcaption>
        )}
      </figure>
    );
  }

  if (!showPlaceholders) {
    return null;
  }

  return (
    <div className={`${classes} media-empty`} style={ratioVar}>
      <span className="media-empty-id">{slot.id}</span>
      <span className="media-empty-meta">
        {slot.width} × {slot.height} px
      </span>
      <code className="media-empty-path">{slot.hint}</code>
    </div>
  );
}
