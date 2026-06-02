import { connectDB } from '@/lib/mongodb'
import Blog from '@/lib/BlogModel'
import seedPosts from '../../data/blogs.json'

/**
 * Blog data source with graceful fallback.
 *
 * Reads from MongoDB when it's reachable AND has posts. If the DB is
 * unconfigured (no MONGODB_URI on the server), unreachable, or empty,
 * it falls back to the bundled data/blogs.json so the public blog never
 * shows an empty page. The admin panel still writes to MongoDB.
 */

function normalize(p) {
  return {
    slug: p.slug,
    title: p.title,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    description: p.description || '',
    body: p.body || '',
  }
}

function fileposts() {
  return [...seedPosts]
    .map(normalize)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

/** All posts, newest first. Never throws. */
export async function getAllPosts() {
  try {
    await connectDB()
    const raw = await Blog.find({}).sort({ date: -1 }).lean()
    if (raw.length > 0) return raw.map(normalize)
  } catch (err) {
    console.error('[blogSource] MongoDB unavailable, using JSON fallback:', err.message)
  }
  return fileposts()
}

/** A single post by slug + up to 3 related posts. Never throws. */
export async function getPost(slug) {
  const all = await getAllPosts()
  const post = all.find(p => p.slug === slug) || null
  if (!post) return { post: null, related: [] }
  const related = all.filter(p => p.category === post.category && p.slug !== slug).slice(0, 3)
  return { post, related }
}
