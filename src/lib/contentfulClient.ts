import { createClient, ContentfulClientApi } from 'contentful';

// Ensure environment variables are defined
const spaceId = process.env.CONTENTFUL_SPACE_ID || 'dummy-space-id';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || 'dummy-access-token';
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

// In production, we should validate the credentials
if (process.env.NODE_ENV === 'production' && (!spaceId || !accessToken || spaceId === 'dummy-space-id' || accessToken === 'dummy-access-token')) {
  throw new Error(
    'Contentful Space ID and Access Token must be defined in environment variables for production'
  );
}

// Client for fetching published content
const client: ContentfulClientApi<undefined> = createClient({
  space: spaceId,
  accessToken: accessToken,
  environment: 'master', // Default environment
});

// Client for fetching draft/preview content (only if preview token is provided)
const previewClient: ContentfulClientApi<undefined> | null =
  previewAccessToken
    ? createClient({
        space: spaceId,
        accessToken: previewAccessToken,
        host: 'preview.contentful.com', // Use the preview host
        environment: 'master', // Default environment
      })
    : null;

/**
 * Gets the appropriate Contentful client based on whether preview mode is active.
 * @param {boolean} isPreview - Whether preview mode is active.
 * @returns {ContentfulClientApi} The Contentful client instance.
 * @throws {Error} If preview mode is requested but no preview token is configured.
 */
export function getContentfulClient(isPreview = false): ContentfulClientApi<undefined> {
  if (isPreview) {
    if (!previewClient) {
      throw new Error(
        'Contentful Preview Access Token must be defined in .env.local for preview mode.'
      );
    }
    return previewClient;
  }
  return client;
}

export default client; // Export the standard client as default
