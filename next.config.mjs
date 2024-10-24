/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com', 'encrypted-tbn0.gstatic.com', 'admin-djstage.vercel.app', 'firebasestorage.googleapis.com'], // Add allowed external domains here
  },
};

export default nextConfig;
