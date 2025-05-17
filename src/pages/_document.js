import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Charles Awuku | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Explore the real-world projects and software solutions built by Charles Awuku, a senior full-stack developer." />
        <meta property="og:image" content="https://charlesawuku.com/og-image.jpg" />
        <meta property="og:url" content="https://charlesawuku.com/" />
        <meta property="og:site_name" content="Charles Awuku Portfolio" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@AwukuCharles6" /> {/* Replace with your actual handle */}
        <meta name="twitter:title" content="Charles Awuku | Full-Stack Developer Portfolio" />
        <meta name="twitter:description" content="Explore the real-world projects and software solutions built by Charles Awuku, a senior full-stack developer." />
        <meta name="twitter:image" content="https://charlesawuku.com/og-image.jpg" />

        {/* Favicon & Theme Color (Optional) */}
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
