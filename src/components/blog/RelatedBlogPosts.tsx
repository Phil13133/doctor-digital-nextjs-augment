import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/contentfulApi';
import { getFieldValue, formatContentfulAssetUrl, getImageAlt } from '@/lib/contentfulHelpers';

interface RelatedBlogPostsProps {
  topic: string;
  limit?: number;
  className?: string;
}

export default async function RelatedBlogPosts({
  topic,
  limit = 3,
  className = ''
}: RelatedBlogPostsProps) {
  // Fetch all blog posts with error handling
  let blogPosts;
  try {
    blogPosts = await getAllBlogPosts();
  } catch (error) {
    console.error('Error fetching blog posts for RelatedBlogPosts:', error);
    return null; // Return null if API call fails
  }

  // Make sure we have blog posts before proceeding
  if (!blogPosts?.items?.length) {
    return null;
  }

  // Filter posts based on topic (simple matching for now)
  // In a real implementation, you might want to use tags or categories
  const filteredPosts = blogPosts.items
    .filter(post => {
      const title = post.fields.title?.toLowerCase() || '';
      const excerpt = post.fields.excerpt?.toLowerCase() || '';
      const subtitle = post.fields.subtitle?.toLowerCase() || '';

      return title.includes(topic.toLowerCase()) ||
             excerpt.includes(topic.toLowerCase()) ||
             subtitle.includes(topic.toLowerCase());
    })
    .slice(0, limit);

  if (filteredPosts.length === 0) {
    return null;
  }

  return (
    <div className={`py-8 ${className}`}>
      <h3 className="text-2xl font-bold mb-6 text-center">Σχετικά Άρθρα</h3>
      <div className="w-24 h-1 bg-brand-200 mx-auto mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => {
          const featuredImage = getFieldValue<any>(post.fields.featuredImage);
          const imageUrl = featuredImage?.fields?.file?.url;
          const imageAlt = getImageAlt(featuredImage, post.fields.title);

          return (
            <Link
              href={`/blog/${post.fields.slug}`}
              key={post.sys.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              {imageUrl ? (
                <div className="h-40 overflow-hidden">
                  <Image
                    src={formatContentfulAssetUrl(imageUrl)}
                    alt={imageAlt}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="h-40 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Εικόνα μη διαθέσιμη</span>
                </div>
              )}
              <div className="p-4 flex-grow">
                <h4 className="text-lg font-semibold mb-2 line-clamp-2">{post.fields.title}</h4>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {post.fields.excerpt || post.fields.subtitle}
                </p>
              </div>
              <div className="px-4 pb-4 mt-auto">
                <span className="text-brand-200 font-medium text-sm flex items-center">
                  Διαβάστε περισσότερα
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
