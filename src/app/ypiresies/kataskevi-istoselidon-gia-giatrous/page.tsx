import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import FAQSchema from '@/components/schema/FAQSchema';
import FAQToggleItem from '@/components/FAQToggleItem';
import ServiceSchema from '@/components/schema/ServiceSchema';
import { CheckIcon, ArrowRightIcon } from '@/components/icons';
import Breadcrumbs from '@/components/Breadcrumbs';
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema';
import RelatedServices from '@/components/services/RelatedServices';
import RelatedBlogPosts from '@/components/blog/RelatedBlogPosts';

export const metadata: Metadata = {
  title: 'Κατασκευή Ιατρικών Ιστοσελίδων | Δημιουργία Site για Γιατρούς | Doctor Digital',
  description: 'Εξειδικευμένη κατασκευή ιατρικών ιστοσελίδων & σχεδιασμός site για γιατρούς. Σύγχρονα, responsive ιατρικά websites που αυξάνουν τους ασθενείς και την αξιοπιστία σας.',
  keywords: ['Κατασκευή Ιατρικών Ιστοσελίδων', 'Ιστοσελίδες για Ιατρούς', 'Δημιουργία Site για Γιατρούς', 'Σχεδιασμός Ιατρικών Website', 'Ιατρικό Web Design', 'Κόστος Ιατρικής Ιστοσελίδας', 'Ιατρικό Digital Marketing'],
};

// Feature Item Component
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title?: string; description: string }) => (
  <div className="flex items-start mb-8 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-200">
    <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <p className="text-text-light">{description}</p>
    </div>
  </div>
);

// Simple Feature Item Component (bullet points)
const SimpleFeatureItem = ({ text, isHeading = false }: { text: string, isHeading?: boolean }) => (
  <div className={`flex items-center p-4 bg-[#e6f7f1] rounded-lg ${isHeading ? 'mb-5' : 'mb-3'}`}>
    <div className="bg-brand-100 rounded-md p-1 mr-3 flex-shrink-0">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 13l4 4L19 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <span className="text-gray-700">{text}</span>
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
          <div className="bg-brand-200 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
            <CheckIcon size={14} color="#ffffff" />
          </div>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Link href="/epikoinonia" className={`text-center py-2.5 px-4 rounded-md font-medium ${
      highlighted
        ? 'bg-brand-200 hover:bg-brand-300 text-white transition-colors'
        : 'bg-gray-100 hover:bg-gray-200 text-text-dark transition-colors'
    }`}>
      Ζητήστε Προσφορά
    </Link>
  </div>
);

// Result Card Component
const ResultCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-brand-200 hover:transform hover:scale-105 transition-all duration-300 text-center">
    <p className="text-3xl md:text-4xl font-bold text-brand-200 mb-3">{number}</p>
    <p className="text-text-dark font-medium text-base">{text}</p>
  </div>
);

// Website Showcase Component
const WebsiteShowcase = ({
  title,
  description,
  imageSrc,
  features
}: {
  title: string;
  description: string;
  imageSrc: string;
  features: string[];
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-100">
    <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-brand-50 to-white">
      <h3 className="font-bold text-xl text-brand-800">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>

    <div className="p-4">
      <div className="border border-gray-200 rounded overflow-hidden">
        <Image
          src={imageSrc}
          alt={`Παράδειγμα κατασκευής ιατρικής ιστοσελίδας - ${title} - Επαγγελματικός σχεδιασμός και ανάπτυξη`}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </div>
    </div>

    <div className="p-4 bg-gray-50">
      <h4 className="font-medium text-sm mb-2">Χαρακτηριστικά:</h4>
      <ul className="space-y-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <div className="text-brand-200 mr-2 mt-0.5 flex-shrink-0">
              <CheckIcon size={14} color="currentColor" />
            </div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Process Step Component
const ProcessStep = ({
  number,
  title,
  description
}: {
  number: number;
  title: string;
  description: string;
}) => (
  <div className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
    <div className="text-center mb-4">
      <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-lg mx-auto shadow-md">
        {number}
      </div>
    </div>
    <div className="text-center">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-text-light">{description}</p>
    </div>
  </div>
);

// FAQ data
const faqQuestions = [
  {
    question: "Πόσο χρόνο χρειάζεται η κατασκευή ιατρικής ιστοσελίδας;",
    answer: "Ο μέσος χρόνος ανάπτυξης μιας επαγγελματικής ιατρικής ιστοσελίδας είναι 2-3 εβδομάδες, ανάλογα με την πολυπλοκότητα και τις λειτουργίες. Ξεκινάμε με την αρχική συνάντηση και ανάλυση αναγκών (2-3 ημέρες), συνεχίζουμε με τον σχεδιασμό (3-5 ημέρες), την ανάπτυξη (5-7 ημέρες), την ενσωμάτωση περιεχομένου και SEO (3-4 ημέρες) και ολοκληρώνουμε με τον έλεγχο και την παράδοση (1-2 ημέρες). Σε επείγουσες περιπτώσεις, μπορούμε να παραδώσουμε βασικές ιστοσελίδες σε μόλις 7-10 ημέρες."
  },
  {
    question: "Πόσο κοστίζει μια ιατρική ιστοσελίδα;",
    answer: "Το κόστος μιας ιατρικής ιστοσελίδας ξεκινά από 480€ για το Βασικό πακέτο (απλή παρουσία με 3-4 σελίδες), 890€ για το Επαγγελματικό πακέτο (πλήρης ιστοσελίδα με έως 10 σελίδες, blog και προηγμένο SEO) και από 1250€ για το Premium πακέτο (custom design, σύστημα online ραντεβού και πλήρες digital marketing setup). Η τιμολόγηση προσαρμόζεται στις συγκεκριμένες ανάγκες κάθε ιατρείου και εξαρτάται από παράγοντες όπως ο αριθμός των σελίδων, οι ειδικές λειτουργίες και οι απαιτήσεις περιεχομένου."
  },
  {
    question: "Τι περιλαμβάνει το κόστος;",
    answer: "Το κόστος περιλαμβάνει τον σχεδιασμό, την ανάπτυξη, την ενσωμάτωση περιεχομένου, την βελτιστοποίηση SEO, την προσαρμογή για κινητές συσκευές (responsive design), την εκπαίδευση στη διαχείριση περιεχομένου, και 3 μήνες δωρεάν τεχνική υποστήριξη. Επίσης καλύπτουμε το domain και το hosting για τον πρώτο χρόνο στα πακέτα Professional και Premium."
  },
  {
    question: "Πώς μπορώ να διαχειρίζομαι την ιστοσελίδα του ιατρείου μου;",
    answer: "Όλες οι ιατρικές ιστοσελίδες που κατασκευάζουμε διαθέτουν φιλικό προς τον χρήστη σύστημα διαχείρισης περιεχομένου (CMS), συνήθως WordPress, που σας επιτρέπει να ενημερώνετε εύκολα κείμενα, εικόνες, ώρες λειτουργίας και άλλα στοιχεία χωρίς τεχνικές γνώσεις. Παρέχουμε αναλυτικό εγχειρίδιο χρήσης και προσωπική εκπαίδευση 1-2 ωρών για εσάς ή τη γραμματεία σας. Επιπλέον, προσφέρουμε τεχνική υποστήριξη για οποιαδήποτε απορία ή βοήθεια χρειαστείτε στη διαχείριση της ιστοσελίδας σας."
  },
  {
    question: "Περιλαμβάνεται SEO στην κατασκευή ιατρικής ιστοσελίδας;",
    answer: "Ναι, όλα τα πακέτα κατασκευής ιατρικών ιστοσελίδων περιλαμβάνουν βασική βελτιστοποίηση για μηχανές αναζήτησης (SEO). Αυτό περιλαμβάνει on-page SEO (meta titles, descriptions, headings), τεχνική βελτιστοποίηση (ταχύτητα φόρτωσης, mobile-friendly σχεδιασμό, δομή URL), και βασική τοπική βελτιστοποίηση για την περιοχή σας. Στα πακέτα Professional και Premium προσφέρουμε πιο εκτεταμένη βελτιστοποίηση SEO, ενώ για συνεχή βελτίωση της κατάταξης και στοχευμένες καμπάνιες προσφέρουμε ξεχωριστά πακέτα μηνιαίου SEO."
  },
  {
    question: "Ποια είναι η διαφορά μεταξύ μιας απλής και μιας ιατρικής ιστοσελίδας;",
    answer: "Μια ιατρική ιστοσελίδα διαφέρει από μια απλή εταιρική ιστοσελίδα σε πολλά σημεία: 1) Συμμόρφωση με ιατρικούς κανονισμούς και GDPR για τα ευαίσθητα προσωπικά δεδομένα, 2) Εξειδικευμένη δομή περιεχομένου για παρουσίαση ιατρικών υπηρεσιών, παθήσεων και θεραπειών, 3) Συστήματα online κράτησης ραντεβού και διαχείρισης ασθενών, 4) Ειδική βελτιστοποίηση SEO για ιατρικούς όρους και τοπικές αναζητήσεις, 5) Σχεδιασμός που εμπνέει εμπιστοσύνη και επαγγελματισμό, απαραίτητα στοιχεία για τον ιατρικό κλάδο. Οι ιατρικές ιστοσελίδες απαιτούν εξειδικευμένη γνώση του κλάδου και των αναγκών των ασθενών."
  },
  {
    question: "Μπορεί να εμφανίζεται ψηλά στην Google;",
    answer: "Ναι, όλες οι ιστοσελίδες που αναπτύσσουμε είναι σχεδιασμένες με βάση τις σύγχρονες αρχές SEO. Περιλαμβάνουμε on-page SEO βελτιστοποίηση, τεχνική βελτιστοποίηση ταχύτητας και mobile-first σχεδιασμό που επηρεάζουν θετικά την κατάταξη. Για πιο ανταγωνιστικές λέξεις-κλειδιά, προσφέρουμε επιπλέον υπηρεσίες SEO με μηνιαία συνδρομή."
  }
];

export default function WebsitesPage() {
  return (
    <>
      <ServiceSchema
        name="Κατασκευή Ιστοσελίδων για Ιατρούς & Κλινικές"
        url="https://doctordigital.gr/ypiresies/kataskevi-istoselidon-gia-giatrous"
        description="Σύγχρονες, responsive και SEO-ready ιστοσελίδες, ειδικά σχεδιασμένες για τις ανάγκες του ιατρικού κλάδου."
        provider={{
          name: "Doctor Digital",
          url: "https://doctordigital.gr"
        }}
        serviceArea={[
          { name: "Ελλάδα", type: "Country" },
          { name: "Αθήνα", type: "City" },
          { name: "Θεσσαλονίκη", type: "City" }
        ]}
        category="Web Development"
      />
      <FAQSchema questions={faqQuestions} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Αρχική", url: "https://doctordigital.gr/" },
          { name: "Υπηρεσίες", url: "https://doctordigital.gr/ypiresies" },
          { name: "Κατασκευή Ιστοσελίδων για Γιατρούς", url: "https://doctordigital.gr/ypiresies/kataskevi-istoselidon-gia-giatrous" }
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
                Κατασκευή Ιατρικών Ιστοσελίδων για Γιατρούς & Κλινικές
              </h1>
              <p className="text-xl text-text-light mb-8 max-w-xl">
                Εξειδικευμένη κατασκευή ιατρικών ιστοσελίδων με σύγχρονο, responsive και <Link href="/ypiresies/seo-gia-iatrous" className="text-brand-200 hover:underline">SEO-ready</Link> σχεδιασμό, ειδικά προσαρμοσμένο για τις ανάγκες του ιατρικού κλάδου. Η επαγγελματική δημιουργία ιστοσελίδας για γιατρούς αποτελεί ισχυρό θεμέλιο για επιτυχημένο <Link href="/" className="text-brand-200 hover:underline">Ιατρικό Μάρκετινγκ</Link> και προσέλκυση νέων ασθενών.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center">
                  Ζητήστε Προσφορά
                </Link>
                <Link href="#showcase" className="btn-outline text-center">
                  Δείτε Δείγματα Εργασιών
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/kataskevi-iatrikon-istoselidon.webp"
                  alt="Επαγγελματική κατασκευή ιατρικών ιστοσελίδων για γιατρούς και κλινικές με responsive σχεδιασμό"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-brand-200 px-4 py-3 rounded-md shadow-lg hidden md:block">
                <p className="text-white text-sm font-semibold">
                  Αύξηση Ραντεβού & Προβολής
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Medical Website is Important */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-center">
                Γιατί η Κατασκευή Ιατρικών Ιστοσελίδων Απαιτεί Εξειδίκευση
              </h2>
              <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
              <p className="text-lg text-text-light mb-8">
                Η ιατρική ιστοσελίδα δεν είναι απλώς μια παρουσία στο διαδίκτυο. Είναι το πρώτο σημείο επαφής με τους ασθενείς σας.
                Με τη σωστή κατασκευή και βελτιστοποίηση, μπορεί να μετατραπεί σε εργαλείο προσέλκυσης νέων ραντεβού και ενίσχυσης της φήμης σας. Συνδυάζοντας την με <Link href="/ypiresies/copywriting-gia-iatrous" className="text-brand-200 hover:underline">υψηλής ποιότητας ιατρικό περιεχόμενο</Link>, αυξάνετε την αποτελεσματικότητά της.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureItem
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                }
                title="Εμφάνιση στην Google"
                description="Στοχευμένες λέξεις-κλειδιά φέρνουν νέους ασθενείς που αναζητούν γιατρό της ειδικότητάς σας στην περιοχή σας."
              />

              <FeatureItem
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                }
                title="Συμβατότητα με Κινητά"
                description="Το 70% των ασθενών αναζητούν ιατρικές πληροφορίες από κινητά. Η responsive σχεδίαση είναι απαραίτητη."
              />

              <FeatureItem
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="Γρήγορη & Ασφαλής"
                description="Σημαντικοί παράγοντες κατάταξης στη Google είναι η ταχύτητα και η ασφάλεια HTTPS, ενώ βελτιώνουν και την εμπειρία χρήστη."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Complete Website Development */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Η Διαδικασία Σχεδιασμού & Δημιουργίας Ιατρικού Site
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-3xl mx-auto">
              Αναλαμβάνουμε όλη τη διαδικασία κατασκευής ιστοσελίδας για γιατρούς, από τον σχεδιασμό έως τη φιλοξενία και την τεχνική υποστήριξη.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            <ProcessStep
              number={1}
              title="Ανάλυση & Σχεδιασμός"
              description="Κατανοούμε τις ανάγκες σας και σχεδιάζουμε την ιδανική δομή ιστοσελίδας."
            />

            <ProcessStep
              number={2}
              title="Ανάπτυξη & Κατασκευή"
              description="Κατασκευάζουμε την ιστοσελίδα με προηγμένες τεχνολογίες και βέλτιστες πρακτικές."
            />

            <ProcessStep
              number={3}
              title="Περιεχόμενο & SEO"
              description="Δημιουργούμε επαγγελματικό περιεχόμενο και βελτιστοποιούμε για τη Google."
            />

            <ProcessStep
              number={4}
              title="Εκπαίδευση & Υποστήριξη"
              description="Σας εκπαιδεύουμε στη διαχείριση και παρέχουμε συνεχή υποστήριξη."
            />
          </div>
          
          {/* Timeline Visualization */}
          <div className="max-w-5xl mx-auto mb-12 bg-gray-50 p-6 rounded-xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-700 bg-brand-100 py-2 px-4 rounded-md inline-block">Χρονοδιάγραμμα Κατασκευής Ιατρικής Ιστοσελίδας</h3>
              <p className="text-text-light mt-2">Ολοκληρωμένη παράδοση σε μόλις 2-3 εβδομάδες</p>
            </div>
            
            {/* Desktop Timeline (hidden on mobile) */}
            <div className="relative mt-12 hidden md:block">
              {/* Main Timeline Line */}
              <div className="absolute h-2 bg-brand-200 top-10 left-0 right-0 z-0"></div>
              
              {/* Timeline Container */}
              <div className="relative">
                <div className="flex justify-between">
                  {/* Phase 1: Consultation */}
                  <div className="relative flex flex-col items-center w-1/5">
                    <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white">
                      1
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-brand-800">Αρχική Συνάντηση</h4>
                      <p className="text-sm text-text-light">2-3 ημέρες</p>
                      <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                        <p className="text-sm">Ανάλυση αναγκών</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 2: Design */}
                  <div className="relative flex flex-col items-center w-1/5">
                    <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white">
                      2
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-brand-800">Σχεδιασμός</h4>
                      <p className="text-sm text-text-light">3-5 ημέρες</p>
                      <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                        <p className="text-sm">Mockups & UI/UX</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 3: Development */}
                  <div className="relative flex flex-col items-center w-1/5">
                    <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white">
                      3
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-brand-800">Ανάπτυξη</h4>
                      <p className="text-sm text-text-light">5-7 ημέρες</p>
                      <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                        <p className="text-sm">Κατασκευή & Λειτουργίες</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 4: Content & SEO */}
                  <div className="relative flex flex-col items-center w-1/5">
                    <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white">
                      4
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-brand-800">Περιεχόμενο & SEO</h4>
                      <p className="text-sm text-text-light">3-4 ημέρες</p>
                      <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                        <p className="text-sm">Βελτιστοποίηση</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Phase 5: Launch */}
                  <div className="relative flex flex-col items-center w-1/5">
                    <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-brand-800">Παράδοση</h4>
                      <p className="text-sm text-text-light">1-2 ημέρες</p>
                      <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                        <p className="text-sm">Έναρξη λειτουργίας</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mobile Timeline (visible only on mobile) */}
            <div className="md:hidden mt-8">
              {/* Mobile Timeline Header */}
              <div className="bg-brand-100 rounded-lg p-4 mb-6 text-center">
                <h4 className="font-bold text-brand-800">Συνολικός χρόνος: 2-3 εβδομάδες</h4>
              </div>
              
              {/* Mobile Timeline Steps */}
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute w-2 bg-brand-200 top-0 bottom-0 left-7 z-0"></div>
                
                {/* Phase 1: Consultation */}
                <div className="relative flex items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white flex-shrink-0">
                    1
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full">
                    <h4 className="font-bold text-brand-800">Αρχική Συνάντηση</h4>
                    <p className="text-sm text-text-light">2-3 ημέρες</p>
                    <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                      <p className="text-sm">Ανάλυση αναγκών</p>
                    </div>
                  </div>
                </div>
                
                {/* Phase 2: Design */}
                <div className="relative flex items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white flex-shrink-0">
                    2
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full">
                    <h4 className="font-bold text-brand-800">Σχεδιασμός</h4>
                    <p className="text-sm text-text-light">3-5 ημέρες</p>
                    <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                      <p className="text-sm">Mockups & UI/UX</p>
                    </div>
                  </div>
                </div>
                
                {/* Phase 3: Development */}
                <div className="relative flex items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white flex-shrink-0">
                    3
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full">
                    <h4 className="font-bold text-brand-800">Ανάπτυξη</h4>
                    <p className="text-sm text-text-light">5-7 ημέρες</p>
                    <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                      <p className="text-sm">Κατασκευή & Λειτουργίες</p>
                    </div>
                  </div>
                </div>
                
                {/* Phase 4: Content & SEO */}
                <div className="relative flex items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white flex-shrink-0">
                    4
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full">
                    <h4 className="font-bold text-brand-800">Περιεχόμενο & SEO</h4>
                    <p className="text-sm text-text-light">3-4 ημέρες</p>
                    <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                      <p className="text-sm">Βελτιστοποίηση</p>
                    </div>
                  </div>
                </div>
                
                {/* Phase 5: Launch */}
                <div className="relative flex items-start mb-4">
                  <div className="w-16 h-16 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-2xl z-10 shadow-lg border-4 border-white flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-full">
                    <h4 className="font-bold text-brand-800">Έλεγχος & Παράδοση</h4>
                    <p className="text-sm text-text-light">1-2 ημέρες</p>
                    <div className="mt-2 bg-[#e6f7f1] p-2 rounded-md">
                      <p className="text-sm">Έναρξη λειτουργίας</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 mt-10">
              <div className="flex items-start">
                <div className="text-brand-200 mr-3 mt-1 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-800 mb-1">Γρήγορη παράδοση χωρίς συμβιβασμούς στην ποιότητα</h4>
                  <p className="text-sm text-text-light">
                    Επιταχύνουμε τη διαδικασία χάρη στην εξειδίκευσή μας στον ιατρικό κλάδο και τα έτοιμα πρότυπα που προσαρμόζουμε στις ανάγκες σας. Σε επείγουσες περιπτώσεις, μπορούμε να παραδώσουμε βασικές ιστοσελίδες σε μόλις 7-10 ημέρες.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h3 className="text-2xl text-gray-700">Τι Περιλαμβάνεται στην Ιατρική σας Ιστοσελίδα</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              <SimpleFeatureItem text="Responsive Σχεδιασμός Για Όλες Τις Συσκευές" isHeading={true} />
              <SimpleFeatureItem text="Προσαρμογή για κινητά & tablets" />
              <SimpleFeatureItem text="Κατασκευή σε WordPress ή custom λύση" />

              <SimpleFeatureItem text="Βελτιστοποίηση Για Μηχανές Αναζήτησης (SEO)" isHeading={true} />
              <SimpleFeatureItem text="SEO βελτιστοποίηση" />
              <SimpleFeatureItem text="Βασικό analytics reporting" />
              <SimpleFeatureItem text="Blog με ιατρικά άρθρα" />

              <SimpleFeatureItem text="Σύστημα Κράτησης Ραντεβού" isHeading={true} />
              <SimpleFeatureItem text="Ενσωμάτωση online ραντεβού" />
              <SimpleFeatureItem text="Φόρμες επικοινωνίας" />
              <SimpleFeatureItem text="Χάρτης & οδηγίες πρόσβασης" />

              <SimpleFeatureItem text="Ασφάλεια & Συμμόρφωση GDPR" isHeading={true} />
              <SimpleFeatureItem text="GDPR συμμόρφωση" />
              <SimpleFeatureItem text="Υποστήριξη & εκπαίδευση" />
              <SimpleFeatureItem text="Σύνδεση με κοινωνικά δίκτυα" />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section id="showcase" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Παραδείγματα Επαγγελματικών Ιστοσελίδων για Ιατρούς
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Δείτε πώς μεταμορφώνουμε παλιές, παρωχημένες ιστοσελίδες σε σύγχρονες, επαγγελματικές διαδικτυακές παρουσίες
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <WebsiteShowcase
              title="Καρδιολόγος Κατ' Οίκον"
              description="Ιατρικές υπηρεσίες στο σπίτι"
              imageSrc="/images/kataskevi-istoselidon-kardiologos-paradeigma.webp"
              features={[
                "Responsive design για όλες τις συσκευές",
                "Online σύστημα κράτησης ραντεβού",
                "SEO βελτιστοποίηση για αύξηση επισκεψιμότητας",
                "Αναβαθμισμένη ταχύτητα φόρτωσης"
              ]}
            />

            <WebsiteShowcase
              title="Φροντίδα Κατ' Οίκον"
              description="Υπηρεσίες φροντίδας ηλικιωμένων"
              imageSrc="/images/kataskevi-istoselidon-frontida-ilikiomenon-paradeigma.webp"
              features={[
                "Μοντέρνος σχεδιασμός με εταιρική ταυτότητα",
                "Παρουσίαση υπηρεσιών φροντίδας",
                "Αναλυτικές σελίδες για κάθε υπηρεσία",
                "Βελτιστοποίηση για τοπικές αναζητήσεις"
              ]}
            />

            <WebsiteShowcase
              title="Doctor Home Care"
              description="Ολοκληρωμένες ιατρικές υπηρεσίες"
              imageSrc="/images/kataskevi-istoselidon-doctor-homecare-paradeigma.webp"
              features={[
                "Premium σχεδιασμός ιστοσελίδας",
                "Πλήρες σύστημα διαχείρισης ραντεβού",
                "Ενσωματωμένο blog ιατρικών άρθρων",
                "Προηγμένη SEO βελτιστοποίηση"
              ]}
            />
          </div>

          <div className="text-center mt-10">
            <Link href="/case-studies" className="text-brand-200 hover:text-brand-300 inline-flex items-center font-medium">
              Δείτε Όλα Τα Case Studies
              <ArrowRightIcon className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Πακέτα & Κόστος Κατασκευής Ιατρικών Ιστοσελίδων
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Οι τιμές προσαρμόζονται στις ανάγκες κάθε ιατρείου. Παρέχουμε διαφανείς και λογικές τιμές ανάλογα με το μέγεθος και τις λειτουργίες της ιστοσελίδας.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingPackage
              title="Βασικό"
              price="350€"
              features={[
                "Απλή παρουσία με 3–5 σελίδες",
                "Responsive design",
                "Φόρμα επικοινωνίας",
                "Βασικό SEO setup",
                "Συμβατότητα με κινητά",
                "1 μήνα υποστήριξη"
              ]}
            />

            <PricingPackage
              title="Επαγγελματικό"
              price="690€"
              features={[
                "Πλήρης ιατρική ιστοσελίδα",
                "Έως 10 σελίδες περιεχομένου",
                "Δημουργία Blog για άρθρα",
                "Προηγμένο SEO setup",
                "Χάρτης Google & οδηγίες",
                "Φόρμες επικοινωνίας",
                "3 μήνες υποστήριξη",
                "Domain & hosting για 1 έτος"
              ]}
              highlighted={true}
            />

            <PricingPackage
              title="Premium"
              price="1250€"
              features={[
                "Custom design",
                "Απεριόριστες σελίδες",
                "Σύστημα online ραντεβού",
                "Προηγμένο SEO & Google Ads setup",
                "Δημιουργία περιεχομένου",
                "Προφίλ σε Google My Business",
                "Σύνδεση με κοινωνικά δίκτυα",
                "12 μήνες υποστήριξη",
                "Domain & hosting για 1 έτος"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Αποτελέσματα από τη Δημιουργία Ιατρικών Sites για Πελάτες μας
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Αποδεδειγμένα αποτελέσματα από πραγματικές ιατρικές ιστοσελίδες που έχουμε αναπτύξει.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ResultCard
              number="+240%"
              text="Αύξηση οργανικής επισκεψιμότητας"
            />

            <ResultCard
              number="#1"
              text="Πρώτη σελίδα Google για 'γυναικολόγος Νέα Σμύρνη'"
            />

            <ResultCard
              number="+3x"
              text="Ραντεβού μέσα από τη νέα ιστοσελίδα"
            />
          </div>

          <div className="bg-brand-50 rounded-lg p-6 mt-10 max-w-3xl mx-auto shadow-md border border-brand-200/20">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-5 h-5 text-brand-200 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-base text-brand-800">Γνωρίζατε ότι:</span>
            </div>
            <p className="text-center text-sm font-medium">
              Το <span className="font-bold text-brand-800">70%</span> των ασθενών θα επισκεφθούν την ιστοσελίδα ενός γιατρού πριν κλείσουν το πρώτο τους ραντεβού για να αξιολογήσουν την αξιοπιστία του.
            </p>
          </div>
        </div>
      </section>



      {/* Related Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <RelatedBlogPosts topic="ιστοσελίδες" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Συχνές Ερωτήσεις για την Κατασκευή Ιστοσελίδας Ιατρείου
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Απαντήσεις στις πιο συχνές ερωτήσεις για την κατασκευή ιατρικών ιστοσελίδων.
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
          <div className="bg-gradient-to-br from-brand-50 to-background p-10 rounded-lg shadow-md max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-100 rounded-full opacity-20"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Ζητήστε Προσφορά για την Ιατρική σας Ιστοσελίδα</h2>
                <p className="text-text-light max-w-2xl mx-auto mb-8">
                  Επικοινωνήστε μαζί μας για μια εξατομικευμένη πρόταση που θα αυξήσει την online παρουσία του ιατρείου σας και θα προσελκύσει νέους ασθενείς.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/epikoinonia" className="btn-primary text-center py-3 px-8">
                    Ζητήστε Δωρεάν Εκτίμηση
                  </Link>
                  <Link href="/epikoinonia" className="btn-outline text-center py-3 px-8">
                    Προγραμματίστε Ραντεβού
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Σχετικές Υπηρεσίες Ιατρικού Digital Marketing
            </h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
          </div>
          <RelatedServices currentService="/ypiresies/kataskevi-istoselidon-gia-giatrous" />
        </div>
      </section>
    </>
  );
}
