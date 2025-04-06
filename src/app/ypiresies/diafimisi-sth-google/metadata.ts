import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Google Ads Services page metadata
 * This metadata is used for SEO and social sharing for the Google Ads services page
 */
export const metadata: Metadata = {
  title: 'Google Ads για Ιατρούς | Στοχευμένες Διαφημίσεις για Γιατρούς',
  description: 'Αποκτήστε περισσότερους ασθενείς μέσω στοχευμένων διαφημίσεων Google Ads ειδικά για την ιατρική σας ειδικότητα. Εμφανιστείτε στην πρώτη θέση τη στιγμή που σας αναζητούν.',
  keywords: ['Google Ads για Ιατρούς', 'Διαφήμιση στη Google', 'PPC για Ιατρούς', 'Διαφημίσεις για Ιατρεία', 'Προώθηση Ιατρικών Υπηρεσιών', 'Medical Google Ads'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/diafimisi-sth-google`,
  },
  openGraph: {
    type: 'website',
    title: 'Google Ads για Ιατρούς | Στοχευμένες Διαφημίσεις στην Google',
    description: 'Εξειδικευμένες καμπάνιες Google Ads για ιατρούς και κλινικές με άμεσα αποτελέσματα και υψηλή απόδοση επένδυσης.',
    url: `${SITE.url}/ypiresies/diafimisi-sth-google`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/google-ads.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Google Ads για Ιατρούς και Κλινικές',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Ads για Ιατρούς | Doctor Digital',
    description: 'Εξειδικευμένες καμπάνιες Google Ads για ιατρούς και κλινικές με άμεσα αποτελέσματα.',
    images: [`${SITE.url}/og/google-ads.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
