/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next-dev',
    images: {
        unoptimized: true, // Required for static export
    }
};

export default nextConfig;
