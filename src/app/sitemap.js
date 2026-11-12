import fs from 'fs'
import path from 'path'
import { SLUG_MAP, CASE_STUDY_DATA } from '@/data/landingData'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/lib/BlogModel'

const BASE = 'https://nakshatranamahacreations.com'

export const dynamic = 'force-dynamic'

// Folder names anywhere in the tree whose subtrees should NOT appear in the sitemap.
const EXCLUDED_SEGMENTS = new Set(['api', 'admin', 'thankyou', 'landing'])

// Per-route overrides. Anything not listed falls back to { priority: 0.8, changeFrequency: 'monthly' }.
const ROUTE_META = {
  '/':           { priority: 1.0, changeFrequency: 'weekly' },
  '/about-us':   { priority: 1.0, changeFrequency: 'monthly' },
  '/services':   { priority: 1.0, changeFrequency: 'weekly' },
  '/contact-us': { priority: 1.0, changeFrequency: 'monthly' },
  '/careers':    { priority: 1.0, changeFrequency: 'weekly' },
  '/blog':       { priority: 1.0, changeFrequency: 'daily' },
  '/our-works':  { priority: 1.0, changeFrequency: 'weekly' },
  '/our-works/mobile-app-development':      { priority: 1.0, changeFrequency: 'monthly' },
  '/our-works/website-development':         { priority: 1.0, changeFrequency: 'monthly' },
  '/our-works/corporate-video-production':  { priority: 0.8, changeFrequency: 'monthly' },
  '/our-works/animation':                   { priority: 0.8, changeFrequency: 'monthly' },
  '/corporate-website-development':         { priority: 1.0, changeFrequency: 'monthly' },
  '/web-application-development':           { priority: 1.0, changeFrequency: 'monthly' },
  '/landing-page-development':              { priority: 1.0, changeFrequency: 'monthly' },
  '/progressive-web-app-development':       { priority: 1.0, changeFrequency: 'monthly' },
  '/privacy': { priority: 0.3, changeFrequency: 'yearly' },
  '/terms':   { priority: 0.3, changeFrequency: 'yearly' },
}

function scanRoutes(dir, prefix = '') {
  const routes = []
  let entries
  try { entries = fs.readdirSync(dir, { withFileTypes: true }) } catch { return routes }

  if (entries.some(e => e.isFile() && e.name === 'page.js')) {
    routes.push(prefix || '/')
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const name = entry.name
    // Skip dynamic segments, route groups, parallel routes, private folders, and excluded branches.
    if (name.startsWith('[') || name.startsWith('(') || name.startsWith('@') || name.startsWith('_')) continue
    if (EXCLUDED_SEGMENTS.has(name)) continue
    routes.push(...scanRoutes(path.join(dir, name), `${prefix}/${name}`))
  }
  return routes
}

let STATIC_ROUTES_CACHE = null
function getStaticRoutes() {
  if (!STATIC_ROUTES_CACHE) {
    STATIC_ROUTES_CACHE = scanRoutes(path.join(process.cwd(), 'src', 'app'))
  }
  return STATIC_ROUTES_CACHE
}

export default async function sitemap() {
  const now = new Date().toISOString()

  // 1. Static routes â€” every folder with page.js under src/app.
  const staticRoutes = getStaticRoutes().map(route => {
    const meta = ROUTE_META[route] || { priority: 0.8, changeFrequency: 'monthly' }
    return {
      url: route === '/' ? BASE : `${BASE}${route}`,
      lastModified: now,
      ...meta,
    }
  })

  // 2. Dynamic slug landing pages (served by src/app/[slug]/page.js).
  const slugPages = Object.keys(SLUG_MAP).map(slug => ({
    url: `${BASE}/${slug}`,
    lastModified: now,
    priority: 1.0,
    changeFrequency: 'monthly',
  }))

  // 3. Blog posts.
  let blogPosts = []
  try {
    await connectDB()
    blogPosts = await Blog.find({}, { slug: 1, date: 1 }).lean()
  } catch {}
  const blogPages = blogPosts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date,
    priority: 0.8,
    changeFrequency: 'monthly',
  }))

  // 4. Case studies.
  const caseStudies = Object.keys(CASE_STUDY_DATA).map(key => ({
    url: `${BASE}/case-studies/${key}`,
    lastModified: now,
    priority: 1.0,
    changeFrequency: 'monthly',
  }))

  // Dedupe by URL. Later sources override earlier ones, so SLUG_MAP / blog / case-study entries
  // (with their intended priorities) win over the generic static scan for overlapping slugs.
  const seen = new Map()
  for (const entry of [...staticRoutes, ...slugPages, ...blogPages, ...caseStudies]) {
    seen.set(entry.url, entry)
  }
  return [...seen.values()]
}
