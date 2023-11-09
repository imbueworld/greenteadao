/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    unoptimized: true,
    images: { unoptimized: true },
    reactStrictMode: true,
    trailingSlash: true,
    assetPrefix: isProd ? '/k51qzi5uqu5dg7k28ndfcytbvmv1rfigg75v4g053782p6shax4uoofeq5n8ba' : '',
    basePath: isProd ? '/k51qzi5uqu5dg7k28ndfcytbvmv1rfigg75v4g053782p6shax4uoofeq5n8ba' : '',
  };
  
  module.exports = nextConfig;