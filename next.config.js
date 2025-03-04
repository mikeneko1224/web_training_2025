/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'localhost' },
            { protocol: 'https', hostname: 'placehold.jp' },
            { protocol: 'http', hostname: '153.126.185.116' },
        ],
    },
}

module.exports = nextConfig
