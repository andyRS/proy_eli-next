export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://proy-eli-next.vercel.app/sitemap.xml',
  }
}
