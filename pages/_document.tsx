// pages/_document.tsx

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* Lien vers Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <body className="bg-background text-text-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
