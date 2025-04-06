import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Services page metadata
 * This metadata is used for SEO and social sharing for the main services listing page
 */
export const metadata: Metadata = {
  title: 'Υπηρεσίες Ιατρικού Marketing | SEO, Google Ads, Web Development',
  description: 'Εξειδικευμένες υπηρεσίες μάρκετινγκ για γιατρούς και κλινικές που θέλουν να αυξήσουν την online προβολή τους, να προσελκύσουν νέους ασθενείς και να αναπτύξουν το ιατρείο τους.',
  keywords: ['Υπηρεσίες Ιατρικού Marketing', 'SEO για Γιατρούς', 'Google Ads για Ιατρούς', 'Ιατρικές Ιστοσελίδες', 'Ιατρικό Λογισμικό', 'Copywriting για Γιατρούς'],
  alternates: {
    canonical: `${SITE.url}/ypiresies`,
  },
  openGraph: {
    type: 'website',
    title: 'Υπηρεσίες Ιατρικού Marketing | SEO, Google Ads, Web Development',
    description: 'Ολοκληρωμένες υπηρεσίες ψηφιακού μάρκετινγκ αποκλειστικά για ιατρούς, κλινικές και επαγγελματίες υγείας.',
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
    title: 'Υπηρεσίες Ιατρικού Marketing | Doctor Digital',
    description: 'Ολοκληρωμένες υπηρεσίες ψηφιακού μάρκετινγκ αποκλειστικά για ιατρούς και επαγγελματίες υγείας.',
    images: [`${SITE.url}/og/services.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
