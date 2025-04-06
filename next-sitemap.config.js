/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://doctordigital.gr',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // disable multi-sitemaps
  sitemapSize: 7000,
  exclude: [
    '/404',
    '/500',
    '/_offline',
    '/cookies',
    '/oroi-xrisis',
    '/politiki-aporritou',
  ],
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/ypiresies') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/ypiresies/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/blog') {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
