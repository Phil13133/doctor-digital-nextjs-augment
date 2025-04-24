import { SITE } from '@/constants/site';
import { Metadata } from 'next';

/**
 * Website Development Services page metadata
 * This metadata is used for SEO and social sharing for the website development services page
 */
export const metadata: Metadata = {
  title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Δημιουργία Site για Γιατρούς | Doctor Digital',
  description: 'Εξειδικευμένη κατασκευή ιατρικών ιστοσελίδων & σχεδιασμός site για γιατρούς. Σύγχρονα, responsive ιατρικά websites που αυξάνουν τους ασθενείς και την αξιοπιστία σας.',
  keywords: ['Κατασκευή Ιατρικών Ιστοσελίδων', 'Ιστοσελίδες για Ιατρούς', 'Δημιουργία Site για Γιατρούς', 'Σχεδιασμός Ιατρικών Website', 'Ιατρικό Web Design', 'Κόστος Ιατρικής Ιστοσελίδας', 'Ιατρικό Digital Marketing'],
  alternates: {
    canonical: `${SITE.url}/ypiresies/kataskevi-istoselidon-gia-giatrous`,
  },
  openGraph: {
    type: 'website',
    title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Δημιουργία Site για Γιατρούς | Doctor Digital',
    description: 'Εξειδικευμένη κατασκευή ιατρικών ιστοσελίδων & σχεδιασμός site για γιατρούς. Σύγχρονα, responsive ιατρικά websites που αυξάνουν τους ασθενείς και την αξιοπιστία σας.',
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
    title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Δημιουργία Site για Γιατρούς | Doctor Digital',
    description: 'Εξειδικευμένη κατασκευή ιατρικών ιστοσελίδων & σχεδιασμός site για γιατρούς. Σύγχρονα, responsive ιατρικά websites που αυξάνουν τους ασθενείς.',
    images: [`${SITE.url}/og/website-dev.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default metadata;
