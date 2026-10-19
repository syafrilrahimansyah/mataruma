import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="shell section">
      <p className="kicker">Halaman tidak ditemukan</p>
      <h1 className="display-l" style={{ marginTop: '1rem', maxWidth: '20ch' }}>
        Jalan ini belum ada di Mataruma
      </h1>
      <p className="lead" style={{ marginTop: '1.25rem', maxWidth: '48ch' }}>
        Alamat yang Anda buka tidak tersedia. Mulai dari beranda, atau telusuri dua belas ruang
        lingkup kegiatan Mataruma.
      </p>
      <div className="btn-row" style={{ marginTop: '2rem' }}>
        <Link href="/" className="btn btn-primary">
          Kembali ke beranda
        </Link>
        <Link href="/program" className="btn btn-outline">
          Ruang lingkup kegiatan
        </Link>
      </div>
    </section>
  );
}
