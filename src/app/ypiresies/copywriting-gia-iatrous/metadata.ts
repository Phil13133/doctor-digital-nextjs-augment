import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Copywriting Services page metadata
 * This metadata is used for SEO and social sharing for the copywriting services page
 */
export const metadata: Metadata = {
  title: 'Copywriting για Γιατρούς & Κλινικές | Κειμενογράφος για site',
  description: 'Χρειάζεστε περιεχόμενο που πείθει και κατατάσσεται στην Google; Εξειδικευμένες υπηρεσίες ιατρικού SEO copywriting για ιστοσελίδες, blog, και προφίλ γιατρών.',
  keywords: ['Copywriting για Γιατρούς', 'Ιατρικό Copywriting', 'Κειμενογράφος για Ιατρεία', 'Περιεχόμενο για Ιατρικά Site', 'Ιατρικό Blog Writing', 'SEO Copywriting για Ιατρούς'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/copywriting-gia-iatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'Copywriting για Γιατρούς & Κλινικές | Ιατρικό Περιεχόμενο',
    description: 'Εξειδικευμένες υπηρεσίες ιατρικού copywriting από επαγγελματίες με γνώση του ιατρικού κλάδου. Περιεχόμενο που πείθει και κατατάσσεται στην Google.',
    url: `${SITE.url}/ypiresies/copywriting-gia-iatrous`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/copywriting.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Copywriting για Γιατρούς και Κλινικές',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copywriting για Γιατρούς | Doctor Digital',
    description: 'Εξειδικευμένες υπηρεσίες ιατρικού copywriting από επαγγελματίες με γνώση του ιατρικού κλάδου.',
    images: [`${SITE.url}/og/copywriting.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
