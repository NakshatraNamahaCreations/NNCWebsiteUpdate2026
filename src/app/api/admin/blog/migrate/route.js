import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/lib/BlogModel'
import { clearPostsCache } from '@/lib/blogSource'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'nnc-admin-2026'

// POST /api/admin/blog/migrate — seeds MongoDB from blogs.json (run once)
export async function POST(request) {
  try {
    const body = await request.json()
    if (body.secret !== ADMIN_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const existing = await Blog.countDocuments()
    if (existing > 0) {
      return NextResponse.json({ message: `Already has ${existing} posts — skipping migration` })
    }

    // Read from JSON seed files
    let posts = []
    for (const p of [
      path.join(process.cwd(), 'data', 'blogs.json'),
      path.join(process.cwd(), 'src', 'data', 'blogs.json'),
    ]) {
      try {
        if (fs.existsSync(p)) { posts = JSON.parse(fs.readFileSync(p, 'utf-8')); break }
      } catch {}
    }

    if (!posts.length) {
      return NextResponse.json({ error: 'No seed JSON found' }, { status: 404 })
    }

    await Blog.insertMany(posts.map(p => ({
      slug: p.slug, title: p.title, category: p.category,
      date: p.date, readTime: p.readTime,
      description: p.description || '', body: p.body || '',
    })), { ordered: false })
    clearPostsCache()

    return NextResponse.json({ success: true, message: `Migrated ${posts.length} posts to MongoDB` })
  } catch (err) {
    console.error('Migration error:', err)
    return NextResponse.json({ error: 'Migration error: ' + err.message }, { status: 500 })
  }
}
