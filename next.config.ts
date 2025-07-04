import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['rentavtokavkaz.ru', 'rentavtokavkaz.ru', 'localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rentavtokavkaz.ru',
      },
      {
        protocol: 'https',
        hostname: 'www.rentavtokavkaz.ru',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
