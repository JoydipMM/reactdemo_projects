/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  poweredByHeader: false, // Removes the "X-Powered-By: Next.js" header
  experimental: {
    esmExternals: "loose" // Allow ESModules
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yourcloudnetwork.net"
      },
      {
        protocol: "https",
        hostname: "backend.aludecor.com"
      },
      {
        protocol: "https",
        hostname: "d1dy1436v95960.cloudfront.net"
      }
    ]
  }
};

export default nextConfig;
