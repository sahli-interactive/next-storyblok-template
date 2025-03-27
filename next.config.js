/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '*.storyblok.com' }],
  },
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  }
}
