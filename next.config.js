/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: './', // Ensures relative paths for assets
  trailingSlash: true, // Adds a trailing slash to paths for GitHub Pages compatibility
};

module.exports = nextConfig;
