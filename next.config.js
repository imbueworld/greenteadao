/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    unoptimized: true,
    images: { unoptimized: true },
    reactStrictMode: true,
    trailingSlash: true,
  };
  
  module.exports = nextConfig;