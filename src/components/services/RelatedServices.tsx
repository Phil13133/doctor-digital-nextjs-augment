import React from 'react';
import Link from 'next/link';

interface ServiceLink {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  currentService: string;
  className?: string;
}

export default function RelatedServices({ currentService, className = '' }: RelatedServicesProps) {
  // Define all services with their details
  const allServices: ServiceLink[] = [
    {
      title: 'SEO για Ιατρικές Ιστοσελίδες',
      description: 'Ανεβάστε το ιατρείο σας στα οργανικά αποτελέσματα με ασφαλείς και ηθικές πρακτικές βελτιστοποίησης.',
      href: '/ypiresies/seo-gia-iatrous'
    },
    {
      title: 'Google Ads για Ιατρούς',
      description: 'Εμφανιστείτε στην κορυφή της Google με στοχευμένες διαφημίσεις όταν οι ασθενείς αναζητούν τις υπηρεσίες σας.',
      href: '/ypiresies/diafimisi-sth-google'
    },
    {
      title: 'Κατασκευή Ιστοσελίδων για Ιατρούς',
      description: 'Σύγχρονα, responsive και SEO-ready sites ειδικά σχεδιασμένα για τον ιατρικό κλάδο.',
      href: '/ypiresies/kataskevi-istoselidon-gia-giatrous'
    },
    {
      title: 'Ιατρικό Λογισμικό & Web Apps',
      description: 'Εξειδικευμένες εφαρμογές για διαχείριση ραντεβού, ιατρικά αρχεία και αυτοματοποίηση διαδικασιών του ιατρείου σας.',
      href: '/ypiresies/iatriko-logismiko'
    },
    {
      title: 'Ιατρικό Περιεχόμενο & Blogging',
      description: 'Άρθρα, ενημερωτικά κείμενα και σελίδες υπηρεσιών γραμμένα με επιστημονική εγκυρότητα από εξειδικευμένους ιατρικούς συντάκτες.',
      href: '/ypiresies/copywriting-gia-iatrous'
    }
  ];

  // Filter out the current service
  const relatedServices = allServices.filter(service => service.href !== currentService);

  // Function to get the appropriate icon color based on service type
  const getIconBgColor = (href: string) => {
    if (href.includes('seo-gia-iatrous')) return 'from-blue-400 to-blue-500';
    if (href.includes('diafimisi-sth-google')) return 'from-red-400 to-red-500';
    if (href.includes('kataskevi-istoselidon')) return 'from-purple-400 to-purple-500';
    if (href.includes('iatriko-logismiko')) return 'from-green-400 to-green-500';
    if (href.includes('copywriting-gia-iatrous')) return 'from-yellow-400 to-yellow-500';
    return 'from-brand-100 to-brand-200';
  };

  return (
    <div className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Σχετικές Υπηρεσίες</h2>
          <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl text-center">Ανακαλύψτε περισσότερες υπηρεσίες που μπορούν να βοηθήσουν το ιατρείο σας να αναπτυχθεί ψηφιακά</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedServices.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl"></div>

              <Link href={service.href} className="relative block p-6 h-full">
                <div className="flex flex-col h-full">
                  {/* Icon with gradient background */}
                  <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${getIconBgColor(service.href)} flex items-center justify-center shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {service.href.includes('seo-gia-iatrous') && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                    {service.href.includes('diafimisi-sth-google') && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                    )}
                    {service.href.includes('kataskevi-istoselidon') && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {service.href.includes('iatriko-logismiko') && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {service.href.includes('copywriting-gia-iatrous') && (
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    )}
                  </div>

                  {/* Title with animated underline */}
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-brand-200 transition-colors duration-300">
                    {service.title}
                    <span className="block w-0 group-hover:w-full h-0.5 bg-brand-200 transition-all duration-300 mt-1"></span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm flex-grow mb-4">{service.description}</p>

                  {/* Call to action with animated arrow */}
                  <div className="mt-auto">
                    <span className="inline-flex items-center text-brand-200 font-medium text-sm group-hover:font-semibold transition-all duration-300">
                      Μάθετε περισσότερα
                      <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
