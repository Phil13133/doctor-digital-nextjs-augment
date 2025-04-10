/**
 * Navigation configuration
 *
 * This file defines the main navigation structure for the site.
 * It's used to dynamically generate navigation elements throughout the site.
 */

import { ROUTES } from './routes';

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
  isExternal?: boolean;
}

export const MAIN_NAV: NavItem[] = [
  {
    label: 'Αρχική',
    path: ROUTES.HOME,
  },
  {
    label: 'Υπηρεσίες',
    path: ROUTES.SERVICES,
  },
  {
    label: 'Case Studies',
    path: ROUTES.CASE_STUDIES,
  },
  {
    label: 'Blog',
    path: ROUTES.BLOG,
  },
  {
    label: 'Επικοινωνία',
    path: ROUTES.CONTACT,
  },
];

export const FOOTER_NAV = {
  company: [
    { label: 'Αρχική', path: ROUTES.HOME },
    { label: 'Υπηρεσίες', path: ROUTES.SERVICES },
    { label: 'Case Studies', path: ROUTES.CASE_STUDIES },
    { label: 'Blog', path: ROUTES.BLOG },
    { label: 'Επικοινωνία', path: ROUTES.CONTACT },
  ],
  services: [
    { label: 'Κατασκευή Ιστοσελίδων', path: ROUTES.WEBSITE_DEVELOPMENT },
    { label: 'SEO για Ιατρούς', path: ROUTES.SEO },
    { label: 'Google Ads', path: ROUTES.GOOGLE_ADS },
    { label: 'Ιατρικό Copywriting', path: ROUTES.COPYWRITING },
    { label: 'Ιατρικό Λογισμικό', path: ROUTES.MEDICAL_SOFTWARE },
  ],
  legal: [
    { label: 'Όροι Χρήσης', path: '/oroi-xrisis' },
    { label: 'Πολιτική Απορρήτου', path: '/politiki-aporritou' },
    { label: 'Cookies', path: '/cookies' },
  ],
};

export default { MAIN_NAV, FOOTER_NAV };
