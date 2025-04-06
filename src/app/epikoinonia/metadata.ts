import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Contact page metadata
 * This metadata is used for SEO and social sharing for the contact page
 */
export const metadata: Metadata = {
  title: 'Επικοινωνία | Doctor Digital | Ιατρικό Marketing',
  description: 'Επικοινωνήστε με την ομάδα του Doctor Digital για εξειδικευμένες λύσεις ιατρικού μάρκετινγκ. Ζητήστε δωρεάν αξιολόγηση για το ιατρείο ή την κλινική σας.',
  keywords: ['Επικοινωνία', 'Doctor Digital', 'Ιατρικό Marketing', 'Ζητήστε Προσφορά', 'Ελλάδα', 'Αθήνα', 'Επαγγελματίες Υγείας'],
  alternates: {
    canonical: `${SITE.url}/epikoinonia`,
  },
  openGraph: {
    type: 'website',
    title: 'Επικοινωνία | Doctor Digital | Ιατρικό Marketing',
    description: 'Επικοινωνήστε με την ομάδα του Doctor Digital για εξειδικευμένες λύσεις ιατρικού μάρκετινγκ και ζητήστε δωρεάν αξιολόγηση.',
    url: `${SITE.url}/epikoinonia`,
    siteName: SITE.name,
    locale: SITE.locale,
    images: [
      {
        url: `${SITE.url}/og/contact.jpg`,
        width: 1200,
        height: 630,
        alt: 'Doctor Digital - Επικοινωνία για υπηρεσίες ιατρικού μάρκετινγκ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Επικοινωνία | Doctor Digital | Ιατρικό Marketing',
    description: 'Επικοινωνήστε με την ομάδα του Doctor Digital για εξειδικευμένες λύσεις ιατρικού μάρκετινγκ.',
    images: [`${SITE.url}/og/contact.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
