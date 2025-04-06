/**
 * Text utility functions
 * 
 * A collection of helper functions for text manipulation, formatting, and transformation.
 * These utilities are designed to be pure functions that can be used throughout the application.
 */

/**
 * Truncates a string to a specified length and adds an ellipsis if needed
 * 
 * @param text - The string to truncate
 * @param length - The maximum length (default: 100)
 * @param ellipsis - The ellipsis string to append (default: '...')
 * @returns The truncated string
 */
export const truncate = (text: string, length = 100, ellipsis = '...'): string => {
  if (!text) return '';
  if (text.length <= length) return text;
  
  // Truncate at the last space before the limit to avoid cutting words
  const truncated = text.substring(0, length);
  const lastSpace = truncated.lastIndexOf(' ');
  
  // If no space found or space is at the beginning, just cut at length
  if (lastSpace === -1 || lastSpace < length * 0.8) {
    return truncated + ellipsis;
  }
  
  return truncated.substring(0, lastSpace) + ellipsis;
};

/**
 * Converts a string to a URL-friendly slug
 * 
 * @param text - The string to convert to a slug
 * @returns The slugified string
 */
export const slugify = (text: string): string => {
  if (!text) return '';
  
  // Convert to lowercase, replace spaces with hyphens, and remove invalid characters
  return text
    .toLowerCase()
    .normalize('NFD') // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s-]/g, '') // Remove non-word chars
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Converts a slug to a human-readable title case string
 * 
 * @param slug - The slug to convert
 * @returns The title-cased string
 */
export const slugToTitle = (slug: string): string => {
  if (!slug) return '';
  
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Converts a string to sentence case (first letter capitalized)
 * 
 * @param text - The string to convert
 * @returns The sentence-cased string
 */
export const toSentenceCase = (text: string): string => {
  if (!text) return '';
  
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

/**
 * Removes HTML tags from a string
 * 
 * @param html - The HTML string to strip
 * @returns The plain text string
 */
export const stripHtml = (html: string): string => {
  if (!html) return '';
  
  // Create a temporary element and set its HTML content
  if (typeof document !== 'undefined') {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;
    return tempElement.textContent || tempElement.innerText || '';
  }
  
  // Fallback for server-side rendering
  return html.replace(/<[^>]*>/g, '');
};

/**
 * Formats a number as a string with the Greek Euro currency format
 * 
 * @param amount - The number to format
 * @param options - Intl.NumberFormat options
 * @returns The formatted currency string
 */
export const formatCurrency = (
  amount: number,
  options: Intl.NumberFormatOptions = {}
): string => {
  return new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }).format(amount);
};

/**
 * Converts a byte size to a human-readable string
 * 
 * @param bytes - The number of bytes
 * @param decimals - The number of decimal places (default: 2)
 * @returns The formatted file size string (e.g., "1.5 MB")
 */
export const formatFileSize = (bytes: number, decimals = 2): string => {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};

export default {
  truncate,
  slugify,
  slugToTitle,
  toSentenceCase,
  stripHtml,
  formatCurrency,
  formatFileSize,
};
