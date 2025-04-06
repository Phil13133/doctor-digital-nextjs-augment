import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import OrganizationSchema from '@/components/schema/OrganizationSchema';
import { EmailIcon, PhoneIcon, LocationIcon } from '@/components/icons';
import { SITE } from '@/constants/site';

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
        {/* Favicon and PWA icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        
        {/* Schema.org markup for better SEO */}
        <OrganizationSchema
          name="Doctor Digital"
          url="https://doctordigital.gr"
          logo="https://doctordigital.gr/logo.png"
          description="Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ για γιατρούς και κλινικές στην Ελλάδα."
          sameAs={[
            'https://facebook.com/doctordigital',
            'https://instagram.com/doctordigital',
            'https://twitter.com/doctordigital',
            'https://linkedin.com/company/doctordigital', // Consider using SITE.socialMedia.linkedin etc. here too
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
        {/* Modern White Header */}
        <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center text-text-dark">
                <Image 
                  src="/images/Doctordigital png-logo.png"
                  alt="Doctor Digital - Ιατρικό Μάρκετινγκ"
                  width={220}
                  height={60}
                  priority
                />
              </Link>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6 items-center">
                  <li><Link href="/" className="font-medium text-black hover:text-gray-500 transition-colors">Αρχική</Link></li>
                  <li><Link href="/ypiresies" className="font-medium text-black hover:text-gray-500 transition-colors">Υπηρεσίες</Link></li>
                  <li><Link href="/case-studies" className="font-medium text-black hover:text-gray-500 transition-colors">Case Studies</Link></li>
                  <li><Link href="/blog" className="font-medium text-black hover:text-gray-500 transition-colors">Blog</Link></li>
                  <li><Link href="/epikoinonia" className="btn-primary btn-sm">Επικοινωνία</Link></li>
                </ul>
              </nav>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden text-text-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </header>
        
        {/* Mobile Menu (hidden by default) */}
        <div className="hidden bg-white p-4 md:hidden">
          <nav>
            <ul className="space-y-4">
              <li><Link href="/" className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Αρχική</Link></li>
              <li><Link href="/ypiresies" className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Υπηρεσίες</Link></li>
              <li><Link href="/case-studies" className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="block py-2 font-medium text-black hover:text-gray-500 transition-colors">Blog</Link></li>
              <li><Link href="/epikoinonia" className="btn-primary w-full mt-4">Επικοινωνία</Link></li>
            </ul>
          </nav>
        </div>
        
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
                    <span className="text-gray-300">{SITE.contactEmail}</span>
                  </li>
                  <li className="flex items-start">
                    <PhoneIcon className="text-white mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{SITE.contactPhone}</span>
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
