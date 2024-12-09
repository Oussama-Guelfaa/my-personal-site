// components/ProjectCard.tsx

import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block border border-gray-300 rounded-md overflow-hidden hover:shadow-lg transition bg-background.dark">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-auto" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-text.primary">{title}</h3>
        <p className="text-sm text-text.primary mb-2">{description}</p>
        <span className="text-brand font-medium">Learn More →</span>
      </div>
    </a>
  );
}

