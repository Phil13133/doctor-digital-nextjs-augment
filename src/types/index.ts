/**
 * Types module index
 * 
 * This file contains TypeScript interfaces and types used throughout the application.
 * Centralizing types in this way provides better type safety and consistency.
 */

// Site content types
export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Service types
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription?: string;
  icon?: string;
  image?: string;
  benefits?: string[];
  features?: ServiceFeature[];
  faqs?: FAQ[];
  caseStudies?: string[]; // IDs or slugs of related case studies
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

// FAQ types
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  position?: string;
  company?: string;
  quote: string;
  rating?: number; // 1-5 star rating
  image?: string;
  serviceId?: string; // Related service
}

// Navigation types
export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
  icon?: string;
  children?: NavLink[];
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  interestedServices?: string[]; // IDs or slugs of services
  howDidYouHear?: string;
  consent: boolean;
}

export interface SubscribeFormData {
  email: string;
  name?: string;
  consent: boolean;
}

// Blog types
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  publishDate: string;
  updatedDate?: string;
  categories: string[];
  tags: string[];
  related?: string[]; // IDs of related posts
}

export interface Author {
  id: string;
  name: string;
  bio?: string;
  image?: string;
  role?: string;
}

// Case Study types
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[]; // IDs of related services
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: Testimonial;
  images: string[];
  date: string;
}

export interface CaseStudyResult {
  stat: string; // The numerical result, e.g., "200%"
  label: string; // Description of the stat, e.g., "Increase in web traffic"
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  jsonLd?: Record<string, any>;
}

// Analytics types
export interface AnalyticsEvent {
  name: string;
  params?: Record<string, any>;
}

// Export all types
export default {
  // These are just namespace identifiers to group the types
  page: {} as PageMeta,
  service: {} as Service,
  testimonial: {} as Testimonial,
  blog: {} as BlogPost,
  caseStudy: {} as CaseStudy,
  form: {
    contact: {} as ContactFormData,
    subscribe: {} as SubscribeFormData,
  },
};
