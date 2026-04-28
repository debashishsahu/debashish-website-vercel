/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 768, 1280, 1920],
    imageSizes: [150, 300, 450, 600],
  },
}

export default nextConfig
