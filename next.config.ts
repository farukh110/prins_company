// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.bs2vs.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "shop.bs2vs.com",
        pathname: "/uploads/**",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;