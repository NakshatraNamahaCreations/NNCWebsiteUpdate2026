export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
    },
    sitemap: 'https://www.nakshatranamahacreations.com/sitemap.xml',
    host: 'https://www.nakshatranamahacreations.com',
  }
}
