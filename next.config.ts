// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "shop.bs2vs.com", pathname: "/uploads/**" },
      { protocol: "https", hostname: "shop.bs2vs.com", pathname: "/uploads/**" },
    ],
  },
  // Remove suppressHydrationWarning – not needed with cleanup
};

export default nextConfig;