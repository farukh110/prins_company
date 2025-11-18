// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shop.bs2vs.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",     // kept only for local dev / old images
        hostname: "shop.bs2vs.com",
        pathname: "/uploads/**",
      },
    ],
  },

  // This is the magic fix for Vercel production
  async rewrites() {
    return [
      {
        // Any request that starts with /bs2vs-api/ on your Vercel domain
        source: "/bs2vs-api/:path*",
        // gets silently proxied to your real (http) backend
        destination: "http://shop.bs2vs.com/api/:path*",
      },
    ];
  },
};

export default nextConfig;