import mongoose from 'mongoose'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

const MONGODB_URI = process.env.MONGODB_URI
  || 'mongodb+srv://nncnewwebsite:nncnewwebsite@cluster0.a0cz0ge.mongodb.net/nncwebsite?retryWrites=true&w=majority&appName=Cluster0'

const BlogSchema = new mongoose.Schema({
  slug:        { type: String, required: true, unique: true, trim: true },
  title:       { type: String, required: true, trim: true },
  category:    { type: String, required: true },
  date:        { type: String, required: true },
  readTime:    { type: String, required: true },
  description: { type: String, default: '' },
  body:        { type: String, default: '' },
}, { timestamps: true })

const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)

async function run() {
  console.log('[seed] connecting to MongoDB…')
  await mongoose.connect(MONGODB_URI, { bufferCommands: false })

  const existing = await Blog.countDocuments()
  console.log(`[seed] existing posts in DB: ${existing}`)

  const seedPath = path.join(__dirname, '..', 'data', 'blogs.json')
  const posts = JSON.parse(fs.readFileSync(seedPath, 'utf-8'))
  console.log(`[seed] seed file has ${posts.length} posts`)

  let inserted = 0, skipped = 0
  for (const p of posts) {
    const found = await Blog.findOne({ slug: p.slug })
    if (found) { skipped++; continue }
    await Blog.create({
      slug:        p.slug,
      title:       p.title,
      category:    p.category,
      date:        p.date,
      readTime:    p.readTime,
      description: p.description || '',
      body:        p.body || '',
    })
    inserted++
  }

  console.log(`[seed] inserted ${inserted}, skipped (already in DB) ${skipped}`)
  console.log('[seed] done')
  await mongoose.disconnect()
}

run().catch(err => {
  console.error('[seed] error:', err)
  process.exit(1)
})
