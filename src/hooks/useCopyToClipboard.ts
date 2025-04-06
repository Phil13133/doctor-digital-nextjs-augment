/**
 * useCopyToClipboard hook
 * 
 * A custom hook for copying text to the clipboard with status feedback.
 * It provides a function to copy text and track success/failure status.
 * 
 * @example
 * const [copiedText, copy, isCopied] = useCopyToClipboard();
 * 
 * return (
 *   <div>
 *     <button onClick={() => copy('Text to copy')}>
 *       {isCopied ? 'Copied!' : 'Copy to clipboard'}
 *     </button>
 *     {copiedText && <p>Last copied: {copiedText}</p>}
 *   </div>
 * );
 */

import { useState, useCallback, useEffect } from 'react';

type CopyStatus = 'inactive' | 'copied' | 'failed';

/**
 * Hook for copying text to clipboard
 * 
 * @param resetInterval - Optional time in ms to reset 'copied' state (default: 2000)
 * @returns [copiedText, copy, status] - The copied text, copy function, and copy status
 */
export function useCopyToClipboard(resetInterval = 2000): [
  string | null,
  (text: string) => Promise<boolean>,
  CopyStatus
] {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [status, setStatus] = useState<CopyStatus>('inactive');

  const copy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard API not available');
      setStatus('failed');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setStatus('copied');
      return true;
    } catch (error) {
      console.error('Failed to copy text: ', error);
      setStatus('failed');
      setCopiedText(null);
      return false;
    }
  }, []);

  // Reset the status after specified interval
  useEffect(() => {
    if (status === 'inactive') return;

    const timeoutId = setTimeout(() => {
      setStatus('inactive');
    }, resetInterval);

    return () => clearTimeout(timeoutId);
  }, [status, resetInterval]);

  return [copiedText, copy, status];
}

// Helper to check if text was successfully copied
export const useIsCopied = (resetInterval = 2000) => {
  const [, , status] = useCopyToClipboard(resetInterval);
  return status === 'copied';
};

export default useCopyToClipboard;
