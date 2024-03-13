/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/guhrodriguess.png",
      },
    ],
  },
  transpilePackages: ["@luxe/ui"]
};

export default nextConfig;
