// components/SEO.tsx

import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title = "My Personal Website", description = "A personal website showcasing my work, blog, and contact info." }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/images/og-image.jpg" /> {/* Mettez à jour avec votre image OG */}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/twitter-image.jpg" /> {/* Mettez à jour avec votre image Twitter */}
      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
