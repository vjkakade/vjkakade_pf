/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
    distDir: process.env.NODE_ENV === 'production' ? '.next' : '.next-dev',
    images: {
        unoptimized: true, // Required for static export
    },
    experimental: {
        workerThreads: false,
        cpus: 1
    }
};

export default nextConfig;
