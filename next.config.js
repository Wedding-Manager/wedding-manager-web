/** @type {import('next').NextConfig} */

const config = require("config");
const path = require("path");

const BACKEND_BASE_URL = config.get("BACKEND_CONFIG.BASE_URL");
const ACCESS_TOKEN_KEY = config.get("AUTH.ACCESS_TOKEN");
const USER_ID_KEY = config.get("AUTH.USER_ID");

const nextConfig = {
  env: {
    BACKEND_BASE_URL,
    ACCESS_TOKEN_KEY,
    USER_ID_KEY,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
