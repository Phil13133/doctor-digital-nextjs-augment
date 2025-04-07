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
  title: 'Κατασκευή Ιστοσελίδων για Ιατρούς & Κλινικές | Doctor Digital',
  description: 'Σύγχρονες, responsive και SEO-ready ιστοσελίδες, ειδικά σχεδιασμένες για τις ανάγκες του ιατρικού κλάδου από την Doctor Digital.',
  keywords: ['Ιστοσελίδες για Ιατρούς', 'Medical Websites', 'Web Design Ιατρεία', 'Κατασκευή Site Γιατρών', 'SEO για Ιατρούς'],
};

// Feature Item Component
const FeatureItem = ({ icon, title, description }: { icon: React.ReactNode; title?: string; description: string }) => (
  <div className="flex items-start mb-6">
    <div className="text-brand-200 mt-1 mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <p className="text-text-light">{description}</p>
    </div>
  </div>
);

// Simple Feature Item Component (bullet points)
const SimpleFeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start mb-4">
    <div className="bg-brand-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
      <CheckIcon size={14} color="#ffffff" />
    </div>
    <p className="text-text-dark">{text}</p>
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
  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center">
    <p className="text-3xl font-bold text-brand-200 mb-2">{number}</p>
    <p className="text-text-dark">{text}</p>
  </div>
);

// Before/After Showcase Component
const WebsiteShowcase = ({
  clientName,
  specialty,
  beforeImgSrc,
  afterImgSrc,
  improvements
}: {
  clientName: string;
  specialty: string;
  beforeImgSrc: string;
  afterImgSrc: string;
  improvements: string[];
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="p-4 border-b border-gray-100">
      <h3 className="font-bold text-lg">{clientName}</h3>
      <p className="text-text-light text-sm">{specialty}</p>
    </div>

    <div className="grid grid-cols-2 gap-4 p-4">
      {/* Before */}
      <div className="relative">
        <div className="absolute top-2 left-2 bg-gray-700 text-white text-xs px-2 py-1 rounded z-10">Πριν</div>
        <div className="border border-gray-200 rounded overflow-hidden">
          <Image
            src={beforeImgSrc}
            alt={`${clientName} website before redesign`}
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* After */}
      <div className="relative">
        <div className="absolute top-2 left-2 bg-brand-200 text-white text-xs px-2 py-1 rounded z-10">Μετά</div>
        <div className="border border-gray-200 rounded overflow-hidden">
          <Image
            src={afterImgSrc}
            alt={`${clientName} website after redesign`}
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>

    <div className="p-4 bg-gray-50">
      <h4 className="font-medium text-sm mb-2">Βελτιώσεις:</h4>
      <ul className="space-y-1">
        {improvements.map((improvement, i) => (
          <li key={i} className="flex items-start">
            <div className="text-brand-200 mr-2 mt-0.5 flex-shrink-0">
              <CheckIcon size={14} color="currentColor" />
            </div>
            <span className="text-sm">{improvement}</span>
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
  <div className="relative">
    <div className="flex items-start">
      <div className="w-10 h-10 rounded-full bg-brand-200 flex items-center justify-center text-white font-bold text-base mr-3 mt-0.5 flex-shrink-0">
        {number}
      </div>
      <div>
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-text-light text-sm">{description}</p>
      </div>
    </div>
  </div>
);

// FAQ data
const faqQuestions = [
  {
    question: "Πόσο χρόνο χρειάζεται η κατασκευή μιας ιατρικής ιστοσελίδας;",
    answer: "Ο μέσος χρόνος ανάπτυξης μιας επαγγελματικής ιατρικής ιστοσελίδας είναι 3-5 εβδομάδες, ανάλογα με την πολυπλοκότητα και τις λειτουργίες. Ξεκινάμε με τον σχεδιασμό (1-2 εβδομάδες), συνεχίζουμε με την ανάπτυξη (1-2 εβδομάδες) και ολοκληρώνουμε με τον έλεγχο και τις τελικές προσαρμογές (1 εβδομάδα)."
  },
  {
    question: "Τι περιλαμβάνει το κόστος;",
    answer: "Το κόστος περιλαμβάνει τον σχεδιασμό, την ανάπτυξη, την ενσωμάτωση περιεχομένου, την βελτιστοποίηση SEO, την προσαρμογή για κινητές συσκευές (responsive design), την εκπαίδευση στη διαχείριση περιεχομένου, και 3 μήνες δωρεάν τεχνική υποστήριξη. Επίσης καλύπτουμε το domain και το hosting για τον πρώτο χρόνο στα πακέτα Professional και Premium."
  },
  {
    question: "Θα μπορώ να επεξεργάζομαι μόνος μου την ιστοσελίδα;",
    answer: "Ναι. Όλες οι ιστοσελίδες που κατασκευάζουμε διαθέτουν φιλικό προς τον χρήστη σύστημα διαχείρισης περιεχομένου (CMS), συνήθως WordPress, που σας επιτρέπει να ενημερώνετε εύκολα κείμενα, εικόνες και άλλα στοιχεία. Παρέχουμε επίσης αναλυτικό εγχειρίδιο και εκπαίδευση για να μπορείτε να διαχειρίζεστε το περιεχόμενο με αυτονομία."
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
                Κατασκευή Ιστοσελίδων για Ιατρούς & Κλινικές
              </h1>
              <p className="text-xl text-text-light mb-8 max-w-xl">
                Σύγχρονες, responsive και <Link href="/ypiresies/seo-gia-iatrous" className="text-brand-200 hover:underline">SEO-ready</Link> ιστοσελίδες, ειδικά σχεδιασμένες για τις ανάγκες του ιατρικού κλάδου.
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
                  src="/images/Κατασκευή Ιστοσελίδων για Ιατρούς.webp"
                  alt="Κατασκευή ιστοσελίδων για ιατρούς και κλινικές"
                  width={600}
                  height={400}
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
              <h2 className="text-3xl font-bold mb-4">Γιατί είναι σημαντική η σωστή ιατρική ιστοσελίδα;</h2>
              <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
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
            <h2 className="text-3xl font-bold mb-4">Δημιουργία Ιστοσελίδας από το Α έως το Ω</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
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

          <div className="bg-white p-8 rounded-lg shadow-md max-w-5xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Τι Περιλαμβάνεται στην Ιατρική σας Ιστοσελίδα</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <SimpleFeatureItem text="Κατασκευή σε WordPress ή custom λύση" />
              <SimpleFeatureItem text="Ενσωμάτωση online ραντεβού" />
              <SimpleFeatureItem text="Σελίδες για ειδικότητες & παθήσεις" />
              <SimpleFeatureItem text="Blog με ιατρικά άρθρα" />
              <SimpleFeatureItem text="GDPR συμμόρφωση" />
              <SimpleFeatureItem text="Υποστήριξη & εκπαίδευση" />
              <SimpleFeatureItem text="SEO βελτιστοποίηση" />
              <SimpleFeatureItem text="Φόρμες επικοινωνίας" />
              <SimpleFeatureItem text="Χάρτης & οδηγίες πρόσβασης" />
              <SimpleFeatureItem text="Σύνδεση με κοινωνικά δίκτυα" />
              <SimpleFeatureItem text="Βασικό analytics reporting" />
              <SimpleFeatureItem text="Προσαρμογή για κινητά & tablets" />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section id="showcase" className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Πριν & Μετά: Μεταμορφώσεις Ιατρικών Ιστοσελίδων</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Δείτε πώς μεταμορφώνουμε παλιές, παρωχημένες ιστοσελίδες σε σύγχρονες, επαγγελματικές διαδικτυακές παρουσίες
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <WebsiteShowcase
              clientName="Δρ. Παπαδόπουλος Αθανάσιος"
              specialty="Καρδιολόγος, Αθήνα"
              beforeImgSrc="/images/Κατασκευή Ιστοσελίδων για Ιατρούς.webp"
              afterImgSrc="/images/Ιατρικό μάρκετινγκ για γιατρούς στην Ελλάδα.webp"
              improvements={[
                "Responsive design για όλες τις συσκευές",
                "Online σύστημα κράτησης ραντεβού",
                "SEO βελτιστοποίηση για αύξηση επισκεψιμότητας",
                "Αναβαθμισμένη ταχύτητα φόρτωσης"
              ]}
            />

            <WebsiteShowcase
              clientName="Ορθοπαιδικό Κέντρο Αθηνών"
              specialty="Ορθοπαιδική Κλινική"
              beforeImgSrc="/images/blood-test-application.webp"
              afterImgSrc="/images/patient-scheduling-application.webp"
              improvements={[
                "Μοντέρνος σχεδιασμός με εταιρική ταυτότητα",
                "Παρουσίαση για κάθε ιατρό της κλινικής",
                "Αναλυτικές σελίδες για κάθε θεραπεία",
                "Βελτιστοποίηση για τοπικές αναζητήσεις"
              ]}
            />
          </div>

          <div className="text-center mt-10">
            <Link href="/case-studies" className="text-brand-200 hover:text-brand-300 inline-flex items-center font-medium">
              Δείτε όλα τα έργα μας
              <ArrowRightIcon className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Κατασκευή Ιστοσελίδων Τιμές</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Οι τιμές προσαρμόζονται στις ανάγκες κάθε ιατρείου. Παρέχουμε διαφανείς και λογικές τιμές ανάλογα με το μέγεθος και τις λειτουργίες της ιστοσελίδας.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingPackage
              title="Βασικό"
              price="480€"
              features={[
                "Απλή παρουσία με 3–4 σελίδες",
                "Responsive design",
                "Φόρμα επικοινωνίας",
                "Βασικό SEO setup",
                "Συμβατότητα με κινητά",
                "1 μήνα υποστήριξη"
              ]}
            />

            <PricingPackage
              title="Επαγγελματικό"
              price="890€"
              features={[
                "Πλήρης ιατρική ιστοσελίδα",
                "Έως 10 σελίδες περιεχομένου",
                "Blog για άρθρα",
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
              price="1250€+"
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
            <h2 className="text-3xl font-bold mb-4">Τι έχουν πετύχει οι πελάτες μας;</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
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

          <div className="bg-brand-200/10 rounded-lg p-8 mt-12 max-w-3xl mx-auto">
            <p className="text-center text-base">
              <span className="font-bold">Γνωρίζατε ότι:</span> Το 70% των ασθενών θα επισκεφθούν την ιστοσελίδα ενός γιατρού πριν κλείσουν το πρώτο τους ραντεβού για να αξιολογήσουν την αξιοπιστία του.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <RelatedServices currentService="/ypiresies/kataskevi-istoselidon-gia-giatrous" />
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* @ts-expect-error Async Server Component */}
          <RelatedBlogPosts topic="ιστοσελίδες" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Συχνές Ερωτήσεις</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
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
                <h2 className="text-2xl font-bold mb-4">Ζητήστε Επαγγελματική Ιστοσελίδα για το Ιατρείο σας</h2>
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
    </>
  );
}
