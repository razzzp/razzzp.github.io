import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  eslint:{
    ignoreDuringBuilds: true
  },
  // assetPrefix: 'https://razzzp.github.io/'
};

export default nextConfig;
