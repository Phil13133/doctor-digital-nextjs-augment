import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * SEO Services page metadata
 * This metadata is used for SEO and social sharing for the SEO services page
 */
export const metadata: Metadata = {
  title: 'Ιατρικό SEO | Βελτιστοποίηση Ιατρικών Ιστοσελίδων | Doctor Digital',
  description: 'Εξειδικευμένο ιατρικό SEO και local SEO για βελτιστοποίηση ιατρικών ιστοσελίδων. Αυξήστε την προβολή του ιατρείου σας και προσελκύστε περισσότερους ασθενείς.',
  keywords: ['SEO για Ιατρούς', 'Βελτιστοποίηση Ιστοσελίδων', 'Ιατρικό SEO', 'Οργανική Κατάταξη Google', 'Κατάταξη Ιατρείου στην Google', 'Medical SEO'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/seo-gia-iatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό SEO | Βελτιστοποίηση Ιατρικών Ιστοσελίδων | Doctor Digital',
    description: 'Εξειδικευμένο ιατρικό SEO και local SEO για βελτιστοποίηση ιατρικών ιστοσελίδων. Αυξήστε την προβολή του ιατρείου σας και προσελκύστε περισσότερους ασθενείς.',
    url: `${SITE.url}/ypiresies/seo-gia-iatrous`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/seo.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - SEO για Ιατρούς και Κλινικές',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ιατρικό SEO | Βελτιστοποίηση Ιατρικών Ιστοσελίδων | Doctor Digital',
    description: 'Εξειδικευμένο ιατρικό SEO και local SEO για βελτιστοποίηση ιατρικών ιστοσελίδων. Αυξήστε την προβολή του ιατρείου σας.',
    images: [`${SITE.url}/og/seo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
