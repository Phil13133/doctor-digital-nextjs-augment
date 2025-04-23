import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Copywriting Services page metadata
 * This metadata is used for SEO and social sharing for the copywriting services page
 */
export const metadata: Metadata = {
  title: 'Κειμενογράφος για Site & Ιατρεία | SEO Copywriting | Doctor Digital',
  description: 'Επαγγελματικός κειμενογράφος για ιατρικά site. Εξειδικευμένο SEO copywriting που προσελκύει ασθενείς στο ιατρείο σας και βελτιώνει την κατάταξή σας στη Google.',
  keywords: ['Κειμενογράφος', 'Κειμενογράφος για site', 'Copywriting για Γιατρούς', 'Ιατρικό Copywriting', 'Κειμενογράφος για Ιατρεία', 'Περιεχόμενο για Ιατρικά Site', 'Ιατρικό Blog Writing', 'SEO Copywriting για Ιατρούς'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/copywriting-gia-iatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'Κειμενογράφος για Site & Ιατρεία | SEO Copywriting | Doctor Digital',
    description: 'Επαγγελματικός κειμενογράφος για ιατρικά site. Εξειδικευμένο SEO copywriting που προσελκύει ασθενείς στο ιατρείο σας και βελτιώνει την κατάταξή σας στη Google.',
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
    title: 'Κειμενογράφος για Site & Ιατρεία | SEO Copywriting | Doctor Digital',
    description: 'Επαγγελματικός κειμενογράφος για ιατρικά site. Εξειδικευμένο SEO copywriting που προσελκύει ασθενείς στο ιατρείο σας.',
    images: [`${SITE.url}/og/copywriting.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
