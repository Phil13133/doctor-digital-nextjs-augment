/**
 * Application routes
 * 
 * This file contains all the internal route paths used throughout the application.
 * Using this centralized approach ensures consistency and makes route updates easier.
 */

export const ROUTES = {
  // Main pages
  HOME: '/',
  BLOG: '/blog',
  CASE_STUDIES: '/case-studies',
  CONTACT: '/epikoinonia',
  
  // Service pages
  SERVICES: '/ypiresies',
  SERVICE_DETAIL: (slug: string) => `/ypiresies/${slug}`,
  
  // Specific services
  COPYWRITING: '/ypiresies/copywriting-gia-iatrous',
  WEBSITE_DEVELOPMENT: '/ypiresies/kataskevi-istoselidon-gia-giatrous',
  SEO: '/ypiresies/seo-gia-iatrous',
  GOOGLE_ADS: '/ypiresies/diafimisi-sth-google',
  MEDICAL_SOFTWARE: '/ypiresies/iatriko-logismiko',
};

export default ROUTES;
