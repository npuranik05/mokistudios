import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the home folder confuses Turbopack's
  // root detection — pin the root to this project explicitly.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
