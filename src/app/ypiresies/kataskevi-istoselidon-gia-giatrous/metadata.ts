import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Website Development Services page metadata
 * This metadata is used for SEO and social sharing for the website development services page
 */
export const metadata: Metadata = {
  title: 'Κατασκευή Ιστοσελίδων για Γιατρούς | Ιατρικές Ιστοσελίδες',
  description: 'Σύγχρονες, γρήγορες και προσαρμοσμένες ιστοσελίδες για γιατρούς, κλινικές και ιατρικά κέντρα. Ιατρικές ιστοσελίδες με έμφαση στη μετατροπή επισκεπτών σε ασθενείς.',
  keywords: ['Κατασκευή Ιστοσελίδων για Γιατρούς', 'Ιατρικές Ιστοσελίδες', 'Web Design για Ιατρούς', 'Website για Ιατρεία', 'Ιστοσελίδα για Κλινικές', 'Ιστοσελίδα για Οδοντιάτρους'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/kataskevi-istoselidon-gia-giatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'Κατασκευή Ιστοσελίδων για Γιατρούς | Ιατρικές Ιστοσελίδες',
    description: 'Επαγγελματικές ιστοσελίδες για γιατρούς και κλινικές με έμφαση στην εμπειρία χρήστη και τη μετατροπή επισκεπτών σε ασθενείς.',
    url: `${SITE.url}/ypiresies/kataskevi-istoselidon-gia-giatrous`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/website-dev.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Κατασκευή Ιστοσελίδων για Γιατρούς και Κλινικές',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Κατασκευή Ιστοσελίδων για Γιατρούς | Doctor Digital',
    description: 'Επαγγελματικές ιστοσελίδες για γιατρούς και κλινικές με έμφαση στη μετατροπή επισκεπτών σε ασθενείς.',
    images: [`${SITE.url}/og/website-dev.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
