/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'admin-djstage.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'flowbite.s3.amazonaws.com',
        pathname: '/blocks/marketing-ui/hero/*',
      },
      {
        protocol: 'https',
        hostname: 'toppng.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
      },
    ],
  },
};

export default nextConfig;
