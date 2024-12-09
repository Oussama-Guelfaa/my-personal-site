// components/Button.tsx

import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link href={href} className="text-text.secondary bg-brand-dark rounded px-4 py-2 transition-colors">
      {children}
    </Link>
  );
}

