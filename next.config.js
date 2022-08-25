/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'upload.wikimedia.org', 'cdn-icons-png.flaticon.com', 'res.cloudinary.com'],
  },
  env: {
    API_HOST: 'http://localhost:4000/api'
  }
}

module.exports = nextConfig
