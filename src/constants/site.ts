/**
 * Site-wide metadata and configuration
 * 
 * This file contains global site metadata and configuration values used throughout the application.
 * Centralizing these values ensures consistent branding and SEO metadata.
 */

export const SITE = {
  name: 'Doctor Digital',
  titleTemplate: '%s | Doctor Digital',
  description: 'Εξειδικευμένο ιατρικό marketing και ψηφιακές λύσεις για ιατρούς, κλινικές και επαγγελματίες υγείας στην Ελλάδα.',
  url: 'https://doctordigital.gr',
  locale: 'el-GR',
  logoPath: '/images/Doctordigital SVG-logo.svg',
  logoPathDark: '/images/Doctordigital PNG-light-logo.png',
  contactEmail: 'marketing@doctordigital.gr',
  contactPhone: '697 444 7775',
  address: {
    street: 'Παπανούτσου 12',
    city: 'Νέο Ηράκλειο',
    postalCode: '14122',
    country: 'Ελλάδα', // Kept country as Greece, updated city/postal code
  },
  socialMedia: {
    facebook: 'https://facebook.com/doctordigitalgr', // Update with actual URLs
    instagram: 'https://instagram.com/doctordigitalgr',
    linkedin: 'https://linkedin.com/company/doctordigital',
    youtube: 'https://youtube.com/c/doctordigital',
  }
};

// Specify company founding year for copyright notices
export const COMPANY_FOUNDING_YEAR = 2020; // Update with actual year

// Common calls to action
export const CTA = {
  requestAnalysis: 'Ζητήστε Δωρεάν SEO Ανάλυση',
  bookAppointment: 'Κλείστε Ραντεβού με Ειδικό',
  contactUs: 'Επικοινωνήστε Μαζί μας',
  requestSample: 'Ζητήστε Δωρεάν Δείγμα',
};

export default SITE;
