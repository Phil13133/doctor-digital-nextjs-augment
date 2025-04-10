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
  title: 'Ιατρικό Λογισμικό | Σύγχρονο Software Για Ιατρεία | Doctor Digital',
  description: 'Αναβαθμίστε την οργάνωση του ιατρείου σας με εύχρηστο, ασφαλές και παραμετροποιήσιμο ιατρικό λογισμικό. Ιδανικό για γιατρούς, κλινικές & διαγνωστικά.',
  keywords: ['ιατρικό λογισμικό', 'ιατρικό software', 'σύγχρονο λογισμικό για γιατρούς', 'ραντεβού για ιατρούς', 'ψηφιακή οργάνωση ιατρείου', 'software για ιατρικά κέντρα', 'ηλεκτρονικός φάκελος ασθενή'],
};

// FAQ data
const faqQuestions = [
  {
    question: "Τι είναι το ιατρικό λογισμικό και γιατί το χρειάζομαι;",
    answer: "Το ιατρικό λογισμικό είναι μια ειδικά σχεδιασμένη εφαρμογή για την οργάνωση και ψηφιοποίηση των διαδικασιών ενός ιατρείου ή κλινικής. Το χρειάζεστε για να αυτοματοποιήσετε τα ραντεβού, να οργανώσετε τα αρχεία ασθενών, να βελτιώσετε την αποδοτικότητα και να μειώσετε το διοικητικό φόρτο, επιτρέποντάς σας να επικεντρωθείτε περισσότερο στους ασθενείς σας."
  },
  {
    question: "Πόσο ασφαλή είναι τα δεδομένα των ασθενών στο λογισμικό σας;",
    answer: "Τα δεδομένα των ασθενών προστατεύονται με υψηλού επιπέδου κρυπτογράφηση και μέτρα ασφαλείας σύμφωνα με τα πρότυπα GDPR. Εφαρμόζουμε πολλαπλά επίπεδα ασφάλειας, τακτικά backups, ελέγχους πρόσβασης και παρακολούθηση για την προστασία των ευαίσθητων ιατρικών δεδομένων."
  },
  {
    question: "Μπορώ να χρησιμοποιήσω το λογισμικό από κινητό ή tablet;",
    answer: "Ναι, το ιατρικό μας λογισμικό είναι πλήρως responsive και λειτουργεί άψογα σε υπολογιστές, tablets και κινητά τηλέφωνα. Διαθέτουμε ειδικά σχεδιασμένο interface για κάθε συσκευή, επιτρέποντάς σας να διαχειρίζεστε το ιατρείο σας από οπουδήποτε."
  },
  {
    question: "Παρέχετε εκπαίδευση για τη χρήση του λογισμικού;",
    answer: "Απολύτως. Παρέχουμε ολοκληρωμένη εκπαίδευση σε όλο το προσωπικό του ιατρείου σας μέσω online σεμιναρίων, προσωπικών συνεδριών και εκτενούς τεκμηρίωσης. Επιπλέον, η τεχνική μας υποστήριξη είναι διαθέσιμη 6 ημέρες την εβδομάδα για οποιεσδήποτε απορίες."
  },
  {
    question: "Πώς συνδέεται το ιατρικό λογισμικό με την ιστοσελίδα του ιατρείου μου;",
    answer: "Το ιατρικό μας λογισμικό ενσωματώνεται πλήρως με την ιστοσελίδα σας μέσω APIs, επιτρέποντας στους ασθενείς να κλείνουν online ραντεβού που ενημερώνουν αυτόματα το σύστημά σας. Επίσης, συνδέεται με τις διαφημιστικές σας καμπάνιες για παρακολούθηση του ROI και τον εντοπισμό των πιο αποδοτικών καναλιών προσέλκυσης ασθενών."
  }
];

// Feature card component
const FeatureCard = ({
  icon,
  title,
  children
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
    <div className="flex items-start">
      <div className="mr-5 text-brand-200 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="text-gray-600 space-y-2">
          {children}
        </div>
      </div>
    </div>
  </div>
);

// Feature item component with icon
const FeatureItem = ({ text }: { text: string }) => (
  <div className="flex items-start mb-2">
    <div className="mr-2 mt-1 text-brand-200 flex-shrink-0">
      <CheckIcon size={16} color="currentColor" />
    </div>
    <span className="text-sm">{text}</span>
  </div>
);

export default function MedicalSoftwarePage() {
  return (
    <>
      <ServiceSchema
        name="Ιατρικό Λογισμικό για Γιατρούς & Κλινικές"
        url="https://doctordigital.gr/ypiresies/iatriko-logismiko"
        description="Οργανώστε και ψηφιοποιήστε το ιατρείο σας με ευέλικτο, ασφαλές και απόλυτα παραμετροποιήσιμο ιατρικό software."
        provider={{
          name: "Doctor Digital",
          url: "https://doctordigital.gr"
        }}
        serviceArea={[
          { name: "Ελλάδα", type: "Country" },
          { name: "Αθήνα", type: "City" },
          { name: "Θεσσαλονίκη", type: "City" }
        ]}
        category="Ιατρικό Λογισμικό"
      />
      <FAQSchema questions={faqQuestions} />

      {/* Breadcrumb Schema */}
      <BreadcrumbSchema
        items={[
          { name: "Αρχική", url: "https://doctordigital.gr/" },
          { name: "Υπηρεσίες", url: "https://doctordigital.gr/ypiresies" },
          { name: "Ιατρικό Λογισμικό", url: "https://doctordigital.gr/ypiresies/iatriko-logismiko" }
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
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
                Ιατρικό Λογισμικό για Γιατρούς & Κλινικές
              </h1>
              <h2 className="text-xl md:text-2xl text-text-light font-medium mb-5">
                Οργανώστε και ψηφιοποιήστε το ιατρείο σας με ευέλικτο, ασφαλές και παραμετροποιήσιμο ιατρικό software
              </h2>
              <p className="text-xl text-text-light mb-8 max-w-xl">
                Το σύγχρονο ιατρικό λογισμικό δεν είναι πλέον πολυτέλεια — είναι προϋπόθεση για έναν αποδοτικό και καλά οργανωμένο ιατρό ή ιατρική επιχείρηση.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center">
                  Ζητήστε Δωρεάν Συμβουλευτική
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center">
                  Κλείστε Ραντεβού
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/iatriko-logismiko.webp"
                  alt="Ιατρικό Λογισμικό για Γιατρούς & Κλινικές"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-brand-200 px-4 py-3 rounded-md shadow-lg hidden md:block">
                <p className="text-white text-sm font-semibold">
                  Ψηφιακή Οργάνωση Ιατρείου
                </p>
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
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2 text-brand-800">Online Ραντεβού & Διαχείριση Ασθενών</h3>
                <p className="text-sm text-gray-600">Επιτρέψτε στους ασθενείς να κλείνουν ραντεβού online με αυτοματοποιημένες ειδοποιήσεις SMS & email.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2 text-brand-800">Ιατρικό CRM & Σύστημα Ηλεκτρονικών Αρχείων</h3>
                <p className="text-sm text-gray-600">Οργανώστε το ιστορικό ασθενών, παρακολουθήστε ιατρικές εγγραφές και διαχειριστείτε την επικοινωνία εύκολα.</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-bold mb-2 text-brand-800">Custom Ιατρικό Λογισμικό για Κλινικές & Διαγνωστικά Κέντρα</h3>
                <p className="text-sm text-gray-600">Δημιουργούμε προσαρμοσμένες εφαρμογές για τηλεϊατρική, φόρμες εισαγωγής ασθενών, e-prescriptions & πολλά άλλα.</p>
              </div>

              <div className="mt-8 pl-10">
                <Link href="/epikoinonia" className="btn-primary inline-flex items-center justify-center py-3 px-6">
                  Ζητήστε Δωρεάν Συμβουλευτική
                  <ArrowRightIcon className="ml-2" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Σύγχρονες Λύσεις Ιατρικού Λογισμικού</h2>
            <p className="text-lg text-text-light">
              Προσφέρουμε εξειδικευμένες λύσεις ιατρικού software που απαντούν στις καθημερινές ανάγκες ιατρών, κλινικών, διαγνωστικών κέντρων και θεραπευτηρίων, βελτιώνοντας την παραγωγικότητα και την εμπειρία των ασθενών σας.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-brand-100/30 to-brand-200/20 shadow-lg mb-16">
            <div className="absolute top-0 right-0 opacity-20 pointer-events-none">
              <svg width="320" height="320" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
                <path d="M42.8 0H0V42.8H42.8V0Z" fill="url(#greenGradient)"/>
                <path d="M100 0H57.2V42.8H100V0Z" fill="url(#greenGradient)"/>
                <path d="M157.2 0H114.4V42.8H157.2V0Z" fill="url(#greenGradient)"/>
                <path d="M200 0H171.6V42.8H200V0Z" fill="url(#greenGradient)"/>
                <path d="M42.8 57.2H0V100H42.8V57.2Z" fill="url(#greenGradient)"/>
                <path d="M100 57.2H57.2V100H100V57.2Z" fill="url(#greenGradient)"/>
                <path d="M157.2 57.2H114.4V100H157.2V57.2Z" fill="url(#greenGradient)"/>
                <path d="M200 57.2H171.6V100H200V57.2Z" fill="url(#greenGradient)"/>
                <path d="M42.8 114.4H0V157.2H42.8V114.4Z" fill="url(#greenGradient)"/>
                <path d="M100 114.4H57.2V157.2H100V114.4Z" fill="url(#greenGradient)"/>
                <path d="M157.2 114.4H114.4V157.2H157.2V114.4Z" fill="url(#greenGradient)"/>
                <path d="M200 114.4H171.6V157.2H200V114.4Z" fill="url(#greenGradient)"/>
                <path d="M42.8 171.6H0V200H42.8V171.6Z" fill="url(#greenGradient)"/>
                <path d="M100 171.6H57.2V200H100V171.6Z" fill="url(#greenGradient)"/>
                <path d="M157.2 171.6H114.4V200H157.2V171.6Z" fill="url(#greenGradient)"/>
                <path d="M200 171.6H171.6V200H200V171.6Z" fill="url(#greenGradient)"/>
              </svg>
            </div>
            <div className="relative p-8 md:p-12 z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-brand-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Γιατί να Ψηφιοποιήσετε το Ιατρείο σας
                  </h3>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Μείωση διοικητικού χρόνου & λιγότερη γραφειοκρατία - συνδυάζεται άριστα με <Link href="/ypiresies/kataskevi-istoselidon-gia-giatrous" className="text-brand-200 hover:underline">την ιστοσελίδα σας</Link></span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Εξάλειψη χαμένων ραντεβού & αύξηση πληρότητας</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Άμεση πρόσβαση σε ιατρικά δεδομένα & αρχεία</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Καλύτερη εμπειρία για τους ασθενείς σας και αύξηση της <Link href="/ypiresies/diafimisi-sth-google" className="text-brand-200 hover:underline">ψηφιακής σας προβολής</Link></span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <svg className="w-6 h-6 mr-3 text-brand-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Χαρακτηριστικά Ασφαλείας
                  </h3>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Πλήρης συμμόρφωση με GDPR</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Κρυπτογράφηση δεδομένων & ασφαλή backups</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Έλεγχοι πρόσβασης & δικαιώματα χρηστών</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-brand-100 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                        <CheckIcon size={14} color="#FFFFFF" />
                      </div>
                      <span>Καταγραφή ενεργειών & παρακολούθηση αλλαγών</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Βασικά Χαρακτηριστικά</h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto">
              Το ιατρικό μας λογισμικό συνδυάζει την ευχρηστία με προηγμένες λειτουργίες που καλύπτουν όλες τις ανάγκες του σύγχρονου ιατρείου.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <Image
                    src="/images/icons/appointment-2.svg"
                    alt="Διαχείριση Ραντεβού"
                    width={32}
                    height={32}
                    className="relative"
                  />
                </div>
              }
              title="Διαχείριση Ραντεβού"
            >
              <FeatureItem text="Προβολή σε Ημερολόγιο (ημερήσιο, εβδομαδιαίο, μηνιαίο)" />
              <FeatureItem text="Υπενθυμίσεις SMS & Email" />
              <FeatureItem text="Στατιστικά ακυρώσεων, αναμονών & πληρότητας" />
              <FeatureItem text="Online Booking ενσωμάτωση με την ιστοσελίδα σας" />
            </FeatureCard>

            <FeatureCard
              icon={
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <Image
                    src="/images/icons/folder.svg"
                    alt="Ηλεκτρονικός Φάκελος Ασθενή"
                    width={32}
                    height={32}
                    className="relative"
                  />
                </div>
              }
              title="Ηλεκτρονικός Φάκελος Ασθενή (EMR)"
            >
              <FeatureItem text="Ιατρικό ιστορικό" />
              <FeatureItem text="Φαρμακευτική αγωγή" />
              <FeatureItem text="Διαγνώσεις, εξετάσεις & παραπομπές" />
              <FeatureItem text="Ανέβασμα αρχείων, εικόνων και παραπεμπτικών" />
            </FeatureCard>

            <FeatureCard
              icon={
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <Image
                    src="/images/icons/adjust.svg"
                    alt="Λειτουργίες για Πολυϊατρεία"
                    width={32}
                    height={32}
                    className="relative"
                  />
                </div>
              }
              title="Λειτουργίες για Πολυϊατρεία & Ομάδες"
            >
              <FeatureItem text="Διαχείριση πολλών ιατρών και ειδικοτήτων" />
              <FeatureItem text="Προφίλ χρήστη για κάθε γιατρό" />
              <FeatureItem text="Ανάλυση απόδοσης ανά ειδικότητα/παροχή" />
              <FeatureItem text="Σύνδεση με λογιστικά και τιμολογιακά συστήματα" />
            </FeatureCard>

            <FeatureCard
              icon={
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-100 rounded-full"></div>
                  <Image
                    src="/images/icons/settings.svg"
                    alt="Απόλυτη Προσαρμογή"
                    width={32}
                    height={32}
                    className="relative"
                  />
                </div>
              }
              title="Απόλυτη Προσαρμογή & Ευχρηστία"
            >
              <FeatureItem text="Φιλικό interface" />
              <FeatureItem text="Πρόσβαση από υπολογιστή, tablet ή κινητό" />
              <FeatureItem text="Cloud-based" />
              <FeatureItem text="Υψηλό επίπεδο ασφάλειας" />
              <FeatureItem text="GDPR compliant" />
            </FeatureCard>
          </div>

          <div className="text-center mt-12">
            <Link href="/epikoinonia" className="btn-primary inline-flex items-center">
              Ζητήστε Demo Λογισμικού
              <ArrowRightIcon className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Choose Us Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-brand-100/20 rounded-full blur-xl opacity-60"></div>
          <div className="absolute bottom-40 left-10 w-96 h-96 bg-brand-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block py-1.5 px-5 rounded-full bg-brand-100/30 text-brand-300 font-semibold text-sm mb-6">
                ΠΛΕΟΝΕΚΤΗΜΑΤΑ
              </span>
              <h2 className="text-3xl font-bold mb-6">Γιατί να Επιλέξετε το Ιατρικό Λογισμικό μας;</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-100/30 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-brand-100/20 rounded-full"></div>

                <h3 className="text-xl font-bold mb-5 relative">Αναπτύχθηκε για τον Ιατρικό Τομέα</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckIcon size={14} color="#16a34a" />
                    </div>
                    <span>Αναπτύχθηκε αποκλειστικά για ιατρούς & επαγγελματίες υγείας</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckIcon size={14} color="#16a34a" />
                    </div>
                    <span>Υποστήριξη από εξειδικευμένη ομάδα με εμπειρία στον ιατρικό τομέα</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckIcon size={14} color="#16a34a" />
                    </div>
                    <span>Συνεχής εξέλιξη & ενσωμάτωση νέων λειτουργιών</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border border-gray-100 shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-100/30 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-brand-100/20 rounded-full"></div>

                <h3 className="text-xl font-bold mb-5">Ευελιξία & Προσβασιμότητα</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckIcon size={14} color="#16a34a" />
                    </div>
                    <span>Εξαγωγή & μεταφορά δεδομένων οποιαδήποτε στιγμή</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckIcon size={14} color="#16a34a" />
                    </div>
                    <span>Χωρίς δεσμεύσεις – ευελιξία συνδρομής ή αγοράς</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-200 rounded-full p-1 mr-3 mt-1 flex-shrink-0 shadow-sm">
                      <CheckIcon size={14} color="#16a34a" />
                    </div>
                    <span>Λειτουργία online/offline με αυτόματο συγχρονισμό</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-brand-100/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-brand-200/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-300/5 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-5 rounded-full bg-brand-100/30 text-brand-300 font-semibold text-sm mb-4 animate-fade-in">
              ΨΗΦΙΑΚΗ ΕΝΣΩΜΑΤΩΣΗ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Ενσωμάτωση με την Ιστοσελίδα & Marketing του Ιατρείου σας
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-brand-100 to-brand-200 rounded-full"></div>
            </h2>
            <p className="text-lg text-text-light max-w-3xl mx-auto mt-8">
              Το ιατρικό μας software συνδέεται πλήρως με το σύστημα κρατήσεων και την ιστοσελίδα σας, αυξάνοντας την αποδοτικότητα και την παρακολούθηση του marketing.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold mb-10 text-brand-800 text-center">Πλήρης συνδεσιμότητα για καλύτερα αποτελέσματα</h3>

            {/* Card-based layout for features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-300 rounded-xl flex items-center justify-center mr-5 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
                      Κρατήσεις από την ιστοσελίδα σας σε πραγματικό χρόνο
                    </h4>
                    <p className="text-gray-600">
                      Οι ασθενείς κλείνουν ραντεβού online, με αυτόματη ενημέρωση του συστήματός σας.
                    </p>
                  </div>
                </div>
                <div className="w-0 h-1 bg-brand-200 group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-300 rounded-xl flex items-center justify-center mr-5 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
                      Συλλογή στοιχείων από Google Ads & Facebook Ads
                    </h4>
                    <p className="text-gray-600">
                      Παρακολουθήστε από ποιες διαφημίσεις προέρχονται οι ασθενείς σας.
                    </p>
                  </div>
                </div>
                <div className="w-0 h-1 bg-brand-200 group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-300 rounded-xl flex items-center justify-center mr-5 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
                      Παρακολούθηση conversion rate και ROI
                    </h4>
                    <p className="text-gray-600">
                      Μετρήστε την απόδοση των καμπανιών σας με ακριβή δεδομένα για κάθε καμπάνια.
                    </p>
                  </div>
                </div>
                <div className="w-0 h-1 bg-brand-200 group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-brand-100 to-brand-300 rounded-xl flex items-center justify-center mr-5 shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-600 transition-colors duration-300">
                      Επαναληπτικά ραντεβού & αυτοματοποιημένα follow-ups
                    </h4>
                    <p className="text-gray-600">
                      Αυτόματες υπενθυμίσεις για επαναληπτικά ραντεβού και follow-up επισκέψεις.
                    </p>
                  </div>
                </div>
                <div className="w-0 h-1 bg-brand-200 group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center mt-12">
              <Link href="/epikoinonia" className="inline-flex items-center bg-brand-200 hover:bg-brand-300 text-white hover:text-white font-semibold py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300 group">
                Μάθετε Περισσότερα
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>





      {/* Related Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <RelatedBlogPosts topic="λογισμικό" />
        </div>
      </section>


      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-background to-white pointer-events-none"></div>

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
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
            {/* Case Study 1: Patient Scheduling System */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-100/30 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-brand-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">PlanMed</h3>
                    <p className="text-sm text-gray-500">Σύστημα Κράτησης Ραντεβού</p>
                  </div>
                </div>

                <div>
                  <p className="text-text-light mb-4">
                    Αναπτύξαμε ένα προηγμένο σύστημα διαχείρισης ραντεβού για μεγάλο διαγνωστικό κέντρο με πολλαπλά υποκαταστήματα και ιατρούς διαφορετικών ειδικοτήτων.
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckIcon size={12} color="#16a34a" />
                      </div>
                      <span className="text-sm">Μείωση ακυρώσεων κατά 35%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckIcon size={12} color="#16a34a" />
                      </div>
                      <span className="text-sm">Αύξηση πληρότητας ιατρείων κατά 28%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckIcon size={12} color="#16a34a" />
                      </div>
                      <span className="text-sm">Εξοικονόμηση 15 ωρών/εβδομάδα για το προσωπικό</span>
                    </div>
                  </div>

                  {/* App Preview */}
                  <div className="mt-6 rounded-xl border border-gray-100 p-2 bg-gray-50 hover:shadow-md transition-shadow">
                    <Image
                      src="/images/patient-scheduling-application.webp"
                      alt="PlanMed Patient Scheduling Interface"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">Κεντρική οθόνη διαχείρισης ραντεβού</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 2: Lab Results System */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-100/30 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-brand-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">LabConnect</h3>
                    <p className="text-sm text-gray-500">Σύστημα Διαχείρισης Εργαστηριακών Εξετάσεων</p>
                  </div>
                </div>

                <div>
                  <p className="text-text-light mb-4">
                    Δημιουργήσαμε μια εφαρμογή για μικροβιολογικό εργαστήριο που επιτρέπει την ψηφιακή διαχείριση δειγμάτων, αποτελεσμάτων και την αυτόματη ενημέρωση ασθενών.
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckIcon size={12} color="#16a34a" />
                      </div>
                      <span className="text-sm">Μείωση χρόνου επεξεργασίας κατά 42%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckIcon size={12} color="#16a34a" />
                      </div>
                      <span className="text-sm">Εξάλειψη λαθών καταχώρησης</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <CheckIcon size={12} color="#16a34a" />
                      </div>
                      <span className="text-sm">Αύξηση ικανοποίησης πελατών κατά 47%</span>
                    </div>
                  </div>

                  {/* App Preview */}
                  <div className="mt-6 rounded-xl border border-gray-100 p-2 bg-gray-50 hover:shadow-md transition-shadow">
                    <Image
                      src="/images/blood-test-application.webp"
                      alt="LabConnect Results Interface"
                      width={400}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-xs text-gray-500 mt-2 text-center">Διεπαφή αποτελεσμάτων εξετάσεων</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA with improved shadow effects */}
          <div className="mt-20 relative">
            {/* Subtle outer shadow effect */}
            <div className="absolute -inset-4 bg-white/50 rounded-2xl blur-xl"></div>

            <div className="relative bg-white rounded-xl p-8 border border-gray-100 shadow-lg">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <RelatedServices currentService="/ypiresies/iatriko-logismiko" />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Συχνές Ερωτήσεις</h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Απαντήσεις στις πιο συχνές ερωτήσεις σχετικά με το ιατρικό μας λογισμικό.
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

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
            <div className="relative p-8 md:p-12">
              {/* Decorative gradient top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-100 to-brand-200"></div>

              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ξεκινήστε με Δωρεάν Αξιολόγηση</h2>
                <p className="text-lg text-text-light max-w-2xl mx-auto">
                  Ελάτε σε επαφή μαζί μας για να συζητήσουμε τις ανάγκες σας και να σας προτείνουμε τη βέλτιστη λύση ιατρικού software για το ιατρείο ή την κλινική σας.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/epikoinonia" className="btn-primary text-center">
                  Ζητήστε Δωρεάν Συμβουλευτική
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center">
                  Κλείστε Ραντεβού Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}