import React from 'react';
import SchemaMarkup from './SchemaMarkup';

interface BlogPostSchemaProps {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  publisher: {
    name: string;
    logo: string;
  };
  url: string;
  keywords?: string[];
  articleBody?: string;
  articleSection?: string;
}

/**
 * Component for rendering BlogPosting schema markup using JSON-LD
 */
export default function BlogPostSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
  publisher,
  url,
  keywords = [],
  articleBody,
  articleSection,
}: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline,
    description,
    image,
    datePublished,
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: author.name,
      ...(author.url && { url: author.url }),
    },
    publisher: {
      '@type': 'Organization',
      name: publisher.name,
      logo: {
        '@type': 'ImageObject',
        url: publisher.logo,
      },
    },
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(articleBody && { articleBody }),
    ...(articleSection && { articleSection }),
  };

  return <SchemaMarkup schema={schema} />;
}
