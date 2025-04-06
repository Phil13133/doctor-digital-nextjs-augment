/**
 * useScrollPosition hook
 * 
 * A custom hook for tracking scroll position and direction.
 * This is useful for implementing sticky headers, scroll-based animations,
 * or any UI element that needs to react to scroll events.
 * 
 * @example
 * const { scrollY, scrollDirection } = useScrollPosition();
 * 
 * // Using it for a sticky header that hides on scroll down
 * const headerClasses = scrollDirection === 'down' && scrollY > 80 
 *   ? 'fixed -translate-y-full' 
 *   : 'fixed translate-y-0';
 */

import { useState, useEffect } from 'react';

export type ScrollDirection = 'up' | 'down' | 'none';

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
  scrollDirection: ScrollDirection;
  isScrolling: boolean;
}

/**
 * Hook to track scroll position and direction
 * 
 * @param throttleMs - Optional throttle time in milliseconds (default: 100)
 * @returns Object containing scrollX, scrollY, scrollDirection, and isScrolling
 */
export function useScrollPosition(throttleMs = 100): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
    scrollDirection: 'none',
    isScrolling: false,
  });
  
  // Keep track of the previous scroll position to determine direction
  const [prevScrollY, setPrevScrollY] = useState(0);
  
  // For tracking the throttling timeout
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Handle for when component unmounts
    let isMounted = true;
    
    // Check if window is defined (to avoid SSR issues)
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const currentScrollY = window.scrollY || window.pageYOffset;
      const currentScrollX = window.scrollX || window.pageXOffset;
      
      // Only update state if component is still mounted
      if (isMounted) {
        setScrollPosition({
          scrollY: currentScrollY,
          scrollX: currentScrollX,
          scrollDirection: 
            currentScrollY > prevScrollY 
              ? 'down' 
              : currentScrollY < prevScrollY 
                ? 'up' 
                : 'none',
          isScrolling: true,
        });
        
        // Update previous scroll position
        setPrevScrollY(currentScrollY);
        
        // Set timeout to determine when scrolling stops
        const timeout = setTimeout(() => {
          if (isMounted) {
            setScrollPosition(prev => ({
              ...prev,
              isScrolling: false,
            }));
          }
        }, throttleMs);
        
        setScrollTimeout(timeout);
      }
    };

    // Add scroll listener with throttling for better performance
    let throttleTimeout: NodeJS.Timeout | null = null;
    const throttledScrollHandler = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          throttleTimeout = null;
          handleScroll();
        }, throttleMs);
      }
    };

    window.addEventListener('scroll', throttledScrollHandler);

    // Initialize with current position
    handleScroll();

    // Cleanup
    return () => {
      isMounted = false;
      window.removeEventListener('scroll', throttledScrollHandler);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, [prevScrollY, throttleMs, scrollTimeout]);

  return scrollPosition;
}

// Helper functions for common use cases
export const useIsScrolled = (threshold = 10) => {
  const { scrollY } = useScrollPosition();
  return scrollY > threshold;
};

export const useScrollDirection = () => {
  const { scrollDirection } = useScrollPosition();
  return scrollDirection;
};

export default useScrollPosition;
