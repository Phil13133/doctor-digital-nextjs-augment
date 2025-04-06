import Link from 'next/link';
import { Metadata } from 'next';
import { SITE } from '@/constants/site';

/**
 * Custom 404 page metadata
 */
export const metadata: Metadata = {
  title: '404 - Η σελίδα δεν βρέθηκε | Doctor Digital',
  description: 'Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: '404 - Η σελίδα δεν βρέθηκε | Doctor Digital',
    description: 'Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.',
    url: `${SITE.url}/404`,
    siteName: SITE.name,
    locale: SITE.locale,
    type: 'website',
  },
};

/**
 * Custom 404 page component
 * Uses semantic HTML and proper accessibility features
 */
export default function NotFound() {
  return (
    <main 
      className="flex flex-col items-center justify-center min-h-[70vh] text-center p-8" 
      id="main-content" 
      aria-labelledby="not-found-title"
    >
      <h1 
        id="not-found-title" 
        className="text-4xl md:text-5xl font-bold mb-6 text-text-dark"
      >
        404 - Η Σελίδα Δεν Βρέθηκε
      </h1>
      
      <p className="text-lg text-text-light mb-8 max-w-lg">
        Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί. 
        Παρακαλούμε επιστρέψτε στην αρχική σελίδα.
      </p>
      
      <Link 
        href="/" 
        className="btn-primary px-8 py-3 inline-flex items-center"
        aria-label="Επιστροφή στην αρχική σελίδα"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
        Επιστροφή στην Αρχική
      </Link>
      
      <div className="mt-12 max-w-lg">
        <h2 className="text-xl font-bold mb-4 text-text-dark">
          Δημοφιλείς Σελίδες
        </h2>
        <ul className="space-y-2">
          <li>
            <Link 
              href="/ypiresies" 
              className="text-brand-200 hover:text-brand-300 underline"
            >
              Υπηρεσίες
            </Link>
          </li>
          <li>
            <Link 
              href="/blog" 
              className="text-brand-200 hover:text-brand-300 underline"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              href="/epikoinonia" 
              className="text-brand-200 hover:text-brand-300 underline"
            >
              Επικοινωνία
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
