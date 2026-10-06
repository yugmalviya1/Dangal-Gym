/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.vimeocdn.com' },
      { protocol: 'https', hostname: 'dangalgym.xyz' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml/googled977258c75314787.html',
        destination: '/googled977258c75314787.html',
      },
    ];
  },
};

export default nextConfig;
