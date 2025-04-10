import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Services page metadata
 * This metadata is used for SEO and social sharing for the main services listing page
 */
export const metadata: Metadata = {
  title: 'Υπηρεσίες Digital Marketing για Ιατρούς | Doctor Digital',
  description: 'Εξειδικευμένες υπηρεσίες digital marketing για ιατρούς και κλινικές. SEO, Google Ads και ιατρικό περιεχόμενο που αυξάνουν τους νέους ασθενείς σας.',
  keywords: ['Υπηρεσίες Ιατρικού Marketing', 'SEO για Γιατρούς', 'Google Ads για Ιατρούς', 'Ιατρικές Ιστοσελίδες', 'Ιατρικό Λογισμικό', 'Copywriting για Γιατρούς'],
  alternates: {
    canonical: `${SITE.url}/ypiresies`,
  },
  openGraph: {
    type: 'website',
    title: 'Υπηρεσίες Digital Marketing για Ιατρούς | Doctor Digital',
    description: 'Εξειδικευμένες υπηρεσίες digital marketing για ιατρούς και κλινικές. SEO, Google Ads και ιατρικό περιεχόμενο που αυξάνουν τους ασθενείς σας.',
    url: `${SITE.url}/ypiresies`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/services.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Υπηρεσίες Ιατρικού Marketing στην Ελλάδα',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Υπηρεσίες Digital Marketing για Ιατρούς | Doctor Digital',
    description: 'Εξειδικευμένες υπηρεσίες digital marketing για ιατρούς και κλινικές. SEO, Google Ads και ιατρικό περιεχόμενο που αυξάνουν τους ασθενείς σας.',
    images: [`${SITE.url}/og/services.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
