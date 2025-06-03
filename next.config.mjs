/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'https://cdn.billowshop.com/586d6ca1-ace0-eb27-9e0b-2d0d3c3c6062/img/Producto',
            },
        ],
    },
};

export default nextConfig;