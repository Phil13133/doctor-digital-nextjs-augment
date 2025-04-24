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
  title: 'Διαφήμιση Google για Γιατρούς | Προώθηση Ιατρείου | Doctor Digital',
  description: 'Επαγγελματική διαφήμιση στη Google για ιατρεία. Στοχευμένες καμπάνιες Google Ads που προσελκύουν νέους ασθενείς με μετρήσιμα αποτελέσματα και χαμηλότερο κόστος.',
  keywords: ['διαφήμιση στο google', 'διαφημιση google τιμες', 'πως κανω διαφημιση στο google', 'Διαφήμιση Google για Γιατρούς', 'Google Ads Ιατρεία', 'PPC Κλινικές', 'Καμπάνιες Google', 'Διαφήμιση Γιατρών Αθήνα', 'Ιατρικό Marketing', 'προώθηση ιατρείου', 'διαφήμιση ιατρείου', 'κόστος διαφήμισης google'],
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
  <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-brand-200 hover:transform hover:scale-105 transition-all duration-300">
    <div className="text-5xl md:text-6xl font-bold text-brand-200 mb-5 mt-2 text-center">{number}</div>
    <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
    <p className="text-text-light text-base text-center">{description}</p>
  </div>
);

// FAQ data
const faqQuestions = [
  {
    question: "Πόσο κοστίζει η διαφήμιση στη Google;",
    answer: "Το κόστος εξαρτάται από την ειδικότητα, την περιοχή στόχευσης και το διαθέσιμο διαφημιστικό budget. Προτείνουμε minimum 300€/μήνα για να έχετε ανταγωνιστική παρουσία. Το συνολικό κόστος περιλαμβάνει το διαφημιστικό budget (πληρώνεται στη Google) και το management fee της υπηρεσίας μας."
  },
  {
    question: "Πληρώνω μόνο όταν κάποιος κάνει click;",
    answer: "Ναι. Το μοντέλο της Google Ads είναι Pay-Per-Click (PPC), που σημαίνει ότι χρεώνεστε μόνο όταν κάποιος κάνει κλικ στη διαφήμισή σας. Αυτό εξασφαλίζει ότι πληρώνετε μόνο για πραγματικό ενδιαφέρον και επισκέψεις, όχι απλά για εμφανίσεις."
  },
  {
    question: "Πώς κάνω διαφήμιση για το ιατρείο μου στο Google;",
    answer: "Για να διαφημίσετε το ιατρείο σας στη Google, χρειάζεται να δημιουργήσετε λογαριασμό Google Ads, να επιλέξετε τις κατάλληλες λέξεις-κλειδιά για την ειδικότητά σας, να ορίσετε το ημερήσιο ή μηνιαίο budget και να δημιουργήσετε διαφημίσεις που στοχεύουν στην περιοχή σας. Εμείς αναλαμβάνουμε όλη τη διαδικασία, από τη δημιουργία έως τη διαχείριση της καμπάνιας, ώστε να έχετε το καλύτερο δυνατό αποτέλεσμα."
  },
  {
    question: "Είναι η Google Ads κατάλληλη για κάθε γιατρό;",
    answer: "Η διαφήμιση στη Google είναι ιδανική για επαγγελματίες υγείας με υψηλό ανταγωνισμό και ανάγκη για νέους ασθενείς σε σύντομο χρονικό διάστημα. Είναι ιδιαίτερα αποτελεσματική για ειδικότητες όπως οδοντίατροι, πλαστικοί χειρουργοί, ορθοπαιδικοί, γυναικολόγοι και ψυχίατροι, καθώς και για διαγνωστικά κέντρα, κλινικές και πολυϊατρεία."
  },
  {
    question: "Ποια είναι η διαφορά των Google Ads από το SEO για ιατρικές ιστοσελίδες;",
    answer: "Η βασική διαφορά είναι στο χρόνο απόδοσης και το κόστος. Η διαφήμιση στη Google φέρνει άμεσα αποτελέσματα αλλά απαιτεί συνεχή επένδυση. Το SEO χρειάζεται περισσότερο χρόνο (3-6 μήνες) για να αποδώσει αλλά προσφέρει πιο μακροπρόθεσμα αποτελέσματα. Ιδανικά, ένα ιατρείο χρειάζεται και τα δύο: Google Ads για άμεσα αποτελέσματα και SEO για μακροπρόθεσμη βιωσιμότητα."
  },
  {
    question: "Είναι δωρεάν η πλατφόρμα Google Ads;",
    answer: "Η πλατφόρμα Google Ads δεν είναι δωρεάν. Για να διαφημιστείτε χρειάζεται να επενδύσετε σε διαφημιστικό budget (που πληρώνεται στη Google) και στη διαχείριση της καμπάνιας. Το πλεονέκτημα είναι ότι εσείς ελέγχετε πλήρως το κόστος και την επένδυση, με δυνατότητα προσαρμογής ανά πάσα στιγμή."
  },
  {
    question: "Υπάρχει τρόπος να προωθήσω το ιατρείο μου στη Google δωρεάν;",
    answer: "Ναι, μπορείτε να προωθήσετε το ιατρείο σας στη Google δωρεάν μέσω της βελτιστοποίησης για μηχανές αναζήτησης (SEO), δημιουργώντας ποιοτικό περιεχόμενο στην ιστοσελίδα σας, αξιοποιώντας το Google My Business, και ενθαρρύνοντας τους ασθενείς σας να αφήνουν θετικές κριτικές. Ωστόσο, αυτές οι μέθοδοι απαιτούν περισσότερο χρόνο για να αποδώσουν σε σύγκριση με τις πληρωμένες διαφημίσεις."
  },
  {
    question: "Πόσο γρήγορα βλέπω αποτελέσματα;",
    answer: "Η διαφήμιση στη Google είναι η ταχύτερη μέθοδος digital marketing για να αποκτήσετε νέους ασθενείς. Συνήθως βλέπετε τα πρώτα αποτελέσματα (κλικ, επισκέψεις, τηλεφωνήματα) μέσα στις πρώτες 2–4 εβδομάδες λειτουργίας της καμπάνιας, ανάλογα με τον ανταγωνισμό, την ειδικότητα και την περιοχή σας."
  }
];

export default function GoogleAdsPage() {
  return (
    <>
      <ServiceSchema
        name="Διαφήμιση στη Google για Ιατρεία & Κλινικές"
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
                Διαφήμιση στη Google για Ιατρεία & Κλινικές
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
            <h2 className="text-3xl font-bold mb-6 text-center">Πώς Λειτουργεί η Διαφήμιση στη Google για Ιατρεία</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <div className="bg-gray-50 p-8 rounded-lg mb-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Η διαφήμιση στη Google μέσω Google Ads είναι ένα σύστημα <strong>πληρωμής ανά κλικ (PPC)</strong> που επιτρέπει στο ιατρείο σας να εμφανίζεται στην κορυφή των αποτελεσμάτων αναζήτησης, όταν οι ασθενείς αναζητούν υπηρεσίες όπως οι δικές σας. Συμπληρώνοντας τις <Link href="/ypiresies/seo-gia-iatrous" className="text-brand-200 hover:underline">στρατηγικές SEO</Link>, η διαφήμιση Google σάς βοηθά να κυριαρχήσετε στα αποτελέσματα αναζήτησης.
              </p>
              <p className="text-lg leading-relaxed">
                Είναι η πιο άμεση και μετρήσιμη μέθοδος για να αυξήσετε τα ραντεβού σας, επιτρέποντάς σας να στοχεύσετε με ακρίβεια δυνητικούς ασθενείς που αναζητούν ενεργά έναν γιατρό της ειδικότητάς σας στην περιοχή σας. Η διαφήμιση Google Ads είναι βασικό συστατικό του <Link href="/" className="text-brand-200 hover:underline">Ιατρικού Μάρκετινγκ</Link> για άμεσα αποτελέσματα.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Google Ads is Ideal Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Γιατί η Διαφήμιση στη Google είναι Ιδανική για Ιατρεία</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Η διαφήμιση στο Google προσφέρει μοναδικά πλεονεκτήματα για ιατρούς και κλινικές που θέλουν να προσελκύσουν νέους ασθενείς με χαμηλότερο κόστος και στοχευμένη προσέγγιση.
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

      {/* Advanced Google Ads Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Πλεονεκτήματα της Διαφήμισης στη Google για Ιατρικές Υπηρεσίες</h2>
              <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
              <p className="text-text-light max-w-2xl mx-auto">
                Ανακαλύψτε πώς η διαφήμιση στη Google μπορεί να μεταμορφώσει το ιατρείο σας με μετρήσιμα αποτελέσματα και χαμηλότερο κόστος.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cost Comparison */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-200">
                <div className="flex items-center mb-5">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Σύγκριση Κόστους Διαφήμισης</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Η διαφήμιση στο Google είναι σημαντικά πιο οικονομική από τις παραδοσιακές μεθόδους διαφήμισης (έντυπα, τηλεόραση, ραδιόφωνο) για ιατρεία.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Google Ads:</span>
                    <span className="text-brand-700 font-bold">0,50€-2€/κλικ</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Εξοικονόμηση:</span>
                    <span className="text-green-600 font-bold">Έως 70%</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic">
                  Με το μοντέλο πληρωμής ανά κλικ (PPC), πληρώνετε μόνο για πραγματικό ενδιαφέρον, αντί για απλή προβολή.
                </p>
              </div>

              {/* How to Utilize */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-200">
                <div className="flex items-center mb-5">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Αξιοποίηση Διαφημίσεων</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Για βέλτιστη αξιοποίηση της διαφήμισης στη Google, το ιατρείο σας πρέπει να εστιάσει στη δημιουργία στοχευμένων διαφημίσεων:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Ανά ειδικότητα και υπηρεσία</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Με όρους που χρησιμοποιούν οι ασθενείς</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-brand-200 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">Συνδυάζοντας search ads με remarketing</span>
                  </li>
                </ul>
                <p className="text-gray-600 text-sm italic">
                  Με προσθήκη επεκτάσεων όπως τηλέφωνο και τοποθεσία, αυξάνετε σημαντικά την αποτελεσματικότητα.
                </p>
              </div>

              {/* Success Examples */}
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-200">
                <div className="flex items-center mb-5">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-7 h-7 text-brand-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Ιστορίες Επιτυχίας</h3>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-1">Οδοντιατρικό Κέντρο</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Αύξηση ασθενών:</span>
                    <span className="text-brand-700 font-bold">+43%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Κόστος ανά ασθενή:</span>
                    <span className="text-green-600 font-bold">35€ (αντί 150€)</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-lg mb-1">Ορθοπαιδικό Ιατρείο</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Αύξηση ραντεβού:</span>
                    <span className="text-brand-700 font-bold">+62%</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm italic">
                  *Με στοχευμένες καμπάνιες για συγκεκριμένες παθήσεις και επεμβάσεις
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Our Strategy for Medical Google Ads Campaigns */}
      <section className="py-20 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-center">
                Η Στρατηγική Μας για Επιτυχημένη Διαφήμιση στη Google για Ιατρεία
              </h2>
              <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
              <p className="text-text-light max-w-2xl mx-auto text-lg">
                Η επιτυχία των καμπανιών Google Ads για ιατρεία βασίζεται σε μια στρατηγική προσέγγιση που λαμβάνει υπόψη τις ιδιαιτερότητες του ιατρικού κλάδου.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="mb-6 text-brand-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Στοχευμένες Λέξεις-Κλειδιά Για Ιατρικές Υπηρεσίες</h3>
                <p className="text-gray-600">
                  Εντοπίζουμε τις ακριβείς λέξεις-κλειδιά που χρησιμοποιούν οι ασθενείς στην περιοχή σας όταν αναζητούν τις υπηρεσίες σας.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="mb-6 text-brand-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Γεωγραφική Στόχευση Ασθενών</h3>
                <p className="text-gray-600">
                  Εφαρμόζουμε προηγμένες τεχνικές γεωγραφικής στόχευσης ώστε οι διαφημίσεις σας να εμφανίζονται μόνο σε ασθενείς που βρίσκονται στην περιοχή σας.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-brand-200 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-20 h-20 bg-brand-100 rounded-bl-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="mb-6 text-brand-200">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Βελτιστοποίηση Καμπάνιας & Κόστους</h3>
                <p className="text-gray-600">
                  Συνεχής βελτιστοποίηση των καμπανιών με βάση τα δεδομένα απόδοσης. Μειώνουμε το κόστος ανά κλικ και αυξάνουμε το ποσοστό μετατροπής.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Αποτελέσματα από Επιτυχημένες Διαφημίσεις στη Google για Ιατρεία
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto text-lg">
              Αποδεδειγμένα αποτελέσματα από πραγματικές καμπάνιες ιατρικών επιχειρήσεων που διαχειριζόμαστε.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ResultItem
              number="58%"
              title="Μείωση Στο Κόστος Ανά Ραντεβού"
              description="Μέσω βελτιστοποίησης Google Ads και ειδικών landing pages, πετύχαμε μείωση κόστους 58% για οδοντιατρικό κέντρο."
            />

            <ResultItem
              number="+200%"
              title="Αύξηση Επισκέψεων"
              description="Τριπλασιασμός οργανικών & πληρωμένων επισκέψεων για ορθοπαιδικό ιατρείο σε διάστημα 3 μηνών."
            />

            <ResultItem
              number="#1"
              title="Θέση Στην Google"
              description="Πρώτη θέση στα αποτελέσματα της Google για το keyword 'ορθοπαιδικός Περιστέρι' σε μόλις 3 μήνες."
            />
          </div>

          <div className="bg-gradient-to-r from-brand-100 to-brand-50 rounded-2xl p-8 mt-12 max-w-3xl mx-auto shadow-lg border border-brand-200/20">
            <div className="flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-brand-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-lg text-brand-800">Γνωρίζατε ότι:</span>
            </div>
            <p className="text-center text-base font-medium">
              Το <span className="font-bold text-brand-800">86%</span> των ασθενών χρησιμοποιεί την Google όταν αναζητά ιατρικές υπηρεσίες και το <span className="font-bold text-brand-800">72%</span> επιλέγει από τα πρώτα 3-4 αποτελέσματα της σελίδας;
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section id="pricing" className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Κόστος & Πακέτα Διαφήμισης στη Google για Ιατρεία</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
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

      {/* Related Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RelatedServices currentService="/ypiresies/diafimisi-sth-google" />
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

          <RelatedBlogPosts topic="google ads" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Συχνές Ερωτήσεις για τη Διαφήμιση στη Google για Ιατρεία
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
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
              <h2 className="text-2xl font-bold mb-6 text-center">Ενδιαφέρεστε για Στοχευμένες Καμπάνιες Google Ads;</h2>
              <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
              <p className="text-text-light max-w-2xl mx-auto mb-8">
                Αποκτήστε περισσότερους ασθενείς με εξειδικευμένες καμπάνιες Google Ads για τον ιατρικό σας χώρο.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center rounded-md px-8 py-3 flex items-center justify-center">
                  <span className="mr-2">🟢</span>
                  Ζητήστε Δωρεάν Ανάλυση
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center rounded-md px-8 py-3 flex items-center justify-center">
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
