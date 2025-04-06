import React from 'react';
import SchemaMarkup from './SchemaMarkup';

interface ServiceSchemaProps {
  name: string;
  url: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  serviceArea?: {
    name: string;
    type: 'City' | 'State' | 'Country';
  }[];
  offers?: {
    price?: number;
    priceCurrency?: string;
    availability?: string;
    validFrom?: string;
    validThrough?: string;
  };
  category?: string;
  image?: string;
}

/**
 * Component for rendering Service schema markup using JSON-LD
 */
export default function ServiceSchema({
  name,
  url,
  description,
  provider,
  serviceArea = [],
  offers,
  category,
  image,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    url,
    description,
    provider: {
      '@type': 'Organization',
      ...provider,
    },
    ...(serviceArea.length > 0 && {
      areaServed: serviceArea.map((area) => ({
        '@type': 'GeoShape',
        name: area.name,
        addressCountry: area.type === 'Country' ? area.name : undefined,
        addressRegion: area.type === 'State' ? area.name : undefined,
        addressLocality: area.type === 'City' ? area.name : undefined,
      })),
    }),
    ...(offers && {
      offers: {
        '@type': 'Offer',
        ...offers,
      },
    }),
    ...(category && { category }),
    ...(image && { image }),
  };

  return <SchemaMarkup schema={schema} />;
}
