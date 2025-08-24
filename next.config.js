/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],

    formats: ['image/avif', 'image/webp'],
  },
  // Enable SWC minification for improved performance
  swcMinify: true,
};

module.exports = nextConfig;