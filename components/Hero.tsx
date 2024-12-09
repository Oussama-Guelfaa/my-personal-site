// components/Hero.tsx

import Image from 'next/image';
import Button from './Button';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-text.primary">
          Welcome to My Personal Space
        </h1>
        <p className="text-lg text-text.primary mb-6 max-w-md">
          I’m a [Your Profession] passionate about [Key Topics]. Explore my projects, read my thoughts, and connect with me.
        </p>
        <Button href="/projects">View My Work</Button>
      </div>
      <div className="flex-1 flex justify-center">
        <Image src="/images/profile.jpg" alt="Profile Picture" width={300} height={300} className="rounded-full" />
      </div>
    </section>
  );
}
