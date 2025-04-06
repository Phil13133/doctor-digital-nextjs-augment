import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * SEO Services page metadata
 * This metadata is used for SEO and social sharing for the SEO services page
 */
export const metadata: Metadata = {
  title: 'SEO για Ιατρούς | Βελτιστοποίηση Ιστοσελίδων για Γιατρούς',
  description: 'Αυξήστε την οργανική σας επισκεψιμότητα και αποκτήστε περισσότερους ασθενείς με εξειδικευμένες στρατηγικές SEO για ιατρούς, κλινικές και επαγγελματίες υγείας.',
  keywords: ['SEO για Ιατρούς', 'Βελτιστοποίηση Ιστοσελίδων', 'Ιατρικό SEO', 'Οργανική Κατάταξη Google', 'Κατάταξη Ιατρείου στην Google', 'Medical SEO'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/seo-gia-iatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'SEO για Ιατρούς | Βελτιστοποίηση Ιστοσελίδων στην Google',
    description: 'Εξειδικευμένες υπηρεσίες SEO για ιατρούς που θέλουν να αυξήσουν την προβολή τους στις αναζητήσεις και να προσελκύσουν νέους ασθενείς.',
    url: `${SITE.url}/ypiresies/seo-gia-iatrous`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/seo.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - SEO για Ιατρούς και Κλινικές',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO για Ιατρούς | Doctor Digital',
    description: 'Εξειδικευμένες υπηρεσίες βελτιστοποίησης για μηχανές αναζήτησης για ιατρούς και επαγγελματίες υγείας.',
    images: [`${SITE.url}/og/seo.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
