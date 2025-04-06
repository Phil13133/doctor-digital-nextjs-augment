import { createClient, ContentfulClientApi } from 'contentful';

// Ensure environment variables are defined
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful Space ID and Access Token must be defined in .env.local'
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
