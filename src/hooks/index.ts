/**
 * Hooks module index
 * 
 * This file exports all hooks from the hooks directory for easier imports.
 * Instead of importing each hook individually, you can import all from this file.
 * 
 * @example
 * // Instead of:
 * import useMediaQuery from '@/hooks/useMediaQuery';
 * import useScrollPosition from '@/hooks/useScrollPosition';
 * 
 * // You can now do:
 * import { useMediaQuery, useScrollPosition } from '@/hooks';
 */

// Export all hooks
export * from './useMediaQuery';
export * from './useScrollPosition';
export * from './useLocalStorage';
export * from './useCopyToClipboard';
export * from './useDebounce';

// Also export default for each hook 
import useMediaQuery from './useMediaQuery';
import useScrollPosition from './useScrollPosition';
import useLocalStorage from './useLocalStorage';
import useCopyToClipboard from './useCopyToClipboard';
import useDebounce from './useDebounce';

export {
  useMediaQuery,
  useScrollPosition,
  useLocalStorage,
  useCopyToClipboard,
  useDebounce,
};

export default {
  useMediaQuery,
  useScrollPosition,
  useLocalStorage,
  useCopyToClipboard,
  useDebounce,
};
