/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
    // domains: ['gyokoru.xyz', 'another-example.com'], // Add your image domains here
  },
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig;