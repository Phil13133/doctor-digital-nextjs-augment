/**
 * Utils module index
 * 
 * This file exports all utility functions from the utils directory for easier imports.
 * Rather than importing each utility file individually, you can import from this central file.
 * 
 * @example
 * // Instead of:
 * import { truncate } from '@/utils/text';
 * import { formatDate } from '@/utils/date';
 * 
 * // You can do:
 * import { truncate, formatDate } from '@/utils';
 */

// Export all utilities
export * from './text';
export * from './date';
export * from './validation';
export * from './browser';

// Also export defaults for each utility file
import text from './text';
import date from './date';
import validation from './validation';
import browser from './browser';

// Named exports for each utility namespace
export {
  text,
  date,
  validation,
  browser,
};

// Default export with all utilities grouped
export default {
  text,
  date,
  validation,
  browser,
};
