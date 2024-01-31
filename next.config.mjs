/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.redd.it"
            },
            {
                protocol: 'https',
                hostname: 'preview.redd.it'
            },
            {
                protocol: 'https',
                hostname: 'external-preview.redd.it'
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com'
            },
            {
                protocol: 'https',
                hostname: 'i.imgflip.com'
            }
        ]
    }
};

export default nextConfig;
