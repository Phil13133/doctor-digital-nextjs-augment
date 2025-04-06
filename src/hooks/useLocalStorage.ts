/**
 * useLocalStorage hook
 * 
 * A custom hook for persisting state in localStorage and keeping
 * it in sync with React state. Handles serialization/deserialization
 * of JSON data and works safely in server-side environments.
 * 
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 * 
 * // Later in component
 * setTheme('dark'); // Updates both state and localStorage
 */

import { useState, useEffect } from 'react';

/**
 * Type-safe hook for using localStorage with React state
 * 
 * @param key - The localStorage key to store the value under
 * @param initialValue - The initial value to use if none exists in localStorage
 * @returns A stateful value and a function to update it, similar to useState
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prevValue: T) => T)) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage
  const setValue = (value: T | ((prevValue: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      
      // Save state
      setStoredValue(valueToStore);
      
      // Save to local storage, but only if we're in a browser environment
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Listen for changes to the key in other tabs/windows
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key !== key) return;
      
      try {
        if (e.newValue) {
          setStoredValue(JSON.parse(e.newValue));
        } else {
          // If the key was removed, reset to initial value
          setStoredValue(initialValue);
        }
      } catch (error) {
        console.error(`Error responding to localStorage change for key "${key}":`, error);
      }
    };

    // Listen for changes to localStorage
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}

// Helper function to clear all localStorage data
export const clearLocalStorage = () => {
  if (typeof window !== 'undefined') {
    window.localStorage.clear();
  }
};

// Helper function to remove a specific key from localStorage
export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(key);
  }
};

export default useLocalStorage;
