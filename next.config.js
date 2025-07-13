/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Добави домейни тук ако използваш <Image src="...">
  },
};

module.exports = nextConfig;
