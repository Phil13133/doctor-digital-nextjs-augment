'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Added import for Link component
import { SITE } from '@/constants/site'; // Import SITE constants
// Image import is not used in this component

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
    // Show success message (in real implementation)
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-r from-brand-200 to-brand-300 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Επικοινωνήστε Μαζί Μας</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Είμαστε εδώ για να βοηθήσουμε στην ανάπτυξη του ιατρείου σας. 
              Συμπληρώστε τη φόρμα για να λάβετε δωρεάν αξιολόγηση της ψηφιακής σας παρουσίας.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form Section */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-text-heading mb-6">Φόρμα Επικοινωνίας</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-group">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Ονοματεπώνυμο *</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-200 focus:border-brand-200 transition-all duration-200 outline-none" 
                        placeholder="Το ονοματεπώνυμό σας"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-200 focus:border-brand-200 transition-all duration-200 outline-none" 
                        placeholder="Το email σας"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Τηλέφωνο *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-200 focus:border-brand-200 transition-all duration-200 outline-none" 
                        placeholder="Το τηλέφωνό σας"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Ιατρείο/Εταιρεία</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-200 focus:border-brand-200 transition-all duration-200 outline-none" 
                        placeholder="Το όνομα του ιατρείου/της εταιρείας σας"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group mt-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Θέμα *</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-200 focus:border-brand-200 transition-all duration-200 outline-none bg-white" 
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Επιλέξτε υπηρεσία</option>
                      <option value="seo">SEO - Βελτιστοποίηση για Μηχανές Αναζήτησης</option>
                      <option value="google-ads">Google Ads Management</option>
                      <option value="content">Ιατρικό Content Writing</option>
                      <option value="website">Κατασκευή Ιατρικής Ιστοσελίδας</option>
                      <option value="medical-web">Ιατρικές Εφαρμογές & Λογισμικό</option>
                      <option value="medical-marketing">Ολοκληρωμένο Ιατρικό Marketing</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="other">Άλλο</option>
                    </select>
                  </div>
                  
                  <div className="form-group mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Μήνυμα *</label>
                    <textarea 
                      id="message" 
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-brand-200 focus:border-brand-200 transition-all duration-200 outline-none h-36 resize-none" 
                      placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mt-8">
                    <button type="submit" className="btn-primary w-full py-4 text-lg hover:scale-[1.02] shadow-md">
                      Αποστολή Μηνύματος
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Contact Information Sidebar */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-50 rounded-full -mr-16 -mt-16 opacity-20"></div>
              
              <h2 className="text-2xl font-bold text-text-heading mb-8 relative z-10">Στοιχεία Επικοινωνίας</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start">
                  <div className="bg-brand-200 text-white rounded-full p-3 mr-4 flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-text-heading">Τηλέφωνο</h3>
                    <p className="text-gray-700">{SITE.contactPhone}</p>
                    <p className="text-sm text-brand-200 mt-1">Διαθέσιμοι από Δευτέρα έως Παρασκευή, 09:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-200 text-white rounded-full p-3 mr-4 flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-text-heading">Email</h3>
                    <p className="text-gray-700">{SITE.contactEmail}</p>
                    <p className="text-sm text-brand-200 mt-1">Θα σας απαντήσουμε εντός 24 ωρών</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-200 text-white rounded-full p-3 mr-4 flex-shrink-0 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-text-heading">Διεύθυνση</h3>
                    <p className="text-gray-700">{`${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`}</p>
                    <p className="text-sm text-brand-200 mt-1">Μπορείτε να μας επισκεφθείτε κατόπιν ραντεβού</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
              <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-gray-200">
                  {/* In a real implementation, this would be a Google Maps embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.533254687411!2d23.7833!3d37.9839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzAyLjAiTiAyM8KwNDYnNTkuOSJF!5e0!3m2!1sen!2sgr!4v1624012345678!5m2!1sen!2sgr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              
              <div className="relative z-10 p-8 bg-white bg-opacity-90 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-2 text-text-heading">Ωράριο Λειτουργίας</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Δευτέρα - Παρασκευή:</span>
                    <span className="text-brand-300 font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Σάββατο - Κυριακή:</span>
                    <span>Κλειστά</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action Banner */}
      <div className="bg-brand-50 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-50 rounded-full -mr-12 -mb-12 opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-text-heading mb-4 text-center">Ενισχύστε την Online Παρουσία του Ιατρείου σας</h2>
              <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
                Εξειδικευόμαστε στην προώθηση ιατρικών υπηρεσιών και την προσέλκυση των κατάλληλων ασθενών. Αφήστε μας να δημιουργήσουμε μια στρατηγική ειδικά για εσάς.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/epikoinonia" className="btn-primary text-center py-4 px-8 text-lg">Δωρεάν Αξιολόγηση</Link> {/* Changed to Link and path */}
                <Link href="/ypiresies" className="btn-outline text-center py-4 px-8 text-lg">Περισσότερα για τις Υπηρεσίες μας</Link> {/* Changed to Link and path */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
