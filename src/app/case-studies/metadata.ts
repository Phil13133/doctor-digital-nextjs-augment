import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Case Studies page metadata
 * This metadata is used for SEO and social sharing for the case studies listing page
 */
export const metadata: Metadata = {
  title: 'Case Studies Ιατρικού Marketing | Επιτυχημένα Projects για Ιατρούς',
  description: 'Ανακαλύψτε πραγματικά παραδείγματα επιτυχίας από γιατρούς και κλινικές που συνεργάστηκαν με την Doctor Digital και είδαν μετρήσιμα αποτελέσματα.',
  keywords: ['Case Studies Ιατρικού Marketing', 'Επιτυχημένα Projects', 'Μελέτες Περίπτωσης', 'Αποτελέσματα SEO για Ιατρούς', 'Digital Marketing για Κλινικές'],
  alternates: {
    canonical: `${SITE.url}/case-studies`,
  },
  openGraph: {
    type: 'website',
    title: 'Case Studies Ιατρικού Marketing | Μετρήσιμα Αποτελέσματα',
    description: 'Ανακαλύψτε πώς γιατροί και κλινικές αύξησαν την προβολή και τα ραντεβού τους με τις στρατηγικές της Doctor Digital.',
    url: `${SITE.url}/case-studies`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/case-studies.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Case Studies Ιατρικού Marketing με αποδεδειγμένα αποτελέσματα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies Ιατρικού Marketing | Επιτυχημένα Projects',
    description: 'Ανακαλύψτε πραγματικά παραδείγματα επιτυχίας και μετρήσιμα αποτελέσματα από συνεργασίες με ιατρούς και κλινικές.',
    images: [`${SITE.url}/og/case-studies.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
