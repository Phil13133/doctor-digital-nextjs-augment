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
  title: 'SEO Ιατρικό Κείμενο | Συγγραφή για Ιατρικά Sites | Doctor Digital',
  description: 'Συγγραφή SEO κειμένου για ιατρικά sites. Αποκτήστε επαγγελματικό περιεχόμενο που πείθει τους ασθενείς και κατατάσσεται στη Google από εξειδικευμένο κειμενογράφο.',
  keywords: ['Ιατρικό Copywriting', 'Κειμενογράφος για Ιατρούς', 'Ιατρική Κειμενογραφία', 'SEO Άρθρα για Γιατρούς', 'Ιατρικό Περιεχόμενο', 'Copywriting Κλινική', 'Ιατρικά Άρθρα', 'Περιεχόμενο για Ιατρικό Site', 'Συγγραφή Ιατρικών Κειμένων', 'Ιατρικό Blogging'],
};

// FAQ data
const faqQuestions = [
  {
    question: "Τι είναι το copywriting;",
    answer: "Το copywriting είναι στρατηγική συγγραφή περιεχομένου με στόχο να πείσει τον αναγνώστη να κάνει μία ενέργεια – π.χ. να κλείσει ραντεβού."
  },
  {
    question: "Ποια είναι η διαφορά copywriting & content writing;",
    answer: "Το copywriting εστιάζει στη μετατροπή. Το content writing προσφέρει ενημέρωση. Στη Doctor Digital τα συνδυάζουμε για μέγιστη αποτελεσματικότητα."
  },
  {
    question: "Πόσο κοστίζει η κειμενογραφία για site;",
    answer: "Εξαρτάται από το είδος και το μήκος. Πακέτα ξεκινούν από 200€/σελίδα. Ζητήστε προσφορά."
  },
  {
    question: "Μπορώ να δω δείγματα;",
    answer: "Ναι, στείλτε μας email και θα σας αποστείλουμε δείγματα σε διάφορες ειδικότητες."
  },
  {
    question: "Χρειάζομαι SEO για τα άρθρα μου;",
    answer: "Ναι. Τα SEO άρθρα βοηθούν την ιστοσελίδα σας να ανεβαίνει οργανικά στην Google και να αποκτά συνεχώς νέους επισκέπτες."
  }
];

export default function CopywritingForDoctors() {
  return (
    <>
      <ServiceSchema
        name="Εξειδικευμένες Υπηρεσίες Copywriting για Γιατρούς"
        url="https://doctordigital.gr/ypiresies/copywriting-gia-iatrous"
        description="Δημιουργούμε στοχευμένο, επιστημονικά τεκμηριωμένο περιεχόμενο που ανεβάζει την κατάταξή σας στην Google και μετατρέπει επισκέπτες σε ασθενείς."
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
          { name: "Copywriting για Γιατρούς", url: "https://doctordigital.gr/ypiresies/copywriting-gia-iatrous" }
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
                Ιατρικό Περιεχόμενο & Blogging για Γιατρούς
              </h1>
              <h2 className="text-xl md:text-2xl text-text-light font-medium mb-5">
                Επαγγελματικές Υπηρεσίες Κειμενογραφίας για τον Τομέα της Υγείας
              </h2>
              <p className="text-xl text-text-light mb-8 max-w-xl">
                Δημιουργούμε στοχευμένο, επιστημονικά τεκμηριωμένο περιεχόμενο που ανεβάζει την κατάταξή σας στην Google και μετατρέπει επισκέπτες σε ασθενείς.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center">
                  Ζητήστε Δωρεάν Δείγμα Κειμένου
                </Link>
                <Link href="/epikoinonia" className="btn-outline text-center">
                  Κλείστε Ραντεβού
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Ιατρικό Copywriting για Γιατρούς.webp"
                  alt="Ιατρικό Copywriting για Γιατρούς και Κλινικές"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-5 -right-5 bg-brand-200 px-4 py-3 rounded-md shadow-lg hidden md:block">
                <p className="text-white text-sm font-semibold">
                  Περιεχόμενο που Πείθει & Μετατρέπει
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Copywriting Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Τι Είναι το SEO Copywriting για Ιατρούς;</h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Το <strong>ιατρικό copywriting</strong> δεν είναι απλά "ωραία" κείμενα. Είναι στρατηγικά σχεδιασμένο περιεχόμενο για ιατρικές ιστοσελίδες που στοχεύει σε συγκεκριμένα αποτελέσματα για το ιατρείο ή την κλινική σας. Η <strong>συγγραφή ιατρικών κειμένων</strong> είναι απαραίτητη για την <Link href="/ypiresies/seo-gia-iatrous" className="text-brand-200 hover:underline">βελτιστοποίηση SEO</Link> της ιστοσελίδας σας και την προσέλκυση νέων ασθενών.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Το επαγγελματικό ιατρικό copywriting:
              </p>
              <ul className="space-y-4">
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Απαντάει στις αναζητήσεις των ασθενών σας</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Πείθει με επιστημονική ακρίβεια & σαφήνεια</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Οδηγεί τον επισκέπτη να κλείσει ραντεβού</span>
                </li>
              </ul>
              <p className="text-lg mt-6 leading-relaxed">
                Ειδικά στον ιατρικό τομέα, το περιεχόμενο πρέπει να συνδυάζει <strong>δεοντολογία</strong>, <strong>εμπιστοσύνη</strong> και <strong>SEO τεχνικές</strong>. Το ιατρικό περιεχόμενο αποτελεί βασικό πυλώνα του <Link href="/" className="text-brand-200 hover:underline">Ιατρικού Μάρκετινγκ</Link> που προσφέρουμε.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Copywriting Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Οι Υπηρεσίες Ιατρικού Περιεχομένου Μας</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="bg-brand-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Συγγραφή σελίδων υπηρεσιών</h3>
                <p className="text-gray-600 mb-4">
                  Επαγγελματικά κείμενα για την αρχική σελίδα, σελίδες υπηρεσιών και ειδικοτήτων του ιατρείου σας, με βελτιστοποίηση για τις μηχανές αναζήτησης και εστίαση στη μετατροπή επισκεπτών σε ασθενείς.
                </p>
                <Link href="/epikoinonia" className="text-brand-200 font-medium flex items-center hover:text-brand-300 transition-colors">
                  Μάθετε περισσότερα
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="bg-brand-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Ιατρικό blogging & άρθρα</h3>
                <p className="text-gray-600 mb-4">
                  Δημιουργία επιστημονικά τεκμηριωμένων άρθρων για το ιατρικό blog σας που απαντούν σε συχνές αναζητήσεις ασθενών, βελτιώνουν την κατάταξή σας στη Google και καθιερώνουν το κύρος σας στον τομέα σας.
                </p>
                <Link href="/epikoinonia" className="text-brand-200 font-medium flex items-center hover:text-brand-300 transition-colors">
                  Μάθετε περισσότερα
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="bg-brand-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Περιεχόμενο για social media</h3>
                <p className="text-gray-600 mb-4">
                  Στοχευμένα κείμενα για τα social media του ιατρείου σας που ενημερώνουν, εκπαιδεύουν και προσελκύουν το κοινό-στόχο σας, ενισχύοντας την online παρουσία και αναγνωρισιμότητά σας.
                </p>
                <Link href="/epikoinonia" className="text-brand-200 font-medium flex items-center hover:text-brand-300 transition-colors">
                  Μάθετε περισσότερα
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Create Medical Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Πώς το Ιατρικό Περιεχόμενο Βοηθά το Ιατρείο Σας</h2>

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-brand-50 p-6 rounded-lg relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">1</div>
                    <h3 className="text-xl font-semibold mb-3 mt-2">Αύξηση επισκεψιμότητας μέσω οργανικής αναζήτησης</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Ξεκινάμε με ενδελεχή έρευνα για να εντοπίσουμε τις λέξεις-κλειδιά που χρησιμοποιούν οι πιθανοί ασθενείς σας στις αναζητήσεις τους. Αναλύουμε τις τάσεις της αγοράς, τον ανταγωνισμό και τις συμπεριφορές αναζήτησης στον τομέα σας.
                  </p>
                  <p className="text-gray-600">
                    Η επιστημονική μας προσέγγιση εξασφαλίζει ότι το περιεχόμενό σας θα είναι στοχευμένο στις πραγματικές ανάγκες των ασθενών σας.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-brand-50 p-6 rounded-lg relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">2</div>
                    <h3 className="text-xl font-semibold mb-3 mt-2">Ενίσχυση αξιοπιστίας & εμπιστοσύνης</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Οι εξειδικευμένοι ιατρικοί συντάκτες μας δημιουργούν περιεχόμενο που είναι επιστημονικά άψογο και ταυτόχρονα κατανοητό από το ευρύ κοινό. Εξισορροπούμε την επιστημονική ορολογία με την απλότητα και τη σαφήνεια.
                  </p>
                  <p className="text-gray-600">
                    Κάθε κείμενο υπόκειται σε αυστηρό έλεγχο ποιότητας και ακρίβειας, εξασφαλίζοντας ότι το περιεχόμενο είναι σύμφωνο με τις τρέχουσες ιατρικές κατευθυντήριες γραμμές και πρακτικές.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="bg-brand-50 p-6 rounded-lg relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">3</div>
                    <h3 className="text-xl font-semibold mb-3 mt-2">Μετατροπή επισκεπτών σε ασθενείς</h3>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4">
                    Εφαρμόζουμε τις πιο σύγχρονες τεχνικές SEO στο περιεχόμενό σας, συμπεριλαμβανομένων των βέλτιστων πρακτικών για τη δομή του περιεχομένου, την πυκνότητα λέξεων-κλειδιών και τα meta δεδομένα.
                  </p>
                  <p className="text-gray-600">
                    Το περιεχόμενό σας δεν θα είναι μόνο ελκυστικό για τους αναγνώστες, αλλά και για τις μηχανές αναζήτησης, αυξάνοντας την οργανική σας επισκεψιμότητα και την κατάταξή σας στη Google.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Πώς το Ιατρικό Περιεχόμενο Αύξησε τους Ασθενείς κατά 43%</h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto mb-8"></div>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Γνωστό Οδοντιατρείο στην Αθήνα</h3>
                <p className="mb-4 text-gray-600">Ένα γνωστό οδοντιατρείο στην Αθήνα αντιμετώπιζε δυσκολία στην προσέλκυση νέων ασθενών μέσω της ιστοσελίδας του. Το περιεχόμενο ήταν τεχνικό και δεν απαντούσε στις αναζητήσεις των πιθανών ασθενών.</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Η λύση μας:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Δημιουργήσαμε 12 νέες σελίδες υπηρεσιών με βελτιστοποιημένο περιεχόμενο</li>
                    <li>Αναπτύξαμε 8 ιατρικά άρθρα για συχνές αναζητήσεις</li>
                    <li>Βελτιστοποιήσαμε τα meta δεδομένα και τις περιγραφές</li>
                  </ul>
                </div>
                <div className="bg-brand-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2 text-center">Αποτελέσματα:</h4>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-brand-200">+43%</p>
                      <p className="text-sm">Νέοι ασθενείς</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand-200">+67%</p>
                      <p className="text-sm">Οργανική επισκεψιμότητα</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand-200">+12</p>
                      <p className="text-sm">Νέες λέξεις-κλειδιά στην 1η σελίδα</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-brand-50/50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Οφέλη του Επαγγελματικού Ιατρικού Περιεχομένου</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Benefit 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Αύξηση Οργανικής Επισκεψιμότητας</h3>
                    <p className="text-gray-600">
                      Το βελτιστοποιημένο ιατρικό περιεχόμενο αυξάνει την οργανική κατάταξη στη Google, οδηγώντας σε σταθερή ροή νέων επισκεπτών στην ιστοσελίδα σας χωρίς συνεχή διαφημιστική δαπάνη.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ενίσχυση Αξιοπιστίας & Εμπιστοσύνης</h3>
                    <p className="text-gray-600">
                      Το υψηλής ποιότητας ιατρικό περιεχόμενο καθιερώνει το κύρος σας ως ειδικού στον τομέα σας, ενισχύοντας την εμπιστοσύνη των ασθενών πριν ακόμα σας επισκεφθούν.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Εκπαίδευση & Ενημέρωση Ασθενών</h3>
                    <p className="text-gray-600">
                      Το ποιοτικό περιεχόμενο εκπαιδεύει τους ασθενείς σχετικά με τις υπηρεσίες σας, μειώνοντας τις ανησυχίες τους και απαντώντας σε συχνές ερωτήσεις πριν το ραντεβού.
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Μετατροπή Επισκεπτών σε Ασθενείς</h3>
                    <p className="text-gray-600">
                      Το στρατηγικά σχεδιασμένο περιεχόμενο οδηγεί τους επισκέπτες στο να κλείσουν ραντεβού, με στρατηγικές προτροπές και ξεκάθαρες οδηγίες για το επόμενο βήμα.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Συχνές Ερωτήσεις για το ιατρικό περιεχόμενο</h2>
            <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
            <p className="text-text-light max-w-2xl mx-auto">
              Απαντήσεις στις πιο συχνές ερωτήσεις για το SEO Copywriting στον ιατρικό κλάδο.
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
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="bg-brand-50/80 p-10 rounded-lg border border-brand-100 shadow-sm max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Θέλετε να αποκτήσετε περιεχόμενο που:</h2>
              <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
              <ul className="space-y-4 max-w-lg mx-auto text-left">
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Πείθει τους ασθενείς</span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Κατατάσσεται στην Google και ενισχύει τις <Link href="/ypiresies/diafimisi-sth-google" className="text-brand-200 hover:underline">διαφημιστικές σας καμπάνιες</Link></span>
                </li>
                <li className="grid grid-cols-[24px_1fr] items-start gap-3">
                  <svg className="w-6 h-6 text-brand-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Μετατρέπει τις επισκέψεις σε ραντεβού</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                <Link href="/epikoinonia" className="bg-brand-200 hover:bg-brand-300 text-white px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md text-center">
                  Ζητήστε Δωρεάν SEO Ανάλυση
                </Link>
                <Link href="/epikoinonia" className="border border-brand-200 text-brand-300 hover:text-brand-400 hover:border-brand-300 px-6 py-3 rounded-md font-medium transition-all duration-300 text-center">
                  Κλείστε Ραντεβού με Ειδικό
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <RelatedServices currentService="/ypiresies/copywriting-gia-iatrous" />
        </div>
      </section>

      {/* Related Blog Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <RelatedBlogPosts topic="περιεχόμενο" />
        </div>
      </section>
    </>
  );
}
