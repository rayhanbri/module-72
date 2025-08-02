/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
      },
    ],
  },
  // code from how to handle redirect in next.js 
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/products/add',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
