import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckIcon, ArrowRightIcon } from '@/components/icons';
import FAQSchema from '@/components/schema/FAQSchema';
import FAQToggleItem from '@/components/FAQToggleItem';
import FeatureListItem from '@/components/FeatureListItem';
import TestimonialsSchema from '@/components/schema/TestimonialsSchema';

export const metadata: Metadata = {
  title: 'Ιατρικό Μάρκετινγκ | Google Ads & SEO | Doctor Digital',
  description: 'Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Google Ads, SEO, περιεχόμενο & ιστοσελίδες για γιατρούς που θέλουν να προσελκύσουν νέους ασθενείς.',
  keywords: ['Ιατρικό Μάρκετινγκ', 'SEO για Ιατρούς', 'Google Ads για Ιατρεία', 'Ιατρικές Ιστοσελίδες', 'Digital Marketing για Γιατρούς', 'Ελλάδα'],
};

// Service card component
const ServiceCard = ({
  icon,
  title,
  description,
  path
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  path: string;
}) => (
  <div className="shadow-card hover-up p-6 rounded-lg h-full flex flex-col">
    <div>
      <div className="mb-4 text-text-dark">{icon}</div>
      <h3 className="text-xl md:text-2xl font-bold mb-3 text-text-dark leading-tight">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
    <div className="mt-auto pt-3">
      <Link href={path} className="text-brand-200 hover:text-brand-300 text-sm font-medium flex items-center">
        Μάθετε Περισσότερα
        <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  </div>
);

// Feature list item component
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start mb-3">
    <div className="bg-brand-200 rounded-full p-1.5 mr-3 mt-1 flex-shrink-0">
      <CheckIcon size={16} color="#ffffff" />
    </div>
    <p>{text}</p>
  </div>
);

// These components are defined for use in future updates
// Leaving them commented to avoid unused variable warnings

/*
// Feature item with emoji component
const FeatureItemWithEmoji = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-start mb-6">
    <div className="bg-brand-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
      <CheckIcon size={16} color="#ffffff" />
    </div>
    <div>
      <p className="font-bold mb-1">{title}</p>
      <p className="text-text-light">{description}</p>
    </div>
  </div>
);

// Process step component
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
    <div className="flex items-start mb-2">
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
*/

export default function Home() {
  // FAQ questions data
  const faqQuestions = [
    {
      question: "Πόσο κοστίζει η διαφήμιση Google Ads για γιατρούς;",
      answer: "Το κόστος εξαρτάται από την ειδικότητα και την περιοχή. Ξεκινά από 100€/μήνα σε διαφημιστικό budget και προσαρμόζεται ανάλογα με τον ανταγωνισμό και τις λέξεις-κλειδιά."
    },
    {
      question: "Σε πόσο καιρό βλέπω αποτελέσματα από το SEO;",
      answer: "Τα πρώτα οργανικά αποτελέσματα εμφανίζονται συνήθως μέσα σε 2–3 μήνες. Η πρόοδος εξαρτάται από τη δομή της ιστοσελίδας, τον ανταγωνισμό και τη συνέπεια στη βελτιστοποίηση."
    },
    {
      question: "Για ποιες ειδικότητες προσφέρετε ιατρικό λογισμικό;",
      answer: "Αναπτύσσουμε λογισμικό για ιατρούς όλων των ειδικοτήτων, πολυϊατρεία, κλινικές, μικροβιολογικά εργαστήρια και διαγνωστικά κέντρα."
    },
    {
      question: "Ποια είναι η διαφορά ανάμεσα στο SEO και το Google Ads;",
      answer: "Το Google Ads προσφέρει άμεσα αποτελέσματα μέσω πληρωμένων διαφημίσεων, ενώ το SEO είναι μακροπρόθεσμη στρατηγική για οργανική κατάταξη στην Google. Ο ιδανικός συνδυασμός και των δύο μεγιστοποιεί την προβολή σας."
    },
    {
      question: "Μπορείτε να βοηθήσετε ιατρούς που δεν έχουν ακόμη ιστοσελίδα;",
      answer: "Ναι, δημιουργούμε πλήρως λειτουργικές και καλαίσθητες ιστοσελίδες για γιατρούς από την αρχή, φιλικές προς κινητά, γρήγορες και έτοιμες για SEO."
    }
  ];
  return (
    <>
      <FAQSchema questions={faqQuestions} />
      {/* Hero Section */}
      <section className="relative bg-background overflow-hidden">
        <div className="container mx-auto py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
               Εξειδικευμένο Ιατρικό Μάρκετινγκ για Γιατρούς & Κλινικές
              </h1>
              <p className="text-lg text-text-light mb-8 max-w-lg">
              Αποκτήστε περισσότερα ραντεβού και μεγαλύτερη προβολή με λύσεις Google Ads, SEO και ιατρικό περιεχόμενο – εξατομικευμένα για τον ιατρικό σας κλάδο.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center">
                Ζητήστε Δωρεάν Αξιολόγηση
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center">
                  Κλείστε Ραντεβού
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Ιατρικό μάρκετινγκ για γιατρούς στην Ελλάδα.webp"
                  alt="Ιατρικό μάρκετινγκ για γιατρούς στην Ελλάδα"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-brand-200 px-4 py-3 rounded-md shadow-lg hidden md:block">
                <p className="text-white text-sm font-medium">
                  Προσέλκυση Νέων Ασθενών
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Υπηρεσίες Ιατρικού Μάρκετινγκ</h2>
            <p className="text-text-light max-w-3xl mx-auto">
              Εξειδικευμένες ψηφιακές υπηρεσίες σχεδιασμένες αποκλειστικά για τις ανάγκες ιατρών και κλινικών στην Ελλάδα.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <ServiceCard
              icon={
                <div className="w-16 h-16">
                  <Image
                    src="/images/icons/διαφημιση-google-ads.svg"
                    alt="Google Ads για ιατρούς - στοχευμένες διαφημίσεις"
                    width={64}
                    height={64}
                  />
                </div>
              }
              title="Google Ads για Ιατρούς"
              description="Εμφανιστείτε στην κορυφή της Google με στοχευμένες διαφημίσεις όταν οι ασθενείς αναζητούν τις υπηρεσίες σας."
              path="/ypiresies/diafimisi-sth-google"
            />

<ServiceCard
              icon={
                <div className="w-16 h-16">
                  <Image
                    src="/images/icons/SEO για ιατρικές ιστοσελίδες.svg"
                    alt="SEO για ιατρικές ιστοσελίδες - ψηφιακή προβολή για γιατρούς"
                    width={64}
                    height={64}
                  />
                </div>
              }
              title="SEO για Ιατρικές Ιστοσελίδες"
              description="Ανεβάστε το ιατρείο σας στα οργανικά αποτελέσματα με ασφαλείς και ηθικές πρακτικές βελτιστοποίησης."
              path="/ypiresies/seo-gia-iatrous"
            />

            <ServiceCard
              icon={
                <div className="w-16 h-16">
                  <Image
                    src="/images/icons/περιεχόμενο για ιστοσελίδες και blogs για γιατρούς.svg"
                    alt="Ιατρικό περιεχόμενο για ιστοσελίδες και blogs για γιατρούς"
                    width={64}
                    height={64}
                  />
                </div>
              }
              title="Ιατρικό Περιεχόμενο & Blogging"
              description="Άρθρα, ενημερωτικά κείμενα και σελίδες υπηρεσιών γραμμένα με επιστημονική εγκυρότητα."
              path="/ypiresies/copywriting-gia-iatrous"
            />

            <ServiceCard
              icon={
                <div className="w-16 h-16">
                  <Image
                    src="/images/icons/Κατασκευή ιστοσελίδων για ιατρούς.svg"
                    alt="Κατασκευή ιστοσελίδων για ιατρούς - responsive design"
                    width={64}
                    height={64}
                  />
                </div>
              }
              title="Κατασκευή Ιστοσελίδων για Ιατρούς"
              description="Σύγχρονα, responsive και SEO-ready sites ειδικά σχεδιασμένα για τον ιατρικό κλάδο."
              path="/ypiresies/kataskevi-istoselidon-gia-giatrous"
            />

            <ServiceCard
              icon={
                <div className="w-16 h-16">
                  <Image
                    src="/images/icons/software-development.svg"
                    alt="Ιατρικό Λογισμικό - σύγχρονα συστήματα διαχείρισης"
                    width={64}
                    height={64}
                  />
                </div>
              }
              title="Ιατρικό Λογισμικό"
              description="Σύγχρονα συστήματα διαχείρισης ραντεβού, ασθενών και ιατρικών δεδομένων."
              path="/ypiresies/iatriko-logismiko"
            />
          </div>

          <div className="text-center">
            <Link href="/ypiresies" className="btn-primary inline-flex items-center justify-center py-3 px-6">
              Όλες οι Υπηρεσίες
              <ArrowRightIcon className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Γιατί να Επιλέξετε τη Doctor Digital</h2>

              <div className="space-y-4">
                <FeatureItem text="Εξειδίκευση αποκλειστικά στον ιατρικό τομέα" />
                <FeatureItem text="Αποτελέσματα μετρήσιμα & διαφανή" />
                <FeatureItem text="Συμμόρφωση με το νομικό πλαίσιο προβολής ιατρών στην Ελλάδα" />
                <FeatureItem text="Προσωποποιημένες στρατηγικές ανά ειδικότητα" />
                <FeatureItem text="Συνεχής υποστήριξη & αναφορές απόδοσης" />
              </div>

              <div className="mt-8">
                <Link href="/ypiresies" className="learn-more-cta inline-flex items-center">
                  Μάθετε περισσότερα για τις υπηρεσίες μας
                  <ArrowRightIcon className="ml-2" size={16} />
                </Link>
              </div>
            </div>

            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Εξειδικευμένο ιατρικό μάρκετινγκ με μετρήσιμα αποτελέσματα.webp"
                  alt="Εξειδικευμένο ιατρικό μάρκετινγκ με μετρήσιμα αποτελέσματα"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Software Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ιατρικό Λογισμικό & Web Apps για Ιατρούς</h2>
            <p className="text-text-light max-w-3xl mx-auto">
              Αυξήστε την αποδοτικότητα του ιατρείου σας με σύγχρονες, αυτοματοποιημένες λύσεις λογισμικού.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Ιατρικό Λογισμικό & Web Apps για Ιατρούς.webp"
                  alt="Ιατρικό Λογισμικό και Εφαρμογές για Κλινικές και Ιατρεία"
                  width={600}
                  height={400}
                  className="w-full max-h-[400px] object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-4">
              <FeatureListItem
                title="Online Ραντεβού & Διαχείριση Ασθενών"
                description="Επιτρέψτε στους ασθενείς να κλείνουν ραντεβού online με αυτοματοποιημένες ειδοποιήσεις SMS & email."
              />

              <FeatureListItem
                title="Ιατρικό CRM & Σύστημα Ηλεκτρονικών Αρχείων"
                description="Οργανώστε το ιστορικό ασθενών, παρακολουθήστε ιατρικές εγγραφές και διαχειριστείτε την επικοινωνία εύκολα."
              />

              <FeatureListItem
                title="Custom Ιατρικό Λογισμικό για Κλινικές & Διαγνωστικά Κέντρα"
                description="Δημιουργούμε προσαρμοσμένες εφαρμογές για τηλεϊατρική, φόρμες εισαγωγής ασθενών, e-prescriptions & πολλά άλλα."
              />

              <div className="mt-8 pl-10">
                <Link href="/ypiresies/iatriko-logismiko" className="btn-primary inline-flex items-center justify-center py-3 px-6">
                  Ανακαλύψτε το Ιατρικό μας Λογισμικό
                  <ArrowRightIcon className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Modern Redesign */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-100/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-brand-200/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 max-w-6xl mx-auto">
            <div className="absolute w-full h-full bg-gradient-to-r from-brand-100/5 to-brand-200/5 rounded-3xl rotate-3 scale-105"></div>
          </div>
        </div>

        <div className="container mx-auto relative z-10">
          {/* Section Header with fixed spacing */}
          <div className="text-center mb-20 relative">
            <span className="block py-1.5 px-5 rounded-full bg-brand-100/30 text-brand-300 font-semibold text-sm mb-8 mx-auto w-max">
              ΙΑΤΡΙΚΈΣ ΕΦΑΡΜΟΓΈΣ
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Ιατρικές Εφαρμογές Που Κάνουν Τη Διαφορά
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-brand-100 to-brand-200 rounded-full"></div>
            </h2>

            <p className="text-lg text-text-light max-w-3xl mx-auto mb-8">
              Δείτε πώς οι εξατομικευμένες λύσεις μας βοήθησαν πραγματικές ιατρικές επιχειρήσεις να επιλύσουν σύνθετα προβλήματα.
            </p>

            <h3 className="text-lg font-medium text-text-dark mb-10">
              Αναπτύσσουμε εξειδικευμένο ιατρικό λογισμικό για γιατρούς, κλινικές και θεραπευτήρια στην Ελλάδα
            </h3>
          </div>

          {/* Case Studies */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* BloodTestApp - 3D Card Design */}
              <div className="group relative bg-white p-0 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                {/* Upper part - App Image & Logo */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-200/30 to-transparent z-10 opacity-60"></div>
                  <Image
                    src="/images/blood-test-application.webp"
                    alt="BloodTestApp – Εφαρμογή Αναζήτησης Αιματολογικών Εξετάσεων"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* App name floating effect */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-20">
                    <h3 className="text-xl font-bold text-brand-300">BloodTestApp</h3>
                  </div>
                </div>

                {/* Client information - prominent placement */}
                <div className="bg-brand-50/50 border-y border-brand-100/20 py-3 px-6">
                <p className="font-medium text-text-dark flex items-center justify-center text-center">
                  <span className="bg-brand-100/30 text-brand-300 font-semibold text-sm px-2 py-0.5 rounded mr-2">Πελάτης</span>
                  Ιδιωτική εταιρεία κατ' οίκον αιμοληψίας
                </p>
              </div>

              {/* Content part */}
              <div className="p-6 md:p-8">
                  <p className="text-text-light font-medium mb-6">
                    Εφαρμογή Αναζήτησης Αιματολογικών Εξετάσεων & Τιμολόγησης
                  </p>

                  {/* Problem/Solution sections (always visible) */}
                  <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Problem Section - Always visible */}
                    <div className="relative rounded-xl border border-red-100 overflow-hidden">
                      <div className="flex items-center justify-center text-center py-3 px-2 bg-red-100 border-b border-red-200 font-bold text-sm text-red-800">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Πρόβλημα
                      </div>

                      <div className="p-4 bg-red-50">
                        <p className="text-sm">
                          <span className="font-bold">Καθυστερήσεις και λάθη</span> κατά την αναζήτηση εξετάσεων και την τιμολόγηση
                        </p>
                      </div>
                    </div>

                    {/* Solution Section - Always visible */}
                    <div className="relative rounded-xl border border-green-100 overflow-hidden">
                      <div className="flex items-center justify-center text-center py-3 px-2 bg-green-100 border-b border-green-200 font-bold text-sm text-green-800">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Λύση
                      </div>

                      <div className="p-4 bg-green-50">
                        <p className="text-sm">
                          <span className="font-bold">Σύστημα άμεσης αναζήτησης</span> εξετάσεων με καλάθι και αυτόματο υπολογισμό κόστους/τιμής σε πραγματικό χρόνο
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* App Preview */}
                  <div className="mt-6 rounded-xl border border-gray-100 p-2 bg-gray-50 hover:shadow-md transition-shadow">
                    <Image
                      src="/images/blood-test-application-2.webp"
                      alt="BloodTestApp Interface"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">Διεπαφή αναζήτησης εξετάσεων</p>
                  </div>
                </div>
              </div>

              {/* PlanMed Case Study - 3D Card Design */}
              <div className="group relative bg-white p-0 rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                {/* Upper part - App Image & Logo */}
                <div className="relative h-64 overflow-hidden rounded-t-2xl">
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-200/30 to-transparent z-10 opacity-60"></div>
                  <Image
                    src="/images/patient-scheduling-application.webp"
                    alt="PlanMed – Σύστημα Διαχείρισης Επαναλαμβανόμενων Ραντεβού Ασθενών"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* App name floating effect */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-20">
                    <h3 className="text-xl font-bold text-brand-300">PlanMed</h3>
                  </div>
                </div>

                {/* Client information - prominent placement */}
                <div className="bg-brand-50/50 border-y border-brand-100/20 py-3 px-6">
                  <p className="font-medium text-text-dark flex items-center justify-center text-center">
                    <span className="bg-brand-100/30 text-brand-300 font-semibold text-sm px-2 py-0.5 rounded mr-2">Πελάτης</span>
                    Πάροχος υπηρεσιών νοσηλείας κατ' οίκον
                  </p>
                </div>

                {/* Content part */}
                <div className="p-6 md:p-8">
                  <p className="text-text-light font-medium mb-6">
                    Σύστημα Διαχείρισης Επαναλαμβανόμενων Ραντεβού Ασθενών
                  </p>

                  {/* Problem/Solution sections (always visible) */}
                  <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Problem Section - Always visible */}
                    <div className="relative rounded-xl border border-red-100 overflow-hidden">
                      <div className="flex items-center justify-center text-center py-3 px-2 bg-red-100 border-b border-red-200 font-bold text-sm text-red-800">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Πρόβλημα
                      </div>

                      <div className="p-4 bg-red-50">
                        <p className="text-sm">
                          <span className="font-bold">Χάνονταν μελλοντικά ραντεβού</span> λόγω απουσίας επαναλαμβανόμενου χρονοδιαγράμματος
                        </p>
                      </div>
                    </div>

                    {/* Solution Section - Always visible */}
                    <div className="relative rounded-xl border border-green-100 overflow-hidden">
                      <div className="flex items-center justify-center text-center py-3 px-2 bg-green-100 border-b border-green-200 font-bold text-sm text-green-800">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Λύση
                      </div>

                      <div className="p-4 bg-green-50">
                        <p className="text-sm">
                          <span className="font-bold">Σύστημα επαναλαμβανόμενου προγραμματισμού</span> με ειδοποιήσεις και έξυπνη διαχείριση πόρων
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* App Preview */}
                  <div className="mt-6 rounded-xl border border-gray-100 p-2 bg-gray-50 hover:shadow-md transition-shadow">
                    <Image
                      src="/images/patient-scheduling-application-settings.webp"
                      alt="PlanMed Advanced Settings Interface"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">Προηγμένες ρυθμίσεις προγραμματισμού</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA with improved shadow effects */}
          <div className="mt-20 relative">
            {/* Subtle outer shadow effect */}
            <div className="absolute -inset-4 bg-white/50 rounded-2xl blur-xl"></div>

            {/* Main CTA card with enhanced shadow */}
            <div className="relative bg-white p-10 rounded-xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-gray-100 max-w-4xl mx-auto overflow-hidden">
              {/* Gradient accent line at top */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-100 to-brand-200"></div>

              <p className="text-2xl font-bold mb-4 text-center text-text-heading">
                Χρειάζεστε Αντίστοιχη Εφαρμογή Για Το Ιατρείο Ή Την Επιχείρησή Σας;
              </p>
              <p className="text-text-light mb-8 text-center max-w-3xl mx-auto">
                Έχουμε αναπτύξει δεκάδες εξειδικευμένες εφαρμογές για τον ιατρικό κλάδο. Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας.
              </p>
              <div className="text-center">
                <Link
                  href="/epikoinonia"
                  className="inline-block relative overflow-hidden group"
                >
                  <span className="block btn-primary px-8 py-3.5 text-lg relative z-10">
                    Ζητήστε Δωρεάν Συμβουλευτική
                    <ArrowRightIcon className="ml-2 inline-block transition-transform group-hover:translate-x-1" size={16} />
                  </span>
                  <span className="absolute inset-0 bg-brand-300 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section - Modern Redesigned */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-brand-200 rounded-full opacity-5 blur-3xl"></div>

        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Αποτελέσματα στην Πράξη
              <span className="absolute -bottom-3 left-0 w-full h-1 bg-brand-200 transform scale-x-50 opacity-70"></span>
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Η Doctor Digital έχει βοηθήσει ιατρούς και κλινικές να βελτιώσουν την ψηφιακή τους παρουσία και να αυξήσουν τις κρατήσεις τους με μετρήσιμα, αποδεδειγμένα αποτελέσματα.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Main stats showcase - glass morphism design */}
            <div className="relative mb-16">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-100/20 to-brand-200/10 backdrop-blur-sm rounded-2xl"></div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-center justify-center mb-10">
                  <h3 className="text-xl font-bold text-text-dark flex items-center justify-center">
                    <div className="w-8 h-8 mr-3 icon-black">
                      <Image
                        src="/images/icons/Ενδεικτικά Στοιχεία Επιτυχίας.svg"
                        alt="Ενδεικτικά Στοιχεία Επιτυχίας"
                        width={32}
                        height={32}
                        className="w-full h-auto"
                      />
                    </div>
                    Ενδεικτικά Στοιχεία Επιτυχίας
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
                  {/* Stat Card 1 - Animated on scroll */}
                  <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-200 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 p-3 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-300">
                          <Image
                            src="/images/icons/Τριπλασιασμός επισκέψεων.svg"
                            alt="Τριπλασιασμός επισκέψεων"
                            width={40}
                            height={40}
                            className="w-full h-auto invert brightness-0"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-brand-200 to-brand-300">+200%</div>
                        <p className="text-lg font-semibold mb-2">Τριπλασιασμός οργανικών επισκέψεων</p>
                        <p className="text-text-light text-sm">
                          Από 5.000 σε 15.000 επισκέψεις/μήνα μέσω SEO στρατηγικής.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-200 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 p-3 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-300">
                          <Image
                            src="/images/icons/Μείωση κόστους.svg"
                            alt="Μείωση κόστους"
                            width={40}
                            height={40}
                            className="w-full h-auto invert brightness-0"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-brand-200 to-brand-300">58%</div>
                        <p className="text-lg font-semibold mb-2">Μείωση κόστους ανά ραντεβού</p>
                        <p className="text-text-light text-sm">
                          Μέσω βελτιστοποίησης Google Ads και landing pages.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stat Card 3 */}
                  <div className="group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="absolute top-0 left-0 w-1 h-full bg-brand-200 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
                    <div className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="w-12 h-12 p-3 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors duration-300">
                          <Image
                            src="/images/icons/Πρώτη θέση Google.svg"
                            alt="Πρώτη θέση Google"
                            width={40}
                            height={40}
                            className="w-full h-auto invert brightness-0"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-brand-200 to-brand-300">#1</div>
                        <p className="text-lg font-semibold mb-2">Θέση στην Google για ανταγωνιστικά keywords</p>
                        <p className="text-text-light text-sm">
                          Όπως "ορθοπαιδικός Περιστέρι" — από τη 10η θέση σε 3 μήνες.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client benefits section */}
                <div className="relative p-8 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-inner">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-100">
                    <div className="flex items-center text-brand-200 font-bold">
                      <div className="w-6 h-6 mr-2 icon-black">
                        <Image
                          src="/images/icons/Τι Κερδίζουν οι Πελάτες.svg"
                          alt="Τι Κερδίζουν οι Πελάτες"
                          width={24}
                          height={24}
                          className="w-full h-auto"
                        />
                      </div>
                      Τι Κερδίζουν οι Πελάτες μας:
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3 group-hover:bg-brand-200 transition-colors duration-300">
                        <CheckIcon size={16} color="#FFFFFF" className="transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium">Σταθερή αύξηση σε νέα ραντεβού κάθε μήνα</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3 group-hover:bg-brand-200 transition-colors duration-300">
                        <CheckIcon size={16} color="#FFFFFF" className="transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium">Βελτιωμένο κόστος απόκτησης ασθενών</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3 group-hover:bg-brand-200 transition-colors duration-300">
                        <CheckIcon size={16} color="#FFFFFF" className="transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium">Ισχυρή τοπική παρουσία στις αναζητήσεις της Google</p>
                      </div>
                    </div>

                    <div className="flex items-start group">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center mr-3 group-hover:bg-brand-200 transition-colors duration-300">
                        <CheckIcon size={16} color="#FFFFFF" className="transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="font-medium">Ορατά και μετρήσιμα αποτελέσματα σε λιγότερο από 90 ημέρες</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/epikoinonia" className="btn-primary text-center relative overflow-hidden group">
                      <span className="relative z-10">Ζητήστε Δωρεάν Ανάλυση</span>
                      <span className="absolute inset-0 bg-brand-300 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </Link>
                    <Link href="/epikoinonia" className="btn-outline text-center relative overflow-hidden group">
                      <span className="relative z-10">Καλέστε Τώρα</span>
                      <span className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section - Modern Redesign */}
          <section className="py-20 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-100/30 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-200/20 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto relative">
              <div className="text-center mb-16">
                <span className="block py-1.5 px-5 rounded-full bg-brand-100/30 text-brand-300 font-semibold text-sm mb-8 mx-auto w-max">
                  ΜΕΘΟΔΟΛΟΓΙΑ
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block mt-2">
                  Πώς Ξεκινάμε
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-brand-100 to-brand-200 rounded-full"></div>
                </h2>
                <p className="text-lg text-text-light max-w-3xl mx-auto mb-14">
                  Ακολουθούμε μια δομημένη προσέγγιση για να διασφαλίσουμε ότι παρέχουμε ακριβώς αυτό που χρειάζεται το ιατρείο σας.
                </p>
              </div>

              {/* Interactive process timeline */}
              <div className="max-w-5xl mx-auto relative">
                {/* Connecting line */}
                <div className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-brand-100 to-brand-200 transform -translate-x-1/2 hidden md:block"></div>

                <div className="space-y-20 md:space-y-0">
                  {/* Step 1 */}
                  <div className="md:grid md:grid-cols-2 md:gap-16 relative items-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-white text-2xl font-bold mx-auto md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 shadow-lg shadow-brand-100/30 group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>

                    <div className="md:text-right md:pr-16">
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 md:mt-0 border border-gray-100 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full opacity-50 -mr-10 -mt-10"></div>
                        <div className="relative">
                          <h3 className="text-xl font-bold mb-3 text-text-dark group-hover:text-brand-300 transition-colors">Δωρεάν ανάλυση της ψηφιακής σας παρουσίας</h3>
                          <p className="text-text-light">Αξιολογούμε την τρέχουσα κατάσταση και εντοπίζουμε ευκαιρίες βελτίωσης.</p>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      {/* Empty on right side for Step 1 */}
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="md:grid md:grid-cols-2 md:gap-16 relative items-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-white text-2xl font-bold mx-auto md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 shadow-lg shadow-brand-100/30 group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>

                    <div className="hidden md:block">
                      {/* Empty on left side for Step 2 */}
                    </div>

                    <div className="md:pl-16">
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 md:mt-0 border border-gray-100 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-50 rounded-full opacity-50 -ml-10 -mt-10"></div>
                        <div className="relative">
                          <h3 className="text-xl font-bold mb-3 text-text-dark group-hover:text-brand-300 transition-colors">Στρατηγική βασισμένη στον στόχο του ιατρείου</h3>
                          <p className="text-text-light">Δημιουργούμε εξατομικευμένο πλάνο με βάση τις ανάγκες σας και την ειδικότητά σας.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="md:grid md:grid-cols-2 md:gap-16 relative items-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-white text-2xl font-bold mx-auto md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 shadow-lg shadow-brand-100/30 group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>

                    <div className="md:text-right md:pr-16">
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 md:mt-0 border border-gray-100 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-full opacity-50 -mr-10 -mt-10"></div>
                        <div className="relative">
                          <h3 className="text-xl font-bold mb-3 text-text-dark group-hover:text-brand-300 transition-colors">Υλοποίηση, παρακολούθηση & βελτιστοποίηση</h3>
                          <p className="text-text-light">Εφαρμόζουμε τη στρατηγική και προσαρμόζουμε συνεχώς για μέγιστα αποτελέσματα.</p>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      {/* Empty on right side for Step 3 */}
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="md:grid md:grid-cols-2 md:gap-16 relative items-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-white text-2xl font-bold mx-auto md:absolute md:left-1/2 md:top-0 md:transform md:-translate-x-1/2 z-10 shadow-lg shadow-brand-100/30 group-hover:scale-110 transition-transform duration-300">
                      4
                    </div>

                    <div className="hidden md:block">
                      {/* Empty on left side for Step 4 */}
                    </div>

                    <div className="md:pl-16">
                      <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mt-8 md:mt-0 border border-gray-100 relative overflow-hidden group-hover:-translate-y-1 transition-transform">
                        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-50 rounded-full opacity-50 -ml-10 -mt-10"></div>
                        <div className="relative">
                          <h3 className="text-xl font-bold mb-3 text-text-dark group-hover:text-brand-300 transition-colors">Μηνιαία αναφορά απόδοσης</h3>
                          <p className="text-text-light">Λαμβάνετε τακτικές αναφορές με κατανοητά στοιχεία και προτάσεις βελτίωσης.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA at bottom */}
              <div className="mt-20 text-center">
                <div className="inline-block bg-brand-50 p-1 rounded-xl shadow-lg">
                  <Link
                    href="/epikoinonia"
                    className="bg-white hover:bg-brand-50 px-8 py-4 rounded-lg inline-flex items-center transition-colors shadow-sm border border-gray-100 group"
                  >
                    <span className="bg-gradient-to-r from-brand-200 to-brand-300 p-2 mr-4 rounded-lg text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </span>
                    <span>
                      <p className="font-bold text-text-dark group-hover:text-brand-300 transition-colors">Ξεκινήστε τη Συνεργασία Σήμερα</p>
                      <p className="text-sm text-text-light">Δωρεάν αξιολόγηση των αναγκών σας</p>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Συχνές Ερωτήσεις για το Ιατρικό Μάρκετινγκ</h2>
                <p className="text-text-light max-w-2xl mx-auto">
                  Απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με τις υπηρεσίες ιατρικού μάρκετινγκ
                </p>
              </div>

              <div className="max-w-2xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 px-5">
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

          {/* Testimonials Section */}
          <section className="py-16 bg-background">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Τι λενε για Εμας;</h2>
                <p className="text-text-light max-w-3xl mx-auto">
                  Δείτε τι λένε οι ιατροί που έχουν ήδη συνεργαστεί μαζί μας και έχουν δει πραγματικά αποτελέσματα.
                </p>
              </div>

              {/* Testimonials Schema */}
              <TestimonialsSchema
                testimonials={[
                  {
                    author: "Εμμανουηλ Κυριαζοπουλος",
                    position: "Καρδιολόγος",
                    text: "Μέσα σε 2 μήνες, είδαμε σημαντική αύξηση στα ραντεβού μας μέσω της Google! Η Doctor Digital μάς βοήθησε να στοχεύσουμε ακριβώς τους ασθενείς που χρειαζόμαστε.",
                    rating: 5
                  },
                  {
                    author: "Dr. Σοφία Ν.",
                    position: "Οδοντίατρος",
                    text: "Με το SEO, το ιατρείο μου εμφανίζεται στα πρώτα αποτελέσματα της Google. Έχουμε διπλασιάσει τις κρατήσεις από online αναζητήσεις.",
                    rating: 5
                  },
                  {
                    author: "Κωνσταντίνος Κωστογλάνης",
                    position: "Γενικός Χειρουργός",
                    organization: "Doctor Home Care",
                    text: "Έχω συνεργαστεί με πολλές εταιρείες SEO στο παρελθόν, αλλά καμία δεν έχει πλησιάσει την SocioSEO. Η τεχνογνωσία τους στις διαφημίσεις της Google και στο SEO είναι πραγματικά εξαιρετική.",
                    rating: 5
                  }
                ]}
                itemReviewed={{
                  name: "Doctor Digital",
                  description: "Εξειδικευμένες λύσεις ιατρικού μάρκετινγκ στην Ελλάδα. Google Ads, SEO, περιεχόμενο & ιστοσελίδες για γιατρούς που θέλουν να προσελκύσουν νέους ασθενείς.",
                  url: "https://doctordigital.gr",
                  image: "https://doctordigital.gr/images/Doctordigital-SVG-logo.svg"
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-200 hover:shadow-lg transition-shadow">
                  <div className="relative mb-4">
                  <div className="absolute -top-3 -left-2 text-3xl text-text-dark opacity-30">"</div>
                    <p className="italic text-text-light pt-2">
                      Μέσα σε 2 μήνες, είδαμε σημαντική αύξηση στα ραντεβού μας μέσω της Google!
                      Η Doctor Digital μάς βοήθησε να στοχεύσουμε ακριβώς τους ασθενείς που χρειαζόμαστε.
                    </p>
                  </div>
                  <div className="flex items-center border-t border-gray-100 pt-3 mt-3">
                    <div className="flex-1">
                      <p className="font-semibold">Εμμανουηλ Κυριαζοπουλος</p>
                      <p className="text-sm text-text-light">Καρδιολόγος</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-200 hover:shadow-lg transition-shadow">
                  <div className="relative mb-4">
                    <div className="absolute -top-3 -left-2 text-3xl text-text-dark opacity-30">"</div>
                    <p className="italic text-text-light pt-2">
                      Με το SEO, το ιατρείο μου εμφανίζεται στα πρώτα αποτελέσματα της Google.
                      Έχουμε διπλασιάσει τις κρατήσεις από online αναζητήσεις.
                    </p>
                  </div>
                  <div className="flex items-center border-t border-gray-100 pt-3 mt-3">
                    <div className="flex-1">
                      <p className="font-semibold">Dr. Σοφία Ν.</p>
                      <p className="text-sm text-text-light">Οδοντίατρος</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-brand-200 hover:shadow-lg transition-shadow">
                <div className="relative mb-4">
                  <div className="absolute -top-3 -left-2 text-3xl text-text-dark opacity-30">"</div>
                  <p className="italic text-text-light pt-2">
                    Έχω συνεργαστεί με πολλές εταιρείες SEO στο παρελθόν, αλλά καμία δεν έχει
                    πλησιάσει την SocioSEO. Η τεχνογνωσία τους στις διαφημίσεις της Google και
                    στο SEO είναι πραγματικά εξαιρετική. Μέσα σε λίγους μήνες, οι διαφημίσεις
                    μας δημιούργησαν αξιοσημείωτες μετατροπές και η ιστοσελίδα της εταιρείας μας
                    άρχισε να κατατάσσεται στην πρώτη σελίδα των αποτελεσμάτων αναζήτησης για
                    εξαιρετικά ανταγωνιστικές λέξεις-κλειδιά. Η συνεργασία μας με τη SocioSEO
                    είναι μια από τα τις καλύτερες επιχειρηματικές μας αποφάσεις!
                  </p>
                </div>
                <div className="flex items-center border-t border-gray-100 pt-3 mt-3">
                  <div className="flex-1">
                    <p className="font-semibold">Κωνσταντίνος Κωστογλάνης</p>
                    <p className="text-sm text-text-light">Γενικός Χειρουργός, Doctor Home Care</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
