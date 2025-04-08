import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts, BlogPostEntry } from '@/lib/contentfulApi';

export const metadata: Metadata = {
  title: 'Blog | Doctor Digital',
  description: 'Άρθρα, συμβουλές και οδηγοί για το digital marketing, SEO, Google Ads, και περισσότερα από την ομάδα του Doctor Digital.',
  keywords: 'blog, digital marketing, SEO, tips, οδηγοί, συμβουλές, Google Ads, social media',
};

// Removed formatDate function

// Helper function to safely get nested field values
// This helps with TypeScript and optional chaining for linked entries
function getFieldValue<T>(field: any): T | undefined {
    return field;
}

export default async function BlogPage() {
  // Fetch blog posts from Contentful
  let blogPostsCollection;
  try {
    blogPostsCollection = await getAllBlogPosts();
    console.log(`Successfully fetched ${blogPostsCollection.items.length} posts from Contentful`);
    if (blogPostsCollection?.items?.length) {
      console.log('Available slugs:', blogPostsCollection.items.map(post => post.fields.slug));
    }
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    blogPostsCollection = {
      total: 0,
      skip: 0,
      limit: 0,
      items: [],
      includes: {}
    };
  }

  // Use optional chaining in case items is null/undefined
  let posts = blogPostsCollection?.items ?? [];

  // Removed client-side sorting based on date

  // Separate the first post as featured, the rest as regular
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const recentPosts = posts.slice(1, 4); // Next 3 posts for the side grid
  const allOtherPosts = posts; // Use all posts for the main grid for now

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-1">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mt-4 text-gray-600">
            Άρθρα, συμβουλές και οδηγοί για το digital marketing από την ομάδα του Doctor Digital.
          </p>
        </div>

        {/* Featured & Recent Section */}
        {featuredPost && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Featured Post */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Safely access nested image properties */}
              {getFieldValue<any>(featuredPost.fields.featuredImage)?.fields?.file?.url ? (
                 <Link href={`/blog/${featuredPost.fields.slug}`}>
                    <Image
                      // Prepend protocol if missing (Contentful URLs often start with //)
                      src={`https:${getFieldValue<any>(featuredPost.fields.featuredImage)?.fields.file.url}`}
                      alt={getFieldValue<any>(featuredPost.fields.featuredImage)?.fields.title || featuredPost.fields.title}
                      width={getFieldValue<any>(featuredPost.fields.featuredImage)?.fields.file.details.image?.width || 600}
                      height={getFieldValue<any>(featuredPost.fields.featuredImage)?.fields.file.details.image?.height || 400}
                      className="w-full h-64 object-cover"
                      priority // Prioritize loading the featured image
                    />
                 </Link>
              ) : (
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Εικόνα Άρθρου</span>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  {/* Category and Read Time might need adjustments based on actual Contentful model */}
                  {/* <span className="bg-blue-100 text-primary px-2 py-1 rounded-full font-medium">{featuredPost.fields.category}</span> */}
                  {/* Removed date display */}
                  {/* <span className="mx-3">•</span> */}
                  {/* <span>{formatDate(featuredPost.fields.publicationDate)}</span> */}
                  {/* <span className="mx-3">•</span> */}
                  {/* <span>{featuredPost.fields.readTime}</span> */}
                </div>
                <h2 className="heading-2 mb-3 hover:text-primary transition-colors">
                   <Link href={`/blog/${featuredPost.fields.slug}`}>{featuredPost.fields.title}</Link>
                </h2>
                {/* Use excerpt or subtitle */}
                <p className="text-gray-600 mb-4">{featuredPost.fields.excerpt || featuredPost.fields.subtitle}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {/* Author image */}
                    {/* Debug author avatar */}
                    {console.log('Featured post author:', JSON.stringify(getFieldValue<any>(featuredPost.fields.author), null, 2))}
                    {console.log('Featured post author avatar:', JSON.stringify(getFieldValue<any>(featuredPost.fields.author)?.fields?.avatar, null, 2))}
                    {getFieldValue<any>(featuredPost.fields.author)?.fields?.avatar?.fields?.file?.url ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={`https:${getFieldValue<any>(featuredPost.fields.author)?.fields.avatar.fields.file.url}`}
                          alt={getFieldValue<any>(featuredPost.fields.author)?.fields?.name || 'Doctor Digital'}
                          width={40}
                          height={40}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    )}
                    {/* Safely access linked author name */}
                    <div>
                      <span className="font-medium">{getFieldValue<any>(featuredPost.fields.author)?.fields?.name || 'Doctor Digital'}</span>
                      {featuredPost.fields.publishedDate && (
                        <div className="text-xs text-gray-500">
                          {new Date(featuredPost.fields.publishedDate).toLocaleDateString('el-GR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                  <Link href={`/blog/${featuredPost.fields.slug}`} className="text-primary font-medium inline-flex items-center">
                    Διαβάστε περισσότερα
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent Posts Grid */}
            <div className="grid grid-cols-1 gap-6">
              {recentPosts.map((post) => (
                <div key={post.sys.id} className="bg-white rounded-lg shadow-md p-6 flex">
                  {/* Safely access nested image properties */}
                  {getFieldValue<any>(post.fields.featuredImage)?.fields?.file?.url ? (
                    <Link href={`/blog/${post.fields.slug}`} className="flex-shrink-0 mr-4">
                      <Image
                        src={`https:${getFieldValue<any>(post.fields.featuredImage)?.fields.file.url}`}
                        alt={getFieldValue<any>(post.fields.featuredImage)?.fields.title || post.fields.title}
                        width={64} // Small size for list view
                        height={64}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </Link>
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 flex items-center justify-center mr-4">
                      <span className="text-gray-400 text-xs">Εικόνα</span>
                    </div>
                  )}
                  <div>
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      {/* Display author and date */}
                      <span>{getFieldValue<any>(post.fields.author)?.fields?.name || 'Doctor Digital'}</span>
                      {post.fields.publishedDate && (
                        <>
                          <span className="mx-2">•</span>
                          <span>
                            {new Date(post.fields.publishedDate).toLocaleDateString('el-GR', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </>
                      )}
                    </div>
                    <h3 className="font-bold mb-1 hover:text-primary transition-colors">
                      <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.fields.excerpt || post.fields.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <h2 className="heading-2 mb-8">Όλα τα Άρθρα</h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allOtherPosts.map((post) => (
              <div key={post.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                 {/* Safely access nested image properties */}
                {getFieldValue<any>(post.fields.featuredImage)?.fields?.file?.url ? (
                  <Link href={`/blog/${post.fields.slug}`}>
                    <Image
                      src={`https:${getFieldValue<any>(post.fields.featuredImage)?.fields.file.url}`}
                      alt={getFieldValue<any>(post.fields.featuredImage)?.fields.title || post.fields.title}
                      width={getFieldValue<any>(post.fields.featuredImage)?.fields.file.details.image?.width || 400}
                      height={getFieldValue<any>(post.fields.featuredImage)?.fields.file.details.image?.height || 200}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                ) : (
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Εικόνα Άρθρου</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    {/* <span className="bg-blue-100 text-primary px-2 py-1 rounded-full font-medium">{post.fields.category}</span> */}
                    {/* <span className="mx-3">•</span> */}
                    {/* <span>{post.fields.readTime}</span> */}
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.fields.excerpt || post.fields.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {/* Placeholder for author image */}
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                       {/* Safely access linked author name */}
                      <span className="text-sm">{getFieldValue<any>(post.fields.author)?.fields?.name || 'Doctor Digital'}</span>
                    </div>
                    {/* Removed date display */}
                    {/* <span className="text-sm text-gray-500">{formatDate(post.fields.publicationDate)}</span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">Δεν βρέθηκαν άρθρα.</p>
        )}

        {/* Pagination - TODO: Implement actual pagination logic if needed */}
        <div className="flex justify-center mt-12">
          <nav aria-label="Pagination">
            <ul className="flex items-center space-x-2">
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  <span className="sr-only">Προηγούμενη</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white">1</button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">2</button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">3</button>
              </li>
              <li>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50">
                  <span className="sr-only">Επόμενη</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
