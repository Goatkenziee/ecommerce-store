/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'], // Example: if you use placeholder images
  },
  // Note: appDir is enabled by default in Next.js 13+ and doesn't need to be explicitly set.
};

export default nextConfig;
