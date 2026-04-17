/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Critical: Disable Turbopack for Windows
  experimental: {
    turbo: true,
  },
  
  // Ensure proper path handling
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      },
    };
    return config;
  },
}

module.exports = nextConfig