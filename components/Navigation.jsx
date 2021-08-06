import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <Link href="/">
        <a>Start</a>
      </Link>
      <Link href="/impressum">
        <a>Impressum</a>
      </Link>
      <Link href="/news">
        <a>News</a>
      </Link>
      <Link href="/blog">
        <a>blog</a>
      </Link>
      <Link href="/standorte">
        <a>Standorte</a>
      </Link>
      <a href="https://cimdata.de">Cimdata</a>
    </nav>
  );
}
