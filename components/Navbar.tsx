// components/Navbar.tsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-6 text-text.secondary font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

