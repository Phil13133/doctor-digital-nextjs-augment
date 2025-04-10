import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Blog page metadata
 * This metadata is used for SEO and social sharing for the blog listing page
 */
export const metadata: Metadata = {
  title: 'Ιατρικό Marketing Blog | Doctor Digital',
  description: 'Εξειδικευμένα άρθρα, συμβουλές και οδηγοί για το ιατρικό digital marketing',
  keywords: ['Ιατρικό Blog', 'Marketing για Γιατρούς', 'SEO για Ιατρούς', 'Ιατρικό Περιεχόμενο', 'Digital Marketing', 'Συμβουλές για Ιατρεία'],
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
  openGraph: {
    type: 'website',
    title: 'Ιατρικό Marketing Blog | Doctor Digital',
    description: 'Εξειδικευμένα άρθρα, συμβουλές και οδηγοί για το ιατρικό digital marketing',
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
    title: 'Ιατρικό Marketing Blog | Doctor Digital',
    description: 'Εξειδικευμένα άρθρα, συμβουλές και οδηγοί για το ιατρικό digital marketing',
    images: [`${SITE.url}/og/blog.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
