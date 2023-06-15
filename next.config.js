/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/justindanielclark/NextJS13BlogPosts/main/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
