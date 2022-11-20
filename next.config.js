/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Stolpersteine",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
