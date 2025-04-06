import React from 'react';
import Link from 'next/link';
import BreadcrumbSchema from '../schema/BreadcrumbSchema';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb navigation component with structured data
 */
export default function BreadcrumbNav({ items, className = '' }: BreadcrumbNavProps) {
  return (
    <>
      {/* Add structured data for search engines */}
      <BreadcrumbSchema items={items} />
      
      {/* Visual breadcrumb for users */}
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex flex-wrap items-center space-x-2">
          {items.map((item, index) => (
            <li key={item.url} className="flex items-center">
              {index > 0 && <span className="mx-2 text-gray-400">/</span>}
              {index === items.length - 1 ? (
                <span className="text-gray-600" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link 
                  href={item.url} 
                  className="text-brand-600 hover:text-brand-800 transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
