/**
 * useMediaQuery hook
 * 
 * A custom hook for responsive design that detects whether a media query matches.
 * This is useful for conditionally rendering components based on screen size.
 * 
 * @example
 * const isDesktop = useMediaQuery('(min-width: 1024px)');
 * if (isDesktop) {
 *   // Render desktop version
 * } else {
 *   // Render mobile version
 * }
 */

import { useState, useEffect } from 'react';

/**
 * Hook to detect if a media query matches the current window
 * 
 * @param query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  // Default to false on the server
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia(query);
      
      // Set initial value
      setMatches(mediaQuery.matches);

      // Create handler function to update state
      const handler = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      // Add event listener
      mediaQuery.addEventListener('change', handler);

      // Clean up
      return () => {
        mediaQuery.removeEventListener('change', handler);
      };
    }
    
    // Return default value if no window
    return undefined;
  }, [query]);

  return matches;
}

// Common breakpoints
export const useIsMobile = () => useMediaQuery('(max-width: 767px)');
export const useIsTablet = () => useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
export const useIsWideScreen = () => useMediaQuery('(min-width: 1280px)');

export default useMediaQuery;
