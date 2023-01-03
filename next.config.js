/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config
    // config.module.rules.push({
    //   test: /\.md$/,
    //   loader: "remark-loader",
    // });

    return config
  },
}

module.exports = nextConfig
