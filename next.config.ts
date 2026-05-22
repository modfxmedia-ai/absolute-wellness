import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "awceugene.com" },
      { protocol: "https", hostname: "www.awceugene.com" },
    ],
  },
};

export default nextConfig;
