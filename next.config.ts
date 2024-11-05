import withPWA from 'next-pwa';
import { NextConfig } from 'next';

const nextConfig: NextConfig = withPWA({
  dest: 'public',
});

export default nextConfig;
