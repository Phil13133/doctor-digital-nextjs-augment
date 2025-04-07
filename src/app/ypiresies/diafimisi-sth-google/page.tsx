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
  title: 'Διαφήμιση Google για Γιατρούς & Κλινικές',
  description: 'Διαφήμιση στη Google για γιατρούς και επαγγελματίες υγείας με στοχευμένες καμπάνιες που φέρνουν αποτελέσματα. Εξειδίκευση στο Ιατρικό Marketing από την Doctor Digital.',
  keywords: ['Διαφήμιση Google για Γιατρούς', 'Google Ads Ιατρεία', 'PPC Κλινικές', 'Καμπάνιες Google', 'Διαφήμιση Γιατρών Αθήνα', 'Ιατρικό Marketing'],
};

// Feature Item Component
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="flex items-start mb-6">
    <div className="text-black mt-1 mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  </div>
);

// Pricing Package Component
const PricingPackage = ({
  title,
  price,
  features,
  highlighted = false,
}: {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}) => (
  <div
    className={`rounded-lg p-6 h-full flex flex-col ${
      highlighted
        ? 'border-2 border-brand-200 shadow-lg bg-white relative'
        : 'bg-white border border-gray-200 shadow-md'
    }`}
  >
    {highlighted && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-200 px-4 py-1 rounded-full text-white text-sm font-bold">
        Προτεινόμενο
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-text-light mb-1">Από</p>
    <p className="text-3xl font-bold mb-6">{price}</p>
    <ul className="space-y-3 mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <svg className="w-5 h-5 text-brand-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link href="/epikoinonia" className={`text-center py-2 px-4 rounded-md font-medium ${
      highlighted
        ? 'bg-brand-200 hover:bg-brand-300 text-white transition-colors'
        : 'bg-gray-100 hover:bg-gray-200 text-text-dark transition-colors'
    }`}>
      Ζητήστε Προσφορά
    </Link>
  </div>
);

// Result Item Component
const ResultItem = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <div className="text-4xl md:text-5xl font-bold text-black mb-4 mt-2 text-center">{number}</div>
    <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
    <p className="text-text-light text-base text-center">{description}</p>
  </div>
);

// FAQ data
const faqQuestions = [
  {
    question: "Πόσο κοστίζει η διαφήμιση Google;",
    answer: "Το κόστος εξαρτάται από την ειδικότητα, την περιοχή στόχευσης και το διαθέσιμο διαφημιστικό budget. Προτείνουμε minimum 300€/μήνα για να έχετε ανταγωνιστική παρουσία. Το συνολικό κόστος περιλαμβάνει το διαφημιστικό budget (πληρώνεται στη Google) και το management fee της υπηρεσίας μας."
  },
  {
    question: "Πληρώνω μόνο όταν κάποιος κάνει click;",
    answer: "Ναι. Το μοντέλο της Google Ads είναι Pay-Per-Click (PPC), που σημαίνει ότι χρεώνεστε μόνο όταν κάποιος κάνει κλικ στη διαφήμισή σας. Αυτό εξασφαλίζει ότι πληρώνετε μόνο για πραγματικό ενδιαφέρον και επισκέψεις, όχι απλά για εμφανίσεις."
  },
  {
    question: "Είναι η Google Ads κατάλληλη για κάθε γιατρό;",
    answer: "Η Google Ads είναι ιδανική για επαγγελματίες υγείας με υψηλό ανταγωνισμό και ανάγκη για νέους ασθενείς σε σύντομο χρονικό διάστημα. Είναι ιδιαίτερα αποτελεσματική για ειδικότητες όπως οδοντίατροι, πλαστικοί χειρουργοί, ορθοπαιδικοί, γυναικολόγοι και ψυχίατροι, καθώς και για διαγνωστικά κέντρα, κλινικές και πολυϊατρεία."
  },
  {
    question: "Είναι δωρεάν η πλατφόρμα Google Ads;",
    answer: "Η πλατφόρμα Google Ads δεν είναι δωρεάν. Για να διαφημιστείτε χρειάζεται να επενδύσετε σε διαφημιστικό budget (που πληρώνεται στη Google) και στη διαχείριση της καμπάνιας. Το πλεονέκτημα είναι ότι εσείς ελέγχετε πλήρως το κόστος και την επένδυση, με δυνατότητα προσαρμογής ανά πάσα στιγμή."
  },
  {
    question: "Πόσο γρήγορα βλέπω αποτελέσματα;",
    answer: "Η Google Ads είναι η ταχύτερη μέθοδος digital marketing για να αποκτήσετε νέους ασθενείς. Συνήθως βλέπετε τα πρώτα αποτελέσματα (κλικ, επισκέψεις, τηλεφωνήματα) μέσα στις πρώτες 2–4 εβδομάδες λειτουργίας της καμπάνιας, ανάλογα με τον ανταγωνισμό, την ειδικότητα και την περιοχή σας."
  }
];

export default function GoogleAdsPage() {
  return (
    <>
      <ServiceSchema
        name="Διαφήμιση Google για Γιατρούς & Κλινικές"
        url="https://doctordigital.gr/ypiresies/diafimisi-sth-google"
        description="Αποκτήστε νέους ασθενείς μέσω στοχευμένων καμπανιών Google Ads ειδικά για τον ιατρικό σας κλάδο."
        provider={{
          name: "Doctor Digital",
          url: "https://doctordigital.gr"
        }}
        serviceArea={[
          { name: "Ελλάδα", type: "Country" },
          { name: "Αθήνα", type: "City" },
          { name: "Θεσσαλονίκη", type: "City" }
        ]}
        category="Digital Marketing"
      />
      <FAQSchema questions={faqQuestions} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Αρχική", url: "https://doctordigital.gr/" },
          { name: "Υπηρεσίες", url: "https://doctordigital.gr/ypiresies" },
          { name: "Διαφήμιση στη Google", url: "https://doctordigital.gr/ypiresies/diafimisi-sth-google" }
        ]}
      />

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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Διαφήμιση Google για Γιατρούς, Κλινικές & Ιατρικά Κέντρα
              </h1>
              <p className="text-xl text-text-light mb-8 max-w-xl">
                Αποκτήστε νέους ασθενείς μέσω στοχευμένων καμπανιών Google Ads ειδικά για τον ιατρικό σας κλάδο.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center">
                  Ζητήστε Δωρεάν Αξιολόγηση
                </Link>
                <Link href="#pricing" className="btn-outline text-center">
                  Δείτε Πακέτα Τιμών
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/diafimisi-sth-google.webp"
                  alt="Διαφήμιση Google για ιατρικές επιχειρήσεις στην Ελλάδα"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-brand-200 px-4 py-3 rounded-md shadow-lg hidden md:block">
                <p className="text-white text-sm font-semibold">
                  Άμεσα Αποτελέσματα
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Google Ads Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Τι είναι η Διαφήμιση Google;</h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Η Google Ads (πρώην AdWords) είναι ένα σύστημα <strong>πληρωμής ανά κλικ (PPC)</strong> που σας επιτρέπει να εμφανίζεστε στην κορυφή των αποτελεσμάτων αναζήτησης της Google, όταν οι ασθενείς αναζητούν υπηρεσίες όπως οι δικές σας. Σε συνδυασμό με <Link href="/ypiresies/seo-gia-iatrous" className="text-brand-200 hover:underline">στρατηγικές SEO</Link>, μπορείτε να κυριαρχήσετε στα αποτελέσματα αναζήτησης.
              </p>
              <p className="text-lg leading-relaxed">
                Είναι η πιο άμεση και μετρήσιμη μέθοδος για να αυξήσετε τα ραντεβού σας, επιτρέποντάς σας να στοχεύσετε με ακρίβεια δυνητικούς ασθενείς που αναζητούν ενεργά έναν γιατρό της ειδικότητάς σας στην περιοχή σας.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Google Ads is Ideal Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Γιατί η Διαφήμιση Google είναι Ιδανική για Γιατρούς & Επαγγελματίες Υγείας</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Η διαφήμιση Google προσφέρει μοναδικά πλεονεκτήματα για ιατρούς και κλινικές που θέλουν να προσελκύσουν νέους ασθενείς.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureItem
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Έγκαιρη Προσέγγιση"
              description="Οι ασθενείς αναζητούν γιατρούς και κλινικές τη στιγμή που θέλουν να κλείσουν ραντεβού, όταν έχουν άμεση ανάγκη."
            />

            <FeatureItem
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Γεωγραφική Στόχευση"
              description="Στόχευση ειδικότητας και περιοχής με γεωγραφική ακρίβεια, εμφανίζοντας τις διαφημίσεις σας μόνο σε ασθενείς κοντά στο ιατρείο σας."
            />

            <FeatureItem
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Έλεγχος Budget"
              description="Απόλυτος έλεγχος στο budget με πληρωμή μόνο όταν γίνεται κλικ. Εσείς καθορίζετε το ημερήσιο ή μηνιαίο όριο δαπανών."
            />

            <FeatureItem
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Μετρήσιμα Αποτελέσματα"
              description="Πραγματικά μετρήσιμα αποτελέσματα και προσαρμογή καμπάνιας σε πραγματικό χρόνο με βάση την απόδοση, για συνεχή βελτιστοποίηση."
            />

            <FeatureItem
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Νομική Συμμόρφωση"
              description="Συμμόρφωση με το νομικό πλαίσιο διαφήμισης ιατρών στην Ελλάδα, τηρώντας τον κώδικα δεοντολογίας του ιατρικού συλλόγου."
            />

            <FeatureItem
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              }
              title="Ανταγωνιστικό Πλεονέκτημα"
              description="Αποκτήστε ανταγωνιστικό πλεονέκτημα έναντι άλλων ιατρείων, εμφανίζοντας τις υπηρεσίες σας πάνω από τους ανταγωνιστές σας."
            />
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section id="pricing" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Πακέτα & Τιμές Google Ads</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Επιλέξτε το πακέτο που ταιριάζει καλύτερα στις ανάγκες του ιατρείου σας και στους στόχους σας.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingPackage
              title="Basic"
              price="300€/μήνα"
              features={[
                "Δημιουργία Search Campaign",
                "Στόχευση περιοχής & ειδικότητας",
                "Βελτιστοποίηση καμπάνιας",
                "Μηνιαία αναφορά απόδοσης",
              ]}
            />

            <PricingPackage
              title="Pro"
              price="500€/μήνα"
              features={[
                "Όλα τα του Basic",
                "Remarketing Campaigns",
                "Display Network",
                "Conversion Tracking",
                "A/B Testing Διαφημίσεων",
                "Προχωρημένη παρακολούθηση KPIs"
              ]}
              highlighted={true}
            />

            <PricingPackage
              title="Custom"
              price="Επικοινωνήστε"
              features={[
                "Προσαρμοσμένη στρατηγική",
                "Εξειδικευμένο reporting",
                "Premium υποστήριξη",
                "Ιδανική για κλινικές & πολυϊατρεία",
                "Όλα τα του Pro",
                "Συμβουλευτική στρατηγικής"
              ]}
            />
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-10 max-w-4xl mx-auto">
            <p className="text-center text-text-light">
              <strong>Σημείωση:</strong> Οι παραπάνω τιμές αφορούν στο κόστος διαχείρισης της καμπάνιας. Το διαφημιστικό budget που θα επενδυθεί στην Google είναι επιπλέον και καθορίζεται από εσάς.
            </p>
          </div>
        </div>
      </section>

      {/* Why Doctor Digital Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Γιατί Doctor Digital;</h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Εμπιστευτείτε την online προβολή του ιατρείου σας σε μια ομάδα που κατανοεί τις ιδιαίτερες ανάγκες του ιατρικού κλάδου.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-200 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Εξειδίκευση στον Ιατρικό Τομέα</h3>
                  <p className="text-text-light text-sm">Αποκλειστική εστίαση σε ιατρικές επιχειρήσεις, με κατανόηση των ιδιαιτεροτήτων κάθε ειδικότητας.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-200 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Πιστοποιημένοι Google Ads Experts</h3>
                  <p className="text-text-light text-sm">Ομάδα με επίσημες πιστοποιήσεις Google, συνεχή εκπαίδευση και πολυετή εμπειρία.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-200 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Συμμόρφωση με τον Κώδικα Δεοντολογίας</h3>
                  <p className="text-text-light text-sm">Πλήρης συμμόρφωση με τις οδηγίες του Ιατρικού Συλλόγου για τη διαφήμιση ιατρικών υπηρεσιών.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-6 h-6 text-brand-200 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-1">Συνεχής Παρακολούθηση & Βελτιστοποίηση</h3>
                  <p className="text-text-light text-sm">Καθημερινή παρακολούθηση των καμπανιών και προσαρμογές για μέγιστη απόδοση της επένδυσής σας.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Πραγματικά Αποτελέσματα</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Αποδεδειγμένα αποτελέσματα από πραγματικές καμπάνιες ιατρικών επιχειρήσεων που διαχειριζόμαστε.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ResultItem
              number="58%"
              title="Μείωση στο κόστος ανά ραντεβού"
              description="Μέσω βελτιστοποίησης Google Ads και <Link href='/ypiresies/kataskevi-istoselidon-gia-giatrous' className='text-brand-200 hover:underline'>ειδικών landing pages</Link>, πετύχαμε μείωση κόστους 58% για οδοντιατρικό κέντρο."
            />

            <ResultItem
              number="+200%"
              title="Αύξηση επισκέψεων"
              description="Τριπλασιασμός οργανικών & πληρωμένων επισκέψεων για ορθοπαιδικό ιατρείο σε διάστημα 3 μηνών."
            />

            <ResultItem
              number="#1"
              title="Θέση στην Google"
              description="Πρώτη θέση στα αποτελέσματα της Google για το keyword 'ορθοπαιδικός Περιστέρι' σε μόλις 3 μήνες."
            />
          </div>

          <div className="bg-brand-200/10 rounded-lg p-8 mt-12 max-w-3xl mx-auto">
            <p className="text-center text-base">
              <span className="font-bold">Γνωρίζατε ότι:</span> Το 86% των ασθενών χρησιμοποιεί την Google όταν αναζητά ιατρικές υπηρεσίες και το 72% επιλέγει από τα πρώτα 3-4 αποτελέσματα της σελίδας;
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <RelatedServices currentService="/ypiresies/diafimisi-sth-google" />
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* @ts-expect-error Async Server Component */}
          <RelatedBlogPosts topic="google ads" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Συχνές Ερωτήσεις (FAQ)</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Απαντήσεις στις πιο συχνές ερωτήσεις για τις καμπάνιες Google Ads στον ιατρικό κλάδο.
            </p>
          </div>

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

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="bg-white p-10 rounded-lg border border-brand-100 shadow-md max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Ενδιαφέρεστε για Στοχευμένες Καμπάνιες Google Ads;</h2>
              <p className="text-text-light max-w-2xl mx-auto mb-8">
                Αποκτήστε περισσότερους ασθενείς με εξειδικευμένες καμπάνιες Google Ads για τον ιατρικό σας χώρο.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center rounded-full px-8 py-3 flex items-center justify-center">
                  <span className="mr-2">🟢</span>
                  Ζητήστε Δωρεάν Ανάλυση
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center rounded-full px-8 py-3 flex items-center justify-center">
                  <span className="mr-2">🔵</span>
                  Κλείστε Ραντεβού με Ειδικό
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
