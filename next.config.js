/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api',
        destination: 'http://localhost:8000/api',
      },
    ]
  },
}

module.exports = nextConfig
