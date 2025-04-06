/**
 * Date utility functions
 * 
 * A collection of helper functions for date formatting and manipulation.
 * These utilities help maintain consistent date formatting across the application.
 */

/**
 * Formats a date using Intl.DateTimeFormat with Greek locale by default
 * 
 * @param date - The date to format (Date object or ISO string)
 * @param options - Intl.DateTimeFormat options
 * @param locale - The locale to use (default: 'el-GR')
 * @returns The formatted date string
 */
export const formatDate = (
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  },
  locale = 'el-GR'
): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  return new Intl.DateTimeFormat(locale, options).format(dateObj);
};

/**
 * Formats a date as a short date string (e.g., "15 Μαρ 2025")
 * 
 * @param date - The date to format
 * @param locale - The locale to use (default: 'el-GR')
 * @returns The formatted short date string
 */
export const formatShortDate = (
  date: Date | string | number,
  locale = 'el-GR'
): string => {
  return formatDate(date, { 
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }, locale);
};

/**
 * Formats a date with day of the week (e.g., "Δευτέρα, 15 Μαρτίου 2025")
 * 
 * @param date - The date to format
 * @param locale - The locale to use (default: 'el-GR')
 * @returns The formatted date with day of week
 */
export const formatDateWithDay = (
  date: Date | string | number,
  locale = 'el-GR'
): string => {
  return formatDate(date, { 
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }, locale);
};

/**
 * Formats a date as time only (e.g., "14:30")
 * 
 * @param date - The date to format
 * @param locale - The locale to use (default: 'el-GR')
 * @returns The formatted time string
 */
export const formatTime = (
  date: Date | string | number,
  locale = 'el-GR'
): string => {
  return formatDate(date, { 
    hour: '2-digit',
    minute: '2-digit'
  }, locale);
};

/**
 * Checks if a date is in the past
 * 
 * @param date - The date to check
 * @returns Boolean indicating if the date is in the past
 */
export const isDateInPast = (date: Date | string | number): boolean => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
    
  return dateObj < new Date();
};

/**
 * Adds a specified number of days to a date
 * 
 * @param date - The base date
 * @param days - Number of days to add (can be negative)
 * @returns A new Date object with the days added
 */
export const addDays = (date: Date | string | number, days: number): Date => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : new Date(date.getTime());
    
  dateObj.setDate(dateObj.getDate() + days);
  return dateObj;
};

/**
 * Gets the difference in days between two dates
 * 
 * @param dateA - First date
 * @param dateB - Second date (defaults to current date)
 * @returns The difference in days (positive if dateA is after dateB)
 */
export const getDaysDifference = (
  dateA: Date | string | number, 
  dateB: Date | string | number = new Date()
): number => {
  const dateObjA = typeof dateA === 'string' || typeof dateA === 'number' 
    ? new Date(dateA) 
    : dateA;
    
  const dateObjB = typeof dateB === 'string' || typeof dateB === 'number' 
    ? new Date(dateB) 
    : dateB;
  
  // Normalize dates to midnight to get accurate day difference
  const normalizedA = new Date(dateObjA.setHours(0, 0, 0, 0));
  const normalizedB = new Date(dateObjB.setHours(0, 0, 0, 0));
  
  // Get the time difference in milliseconds and convert to days
  const diffTime = normalizedA.getTime() - normalizedB.getTime();
  return Math.round(diffTime / (1000 * 60 * 60 * 24));
};

/**
 * Gets a human-readable relative time (e.g., "3 ημέρες πριν", "μόλις τώρα")
 * 
 * @param date - The date to format relativelly
 * @param locale - The locale to use (default: 'el-GR')
 * @returns Human-readable relative time string
 */
export const getRelativeTimeString = (
  date: Date | string | number,
  locale = 'el-GR'
): string => {
  const dateObj = typeof date === 'string' || typeof date === 'number' 
    ? new Date(date) 
    : date;
  
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
  
  // Check if the browser supports RelativeTimeFormat
  if (typeof Intl.RelativeTimeFormat === 'function') {
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    
    if (diffInSeconds < 60) {
      return rtf.format(-diffInSeconds, 'second');
    } else if (diffInSeconds < 3600) {
      return rtf.format(-Math.floor(diffInSeconds / 60), 'minute');
    } else if (diffInSeconds < 86400) {
      return rtf.format(-Math.floor(diffInSeconds / 3600), 'hour');
    } else if (diffInSeconds < 2592000) {
      return rtf.format(-Math.floor(diffInSeconds / 86400), 'day');
    } else if (diffInSeconds < 31536000) {
      return rtf.format(-Math.floor(diffInSeconds / 2592000), 'month');
    } else {
      return rtf.format(-Math.floor(diffInSeconds / 31536000), 'year');
    }
  }
  
  // Fallback for browsers without RelativeTimeFormat
  return formatDate(dateObj);
};

export default {
  formatDate,
  formatShortDate,
  formatDateWithDay,
  formatTime,
  isDateInPast,
  addDays,
  getDaysDifference,
  getRelativeTimeString,
};
