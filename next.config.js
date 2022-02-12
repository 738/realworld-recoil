/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `https://api.realworld.io/api/:path*`,
      },
    ];
  },
  images: {
    domains: ['api.realworld.io'],
  },
};

module.exports = nextConfig;
