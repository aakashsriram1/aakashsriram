/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true, // Enable the app directory if you're using it
  },
};

module.exports = nextConfig;
