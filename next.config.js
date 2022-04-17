/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath:
    process.env.NODE_ENV === "development" ? undefined : "/unsplash_api_bridge",
  assetPrefix: "/unsplash_api_bridge",
};

module.exports = nextConfig;
