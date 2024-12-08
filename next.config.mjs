/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
