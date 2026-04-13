/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is the magic line that makes it 100% static & fast
  images: { unoptimized: true }
};
export default nextConfig;