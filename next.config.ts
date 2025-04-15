import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // REMOVE FOR THE FINAL CHECK BEFORE GOING TO PROD
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ikawflqgezkczhpybcsv.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/dishes/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'ikawflqgezkczhpybcsv.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/ingedients/**',
        search: '',
      },
    ],
  },
}

export default nextConfig
