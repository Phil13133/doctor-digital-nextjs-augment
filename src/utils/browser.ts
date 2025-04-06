/**
 * Browser utility functions
 * 
 * A collection of helper functions for browser-specific operations.
 * These utilities help with feature detection, handling window events,
 * and providing fallbacks for browser-specific functionality.
 */

/**
 * Detects if the code is running in a browser environment
 * 
 * @returns Boolean indicating if code is running in a browser
 */
export const isBrowser = (): boolean => {
  return typeof window !== 'undefined';
};

/**
 * Smooth scrolls to a specific element on the page
 * 
 * @param elementId - The ID of the element to scroll to
 * @param offset - Offset from the element in pixels (default: 0)
 * @param duration - Scroll duration in milliseconds (default: 1000)
 */
export const scrollToElement = (
  elementId: string,
  offset = 0,
  duration = 1000
): void => {
  if (!isBrowser()) return;
  
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found.`);
    return;
  }
  
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;
  
  // Check if browser supports smooth scrolling natively
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  } else {
    // Fallback for browsers without smooth scrolling
    const startPosition = window.scrollY;
    const distance = offsetPosition - startPosition;
    let startTime: number | null = null;
    
    // Use function expression instead of declaration to avoid strict mode issues
    const scrollAnimation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function: easeInOutQuad
      const easeInOutQuad = (t: number) => 
        t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      
      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    };
    
    requestAnimationFrame(scrollAnimation);
  }
};

/**
 * Detects if the device is likely a mobile/touch device
 * 
 * @returns Boolean indicating if the device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (!isBrowser()) return false;
  
  return (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    (window.matchMedia && window.matchMedia('(max-width: 767px)').matches)
  );
};

/**
 * Gets the current viewport dimensions
 * 
 * @returns Object with viewport width and height
 */
export const getViewportDimensions = (): { width: number; height: number } => {
  if (!isBrowser()) {
    return { width: 0, height: 0 };
  }
  
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
  };
};

/**
 * Detects if the browser supports a specific CSS property
 * 
 * @param property - The CSS property to test
 * @returns Boolean indicating if the property is supported
 */
export const isCssPropertySupported = (property: string): boolean => {
  if (!isBrowser()) return false;
  
  return property in document.documentElement.style;
};

/**
 * Sets a cookie
 * 
 * @param name - Cookie name
 * @param value - Cookie value
 * @param days - Cookie expiration in days (default: 7)
 * @param path - Cookie path (default: '/')
 */
export const setCookie = (
  name: string,
  value: string,
  days = 7,
  path = '/'
): void => {
  if (!isBrowser()) return;
  
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=${path};SameSite=Lax`;
};

/**
 * Gets a cookie by name
 * 
 * @param name - Cookie name
 * @returns Cookie value or empty string if not found
 */
export const getCookie = (name: string): string => {
  if (!isBrowser()) return '';
  
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : '';
};

/**
 * Removes a cookie
 * 
 * @param name - Cookie name
 * @param path - Cookie path (default: '/')
 */
export const removeCookie = (name: string, path = '/'): void => {
  if (!isBrowser()) return;
  
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=${path};SameSite=Lax`;
};

/**
 * Detects if the browser has reduced motion preference enabled
 * 
 * @returns Boolean indicating user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (!isBrowser()) return false;
  
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export default {
  isBrowser,
  scrollToElement,
  isMobileDevice,
  getViewportDimensions,
  isCssPropertySupported,
  setCookie,
  getCookie,
  removeCookie,
  prefersReducedMotion,
};
