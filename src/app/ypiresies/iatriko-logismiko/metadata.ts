import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Medical Software Services page metadata
 * This metadata is used for SEO and social sharing for the medical software services page
 */
export const metadata: Metadata = {
  title: 'Ιατρικό Λογισμικό | Σύγχρονο Software Για Ιατρεία | Doctor Digital',
  description: 'Αναβαθμίστε την οργάνωση του ιατρείου σας με εύχρηστο, ασφαλές και παραμετροποιήσιμο ιατρικό λογισμικό. Ιδανικό για γιατρούς, κλινικές & διαγνωστικά.',
  keywords: ['Ιατρικό Λογισμικό', 'Web Apps για Γιατρούς', 'Διαχείριση Ιατρείου', 'Εφαρμογές για Κλινικές', 'Σύστημα Διαχείρισης Ασθενών', 'Medical Software'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/iatriko-logismiko`,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό Λογισμικό | Σύγχρονο Software Για Ιατρεία | Doctor Digital',
    description: 'Αναβαθμίστε την οργάνωση του ιατρείου σας με εύχρηστο, ασφαλές και παραμετροποιήσιμο ιατρικό λογισμικό. Ιδανικό για γιατρούς, κλινικές & διαγνωστικά.',
    url: `${SITE.url}/ypiresies/iatriko-logismiko`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/medical-software.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Ιατρικό Λογισμικό και Web Apps για Γιατρούς και Κλινικές',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ιατρικό Λογισμικό | Σύγχρονο Software Για Ιατρεία | Doctor Digital',
    description: 'Αναβαθμίστε την οργάνωση του ιατρείου σας με εύχρηστο, ασφαλές και παραμετροποιήσιμο ιατρικό λογισμικό.',
    images: [`${SITE.url}/og/medical-software.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
