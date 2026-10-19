/** @type {import('next').NextConfig} */
const nextConfig = {
  // Website statis: `next build` menghasilkan folder `out/` berisi HTML siap host
  // (Nginx, Apache, S3, Netlify, Cloudflare Pages, atau folder static di server).
  output: 'export',

  // Setiap halaman jadi folder dengan index.html -> aman untuk hosting statis biasa.
  trailingSlash: true,

  // Static export tidak menjalankan image optimizer Next.
  images: { unoptimized: true },

  // Supaya build tidak gagal hanya karena warning lint saat deploy.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
