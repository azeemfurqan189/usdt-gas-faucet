/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  swcMinify: false,           // Yeh build hang hone se bachata hai
  typescript: {
    ignoreBuildErrors: true,  // Type errors ignore karo
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint errors ignore karo
  },
};

export default nextConfig;