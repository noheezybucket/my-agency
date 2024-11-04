/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com'],
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
            },
        ]
    },

};

export default nextConfig;
