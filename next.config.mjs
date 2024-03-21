import path from 'path';
import createJiti from 'jiti';
import createNextIntlPlugin from 'next-intl/plugin';

const jiti = createJiti(new URL(import.meta.url).pathname);
jiti(path.resolve('./src/env.mjs'));

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'pic.imgdb.cn',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
