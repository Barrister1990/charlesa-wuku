// next-seo.config.js
const siteUrl = 'https://charlesawuku.com';

export default {
  title: 'Charles Awuku – Senior Full Stack Developer',
  description:
    'Official portfolio of Charles Awuku – Senior Full Stack Developer building enterprise-grade web & mobile apps using React, Next.js,React Native, Supabase, Firebase, Node.js and more.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Charles Awuku',
    title: 'Charles Awuku – Senior Full Stack Developer',
    description:
      'Portfolio of Charles Awuku, an expert full stack developer creating scalable web and mobile solutions for businesses and individuals worldwide.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Charles Awuku Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@AwukuCharles6',
    site: '@AwukuCharles6',
    cardType: 'summary_large_image',
  },
};
