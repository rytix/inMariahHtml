import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/paranormal',
        destination: 'https://prana.inmariah.com.br/paranormal',
        permanent: true, // 301 redirect
      },
      {
        source: '/alegriadeviver',
        destination: 'https://prana.inmariah.com.br/alegriadeviver',
        permanent: true, // 301 redirect
      },
    ]
  },
};

export default nextConfig;
