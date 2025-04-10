import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Home page metadata
 * This metadata is used for SEO and social sharing
 */
export const metadata: Metadata = {
  title: 'Ιατρικό Μάρκετινγκ στην Ελλάδα | Doctor Digital',
  description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Αυξήστε τους ασθενείς σας με στοχευμένες στρατηγικές Google Ads, SEO & περιεχομένου για ιατρούς.',
  keywords: ['Ιατρικό Μάρκετινγκ', 'SEO για Ιατρούς', 'Google Ads για Ιατρεία', 'Ιατρικές Ιστοσελίδες', 'Digital Marketing για Γιατρούς', 'Ελλάδα'],
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό Μάρκετινγκ στην Ελλάδα | Doctor Digital',
    description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Αυξήστε τους ασθενείς σας με στοχευμένες στρατηγικές Google Ads, SEO & περιεχομένου για ιατρούς.',
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
    title: 'Ιατρικό Μάρκετινγκ στην Ελλάδα | Doctor Digital',
    description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Αυξήστε τους ασθενείς σας με στοχευμένες στρατηγικές Google Ads, SEO & περιεχομένου.',
    images: [`${SITE.url}/og/home.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
