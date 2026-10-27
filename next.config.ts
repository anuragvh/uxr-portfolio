import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Project Pages are served from /<repo-name>. Set NEXT_PUBLIC_BASE_PATH="" for a custom domain.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? "/uxr-portfolio" : "");

const nextConfig: NextConfig = {
  experimental: {
    agentUpgrade: "security",
  },
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
