import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Medical Software Services page metadata
 * This metadata is used for SEO and social sharing for the medical software services page
 */
export const metadata: Metadata = {
  title: 'Ιατρικό Λογισμικό | Web Apps για Γιατρούς & Κλινικές',
  description: 'Εξειδικευμένες εφαρμογές ιατρικού λογισμικού για τη διαχείριση ασθενών, ραντεβού, ιατρικών δεδομένων και αυτοματοποίηση διαδικασιών στο ιατρείο ή την κλινική σας.',
  keywords: ['Ιατρικό Λογισμικό', 'Web Apps για Γιατρούς', 'Διαχείριση Ιατρείου', 'Εφαρμογές για Κλινικές', 'Σύστημα Διαχείρισης Ασθενών', 'Medical Software'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/iatriko-logismiko`,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό Λογισμικό | Web Apps για Γιατρούς & Κλινικές',
    description: 'Εξειδικευμένες εφαρμογές λογισμικού για ιατρούς και κλινικές που αυτοματοποιούν διαδικασίες και βελτιώνουν την αποδοτικότητα του ιατρείου σας.',
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
    title: 'Ιατρικό Λογισμικό | Doctor Digital',
    description: 'Εξειδικευμένες εφαρμογές λογισμικού για ιατρούς και κλινικές που αυτοματοποιούν διαδικασίες.',
    images: [`${SITE.url}/og/medical-software.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
