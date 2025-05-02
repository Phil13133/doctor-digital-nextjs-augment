import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/contentfulApi';

export const metadata: Metadata = {
  title: 'Ιατρικό Marketing Blog | Doctor Digital',
  description: 'Εξειδικευμένα άρθρα, συμβουλές και οδηγοί για το ιατρικό digital marketing',
  keywords: 'blog, ιατρικό marketing, SEO για γιατρούς, tips, οδηγοί, συμβουλές, Google Ads για ιατρεία, social media',
};

// Removed formatDate function

// Helper function to safely get nested field values
// This helps with TypeScript and optional chaining for linked entries
function getFieldValue<T>(field: any): T | undefined {
    return field;
}

// Enable revalidation for blog listing page
export const revalidate = 300; // Revalidate every 5 minutes

export default async function BlogPage() {
  // Fetch blog posts from Contentful
  let blogPostsCollection;
  try {
    blogPostsCollection = await getAllBlogPosts();
    
    // Safe development-only logging
    if (process.env.NODE_ENV !== 'production') {
      console.log(`Fetched ${blogPostsCollection.items.length} posts from Contentful`);
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
  
  // Sort posts by publishedDate (newest first)
  posts = posts.sort((a, b) => {
    const dateA = a.fields.publishedDate ? new Date(a.fields.publishedDate) : new Date(a.sys.createdAt);
    const dateB = b.fields.publishedDate ? new Date(b.fields.publishedDate) : new Date(b.sys.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  // Separate the first post as featured, the rest as regular
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const recentPosts = posts.length > 1 ? posts.slice(1, 4) : []; // Next 3 posts for the side grid
  const allOtherPosts = posts; // Use all posts for the main grid

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="heading-1">Blog</h1>
          <p className="text-xl max-w-3xl mx-auto mt-4 text-gray-600">
            Άρθρα, συμβουλές και οδηγοί για το digital marketing από την ομάδα του Doctor Digital.
          </p>
        </div>

        {/* Featured Posts Section - All posts with same layout */}
        <h2 className="heading-2 mb-8">Όλα τα Άρθρα</h2>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div key={post.sys.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Post Image */}
                {getFieldValue<any>(post.fields.featuredImage)?.fields?.file?.url ? (
                  <Link href={`/blog/${post.fields.slug}`}>
                    <Image
                      src={`https:${getFieldValue<any>(post.fields.featuredImage)?.fields.file.url}`}
                      alt={getFieldValue<any>(post.fields.featuredImage)?.fields.title || post.fields.title}
                      width={getFieldValue<any>(post.fields.featuredImage)?.fields.file.details.image?.width || 600}
                      height={getFieldValue<any>(post.fields.featuredImage)?.fields.file.details.image?.height || 400}
                      className="w-full h-64 object-cover"
                      priority={posts.indexOf(post) < 2} // Prioritize loading first two images
                    />
                  </Link>
                ) : (
                  <div className="h-64 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">Εικόνα Άρθρου</span>
                  </div>
                )}

                <div className="p-6">
                  {/* Post Title */}
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.fields.slug}`}>{post.fields.title}</Link>
                  </h2>
                  
                  {/* Post Excerpt */}
                  <p className="text-gray-600 mb-5">{post.fields.excerpt || post.fields.subtitle}</p>
                  
                  <div className="flex items-center justify-between">
                    {/* Author Info */}
                    <div className="flex items-center">
                      {getFieldValue<any>(post.fields.author)?.fields?.avatar?.fields?.file?.url ? (
                        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                          <Image
                            src={`https:${getFieldValue<any>(post.fields.author)?.fields.avatar.fields.file.url}`}
                            alt={getFieldValue<any>(post.fields.author)?.fields?.name || 'Doctor Digital'}
                            width={40}
                            height={40}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                      )}
                      <div>
                        <span className="font-medium">{getFieldValue<any>(post.fields.author)?.fields?.name || 'Doctor Digital'}</span>
                        {post.fields.publishedDate && (
                          <div className="text-xs text-gray-500">
                            {new Date(post.fields.publishedDate).toLocaleDateString('el-GR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Read More Link */}
                    <Link href={`/blog/${post.fields.slug}`} className="text-primary font-medium inline-flex items-center">
                      Διαβάστε περισσότερα
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
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
