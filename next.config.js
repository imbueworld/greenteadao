/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  unoptimized: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  trailingSlash: true,
  assetPrefix: isProd ? 'https://greenteadao.eth.limo' : '',
  basePath: isProd ? 'https://greenteadao.eth.limo' : '',
};

module.exports = nextConfig;