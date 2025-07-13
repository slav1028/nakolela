/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // ✅ това е задължително за App Router!
  },
}

module.exports = nextConfig
