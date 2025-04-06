import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Blog page metadata
 * This metadata is used for SEO and social sharing for the blog listing page
 */
export const metadata: Metadata = {
  title: 'Ιατρικό Blog | Τελευταίες Εξελίξεις στο Marketing για Γιατρούς',
  description: 'Διαβάστε τις τελευταίες εξελίξεις και συμβουλές ιατρικού μάρκετινγκ, SEO, και στρατηγικές digital marketing για ιατρούς και κλινικές.',
  keywords: ['Ιατρικό Blog', 'Marketing για Γιατρούς', 'SEO για Ιατρούς', 'Ιατρικό Περιεχόμενο', 'Digital Marketing', 'Συμβουλές για Ιατρεία'],
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό Blog | Συμβουλές Marketing για Γιατρούς και Κλινικές',
    description: 'Εξειδικευμένες συμβουλές και στρατηγικές ιατρικού μάρκετινγκ για να αυξήσετε την επισκεψιμότητα και τους ασθενείς σας.',
    url: `${SITE.url}/blog`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/blog.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Ιατρικό Blog για επαγγελματίες υγείας',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ιατρικό Blog | Συμβουλές Marketing για Γιατρούς',
    description: 'Εξειδικευμένες συμβουλές και στρατηγικές ιατρικού μάρκετινγκ για επαγγελματίες υγείας.',
    images: [`${SITE.url}/og/blog.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
