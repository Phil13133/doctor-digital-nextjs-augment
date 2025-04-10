import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Google Ads Services page metadata
 * This metadata is used for SEO and social sharing for the Google Ads services page
 */
export const metadata: Metadata = {
  title: 'Διαφήμιση Google για Γιατρούς | Προώθηση Ιατρείου | Doctor Digital',
  description: 'Προώθηση ιατρείου μέσω διαφημίσεων Google (Google Ads) με στοχευμένες καμπάνιες που φέρνουν νέους ασθενείς. Εξειδικευμένο ιατρικό marketing με μετρήσιμα αποτελέσματα.',
  keywords: ['Google Ads για Ιατρούς', 'Διαφήμιση στη Google', 'PPC για Ιατρούς', 'Διαφημίσεις για Ιατρεία', 'Προώθηση Ιατρικών Υπηρεσιών', 'Medical Google Ads'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/diafimisi-sth-google`,
  },
  openGraph: {
    type: 'website',
    title: 'Διαφήμιση Google για Γιατρούς | Προώθηση Ιατρείου | Doctor Digital',
    description: 'Προώθηση ιατρείου μέσω διαφημίσεων Google (Google Ads) με στοχευμένες καμπάνιες που φέρνουν νέους ασθενείς.',
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
    title: 'Διαφήμιση Google για Γιατρούς | Προώθηση Ιατρείου | Doctor Digital',
    description: 'Προώθηση ιατρείου μέσω διαφημίσεων Google με στοχευμένες καμπάνιες που φέρνουν νέους ασθενείς. Εξειδικευμένο ιατρικό marketing.',
    images: [`${SITE.url}/og/google-ads.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
