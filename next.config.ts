import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // REMOVE FOR THE FINAL CHECK BEFORE GOING TO PROD
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

}

export default nextConfig
