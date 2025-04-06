import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE } from '@/constants/site'; // Import SITE constants
import TestimonialsSchema from '@/components/schema/TestimonialsSchema';

export const metadata: Metadata = {
  title: 'Case Studies | Αποδεδειγμένα Αποτελέσματα με ROI | Doctor Digital',
  description: 'Μετρήσιμα, αποδεδειγμένα αποτελέσματα για γιατρούς, κλινικές και ιατρικά κέντρα στην Ελλάδα. SEO, Google Ads και Social Media με πραγματική απόδοση της επένδυσης (ROI).',
  keywords: 'case studies, ιατρικό marketing, αποτελέσματα SEO, Google Ads ιατρούς, social media για κλινικές, digital marketing υγεία',
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-50 to-background py-16 md:py-20 overflow-hidden relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-heading">
              Αποδεδειγμένα Αποτελέσματα με Μετρήσιμη Απόδοση
            </h1>
            <p className="text-xl mb-8 text-text-dark max-w-3xl mx-auto">
              Πραγματικά παραδείγματα επιτυχημένων καμπανιών για ιατρούς και κλινικές
              με απτά, μετρήσιμα αποτελέσματα στην προσέλκυση νέων ασθενών.
            </p>
            <Link href="/epikoinonia" className="btn-primary py-3 px-8 rounded-md inline-block">
              Ζητήστε Δωρεάν Αξιολόγηση
            </Link>
          </div>
        </div>

        {/* Abstract background shape */}
        <div className="absolute right-0 top-32 w-64 h-64 bg-brand-100 rounded-full opacity-10 -z-10 blur-3xl"></div>
        <div className="absolute left-20 bottom-20 w-80 h-80 bg-brand-200 rounded-full opacity-5 -z-10 blur-3xl"></div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Επιτυχημένες Καμπάνιες σε Αριθμούς</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto mb-8">
              Η επιτυχία των καμπανιών μας μετριέται με πραγματικά δεδομένα και απτά αποτελέσματα
              που μεταφράζονται σε αυξημένη ροή ασθενών και έσοδα.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Metric Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-md text-center border border-blue-200">
              <div className="text-blue-600 text-4xl md:text-5xl font-bold mb-2">+200%</div>
              <p className="text-blue-800 font-medium">Αύξηση Οργανικής Επισκεψιμότητας</p>
              <div className="w-12 h-1 bg-blue-400 mx-auto my-3"></div>
              <p className="text-sm text-blue-700">Μέσος όρος αύξησης σε ιατρικές ιστοσελίδες</p>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow-md text-center border border-red-200">
              <div className="text-red-600 text-4xl md:text-5xl font-bold mb-2">413%</div>
              <p className="text-red-800 font-medium">ROAS σε Google Ads</p>
              <div className="w-12 h-1 bg-red-400 mx-auto my-3"></div>
              <p className="text-sm text-red-700">Απόδοση επένδυσης σε διαφημίσεις</p>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-md text-center border border-amber-200">
              <div className="text-amber-600 text-4xl md:text-5xl font-bold mb-2">+75%</div>
              <p className="text-amber-800 font-medium">Αύξηση Νέων Ραντεβού</p>
              <div className="w-12 h-1 bg-amber-400 mx-auto my-3"></div>
              <p className="text-sm text-amber-700">Μέσω στοχευμένων καμπανιών</p>
            </div>

            {/* Metric Card 4 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-md text-center border border-green-200">
              <div className="text-green-600 text-4xl md:text-5xl font-bold mb-2">#1</div>
              <p className="text-green-800 font-medium">Google Rankings</p>
              <div className="w-12 h-1 bg-green-400 mx-auto my-3"></div>
              <p className="text-sm text-green-700">Για περισσότερες από 50 ιατρικές λέξεις-κλειδιά</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Επιτυχημένες Περιπτώσεις Ιατρικού Marketing</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-3xl mx-auto mb-8">
              Μελετήστε πώς ιατροί και κλινικές στην Ελλάδα είδαν μετρήσιμα αποτελέσματα
              στις ψηφιακές τους καμπάνιες, προσελκύοντας νέους ασθενείς.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* Case Study 1 - SEO */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-56 bg-blue-50 overflow-hidden">
                <div className="absolute top-0 left-0 bg-brand-200 text-white text-xs py-1 px-3 rounded-br-lg font-medium z-10">
                  SEO
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/SEO για Ιατρικές Ιστοσελίδες.webp"
                    alt="SEO για Ιατρική Κλινική"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">Ιατρική Κλινική</div>
                <h3 className="text-2xl font-bold mb-3 text-text-heading">Αύξηση οργανικής επισκεψιμότητας κατά 200%</h3>

                <div className="bg-blue-50 rounded-lg p-3 mb-4 border-l-4 border-blue-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <div className="text-blue-800 font-medium">Αποτελέσματα σε 90 ημέρες</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-5">
                  Πώς βοηθήσαμε μια ιδιωτική κλινική να αυξήσει τη διαδικτυακή της παρουσία και να τριπλασιάσει τα ραντεβού μέσω SEO και στρατηγικού περιεχομένου.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 text-blue-600 font-medium text-xs py-1 px-2 rounded">
                      +200% επισκέψεις
                    </div>
                    <div className="bg-blue-100 text-blue-600 font-medium text-xs py-1 px-2 rounded">
                      #1 θέση Google
                    </div>
                  </div>

                  {/* Removed "Read More" button */}
                </div>
              </div>
            </div>

            {/* Case Study 2 - Google Ads */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-56 bg-red-50 overflow-hidden">
                <div className="absolute top-0 left-0 bg-red-500 text-white text-xs py-1 px-3 rounded-br-lg font-medium z-10">
                  Google Ads
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/diafimisi-sth-google.webp"
                    alt="Google Ads για Παιδιατρικό Ιατρείο"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">Παιδιατρικό Ιατρείο</div>
                <h3 className="text-2xl font-bold mb-3 text-text-heading">75% αύξηση σε νέα ραντεβού μέσω Google Ads</h3>

                <div className="bg-red-50 rounded-lg p-3 mb-4 border-l-4 border-red-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                    </svg>
                    <div className="text-red-800 font-medium">ROI: 413.89%</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-5">
                  Εφαρμόσαμε στρατηγική Google Ads για παιδιατρικό ιατρείο, με στοχευμένες λέξεις-κλειδιά και landing pages, οδηγώντας σε +75% αύξηση σε νέες κλήσεις και κρατήσεις.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 text-red-600 font-medium text-xs py-1 px-2 rounded">
                      82.9K Clicks
                    </div>
                    <div className="bg-red-100 text-red-600 font-medium text-xs py-1 px-2 rounded">
                      -41% κόστος/ραντεβού
                    </div>
                  </div>

                  {/* Removed "Read More" button */}
                </div>
              </div>
            </div>

            {/* Case Study 3 - Social Media */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="relative h-56 bg-purple-50 overflow-hidden">
                <div className="absolute top-0 left-0 bg-purple-500 text-white text-xs py-1 px-3 rounded-br-lg font-medium z-10">
                  Social Media
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/Ιατρικό Copywriting για Γιατρούς.webp"
                    alt="Social Media για Οδοντιατρική Κλινική"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">Οδοντιατρική Κλινική</div>
                <h3 className="text-2xl font-bold mb-3 text-text-heading">120% αύξηση engagement στα social media</h3>

                <div className="bg-purple-50 rounded-lg p-3 mb-4 border-l-4 border-purple-400">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                    <div className="text-purple-800 font-medium">+68% νέοι ασθενείς</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-5">
                  Δημιουργήσαμε στρατηγικό περιεχόμενο για οδοντιατρική κλινική, ενισχύοντας την αλληλεπίδραση και αυξάνοντας τη ροή νέων ασθενών μέσω Facebook & Instagram.
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 text-purple-600 font-medium text-xs py-1 px-2 rounded">
                      +3.2K followers
                    </div>
                    <div className="bg-purple-100 text-purple-600 font-medium text-xs py-1 px-2 rounded">
                      15% CTR
                    </div>
                  </div>

                  {/* Removed "Read More" button */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Visualization Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Μετρήσιμα Αποτελέσματα & Analytics</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-3xl mx-auto mb-8">
              Παρακολουθούμε και αναλύουμε καθημερινά την πορεία κάθε καμπάνιας, με διαφάνεια
              στα δεδομένα και στις μετρήσεις απόδοσης.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* SEO Performance Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">SEO Performance</h3>
                  <p className="text-gray-600">Οργανική επισκεψιμότητα και κατάταξη στη Google</p>
                </div>
                <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
                  <div className="bg-indigo-100 text-indigo-700 text-xs font-medium py-1 px-2 rounded-full">
                    Total clicks: 1.3K
                  </div>
                  <div className="bg-purple-100 text-purple-700 text-xs font-medium py-1 px-2 rounded-full">
                    Impressions: 3.97K
                  </div>
                  <div className="bg-orange-100 text-orange-700 text-xs font-medium py-1 px-2 rounded-full">
                    Avg Position: #1
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/images/google_search_console-blog-post_3.jpg"
                  alt="SEO Performance Chart showing 200% organic traffic growth"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium">3-Month Growth</p>
                  <p className="text-3xl font-bold text-blue-600">+187%</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-medium">CTR Improvement</p>
                  <p className="text-3xl font-bold text-green-600">+42%</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium">Avg Position</p>
                  <p className="text-3xl font-bold text-amber-600">1.2</p>
                </div>
              </div>
            </div>

            {/* Google Ads Performance Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Google Ads Performance</h3>
                  <p className="text-gray-600">ROI, Costs, και Conversions</p>
                </div>
                <div className="mt-3 md:mt-0 flex flex-wrap gap-2">
                  <div className="bg-blue-100 text-blue-700 text-xs font-medium py-1 px-2 rounded-full">
                    Clicks: 82.9K
                  </div>
                  <div className="bg-red-100 text-red-700 text-xs font-medium py-1 px-2 rounded-full">
                    Cost: €66.2K
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs font-medium py-1 px-2 rounded-full">
                    ROAS: 413.89%
                  </div>
                </div>
              </div>

              <div className="relative h-80 rounded-lg border border-gray-200 overflow-hidden">
                <Image
                  src="/images/google-ads-performance.jpg"
                  alt="Google Ads Performance Chart showing 413.89% ROAS"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-opacity"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <p className="font-medium">Conversions</p>
                  <p className="text-3xl font-bold text-amber-600">274K</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="font-medium">Cost per Conv.</p>
                  <p className="text-3xl font-bold text-indigo-600">€0.82</p>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="font-medium">ROAS</p>
                  <p className="text-3xl font-bold text-emerald-600">413.89%</p>
                </div>
              </div>
            </div>

            {/* Data Table Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Αναλυτικά Δεδομένα Καμπανιών</h3>
                <p className="text-gray-600">Λεπτομερείς μετρήσεις απόδοσης των ιατρικών καμπανιών</p>
              </div>

              <div className="relative overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-6">
                <div className="grid grid-cols-5 gap-2 mb-4 bg-gray-100 p-2 rounded-lg text-sm font-semibold text-gray-700">
                  <div>Campaign</div>
                  <div>Clicks</div>
                  <div>Cost</div>
                  <div>Conversions</div>
                  <div>ROAS</div>
                </div>
                <div className="grid grid-cols-5 gap-2 p-2 border-b border-gray-200 text-sm">
                  <div className="font-medium">SEO Clinic</div>
                  <div>12,622</div>
                  <div>€16,016</div>
                  <div>1,432</div>
                  <div className="text-green-600 font-medium">214%</div>
                </div>
                <div className="grid grid-cols-5 gap-2 p-2 border-b border-gray-200 text-sm bg-gray-50">
                  <div className="font-medium">Pediatrics Ads</div>
                  <div>9,706</div>
                  <div>€16,696</div>
                  <div>1,215</div>
                  <div className="text-green-600 font-medium">413%</div>
                </div>
                <div className="grid grid-cols-5 gap-2 p-2 border-b border-gray-200 text-sm">
                  <div className="font-medium">Dental Social</div>
                  <div>22,328</div>
                  <div>€32,713</div>
                  <div>2,647</div>
                  <div className="text-green-600 font-medium">289%</div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-text-light mb-2">
                  <strong>Η διαφορά:</strong> Στην Doctor Digital, βασιζόμαστε αποκλειστικά σε μετρήσιμα δεδομένα και πραγματικά αποτελέσματα. Κάθε πελάτης λαμβάνει μηνιαίες αναφορές με αναλυτικά στοιχεία απόδοσης και προτάσεις για συνεχή βελτίωση.
                </p>
                <p className="text-brand-200 font-medium">
                  Αυτά είναι πραγματικά δεδομένα από ιατρικές καμπάνιες που έχουμε υλοποιήσει.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Τι Λένε οι Πελάτες μας</h2>
            <div className="w-20 h-1 bg-brand-200 mx-auto my-4"></div>
            <p className="text-text-light max-w-2xl mx-auto mb-8">
              Γιατροί και κλινικές μοιράζονται την εμπειρία τους από τις ψηφιακές καμπάνιες της Doctor Digital.
            </p>
          </div>

          {/* Testimonials Schema */}
          <TestimonialsSchema
            testimonials={[
              {
                author: "Δρ. Γεώργιος Παπαδόπουλος",
                position: "Διευθυντής",
                organization: "Ιατρική Κλινική Αθηνών",
                text: "Μέσα σε 90 ημέρες, η κλινική μας είδε 200% αύξηση στις οργανικές επισκέψεις και 45% αύξηση στον αριθμό των ραντεβού. Η συνεργασία με την Doctor Digital ήταν η καλύτερη επένδυση που κάναμε τα τελευταία χρόνια.",
                rating: 5
              },
              {
                author: "Δρ. Ελένη Μαρκοπούλου",
                position: "Παιδίατρος",
                organization: "Παιδικό Χαμόγελο",
                text: "Οι διαφημίσεις Google Ads που έστησε η ομάδα της Doctor Digital μας έχουν φέρει 75% περισσότερα ραντεβού με μειωμένο κόστος ανά ασθενή. Λαμβάνουμε σταθερά αποτελέσματα εδώ και 8 μήνες.",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="relative mb-4">
                <div className="absolute -top-3 -left-2 text-4xl text-brand-200 opacity-20">"</div>
                <p className="italic text-text-light pt-2">
                  Μέσα σε 90 ημέρες, η κλινική μας είδε 200% αύξηση στις οργανικές επισκέψεις και 45% αύξηση στον αριθμό των ραντεβού. Η συνεργασία με την Doctor Digital ήταν η καλύτερη επένδυση που κάναμε τα τελευταία χρόνια.
                </p>
              </div>
              <div className="flex items-center border-t border-gray-100 pt-3 mt-3">
                <div className="flex-1">
                  <p className="font-semibold">Δρ. Γεώργιος Παπαδόπουλος</p>
                  <p className="text-sm text-text-light">Διευθυντής, Ιατρική Κλινική Αθηνών</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="relative mb-4">
                <div className="absolute -top-3 -left-2 text-4xl text-brand-200 opacity-20">"</div>
                <p className="italic text-text-light pt-2">
                  Οι διαφημίσεις Google Ads που έστησε η ομάδα της Doctor Digital μας έχουν φέρει 75% περισσότερα ραντεβού με μειωμένο κόστος ανά ασθενή. Λαμβάνουμε σταθερά αποτελέσματα εδώ και 8 μήνες.
                </p>
              </div>
              <div className="flex items-center border-t border-gray-100 pt-3 mt-3">
                <div className="flex-1">
                  <p className="font-semibold">Δρ. Ελένη Μαρκοπούλου</p>
                  <p className="text-sm text-text-light">Παιδίατρος, "Παιδικό Χαμόγελο"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-br from-brand-50 to-background p-10 rounded-xl shadow-md max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-100 rounded-full opacity-20"></div>

            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-text-heading">Έτοιμοι να δείτε αντίστοιχα αποτελέσματα;</h2>
                <p className="text-text-light max-w-2xl mx-auto mb-8">
                  Επικοινωνήστε μαζί μας για μια δωρεάν αξιολόγηση της τρέχουσας ψηφιακής παρουσίας σας και των δυνατοτήτων βελτίωσης.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link href="/epikoinonia" className="btn-primary py-3 px-8 rounded-md">
                    Ζητήστε Δωρεάν Αξιολόγηση
                  </Link>
                  {/* Changed to a tel: link using the constant */}
                  <a href={`tel:${SITE.contactPhone}`} className="btn-outline py-3 px-8 rounded-md">
                    Καλέστε μας στο {SITE.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
