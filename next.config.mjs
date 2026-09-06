/** @type {import('next').NextConfig} */
const nextConfig = {
  // Local `next dev` uses a separate dir to avoid a Windows .next lock hang;
  // production builds (Vercel) must use the default `.next`.
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 768, 1280, 1920],
    imageSizes: [150, 300, 450, 600],
  },
}

export default nextConfig
