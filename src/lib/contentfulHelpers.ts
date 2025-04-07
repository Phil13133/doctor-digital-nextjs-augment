/**
 * Helper functions for working with Contentful data
 */

/**
 * Helper function to safely get nested field values from Contentful entries
 * This helps with TypeScript and optional chaining for linked entries
 * 
 * @param field - The field to get the value from
 * @returns The field value or undefined
 */
export function getFieldValue<T>(field: any): T | undefined {
  return field;
}

/**
 * Formats a Contentful asset URL to ensure it has the proper protocol
 * Contentful URLs often start with // instead of https://
 * 
 * @param url - The URL to format
 * @returns The formatted URL with https: prefix if needed
 */
export function formatContentfulAssetUrl(url: string | undefined): string {
  if (!url) return '';
  
  // If the URL starts with //, add https:
  if (url.startsWith('//')) {
    return `https:${url}`;
  }
  
  // If the URL doesn't have a protocol, add https://
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  
  return url;
}

/**
 * Gets the dimensions of a Contentful image asset
 * 
 * @param asset - The Contentful asset
 * @returns An object with width and height properties
 */
export function getImageDimensions(asset: any): { width: number, height: number } {
  const defaultDimensions = { width: 800, height: 600 };
  
  if (!asset?.fields?.file?.details?.image) {
    return defaultDimensions;
  }
  
  return {
    width: asset.fields.file.details.image.width || defaultDimensions.width,
    height: asset.fields.file.details.image.height || defaultDimensions.height
  };
}

/**
 * Gets the alt text for a Contentful image asset
 * Falls back to a provided default if no title is available
 * 
 * @param asset - The Contentful asset
 * @param defaultAlt - The default alt text to use if no title is available
 * @returns The alt text for the image
 */
export function getImageAlt(asset: any, defaultAlt: string = ''): string {
  return asset?.fields?.title || defaultAlt;
}
