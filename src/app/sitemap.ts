import type { MetadataRoute } from 'next';
import { programAreas } from '@/content/program';
import { site } from '@/content/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.url.replace(/\/+$/, '');

  const staticPaths = ['/', '/tentang', '/program', '/kolaborasi'];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
    })),
    ...programAreas.map((area) => ({
      url: `${base}/program/${area.slug}`,
      lastModified: now,
    })),
  ];
}
