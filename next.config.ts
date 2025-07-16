/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ik.imagekit.io'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
