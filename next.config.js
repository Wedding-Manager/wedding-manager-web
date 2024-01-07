/** @type {import('next').NextConfig} */

const config = require("config");
const path = require("path");

const BACKEND_BASE_URL = config.get("BACKEND_CONFIG.BASE_URL");
const ACCESS_TOKEN_KEY = config.get("AUTH.ACCESS_TOKEN");
const USER_ID_KEY = config.get("AUTH.USER_ID");
const CLOUDINARY_PRESET_NAME = config.get("SECRET_KEYS.CLOUDINARY_PRESET_NAME");
const NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME = config.get(
  "SECRET_KEYS.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME"
);

const nextConfig = {
  env: {
    BACKEND_BASE_URL,
    ACCESS_TOKEN_KEY,
    USER_ID_KEY,
    CLOUDINARY_PRESET_NAME,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
