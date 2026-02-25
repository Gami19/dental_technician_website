import type { NextConfig } from "next";

const adminOrigin =
  typeof process.env.NEXT_PUBLIC_ADMIN_API_URL === "string" && process.env.NEXT_PUBLIC_ADMIN_API_URL
    ? new URL(process.env.NEXT_PUBLIC_ADMIN_API_URL).origin
    : "http://localhost:3000";

const nextConfig: NextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `frame-ancestors 'self' ${adminOrigin};`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
