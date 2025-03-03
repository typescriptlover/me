import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'export',
   images: {
      loader: 'custom',
      loaderFile: './src/lib/imageLoader.ts',
   },
};

export default nextConfig;
