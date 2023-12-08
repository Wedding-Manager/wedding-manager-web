/** @type {import('next').NextConfig} */

const config = require("config");
const BACKEND_BASE_URL = config.get("BACKEND_CONFIG.BASE_URL");

const nextConfig = {
  env: {
    BACKEND_BASE_URL,
  },
};

module.exports = nextConfig;
