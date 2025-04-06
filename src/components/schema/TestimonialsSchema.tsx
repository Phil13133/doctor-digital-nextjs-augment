import React from 'react';
import SchemaMarkup from './SchemaMarkup';

interface Testimonial {
  author: string;
  position?: string;
  organization?: string;
  text: string;
  rating?: number;
  date?: string;
}

interface TestimonialsSchemaProps {
  testimonials: Testimonial[];
  itemReviewed: {
    name: string;
    description?: string;
    url?: string;
    image?: string;
  };
}

/**
 * Component for rendering multiple testimonials as Review schema markup using JSON-LD
 */
export default function TestimonialsSchema({
  testimonials,
  itemReviewed
}: TestimonialsSchemaProps) {
  // Create an array of review schemas
  const reviewSchemas = testimonials.map((testimonial, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'Organization',
      'name': itemReviewed.name,
      ...(itemReviewed.description && { 'description': itemReviewed.description }),
      ...(itemReviewed.url && { 'url': itemReviewed.url }),
      ...(itemReviewed.image && { 'image': itemReviewed.image })
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': testimonial.rating || 5,
      'bestRating': 5,
      'worstRating': 1
    },
    'author': {
      '@type': 'Person',
      'name': testimonial.author
    },
    ...(testimonial.organization && {
      'publisher': {
        '@type': 'Organization',
        'name': testimonial.organization
      }
    }),
    'reviewBody': testimonial.text,
    ...(testimonial.date && { 'datePublished': testimonial.date })
  }));

  return (
    <>
      {reviewSchemas.map((schema, index) => (
        <SchemaMarkup key={index} schema={schema} />
      ))}
    </>
  );
}
