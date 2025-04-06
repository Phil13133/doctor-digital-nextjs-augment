import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRightIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Υπηρεσίες Digital Marketing για Ιατρούς | Doctor Digital',
  description: 'Εξειδικευμένες υπηρεσίες digital marketing για ιατρούς και κλινικές στην Ελλάδα. SEO, Google Ads, Ιατρικό Περιεχόμενο και Εφαρμογές που φέρνουν νέους ασθενείς.',
  keywords: 'Ιατρικό Marketing, SEO για Ιατρούς, Google Ads για Ιατρεία, Ιατρικό Περιεχόμενο, Web Apps για Γιατρούς, Digital Marketing Υγείας',
};

// Services data with paths to actual service pages
const services = [
  {
    id: 'seo-gia-iatrous',
    title: 'SEO για Ιατρικές Ιστοσελίδες',
    shortDescription: 'Ανεβάστε το ιατρείο σας στα οργανικά αποτελέσματα με ασφαλείς και ηθικές πρακτικές βελτιστοποίησης.',
    path: '/ypiresies/seo-gia-iatrous',
    iconSrc: '/images/icons/SEO για ιατρικές ιστοσελίδες.svg',
  },
  {
    id: 'diafimisi-sth-google',
    title: 'Google Ads για Ιατρούς',
    shortDescription: 'Εμφανιστείτε στην κορυφή της Google με στοχευμένες διαφημίσεις όταν οι ασθενείς αναζητούν τις υπηρεσίες σας.',
    path: '/ypiresies/diafimisi-sth-google',
    iconSrc: '/images/icons/διαφημιση-google-ads.svg',
  },
  {
    id: 'copywriting-gia-iatrous',
    title: 'Ιατρικό Περιεχόμενο & Blogging',
    shortDescription: 'Άρθρα, ενημερωτικά κείμενα και σελίδες υπηρεσιών γραμμένα με επιστημονική εγκυρότητα από εξειδικευμένους ιατρικούς συντάκτες.',
    path: '/ypiresies/copywriting-gia-iatrous',
    iconSrc: '/images/icons/περιεχόμενο για ιστοσελίδες και blogs για γιατρούς.svg',
  },
  {
    id: 'kataskevi-istoselidon-gia-giatrous',
    title: 'Κατασκευή Ιστοσελίδων για Ιατρούς',
    shortDescription: 'Σύγχρονα, responsive και SEO-ready sites ειδικά σχεδιασμένα για τον ιατρικό κλάδο.',
    path: '/ypiresies/kataskevi-istoselidon-gia-giatrous',
    iconSrc: '/images/icons/Κατασκευή ιστοσελίδων για ιατρούς.svg',
  },
  {
    id: 'iatriko-logismiko',
    title: 'Ιατρικό Λογισμικό & Web Apps',
    shortDescription: 'Εξειδικευμένες εφαρμογές για διαχείριση ραντεβού, ιατρικά αρχεία και αυτοματοποίηση διαδικασιών του ιατρείου σας.',
    path: '/ypiresies/iatriko-logismiko',
    iconSrc: '/images/icons/software-development.svg',
  },
];

// Feature card component for the "Why Choose Us" section
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
    <div className="mb-4 text-brand-200">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-text-light text-sm">{description}</p>
  </div>
);

// Results card component
const ResultCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
    <p className="text-3xl font-bold text-brand-200 mb-2">{number}</p>
    <p className="text-text-dark">{text}</p>
  </div>
);

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-background py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-heading">Εξειδικευμένες Υπηρεσίες Ιατρικού Marketing</h1>
            <p className="text-xl mb-8 text-text-dark max-w-3xl mx-auto">
              Στοχευμένες λύσεις digital marketing που φέρνουν περισσότερους ασθενείς στο ιατρείο σας, με απόλυτο σεβασμό στους κανόνες δεοντολογίας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/epikoinonia" className="btn-primary py-3 px-8 rounded-md">
                Δωρεάν Αξιολόγηση Ιστοσελίδας
              </Link>
              <a href="#services" className="btn-outline py-3 px-8 rounded-md">
                Δείτε τις Υπηρεσίες
              </a>
            </div>
          </div>
        </div>

        {/* Abstract background shape */}
        <div className="absolute right-0 top-32 w-64 h-64 bg-brand-100 rounded-full opacity-10 -z-10 blur-3xl"></div>
        <div className="absolute left-20 bottom-20 w-80 h-80 bg-brand-200 rounded-full opacity-5 -z-10 blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Οι Υπηρεσίες μας</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Εξειδικευμένες ψηφιακές υπηρεσίες σχεδιασμένες αποκλειστικά για τις ανάγκες ιατρών, κλινικών και ιατρικών κέντρων.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="mb-4 w-16 h-16">
                  <Image
                    src={service.iconSrc}
                    alt={service.title}
                    width={64}
                    height={64}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-heading">{service.title}</h3>
                <p className="text-text-light mb-6 flex-grow">{service.shortDescription}</p>
                <Link href={service.path} className="text-brand-200 hover:text-brand-300 font-medium inline-flex items-center mt-auto">
                  Μάθετε περισσότερα
                  <ArrowRightIcon className="ml-2" size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Γιατί να Επιλέξετε τη Doctor Digital</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Εξειδικευόμαστε αποκλειστικά στον ιατρικό κλάδο, προσφέροντας στοχευμένες λύσεις για τις μοναδικές ανάγκες του ιατρείου σας.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Εξειδίκευση στον Ιατρικό Τομέα"
              description="Αποκλειστική εστίαση σε ιατρούς και κλινικές, με βαθιά κατανόηση των αναγκών και των περιορισμών του κλάδου."
            />
            <FeatureCard
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Μετρήσιμα Αποτελέσματα"
              description="Αναλυτικές αναφορές και πλήρης διαφάνεια που επιτρέπει να βλέπετε την απόδοση της επένδυσής σας."
            />
            <FeatureCard
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              }
              title="Νομική Συμμόρφωση"
              description="Πλήρης συμμόρφωση με το νομικό πλαίσιο προβολής ιατρών στην Ελλάδα και τις οδηγίες του ιατρικού συλλόγου."
            />
          </div>
        </div>
      </section>

      {/* Results & Numbers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Αποτελέσματα που Μιλούν από Μόνα τους</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Μετρήσιμα, επαληθεύσιμα αποτελέσματα για γιατρούς και κλινικές σε όλη την Ελλάδα.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ResultCard
              number="+200%"
              text="Αύξηση επισκέψεων σε ιατρικά site μέσω SEO"
            />
            <ResultCard
              number="58%"
              text="Μείωση κόστους απόκτησης ασθενών μέσω Google Ads"
            />
            <ResultCard
              number="#1"
              text="Θέση στην Google για ανταγωνιστικά ιατρικά keywords"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-br from-brand-100/20 to-background/80">
        <div className="container mx-auto">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-4xl mx-auto border border-brand-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-50 rounded-full opacity-50"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <p className="text-2xl font-bold mb-4 text-text-heading">Ενισχύστε την Online Παρουσία του Ιατρείου σας</p>
                <p className="text-text-light mb-8 max-w-2xl mx-auto">
                  Εξειδικευόμαστε στην προώθηση ιατρικών υπηρεσιών και την προσέλκυση των κατάλληλων ασθενών.
                  Αφήστε μας να δημιουργήσουμε μια στρατηγική ειδικά για εσάς.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/epikoinonia" className="btn-primary py-3 px-8 rounded-md">
                    Δωρεάν Αξιολόγηση
                  </Link>
                  <Link href="/epikoinonia" className="btn-outline py-3 px-8 rounded-md">
                    Περισσότερα για τις Υπηρεσίες μας
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
