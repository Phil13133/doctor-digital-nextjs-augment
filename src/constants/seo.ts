/**
 * SEO Constants
 *
 * This file defines SEO-related constants used across the site.
 * It provides default values and templates for metadata.
 */

import { SITE } from './site';

export const DEFAULT_SEO = {
  title: 'Ιατρικό Marketing για Γιατρούς & Κλινικές στην Ελλάδα',
  titleTemplate: SITE.titleTemplate,
  description: SITE.description,
  canonical: SITE.url,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: `${SITE.url}/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    handle: '@doctordigitalgr',
    site: '@doctordigitalgr',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#53C2A0', // Brand green color
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

// Schema.org organization data
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/Doctordigital SVG-logo.svg`,
  sameAs: [
    SITE.socialMedia.facebook,
    SITE.socialMedia.instagram,
    SITE.socialMedia.linkedin,
    SITE.socialMedia.youtube,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.contactPhone,
    contactType: 'customer service',
    email: SITE.contactEmail,
    areaServed: 'GR',
    availableLanguage: ['Greek', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.country,
  },
};

export default { DEFAULT_SEO, ORGANIZATION_SCHEMA };
