/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: false,
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  compress: true,
  sassOptions: {
    fiber: false,
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = config;
