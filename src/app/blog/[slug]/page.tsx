import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document } from '@contentful/rich-text-types';

import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/contentfulApi';
import BlogPostSchema from '@/components/schema/BlogPostSchema';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { SITE } from '@/constants/site';

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

  // Return empty array if no posts are found
  return [];
}

// Generate metadata for the specific blog post page
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  let post;

  try {
    // Try to get the post from Contentful
    post = await getBlogPostBySlug(params.slug, false);
  } catch (error) {
    console.error(`Error generating metadata for blog post with slug ${params.slug}:`, error);
  }

  if (!post) {
    return {
      title: 'Άρθρο δεν βρέθηκε',
    };
  }

  // Get SEO data with proper fallbacks
  const seoData = getFieldValue<any>(post.fields.seoFields)?.fields;
  const defaultDescription = 'Εξειδικευμένες συμβουλές και οδηγοί για ιατρικές ιστοσελίδες από την Doctor Digital';
  const seoDescription = seoData?.pageDescription || post.fields.excerpt || post.fields.subtitle || defaultDescription;
  const imageUrl = getFieldValue<any>(post.fields.featuredImage)?.fields?.file?.url;
  const fullImageUrl = imageUrl ? `https:${imageUrl}` : `${SITE.url}/og/blog.jpg`; // Fallback image
  
  // Log SEO description for debugging in development
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Meta description for ${params.slug}:`, seoDescription ? seoDescription.substring(0, 50) + '...' : 'Missing');
    // Log the actual field names from Contentful for debugging
    console.log(`SEO fields from Contentful:`, seoData ? Object.keys(seoData).join(', ') : 'No SEO data');
  }

  // Log the actual description value for debugging
  if (process.env.NODE_ENV !== 'production') {
    console.log(`Final SEO description value: "${seoDescription}"`);
  }

  return {
    metadataBase: new URL(SITE.url),
    title: seoData?.pageTitle || post.fields.title,
    description: seoDescription, // This is the key field that needs to be populated correctly
    alternates: {
      canonical: `${SITE.url}/blog/${post.fields.slug}`,
    },
    openGraph: {
      title: seoData?.pageTitle || post.fields.title,
      description: seoDescription,
      url: `${SITE.url}/blog/${post.fields.slug}`,
      type: 'article',
      publishedTime: post.fields.publishedDate || post.sys.createdAt,
      modifiedTime: post.sys.updatedAt,
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
      title: seoData?.pageTitle || post.fields.title,
      description: seoDescription,
      images: [fullImageUrl],
    },
  };
}


// The main component to render the blog post
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Try to get the post from Contentful
  let post;
  try {
    post = await getBlogPostBySlug(params.slug);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${params.slug}:`, error);
  }

  // If post not found in either source, return 404
  if (!post) {
    notFound();
  }

  // Destructure fields *after* the null check - use publishedDate instead of publicationDate
  const { title, featuredImage, content, author, seoFields, excerpt, subtitle, publishedDate } = post.fields;
  const authorName = getFieldValue<any>(author)?.fields?.name || 'Doctor Digital';

  // Get author avatar with proper nested field access
  const authorAvatar = getFieldValue<any>(author)?.fields?.avatar;
  
  // Get the URL with proper nested field access
  // In Contentful, the avatar field is a reference to an Asset
  const authorAvatarUrl = authorAvatar?.fields?.file?.url || null;
  const imageUrl = getFieldValue<any>(featuredImage)?.fields?.file?.url;
  const imageAlt = getFieldValue<any>(featuredImage)?.fields?.title || title;
  const seoData = getFieldValue<any>(seoFields)?.fields;

  return (
    <>
      {/* Add BlogPost Schema */}
      <BlogPostSchema
        headline={title}
        description={seoData?.pageDescription || excerpt || subtitle || ''}
        image={imageUrl ? `https:${imageUrl}` : ''}
        datePublished={publishedDate || new Date().toISOString()} // Use published date or fallback to current date
        dateModified={post.sys.updatedAt} // Use the system updatedAt field
        author={{ name: authorName }}
        publisher={{ name: SITE.name, logo: `${SITE.url}${SITE.logoPath}` }}
        url={`${SITE.url}/blog/${post.fields.slug}`}
        keywords={seoData?.keywords?.split(',').map((k: string) => k.trim()) || []}
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
            {/* Display date */}
            {publishedDate && (
              <span className="text-gray-500">
                {new Date(publishedDate).toLocaleDateString('el-GR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            )}

            {/* Author with photo */}
            <div className="flex items-center">
              {authorAvatarUrl ? (
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={`https:${authorAvatarUrl}`}
                      alt={authorName}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span>Από {authorName}</span>
                </div>
              ) : (
                <span>Από {authorName}</span>
              )}
            </div>
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

// Enable ISR (Incremental Static Regeneration)
export const revalidate = 300; // Revalidate every 5 minutes
