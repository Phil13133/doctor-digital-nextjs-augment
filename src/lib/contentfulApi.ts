import { getContentfulClient } from './contentfulClient';
import type { Entry, EntryCollection, EntrySkeletonType, Asset, EntryFieldTypes } from 'contentful'; // Import EntryFieldTypes

// Define interfaces for the expected structure of Contentful entries
// Adjust these based on the exact fields in your Contentful model

// Skeleton for the Author content type (assuming API ID is 'author')
export type AuthorSkeleton = EntrySkeletonType<{
  name: EntryFieldTypes.Symbol; // Re-added EntryFieldTypes.
  avatar?: EntryFieldTypes.AssetLink; // Updated to match Contentful field name
  bio?: EntryFieldTypes.Text; // Added bio field if it exists
}>;
export type AuthorEntry = Entry<AuthorSkeleton, undefined>;

// Skeleton for the SEO content type (assuming API ID is 'componentSeo')
// NOTE: Adjust 'componentSeo' if your template used a different API ID
export type SeoSkeleton = EntrySkeletonType<{
  seoTitle?: EntryFieldTypes.Symbol; // Re-added EntryFieldTypes.
  seoDescription?: EntryFieldTypes.Text; // Re-added EntryFieldTypes.
  // Add other SEO fields if they exist
}>;
export type SeoEntry = Entry<SeoSkeleton, undefined>;

// Skeleton for the BlogPost content type (assuming API ID is 'blogPost')
// NOTE: Adjust 'blogPost' if your template used a different API ID
export type BlogPostSkeleton = EntrySkeletonType<{
  internalName?: EntryFieldTypes.Symbol; // Optional internal name field, Re-added EntryFieldTypes.
  title: EntryFieldTypes.Symbol; // Re-added EntryFieldTypes.
  slug: EntryFieldTypes.Symbol; // Re-added EntryFieldTypes.
  publishedDate: EntryFieldTypes.Date; // Updated to match Contentful field name
  featuredImage?: EntryFieldTypes.AssetLink; // Re-added EntryFieldTypes.
  shortDescription?: EntryFieldTypes.Text; // Added based on Contentful model
  excerpt?: EntryFieldTypes.Text; // Assuming 'Subtitle' field maps to this, or a dedicated field, Re-added EntryFieldTypes.
  subtitle?: EntryFieldTypes.Text; // Keep if separate from excerpt, Re-added EntryFieldTypes.
  content: EntryFieldTypes.RichText; // Re-added EntryFieldTypes.
  author?: EntryFieldTypes.EntryLink<AuthorSkeleton>; // Re-added EntryFieldTypes.
  seoFields?: EntryFieldTypes.EntryLink<SeoSkeleton>; // Re-added EntryFieldTypes.
  relatedBlogPosts?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<BlogPostSkeleton>>; // Re-added EntryFieldTypes.
  // Add other fields like category (e.g., category: EntryFieldTypes.Symbol) if needed
}>;

// Type for a single Blog Post entry
export type BlogPostEntry = Entry<BlogPostSkeleton, undefined>;

// Type for the collection returned by getEntries
export type BlogPostCollection = EntryCollection<BlogPostSkeleton, undefined>;

/**
 * Fetches a limited set of fields for all blog posts, ordered by publication date.
 * Suitable for blog listing pages.
 * @param {boolean} isPreview - Whether to fetch draft content.
 * @returns {Promise<BlogPostCollection>} A promise resolving to the collection of blog post entries.
 */
export async function getAllBlogPosts(isPreview = false): Promise<BlogPostCollection> {
  try {
    const client = getContentfulClient(isPreview);

    // Use the BlogPostSkeleton for type safety
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: 'pageBlogPost', // Use the API ID of your Blog Post content type
      // order: ['-fields.publicationDate'], // Remove ordering - API rejects this field
      // select: [...] // Remove select - API rejects publicationDate in select
    });

    // Note: Sorting will be done client-side due to API limitations with publicationDate
    return entries;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // Return an empty collection instead of throwing
    return {
      total: 0,
      skip: 0,
      limit: 0,
      items: [],
      includes: {}
    } as BlogPostCollection;
  }
}

/**
 * Fetches a single blog post by its slug.
 * @param {string} slug - The slug of the blog post.
 * @param {boolean} isPreview - Whether to fetch draft content.
 * @returns {Promise<BlogPostEntry | null>} A promise resolving to the blog post entry or null if not found.
 */
export async function getBlogPostBySlug(slug: string, isPreview = false): Promise<BlogPostEntry | null> {
  try {
    const client = getContentfulClient(isPreview);

    // Use the BlogPostSkeleton for type safety
    const entries = await client.getEntries<BlogPostSkeleton>({
      content_type: 'pageBlogPost', // Use the API ID of your Blog Post content type
      'fields.slug': slug,
      limit: 1,
      include: 2, // Restore include
    });

    if (entries.items && entries.items.length > 0) {
      return entries.items[0];
    }

    return null;
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }
}
