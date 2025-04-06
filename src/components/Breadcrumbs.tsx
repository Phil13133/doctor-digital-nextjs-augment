'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@/components/icons';

interface BreadcrumbItem {
  label: string;
  path: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export default function Breadcrumbs({
  items = [],
  showHome = true,
  className = ''
}: BreadcrumbsProps) {
  const pathname = usePathname();

  // If no items are provided, generate them from the pathname
  const breadcrumbItems: BreadcrumbItem[] = items.length > 0
    ? items
    : generateBreadcrumbsFromPath(pathname, showHome);

  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
      <div className="bg-white/60 backdrop-blur-sm py-3 px-5 rounded-xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300">
        <ol className="flex flex-wrap items-center">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-brand-200/50">
                  <ChevronRightIcon className="text-brand-200" size={12} />
                </span>
              )}

              {item.isCurrentPage ? (
                <span
                  className="text-text-dark font-medium bg-brand-50 py-1 px-3 rounded-md shadow-sm"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="text-brand-200 hover:text-brand-300 transition-all duration-300 hover:bg-brand-50/50 py-1 px-3 rounded-md"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// Helper function to generate breadcrumbs from a path
function generateBreadcrumbsFromPath(path: string, showHome: boolean): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Add home breadcrumb if showHome is true
  if (showHome) {
    breadcrumbs.push({
      label: 'Αρχική',
      path: '/',
      isCurrentPage: segments.length === 0
    });
  }

  // Map path segments to breadcrumb items
  let currentPath = '';
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;

    // Get a user-friendly label for the segment
    const label = getBreadcrumbLabel(segment);

    breadcrumbs.push({
      label,
      path: currentPath,
      isCurrentPage: index === segments.length - 1
    });
  });

  return breadcrumbs;
}

// Helper function to get a user-friendly label for a path segment
function getBreadcrumbLabel(segment: string): string {
  // Map of path segments to user-friendly labels
  const labelMap: Record<string, string> = {
    'ypiresies': 'Υπηρεσίες',
    'seo-gia-iatrous': 'SEO για Ιατρούς',
    'diafimisi-sth-google': 'Διαφήμιση στη Google',
    'kataskevi-istoselidon-gia-giatrous': 'Κατασκευή Ιστοσελίδων',
    'iatriko-logismiko': 'Ιατρικό Λογισμικό',
    'copywriting-gia-iatrous': 'Copywriting για Ιατρούς',
    'blog': 'Blog',
    'case-studies': 'Case Studies',
    'epikoinonia': 'Επικοινωνία'
  };

  return labelMap[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}
