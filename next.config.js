const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
