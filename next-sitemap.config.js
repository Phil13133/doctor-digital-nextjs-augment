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
    '/ypiresies/veltistopoiisi-michanes-anazitisis',
    '/ypiresies/diacheirisi-diafimiseon-google',
    '/ypiresies/syggrafi-periechomenou',
    '/ypiresies/anaptyxi-iatrikon-efarmogon-istou',
    '/ypiresies/iatriko-marketing',
    '/ypiresies/diacheirisi-social-media',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://doctordigital.gr/sitemap.xml',
    ],
  },
};
