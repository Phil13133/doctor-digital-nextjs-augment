import React from 'react';
import SchemaMarkup from './SchemaMarkup';

interface LocalBusinessSchemaProps {
  name: string;
  url: string;
  image?: string;
  description?: string;
  telephone?: string;
  priceRange?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion?: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: {
    day: string;
    opens: string;
    closes: string;
  }[];
  sameAs?: string[];
  businessType: string;
}

/**
 * Component for rendering LocalBusiness schema markup using JSON-LD
 */
export default function LocalBusinessSchema({
  name,
  url,
  image,
  description,
  telephone,
  priceRange,
  address,
  geo,
  openingHours = [],
  sameAs = [],
  businessType,
}: LocalBusinessSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': businessType,
    name,
    url,
    ...(image && { image }),
    ...(description && { description }),
    ...(telephone && { telephone }),
    ...(priceRange && { priceRange }),
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    ...(geo && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: geo.latitude,
        longitude: geo.longitude,
      },
    }),
    ...(openingHours.length > 0 && {
      openingHoursSpecification: openingHours.map((hours) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hours.day,
        opens: hours.opens,
        closes: hours.closes,
      })),
    }),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return <SchemaMarkup schema={schema} />;
}
