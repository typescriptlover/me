import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   /* config options here */
   output: 'export',
   images: {
      loader: 'custom',
      loaderFile: './src/lib/loader.js',
   },
};

export default nextConfig;
