/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.orbis.com.ar',
            port: '',
            pathname: '/wp-content/themes/barberry/images/**',
          },
        ],
      },
}

module.exports = nextConfig