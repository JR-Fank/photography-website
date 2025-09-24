import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://photo.jrfank.cc",
        port: "",
      },
    ],
  },
};

export default nextConfig;
