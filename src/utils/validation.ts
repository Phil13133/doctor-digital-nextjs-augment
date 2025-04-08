/**
 * Validation utility functions
 *
 * A collection of helper functions for validating form inputs and data.
 * These utilities help ensure data integrity and provide consistent
 * validation across the application.
 */

/**
 * Validates an email address
 *
 * @param email - The email address to validate
 * @returns Boolean indicating if the email is valid
 */
export const isValidEmail = (email: string): boolean => {
  if (!email) return false;

  // Basic regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a Greek phone number
 *
 * @param phone - The phone number to validate
 * @returns Boolean indicating if the phone number is valid
 */
export const isValidGreekPhone = (phone: string): boolean => {
  if (!phone) return false;

  // Remove spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, '');

  // Check for Greek mobile or landline format
  // Mobile: +30 69X XXX XXXX or 69X XXX XXXX
  // Landline: +30 2X XXX XXXX or 2X XXX XXXX
  const phoneRegex = /^(\+30)?(69\d{8}|2\d{9})$/;
  return phoneRegex.test(cleaned);
};

/**
 * Validates a postal code (using Greek format)
 *
 * @param postalCode - The postal code to validate
 * @returns Boolean indicating if the postal code is valid
 */
export const isValidPostalCode = (postalCode: string): boolean => {
  if (!postalCode) return false;

  // Greek postal code format is 5 digits (e.g., 15231)
  const postalCodeRegex = /^\d{5}$/;
  return postalCodeRegex.test(postalCode);
};

/**
 * Validates a URL
 *
 * @param url - The URL to validate
 * @returns Boolean indicating if the URL is valid
 */
export const isValidUrl = (url: string): boolean => {
  if (!url) return false;

  try {
    // Use the URL constructor to validate
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if a value is empty (null, undefined, empty string, or empty array)
 *
 * @param value - The value to check
 * @returns Boolean indicating if the value is empty
 */
export const isEmpty = (value: any): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;

  return false;
};

/**
 * Validates a password by checking minimum requirements
 *
 * @param password - The password to validate
 * @param minLength - Minimum password length (default: 8)
 * @param requireSpecialChar - Whether to require a special character (default: true)
 * @param requireNumber - Whether to require a number (default: true)
 * @param requireUppercase - Whether to require an uppercase letter (default: true)
 * @returns Boolean indicating if the password meets requirements
 */
export const isStrongPassword = (
  password: string,
  minLength = 8,
  requireSpecialChar = true,
  requireNumber = true,
  requireUppercase = true
): boolean => {
  if (!password || password.length < minLength) return false;

  // Check for required character types
  if (requireSpecialChar && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) return false;
  if (requireNumber && !/\d/.test(password)) return false;
  if (requireUppercase && !/[A-Z]/.test(password)) return false;

  return true;
};

/**
 * Validates a string against a minimum and maximum length
 *
 * @param value - The string to validate
 * @param min - Minimum length (default: 0)
 * @param max - Maximum length (default: Infinity)
 * @returns Boolean indicating if the string length is within range
 */
export const hasValidLength = (
  value: string,
  min = 0,
  max = Infinity
): boolean => {
  if (!value) return min === 0;

  const length = value.length;
  return length >= min && length <= max;
};

/**
 * Validates a number against a minimum and maximum value
 *
 * @param value - The number to validate
 * @param min - Minimum value (default: -Infinity)
 * @param max - Maximum value (default: Infinity)
 * @returns Boolean indicating if the number is within range
 */
export const isNumberInRange = (
  value: number,
  min = -Infinity,
  max = Infinity
): boolean => {
  if (value === undefined || value === null || isNaN(value)) return false;

  return value >= min && value <= max;
};

export default {
  isValidEmail,
  isValidGreekPhone,
  isValidPostalCode,
  isValidUrl,
  isEmpty,
  isStrongPassword,
  hasValidLength,
  isNumberInRange,
};
