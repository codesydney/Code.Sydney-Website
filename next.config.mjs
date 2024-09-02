/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/images/do6mpxi3/**",
      },
    ],
  },
};

export default nextConfig;
