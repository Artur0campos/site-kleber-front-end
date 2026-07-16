/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'n8n-artur-strapi.wlpas2.easypanel.host',

      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
    // Permite otimização de imagens de IPs privados (localhost) — usar apenas em dev
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
