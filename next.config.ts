import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  output: "export",  // 静的出力のみ
  // basePath と assetPrefix は不要
};

export default nextConfig;
