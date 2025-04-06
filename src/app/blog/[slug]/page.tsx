import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';
// Removed date-fns imports as date is not displayed
// import { format, parseISO } from 'date-fns';
// import { el } from 'date-fns/locale';

import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/contentfulApi';
import BlogPostSchema from '@/components/schema/BlogPostSchema';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { SITE } from '@/constants/site';
import { getMockBlogPostBySlug } from '../mock-data';

// Removed formatDate function

// Helper function to safely get nested field values
function getFieldValue<T>(field: any): T | undefined {
    return field;
}

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  try {
    const allPosts = await getAllBlogPosts();
    if (allPosts?.items?.length) {
      return allPosts.items.map((post) => ({
        slug: post.fields.slug,
      }));
    }
  } catch (error) {
    console.error('Error generating static params for blog posts:', error);
  }

  // Fallback to mock data if Contentful is not available
  const mockPosts = await import('../mock-data').then(mod => mod.mockBlogPosts);
  return mockPosts.map((post) => ({
    slug: post.fields.slug,
  }));
}

// Generate metadata for the specific blog post page
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let post;

  try {
    // Try to get the post from Contentful
    post = await getBlogPostBySlug(params.slug);

    // If not found in Contentful, try mock data
    if (!post) {
      post = getMockBlogPostBySlug(params.slug);
    }
  } catch (error) {
    console.error(`Error generating metadata for blog post with slug ${params.slug}:`, error);
    // Try mock data as fallback
    post = getMockBlogPostBySlug(params.slug);
  }

  if (!post) {
    return {
      title: 'Άρθρο δεν βρέθηκε',
    };
  }

  const seoData = getFieldValue<any>(post.fields.seoFields)?.fields;
  const imageUrl = getFieldValue<any>(post.fields.featuredImage)?.fields?.file?.url;
  const fullImageUrl = imageUrl ? `https:${imageUrl}` : `${SITE.url}/og/blog.jpg`; // Fallback image

  return {
    title: seoData?.seoTitle || post.fields.title,
    description: seoData?.seoDescription || post.fields.excerpt || post.fields.subtitle,
    alternates: {
      canonical: `${SITE.url}/blog/${post.fields.slug}`,
    },
    openGraph: {
      title: seoData?.seoTitle || post.fields.title,
      description: seoData?.seoDescription || post.fields.excerpt || post.fields.subtitle,
      url: `${SITE.url}/blog/${post.fields.slug}`,
      type: 'article',
      // publishedTime: post.fields.publicationDate, // Removed due to API issue
      // Add modifiedTime if available in your model
      authors: [getFieldValue<any>(post.fields.author)?.fields?.name || SITE.name],
      images: [
        {
          url: fullImageUrl,
          // Add width/height if available
          alt: getFieldValue<any>(post.fields.featuredImage)?.fields?.title || post.fields.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData?.seoTitle || post.fields.title,
      description: seoData?.seoDescription || post.fields.excerpt || post.fields.subtitle,
      images: [fullImageUrl],
    },
  };
}


// The main component to render the blog post
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Try to get the post from Contentful, fall back to mock data if not available
  let post;
  try {
    post = await getBlogPostBySlug(params.slug);

    // If post not found in Contentful, try mock data
    if (!post) {
      console.log(`Post with slug ${params.slug} not found in Contentful, trying mock data`);
      post = getMockBlogPostBySlug(params.slug);
    }
  } catch (error) {
    console.error(`Error fetching blog post with slug ${params.slug}:`, error);
    post = getMockBlogPostBySlug(params.slug);
  }

  // If post not found in either source, return 404
  if (!post) {
    notFound();
  }

  // Destructure fields *after* the null check - remove publicationDate
  const { title, featuredImage, content, author, seoFields, excerpt, subtitle } = post.fields;
  const authorName = getFieldValue<any>(author)?.fields?.name || 'Doctor Digital';
  const imageUrl = getFieldValue<any>(featuredImage)?.fields?.file?.url;
  const imageAlt = getFieldValue<any>(featuredImage)?.fields?.title || title;
  const seoData = getFieldValue<any>(seoFields)?.fields;

  return (
    <>
      {/* Add BlogPost Schema */}
      <BlogPostSchema
        headline={title}
        description={seoData?.seoDescription || excerpt || subtitle || ''}
        image={imageUrl ? `https:${imageUrl}` : ''}
        datePublished="" // Pass empty string to satisfy prop type
        // dateModified={...} // Add if you have a modified date field
        author={{ name: authorName }}
        publisher={{ name: SITE.name, logo: `${SITE.url}${SITE.logoPath}` }}
        url={`${SITE.url}/blog/${post.fields.slug}`}
        // keywords={...} // Add if you have a keywords field
        articleBody={content ? JSON.stringify(content) : undefined} // Pass raw rich text JSON
      />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto py-4 max-w-3xl">
        <BreadcrumbNav
          items={[
            { name: 'Αρχική', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: title, url: `${SITE.url}/blog/${post.fields.slug}` }
          ]}
          className="text-sm mb-4"
        />
      </div>

      <article className="container mx-auto py-8 max-w-3xl">
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <div className="text-gray-600 text-sm flex items-center space-x-4">
            {/* Date display fully removed */}
            <span>Από {authorName}</span>
            {/* Add category if available */}
          </div>
        </header>

        {/* Featured Image */}
        {imageUrl && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={`https:${imageUrl}`}
              alt={imageAlt}
              width={getFieldValue<any>(featuredImage)?.fields.file.details.image?.width || 800}
              height={getFieldValue<any>(featuredImage)?.fields.file.details.image?.height || 450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Post Content - Render Rich Text */}
        <div className="prose prose-lg max-w-none">
          {content ? documentToReactComponents(content as Document) : <p>Content loading error...</p>}
        </div>

        {/* Back to Blog Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/blog" className="text-primary hover:underline">
            &larr; Επιστροφή στο Blog
          </Link>
        </div>
      </article>
    </>
  );
}

// Optional: Enable ISR (Incremental Static Regeneration)
// export const revalidate = 60; // Revalidate every 60 seconds
