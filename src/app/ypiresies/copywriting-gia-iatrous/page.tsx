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
  title: 'Copywriting για Γιατρούς & Κλινικές | Κειμενογράφος για site',
  description: 'Χρειάζεστε περιεχόμενο που πείθει και κατατάσσεται στην Google; Εξειδικευμένες υπηρεσίες SEO Copywriting & Ιατρικής Κειμενογραφίας για γιατρούς & κλινικές.',
  keywords: ['Ιατρικό Copywriting', 'Κειμενογράφος για Ιατρούς', 'Ιατρική Κειμενογραφία', 'SEO Άρθρα για Γιατρούς', 'Ιατρικό Περιεχόμενο', 'Copywriting Κλινική'],
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
                Ιατρικό Copywriting για Γιατρούς, Κλινικές & Ιστοσελίδες Υγείας
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
            <h2 className="text-3xl font-bold mb-6 text-center">Τι Είναι το SEO Copywriting;</h2>
            <div className="bg-gray-50 p-8 rounded-lg mb-8 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-full shadow-md">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <p className="text-lg mb-4 leading-relaxed">
                Το copywriting δεν είναι απλά "ωραία" κείμενα. Είναι στρατηγικά σχεδιασμένο περιεχόμενο που στοχεύει σε συγκεκριμένα αποτελέσματα για το ιατρείο ή την κλινική σας. Είναι απαραίτητο για την <Link href="/ypiresies/seo-gia-iatrous" className="text-brand-200 hover:underline">βελτιστοποίηση SEO</Link> της ιστοσελίδας σας.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Το επαγγελματικό ιατρικό copywriting:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Απαντάει στις αναζητήσεις των ασθενών σας</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Πείθει με επιστημονική ακρίβεια & σαφήνεια</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Οδηγεί τον επισκέπτη να κλείσει ραντεβού</span>
                </li>
              </ul>
              <p className="text-lg mt-6 leading-relaxed">
                Ειδικά στον ιατρικό τομέα, το περιεχόμενο πρέπει να συνδυάζει <strong>δεοντολογία</strong>, <strong>εμπιστοσύνη</strong> και <strong>SEO τεχνικές</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Συχνές Ερωτήσεις (FAQ)</h2>
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
              <h2 className="text-2xl font-bold mb-4">Θέλετε να αποκτήσετε περιεχόμενο που:</h2>
              <ul className="space-y-3 max-w-lg mx-auto">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Πείθει τους ασθενείς</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Κατατάσσεται στην Google και ενισχύει τις <Link href="/ypiresies/diafimisi-sth-google" className="text-brand-200 hover:underline">διαφημιστικές σας καμπάνιες</Link></span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
          {/* @ts-expect-error Async Server Component */}
          <RelatedBlogPosts topic="περιεχόμενο" />
        </div>
      </section>
    </>
  );
}
