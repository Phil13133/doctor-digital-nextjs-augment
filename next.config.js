/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizeCss: true,
  },
  // Enable image optimization for external domains if needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**', // Allow any path under this hostname
      },
      // Keep existing domains if needed, but remotePatterns is preferred
      // {
      //   protocol: 'https', // Assuming doctordigital.gr uses https
      //   hostname: 'doctordigital.gr',
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Use SWC minifier for faster builds
  swcMinify: true,
  // Enable strict mode for better development experience
  reactStrictMode: true,
  // Improve performance by enabling page optimization
  poweredByHeader: false,
  // Configure i18n for Greek language support
  i18n: {
    locales: ['el'],
    defaultLocale: 'el',
  },
};

module.exports = nextConfig;
