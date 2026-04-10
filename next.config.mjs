/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 15: React Compiler enabled by default
  // images from any domain
  images: {
    unoptimized: true, // simple setup — no image optimization server needed
  },
}

export default nextConfig
