import React from 'react';
import SchemaMarkup from './SchemaMarkup';

interface ReviewSchemaProps {
  itemReviewed: {
    type: string;
    name: string;
    image?: string;
    description?: string;
    url?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating?: number;
    worstRating?: number;
  };
  author: {
    name: string;
    url?: string;
  };
  publisher?: {
    name: string;
    url?: string;
  };
  reviewBody?: string;
  datePublished?: string;
}

/**
 * Component for rendering Review schema markup using JSON-LD
 */
export default function ReviewSchema({
  itemReviewed,
  reviewRating,
  author,
  publisher,
  reviewBody,
  datePublished,
}: ReviewSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': itemReviewed.type,
      name: itemReviewed.name,
      ...(itemReviewed.image && { image: itemReviewed.image }),
      ...(itemReviewed.description && { description: itemReviewed.description }),
      ...(itemReviewed.url && { url: itemReviewed.url }),
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1,
    },
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    ...(publisher && {
      publisher: {
        '@type': 'Organization',
        name: publisher.name,
        ...(publisher.url && { url: publisher.url }),
      },
    }),
    ...(reviewBody && { reviewBody }),
    ...(datePublished && { datePublished }),
  };

  return <SchemaMarkup schema={schema} />;
}
