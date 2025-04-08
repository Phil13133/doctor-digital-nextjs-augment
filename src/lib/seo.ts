/**
 * SEO utilities
 *
 * This file contains utilities for managing SEO metadata and structured data.
 * It works with Next.js metadata API and JSON-LD for structured data.
 */

import { Metadata } from 'next';
import { SITE } from '@/constants/site';
import { DEFAULT_SEO, ORGANIZATION_SCHEMA } from '@/constants/seo';
import { PageMeta } from '@/types';

/**
 * Creates Next.js metadata object for a page
 *
 * @param pageMeta - Page-specific metadata
 * @returns Next.js Metadata object
 */
export function createMetadata(pageMeta: Partial<PageMeta> = {}): Metadata {
  const title = pageMeta.title || DEFAULT_SEO.title;
  const description = pageMeta.description || DEFAULT_SEO.description;

  return {
    title: {
      default: title,
      template: SITE.titleTemplate,
    },
    description,
    keywords: pageMeta.keywords,
    openGraph: {
      title,
      description,
      url: pageMeta.canonical || SITE.url,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [
        {
          url: pageMeta.ogImage || `${SITE.url}/og/home.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [pageMeta.ogImage || `${SITE.url}/og/home.jpg`],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: pageMeta.canonical,
    },
  };
}

/**
 * Prepares JSON-LD data for structured data
 *
 * @param data - The structured data object
 * @returns Stringified JSON-LD data
 */
export function prepareJsonLd(data: Record<string, any>): string {
  return JSON.stringify(data);
}

/**
 * Creates a breadcrumb schema for JSON-LD
 *
 * @param items - Array of breadcrumb items with name and url
 * @returns BreadcrumbList schema object
 */
export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Creates a Blog Post schema for JSON-LD
 *
 * @param post - Blog post data
 * @returns BlogPosting schema object
 */
export function createBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.image,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}${SITE.logoPath}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
  };
}

/**
 * Creates a FAQ schema for JSON-LD
 *
 * @param questions - Array of question/answer pairs
 * @returns FAQPage schema object
 */
export function createFAQSchema(
  questions: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: qa.answer,
      },
    })),
  };
}

/**
 * Creates a Service schema for JSON-LD
 *
 * @param service - Service data
 * @returns Service schema object
 */
export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: {
    name: string;
    url: string;
  };
  area?: Array<{ name: string; type: string }>;
  category?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.image && { image: service.image }),
    provider: {
      '@type': 'Organization',
      name: service.provider?.name || SITE.name,
      url: service.provider?.url || SITE.url,
    },
    ...(service.area && {
      areaServed: service.area.map((a) => ({
        '@type': a.type,
        name: a.name,
      })),
    }),
    ...(service.category && { category: service.category }),
  };
}

/**
 * Creates organization schema for JSON-LD
 *
 * @returns Organization schema object
 */
export function createOrganizationSchema() {
  return ORGANIZATION_SCHEMA;
}

export default {
  createMetadata,
  prepareJsonLd,
  createBreadcrumbSchema,
  createBlogPostSchema,
  createFAQSchema,
  createServiceSchema,
  createOrganizationSchema,
};
