/** @type {import('next').NextConfig} */

const config = require("config");
const path = require("path");

const BACKEND_BASE_URL = config.get("BACKEND_CONFIG.BASE_URL");

const nextConfig = {
  env: {
    BACKEND_BASE_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
