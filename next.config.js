const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias["@assets"] = path.join(__dirname, "assets");
    return config;
  },
};

module.exports = nextConfig;
