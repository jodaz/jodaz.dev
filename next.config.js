/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
	i18n,
  	reactStrictMode: true,
    images: {
        domains: [
            'res.cloudinary.com',
            'cdn.hashnode.com'
        ],
    },
}

module.exports = nextConfig
