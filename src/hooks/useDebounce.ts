/**
 * useDebounce hook
 * 
 * A custom hook that delays updating a value until a specified time has passed
 * since the last change. This is useful for reducing the frequency of expensive 
 * operations like API calls or heavy computations during rapid user input.
 * 
 * @example
 * // Debounced search input
 * const [search, setSearch] = useState('');
 * const debouncedSearch = useDebounce(search, 500);
 * 
 * // Effect only runs when debouncedSearch changes
 * useEffect(() => {
 *   if (debouncedSearch) {
 *     searchAPI(debouncedSearch);
 *   }
 * }, [debouncedSearch]);
 * 
 * return (
 *   <input 
 *     value={search} 
 *     onChange={(e) => setSearch(e.target.value)} 
 *     placeholder="Search..."
 *   />
 * );
 */

import { useState, useEffect } from 'react';

/**
 * Hook to debounce any rapidly changing value
 * 
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds before the value should update (default: 500)
 * @returns The debounced value
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set debouncedValue to value after the specified delay
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes or component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Helper version that also provides a function to immediately update the debounced value
export function useDebounceWithImmediateUpdate<T>(value: T, delay = 500): [
  T, 
  () => void
] {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  
  // Store the timeout ID in a ref so it persists across renders
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Update the debounced value when the actual value changes
  useEffect(() => {
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    // Set a new timeout
    const id = setTimeout(() => {
      setDebouncedValue(value);
      setTimeoutId(null);
    }, delay);
    
    setTimeoutId(id);
    
    // Cleanup on unmount or when value/delay changes
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [value, delay]);

  // Function to immediately update the debounced value
  const immediateUpdate = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setDebouncedValue(value);
  };

  return [debouncedValue, immediateUpdate];
}

export default useDebounce;
