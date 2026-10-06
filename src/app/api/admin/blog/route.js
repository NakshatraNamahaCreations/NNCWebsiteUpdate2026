import { NextResponse } from 'next/server'
import { connectDB } from '@/lib/mongodb'
import Blog from '@/lib/BlogModel'
import { clearPostsCache } from '@/lib/blogSource'

export const dynamic = 'force-dynamic'

const ADMIN_SECRET = process.env.ADMIN_SECRET || 'nnc-admin-2026'

function auth(secret) {
  return secret === ADMIN_SECRET
}

// POST — add a new blog post
export async function POST(request) {
  try {
    const body = await request.json()
    const { secret, slug, title, category, date, readTime, description, bodyContent } = body

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    if (!slug || !title || !category || !date || !readTime) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, category, date, readTime' }, { status: 400 })
    }

    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json({ error: 'Slug must be lowercase letters, numbers and hyphens only' }, { status: 400 })
    }

    await connectDB()

    const existing = await Blog.findOne({ slug })
    if (existing) {
      return NextResponse.json({ error: `Slug "${slug}" already exists` }, { status: 409 })
    }

    await Blog.create({ slug, title, category, date, readTime, description: description || '', body: bodyContent || '' })
    clearPostsCache()

    return NextResponse.json({ success: true, message: `Blog post "${title}" added successfully`, slug, url: `/blog/${slug}` })
  } catch (err) {
    console.error('Admin blog POST error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}

// GET — list all blog posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const secret = searchParams.get('secret')

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    await connectDB()
    const posts = await Blog.find({}).sort({ date: -1 }).lean()

    const mapped = posts.map(p => ({
      slug: p.slug, title: p.title, category: p.category,
      date: p.date, readTime: p.readTime,
      description: p.description || '', body: p.body || '',
    }))

    return NextResponse.json({ posts: mapped, slugs: mapped.map(p => p.slug), total: mapped.length })
  } catch (err) {
    console.error('Admin blog GET error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}

// PUT — update an existing blog post
export async function PUT(request) {
  try {
    const body = await request.json()
    const { secret, originalSlug, slug, title, category, date, readTime, description, bodyContent } = body

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    if (!originalSlug || !title) return NextResponse.json({ error: 'originalSlug and title are required' }, { status: 400 })

    await connectDB()

    const post = await Blog.findOne({ slug: originalSlug })
    if (!post) return NextResponse.json({ error: `Post "${originalSlug}" not found` }, { status: 404 })

    post.slug        = slug || originalSlug
    post.title       = title
    post.category    = category
    post.date        = date
    post.readTime    = readTime
    post.description = description || ''
    post.body        = bodyContent || ''
    await post.save()
    clearPostsCache()

    return NextResponse.json({ success: true, message: `Post "${title}" updated successfully` })
  } catch (err) {
    console.error('Admin blog PUT error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}

// DELETE — remove a blog post
export async function DELETE(request) {
  try {
    const body = await request.json()
    const { secret, slug } = body

    if (!auth(secret)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    if (!slug) return NextResponse.json({ error: 'Slug is required' }, { status: 400 })

    await connectDB()

    const result = await Blog.deleteOne({ slug })
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: `Slug "${slug}" not found` }, { status: 404 })
    }
    clearPostsCache()

    return NextResponse.json({ success: true, message: `Blog post "${slug}" deleted successfully` })
  } catch (err) {
    console.error('Admin blog DELETE error:', err)
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 })
  }
}
