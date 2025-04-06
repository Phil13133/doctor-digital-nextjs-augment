import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import { EmailIcon, PhoneIcon, LocationIcon } from '@/components/icons';
import { SITE } from '@/constants/site';
import NavBar from '@/components/navigation/NavBar';

// Import from metadata.ts for centralized SEO management
import metadata from './metadata';

const inter = Inter({ subsets: ['latin', 'greek'], display: 'swap' });

// Extended metadata with PWA support
export const extendedMetadata: Metadata = {
  ...metadata,
  generator: 'Next.js',
  applicationName: SITE.name,
  referrer: 'origin-when-cross-origin',
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#53C2A0', // Brand green
  appleWebApp: {
    title: SITE.name,
    statusBarStyle: 'black-translucent',
  },
};

// Use the extended metadata
export { extendedMetadata as metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="el" className="scroll-smooth">
      <head>
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://images.ctfassets.net" />
        <link rel="dns-prefetch" href="https://images.ctfassets.net" />

        {/* Favicon and PWA icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Schema.org markup for better SEO */}
        <OrganizationSchema
          name={SITE.name}
          url={SITE.url}
          logo={`${SITE.url}${SITE.logoPath}`}
          description={SITE.description}
          sameAs={[
            SITE.socialMedia.facebook,
            SITE.socialMedia.instagram,
            SITE.socialMedia.linkedin,
            SITE.socialMedia.youtube,
          ]}
          address={{
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            postalCode: SITE.address.postalCode,
            addressCountry: 'GR', // Assuming GR is correct, SITE.address.country is 'Ελλάδα'
          }}
          contactPoint={{
            telephone: SITE.contactPhone,
            contactType: 'customer service', // Or define in SITE if needed
            email: SITE.contactEmail,
            availableLanguage: ['Greek', 'English'], // Or define in SITE if needed
          }}
        />
      </head>
      <body className={`${inter.className} bg-background text-text antialiased`}>
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <main>{children}</main>

        {/* Modern Footer */}
        <footer className="bg-footer text-white pt-16 pb-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Company Info */}
              <div className="col-span-1 lg:col-span-1">
                <div className="mb-6">
                  <Image
                    src="/images/Doctordigital PNG-light-logo.png"
                    alt="Doctor Digital - Ιατρικό Μάρκετινγκ"
                    width={180}
                    height={50}
                  />
                </div>
                <p className="text-gray-300 mb-6 pr-4">
                  Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ για γιατρούς και κλινικές στην Ελλάδα. Αυξήστε την online παρουσία του ιατρείου σας σήμερα.
                </p>
                {/* Removed social media icons div */}
              </div>

              {/* Quick Links */}
              <div>
                <div className="text-lg font-bold mb-6 text-white relative">
                  <strong className="relative z-10">Υπηρεσίες</strong>
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></span>
                </div>
                <ul className="space-y-3">
                  <li><Link href="/ypiresies/seo-gia-iatrous" className="text-gray-300 hover:text-brand-200 transition-colors">SEO για Ιατρούς</Link></li>
                  <li><Link href="/ypiresies/diafimisi-sth-google" className="text-gray-300 hover:text-brand-200 transition-colors">Google Ads για Ιατρούς</Link></li>
                  <li><Link href="/ypiresies/copywriting-gia-iatrous" className="text-gray-300 hover:text-brand-200 transition-colors">Ιατρικό Περιεχόμενο</Link></li>
                  <li><Link href="/ypiresies/kataskevi-istoselidon-gia-giatrous" className="text-gray-300 hover:text-brand-200 transition-colors">Ιατρικές Ιστοσελίδες</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <div className="text-lg font-bold mb-6 text-white relative">
                  <strong className="relative z-10">Συνδέσεις</strong>
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></span>
                </div>
                <ul className="space-y-3">
                  <li><Link href="/blog" className="text-gray-300 hover:text-brand-200 transition-colors">Blog</Link></li>
                  <li><Link href="/case-studies" className="text-gray-300 hover:text-brand-200 transition-colors">Case Studies</Link></li>
                  <li><Link href="/epikoinonia" className="text-gray-300 hover:text-brand-200 transition-colors">Επικοινωνία</Link></li>
                  <li><Link href="/oroi-xrisis" className="text-gray-300 hover:text-brand-200 transition-colors">Όροι Χρήσης</Link></li>
                  <li><Link href="/politiki-aporritou" className="text-gray-300 hover:text-brand-200 transition-colors">Πολιτική Απορρήτου</Link></li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <div className="text-lg font-bold mb-6 text-white relative">
                  <strong className="relative z-10">Επικοινωνία</strong>
                  <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-white"></span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <EmailIcon className="text-white mr-3 mt-1 flex-shrink-0" size={18} />
                    <a href={`mailto:${SITE.contactEmail}`} className="text-gray-300 hover:text-brand-200 transition-colors">{SITE.contactEmail}</a>
                  </li>
                  <li className="flex items-start">
                    <PhoneIcon className="text-white mr-3 mt-1 flex-shrink-0" size={18} />
                    <a href={`tel:${SITE.contactPhone.replace(/\s+/g, '')}`} className="text-gray-300 hover:text-brand-200 transition-colors">{SITE.contactPhone}</a>
                  </li>
                  <li className="flex items-start">
                    <LocationIcon className="text-white mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright Bar */}
            <div className="pt-8 border-t border-gray-800 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} Doctor Digital. Με επιφύλαξη παντός δικαιώματος.</p>
              <div className="mt-4 md:mt-0 flex space-x-6">
                <a href="/oroi-xrisis" className="hover:text-brand-200 transition-colors">Όροι Χρήσης</a>
                <a href="/politiki-aporritou" className="hover:text-brand-200 transition-colors">Πολιτική Απορρήτου</a>
                <a href="/cookies" className="hover:text-brand-200 transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
