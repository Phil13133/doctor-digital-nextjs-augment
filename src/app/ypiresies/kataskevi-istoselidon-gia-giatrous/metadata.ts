import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Website Development Services page metadata
 * This metadata is used for SEO and social sharing for the website development services page
 */
export const metadata: Metadata = {
  title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Doctor Digital',
  description: 'Σύγχρονες, responsive και SEO-ready ιατρικές ιστοσελίδες, ειδικά σχεδιασμένες για ιατρούς. Αυξήστε τους ασθενείς σας με μια επαγγελματική διαδικτυακή παρουσία.',
  keywords: ['Κατασκευή Ιστοσελίδων για Γιατρούς', 'Ιατρικές Ιστοσελίδες', 'Web Design για Ιατρούς', 'Website για Ιατρεία', 'Ιστοσελίδα για Κλινικές', 'Ιστοσελίδα για Οδοντιάτρους'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/kataskevi-istoselidon-gia-giatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Doctor Digital',
    description: 'Σύγχρονες, responsive και SEO-ready ιατρικές ιστοσελίδες, ειδικά σχεδιασμένες για ιατρούς. Αυξήστε τους ασθενείς σας με μια επαγγελματική παρουσία.',
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
    title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Doctor Digital',
    description: 'Σύγχρονες, responsive και SEO-ready ιατρικές ιστοσελίδες, ειδικά σχεδιασμένες για ιατρούς. Αυξήστε τους ασθενείς σας.',
    images: [`${SITE.url}/og/website-dev.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
