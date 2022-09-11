/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org', 'cdn-icons-png.flaticon.com', 'res.cloudinary.com'],
  },
  env: {
    API_HOST: process.env.API_HOST,
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST
  }
}

module.exports = nextConfig
