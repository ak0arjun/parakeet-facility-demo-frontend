import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'pub-84cfc7a5a9554d0ba1460972b3b61014.r2.dev',
      port: '',
      pathname: '/**'
    }]
  }
};

export default nextConfig;
