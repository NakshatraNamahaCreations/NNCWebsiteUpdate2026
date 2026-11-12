export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: 'https://nakshatranamahacreations.com/sitemap.xml',
    host: 'https://nakshatranamahacreations.com',
  }
}
