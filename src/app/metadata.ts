import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Home page metadata
 * This metadata is used for SEO and social sharing
 */
export const metadata: Metadata = {
  title: 'Ιατρικό Μάρκετινγκ | Google Ads & SEO | Doctor Digital',
  description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Google Ads, SEO, περιεχόμενο & ιστοσελίδες για γιατρούς που θέλουν να προσελκύσουν νέους ασθενείς.',
  keywords: ['Ιατρικό Μάρκετινγκ', 'SEO για Ιατρούς', 'Google Ads για Ιατρεία', 'Ιατρικές Ιστοσελίδες', 'Digital Marketing για Γιατρούς', 'Ελλάδα'],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό Μάρκετινγκ | Google Ads & SEO | Doctor Digital',
    description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Google Ads, SEO, περιεχόμενο & ιστοσελίδες για γιατρούς.',
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Ιατρικό Μάρκετινγκ στην Ελλάδα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ιατρικό Μάρκετινγκ | Google Ads & SEO | Doctor Digital',
    description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ για γιατρούς και κλινικές στην Ελλάδα.',
    images: [`${SITE.url}/og/home.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
