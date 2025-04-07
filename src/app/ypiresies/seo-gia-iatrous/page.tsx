import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSchema from '@/components/schema/FAQSchema';
import FAQToggleItem from '@/components/FAQToggleItem';
import ServiceSchema from '@/components/schema/ServiceSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import RelatedServices from '@/components/services/RelatedServices';
import RelatedBlogPosts from '@/components/blog/RelatedBlogPosts';

export const metadata: Metadata = {
  title: 'SEO για Ιατρούς & Ιατρικές Ιστοσελίδες',
  description: 'SEO για ιατρικές ιστοσελίδες που φέρνει αποτελέσματα. Αποκτήστε νέους ασθενείς με εξειδικευμένες υπηρεσίες SEO για γιατρούς και επαγγελματίες υγείας.',
  keywords: ['SEO για Ιατρούς', 'Ιατρικό SEO', 'Βελτιστοποίηση Google', 'SEO Κλινικής', 'Οργανική Προβολή Ιατρείου', 'Ιατρικό Marketing'],
};

// FAQ data
const faqQuestions = [
  {
    question: "Τι είναι το SEO;",
    answer: "Είναι η βελτιστοποίηση της ιστοσελίδας σας ώστε να εμφανίζεται οργανικά στα αποτελέσματα αναζήτησης. Το SEO περιλαμβάνει τεχνικές βελτιστοποίησης, δημιουργία ποιοτικού περιεχομένου και απόκτηση συνδέσμων από αξιόπιστες ιστοσελίδες, με στόχο τη βελτίωση της κατάταξής σας στις μηχανές αναζήτησης."
  },
  {
    question: "Πόσο χρόνο χρειάζεται για να φανεί αποτέλεσμα;",
    answer: "Τα πρώτα σημάδια εμφανίζονται εντός 2–4 μηνών, ενώ οι βέλτιστες αποδόσεις έρχονται στους 6–12 μήνες. Το SEO είναι μια μακροπρόθεσμη στρατηγική που απαιτεί υπομονή και συνέπεια, αλλά προσφέρει διαρκή αξία και αποτελέσματα που βελτιώνονται με την πάροδο του χρόνου."
  },
  {
    question: "Πρέπει να συνδυάσω SEO με Google Ads;",
    answer: "Ανάλογα με τον στόχο σας. Για άμεση προσέλκυση ασθενών, τα Google Ads είναι αποτελεσματικά. Για σταθερή και μακροπρόθεσμη ροή επισκεπτών, το SEO είναι απαραίτητο. Ο συνδυασμός των δύο είναι ιδανικός για πλήρη κάλυψη και μεγιστοποίηση της online προβολής σας. Δείτε περισσότερα για τις διαφημίσεις στη Google στη σελίδα μας για τις υπηρεσίες Google Ads για ιατρούς."
  },
  {
    question: "Τι διαφορά έχει το SEO για ιατρούς;",
    answer: "Το ιατρικό SEO απαιτεί ειδική στρατηγική που σέβεται το νομικό πλαίσιο προβολής ιατρικών υπηρεσιών και την ευαισθησία του τομέα της υγείας. Περιλαμβάνει εξειδικευμένη έρευνα λέξεων-κλειδιών για ιατρικούς όρους, τοπική βελτιστοποίηση για ιατρεία, και περιεχόμενο που πρέπει να είναι επιστημονικά τεκμηριωμένο και σύμφωνο με τους κανόνες του ιατρικού συλλόγου."
  },
  {
    question: "Είναι κατάλληλο το SEO για ιδιώτες γιατρούς;",
    answer: "Ναι. Ιδιαίτερα αν δραστηριοποιείστε σε τοπικό επίπεδο, το τοπικό SEO μπορεί να βοηθήσει σημαντικά στην προσέλκυση ασθενών από την περιοχή σας. Για ιδιώτες γιατρούς, το SEO είναι ένας αποτελεσματικός τρόπος να ανταγωνιστούν μεγαλύτερες κλινικές και ιατρικά κέντρα με χαμηλότερο κόστος από τις πληρωμένες διαφημίσεις."
  }
];

export default function SeoForMedicalPages() {
  return (
    <>
      {/* Service Schema */}
      <ServiceSchema
        name="SEO για Ιατρούς & Ιατρικές Ιστοσελίδες"
        url="https://doctordigital.gr/ypiresies/seo-gia-iatrous"
        description="Αναδείξτε το ιατρείο ή την κλινική σας στα οργανικά αποτελέσματα της Google με στοχευμένο SEO ειδικά για τον ιατρικό κλάδο."
        provider={{
          name: "Doctor Digital",
          url: "https://doctordigital.gr"
        }}
      />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Αρχική", url: "https://doctordigital.gr/" },
          { name: "Υπηρεσίες", url: "https://doctordigital.gr/ypiresies" },
          { name: "SEO για Ιατρούς", url: "https://doctordigital.gr/ypiresies/seo-gia-iatrous" }
        ]}
      />
      <FAQSchema questions={faqQuestions} />

      {/* Breadcrumbs Navigation */}
      <div className="container mx-auto pt-6 pb-2 z-10 relative">
        <Breadcrumbs />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-50 to-background overflow-hidden py-16 md:py-24">
        {/* Decorative elements */}
        <div className="absolute right-0 top-32 w-64 h-64 bg-brand-100 rounded-full opacity-10 -z-10 blur-3xl"></div>
        <div className="absolute left-20 bottom-20 w-80 h-80 bg-brand-200 rounded-full opacity-5 -z-10 blur-3xl"></div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
                SEO για Ιατρούς & Ιατρικές Ιστοσελίδες
              </h1>
              <h2 className="text-xl md:text-2xl text-text-light font-medium mb-5">
                Επαγγελματικές Υπηρεσίες SEO για Γιατρούς, Κλινικές & Διαγνωστικά Κέντρα
              </h2>
              <p className="text-xl text-text-light mb-8 max-w-xl">
                Αναδείξτε το ιατρείο ή την κλινική σας στα οργανικά αποτελέσματα της Google με στοχευμένη βελτιστοποίηση ιστοσελίδας (SEO) ειδικά για τον ιατρικό κλάδο.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center">
                  Ζητήστε Δωρεάν SEO Ανάλυση
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center">
                  Κλείστε Ραντεβού
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/SEO για Ιατρικές Ιστοσελίδες.webp"
                  alt="SEO για Ιατρικές Ιστοσελίδες"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-brand-200 px-4 py-3 rounded-md shadow-lg hidden md:block">
                <p className="text-white text-sm font-semibold">
                  Αυξήστε Την Οργανική Προβολή
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Τι είναι το Ιατρικό SEO;</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <div className="bg-gray-50 p-8 rounded-lg mb-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Το SEO (Search Engine Optimization) είναι η διαδικασία βελτιστοποίησης μιας ιστοσελίδας ώστε να εμφανίζεται στις πρώτες θέσεις των οργανικών αποτελεσμάτων της Google. Οι υπηρεσίες SEO που προσφέρουμε είναι σχεδιασμένες να φέρνουν στο ιατρείο σας σταθερή ροή ασθενών μέσα από οργανικές αναζητήσεις.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Για γιατρούς, κλινικές, διαγνωστικά κέντρα και θεραπευτήρια, αυτό σημαίνει:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-200 mr-2 mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Περισσότεροι ασθενείς που σας βρίσκουν όταν αναζητούν υπηρεσίες υγείας</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-200 mr-2 mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Αυξημένη αξιοπιστία & εμπιστοσύνη μέσω της παρουσίας σας στην Google</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-brand-200 mr-2 mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Πραγματικά αποτελέσματα χωρίς να πληρώνετε διαφημίσεις ανά κλικ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How SEO helps your medical practice */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Πώς το SEO βοηθάει το ιατρείο σας να αποκτήσει νέους ασθενείς</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Στοχευμένη προσέλκυση ασθενών</h3>
                    <p className="text-gray-600">
                      Το SEO φέρνει στο ιατρείο σας ασθενείς που ήδη αναζητούν τις υπηρεσίες σας. Αυτό σημαίνει υψηλότερο ποσοστό μετατροπής σε ραντεβού και καλύτερη απόδοση της επένδυσής σας.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ενίσχυση αξιοπιστίας & κύρους</h3>
                    <p className="text-gray-600">
                      Η εμφάνιση στις πρώτες θέσεις της Google ενισχύει την αξιοπιστία σας στα μάτια των ασθενών. Οι περισσότεροι ασθενείς εμπιστεύονται τα οργανικά αποτελέσματα περισσότερο από τις διαφημίσεις.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Μακροπρόθεσμη απόδοση επένδυσης</h3>
                    <p className="text-gray-600">
                      Το SEO αποτελεί μια μακροπρόθεσμη επένδυση με συνεχή απόδοση. Αντίθετα με τις διαφημίσεις που σταματούν μόλις σταματήσετε να πληρώνετε, το SEO συνεχίζει να φέρνει ασθενείς.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services section with detailed breakdown */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Η στρατηγική μας για το Ιατρικό SEO</h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-center">
            Παρέχουμε εξειδικευμένες υπηρεσίες SEO για επαγγελματίες υγείας που περιλαμβάνουν SEO audit, έρευνα λέξεων-κλειδιών,
            on-page και off-page βελτιστοποίηση, τοπικό SEO, δημιουργία περιεχομένου, και τεχνικό SEO.
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="SEO Audit"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">SEO Audit</h3>
                  <p className="text-gray-600">Τεχνικός και on-page έλεγχος της ιστοσελίδας σας για τον εντοπισμό προβλημάτων που επηρεάζουν την κατάταξή σας στη Google.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="Έρευνα λέξεων-κλειδιών"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Έρευνα λέξεων-κλειδιών</h3>
                  <p className="text-gray-600">Εντοπισμός των όρων και φράσεων που χρησιμοποιούν οι ασθενείς για να βρουν ιατρικές υπηρεσίες όπως τις δικές σας.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="Βελτιστοποίηση περιεχομένου"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Βελτιστοποίηση περιεχομένου & meta δεδομένων</h3>
                  <p className="text-gray-600">Βελτιστοποίηση τίτλων, περιγραφών, επικεφαλίδων και περιεχομένου με στοχευμένες λέξεις-κλειδιά για τον ιατρικό τομέα.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="Τοπικό SEO"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Τοπικό SEO για Google Maps</h3>
                  <p className="text-gray-600">Βελτιστοποίηση του προφίλ σας στο Google Business Profile ώστε να εμφανίζεστε στους τοπικούς χάρτες και αναζητήσεις. Συνδυάζεται άριστα με <Link href="/ypiresies/diafimisi-sth-google" className="text-brand-200 hover:underline">διαφημίσεις Google Ads</Link> για μέγιστη ορατότητα.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="Δημιουργία ιατρικού περιεχομένου"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Δημιουργία ιατρικού περιεχομένου</h3>
                  <p className="text-gray-600">Συγγραφή άρθρων, σελίδων υπηρεσιών και blog posts με επιστημονικά τεκμηριωμένο ιατρικό περιεχόμενο που προσελκύει επισκέπτες. Η <Link href="/ypiresies/copywriting-gia-iatrous" className="text-brand-200 hover:underline">υπηρεσία copywriting για ιατρούς</Link> μας εξασφαλίζει περιεχόμενο υψηλής ποιότητας.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="Backlink building"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Backlink building</h3>
                  <p className="text-gray-600">Απόκτηση συνδέσμων από αξιόπιστες ιστοσελίδες του ιατρικού χώρου για την ενίσχυση του κύρους της ιστοσελίδας σας.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start mb-4">
                <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
                  <Image
                    src="/images/icons/Γιατί να Επιλέξετε τη Doctor Digital-checkmark.svg"
                    alt="Ανάλυση ανταγωνισμού"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Ανάλυση ανταγωνισμού & μηνιαίο reporting</h3>
                  <p className="text-gray-600">Παρακολούθηση των επιδόσεων των ανταγωνιστών σας και τακτικές αναφορές προόδου με μετρήσιμα αποτελέσματα για το ιατρείο σας.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/epikoinonia" className="btn-primary inline-block">
              Επικοινωνήστε για Εξατομικευμένο Πλάνο
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <RelatedServices currentService="/ypiresies/seo-gia-iatrous" />
        </div>
      </section>

      {/* Case Studies / Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Αποτελέσματα SEO για ιατρούς</h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto mb-10 text-center">
            Οι στρατηγικές SEO της Doctor Digital έχουν φέρει μετρήσιμα και σταθερά αποτελέσματα σε ιατρούς και κλινικές σε όλη την Ελλάδα. Οι πελάτες μας επωφελούνται επίσης από τις <Link href="/ypiresies/kataskevi-istoselidon-gia-giatrous" className="text-brand-200 hover:underline">υπηρεσίες κατασκευής ιστοσελίδων</Link> μας:
          </p>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Case Study 1 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4">
                  <Image
                    src="/images/icons/chart.svg"
                    alt="Αύξηση επισκεψιμότητας"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2 text-center">+240% αύξηση οργανικής επισκεψιμότητας</h3>
                <p className="text-center">
                  Ιατρική ιστοσελίδα ανέβηκε από 4.300 σε 14.600 επισκέψεις/μήνα μέσα σε 6 μήνες, χωρίς καμία διαφήμιση.
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4">
                  <Image
                    src="/images/icons/gold-medal.svg"
                    alt="Πρώτη θέση"
                    width={60}
                    height={60}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2 text-center">#1 θέση στην Google</h3>
                <p className="text-center">
                  Οδοντίατρος σε Αθήνα κατέκτησε την 1η θέση για λέξεις όπως "αισθητική οδοντιατρική" & "λευκανση δοντιών".
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4">
                  <Image
                    src="/images/icons/appointment.svg"
                    alt="Αύξηση ραντεβού"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2 text-center">Αύξηση ραντεβού μέσω SEO μόνο</h3>
                <p className="text-center">
                  Ιδιώτης καρδιολόγος ανέφερε 3x περισσότερα ραντεβού από την οργανική επισκεψιμότητα του site του — χωρίς καθόλου Ads.
                </p>
              </div>
            </div>

            {/* Case Study 4 */}
            <div className="bg-background p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4">
                  <Image
                    src="/images/icons/google-maps.svg"
                    alt="Local SEO"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 mt-2 text-center">Ιατρικά εργαστήρια με Local SEO</h3>
                <p className="text-center">
                  Πετύχαμε εμφάνιση στο Google Map Pack για όρους όπως "μικροβιολογικό Χαλάνδρι" και "αιματολογικές εξετάσεις κοντά μου".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* @ts-expect-error Async Server Component */}
          <RelatedBlogPosts topic="seo" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Συχνές Ερωτήσεις για το Ιατρικό SEO</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Απαντήσεις στις πιο συχνές ερωτήσεις για το SEO στον ιατρικό κλάδο.
            </p>
          </div>

          {/* FAQ Schema for structured data */}
          <FAQSchema questions={faqQuestions} />

          <div className="max-w-3xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 px-5">
            {faqQuestions.map((faq, index) => (
              <FAQToggleItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6 text-center">Θέλετε η ιστοσελίδα σας να εμφανίζεται στην 1η σελίδα της Google;</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-lg mb-8">
              Επικοινωνήστε μαζί μας για μια δωρεάν αξιολόγηση SEO της ιατρικής σας ιστοσελίδας και ανακαλύψτε το πλήρες δυναμικό του ιατρείου σας στο διαδίκτυο.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/epikoinonia" className="btn-primary text-center">
                Ζητήστε Δωρεάν SEO Ανάλυση
              </Link>
              <Link href="/ypiresies/diafimisi-sth-google" className="btn-outline text-center">
                Συνδυάστε με Google Ads
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
