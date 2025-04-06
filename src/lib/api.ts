/**
 * API utilities
 * 
 * This file contains functions for making API requests and handling responses.
 * It provides a consistent interface for all API interactions in the application.
 */

// Default fetch options
const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * Generic fetch function with error handling and response parsing
 * 
 * @param url - The URL to fetch from
 * @param options - Fetch options (method, headers, body, etc.)
 * @returns Promise with parsed response
 */
export async function fetchAPI<T>(url: string, options: RequestInit = {}): Promise<T> {
  try {
    // Merge default options with provided options
    const fetchOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    const response = await fetch(url, fetchOptions);

    // Check if response is successful
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `API error: ${response.status} ${response.statusText}`
      );
    }

    // Check for content type
    const contentType = response.headers.get('content-type');
    
    // Parse response based on content type
    if (contentType?.includes('application/json')) {
      return response.json();
    } else if (contentType?.includes('text/')) {
      const text = await response.text();
      return text as unknown as T;
    } else {
      // For other types (like blobs), just return the response
      return response as unknown as T;
    }
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * HTTP GET request
 * 
 * @param url - The URL to fetch from
 * @param params - Optional query parameters
 * @param options - Additional fetch options
 * @returns Promise with parsed response
 */
export async function get<T>(
  url: string,
  params?: Record<string, string>,
  options: RequestInit = {}
): Promise<T> {
  // Add query parameters to URL if provided
  const queryParams = params
    ? `?${new URLSearchParams(params).toString()}`
    : '';
  const fullUrl = `${url}${queryParams}`;
  
  return fetchAPI<T>(fullUrl, {
    method: 'GET',
    ...options,
  });
}

/**
 * HTTP POST request
 * 
 * @param url - The URL to post to
 * @param data - The data to send
 * @param options - Additional fetch options
 * @returns Promise with parsed response
 */
export async function post<T>(
  url: string,
  data: any,
  options: RequestInit = {}
): Promise<T> {
  return fetchAPI<T>(url, {
    method: 'POST',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * HTTP PUT request
 * 
 * @param url - The URL to put to
 * @param data - The data to send
 * @param options - Additional fetch options
 * @returns Promise with parsed response
 */
export async function put<T>(
  url: string,
  data: any,
  options: RequestInit = {}
): Promise<T> {
  return fetchAPI<T>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
    ...options,
  });
}

/**
 * HTTP DELETE request
 * 
 * @param url - The URL to delete from
 * @param options - Additional fetch options
 * @returns Promise with parsed response
 */
export async function del<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  return fetchAPI<T>(url, {
    method: 'DELETE',
    ...options,
  });
}

export default {
  get,
  post,
  put,
  delete: del,
  fetchAPI,
};
