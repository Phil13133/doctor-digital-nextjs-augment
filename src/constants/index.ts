/**
 * Constants module index
 * 
 * This file exports all constants from the constants directory for easier imports.
 */

export * from './routes';
export * from './site';
export * from './navigation';
export * from './seo';

// Default export with all constants grouped
import routes from './routes';
import site from './site';
import navigation from './navigation';
import seo from './seo';

export default {
  routes,
  site,
  navigation,
  seo,
};
