// components/BlogCard.tsx

import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogCard({ slug, title, excerpt, date }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="block border border-gray-300 rounded-md p-4 hover:shadow-lg transition bg-background.dark">
      <h3 className="text-xl font-semibold mb-2 text-text.primary">{title}</h3>
      <p className="text-sm text-text.primary mb-2">{excerpt}</p>
      <div className="text-xs text-text.primary">{date}</div>
    </Link>
  );
}
