'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/content/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="shell site-header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} — beranda`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-mark" src={site.logo} alt="" width={512} height={512} />
          <span className="wordmark">
            <span className="wordmark-name">Mataruma</span>
            <span className="wordmark-sub">Peradaban Nusantara</span>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Navigasi utama">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/kolaborasi" className="btn btn-primary nav-cta">
          Ajukan Kolaborasi
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="menu-ponsel"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? 'Tutup' : 'Menu'}
        </button>
      </div>

      {menuOpen && (
        <div className="shell mobile-nav" id="menu-ponsel">
          <nav aria-label="Navigasi utama (ponsel)">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/kolaborasi" className="btn btn-primary">
            Ajukan Kolaborasi →
          </Link>
        </div>
      )}
    </header>
  );
}
