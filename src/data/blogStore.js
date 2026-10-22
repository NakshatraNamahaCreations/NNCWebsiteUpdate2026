import fs from 'fs'
import path from 'path'

// Primary: <project>/data/blogs.json — committed to git, just needs chmod 666 after deploy
const PRIMARY_PATH = path.join(process.cwd(), 'data', 'blogs.json')
// Fallback: env var override
const ENV_PATH = process.env.BLOG_DATA_PATH || null

function getWritablePath() {
  const candidates = [ENV_PATH, PRIMARY_PATH].filter(Boolean)
  for (const p of candidates) {
    try {
      const dir = path.dirname(p)
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
      // If file exists, check it's writable; if not, check dir is writable
      if (fs.existsSync(p)) {
        fs.accessSync(p, fs.constants.W_OK)
      } else {
        fs.accessSync(dir, fs.constants.W_OK)
      }
      return p
    } catch {}
  }
  return null
}

export function readPosts() {
  const candidates = [ENV_PATH, PRIMARY_PATH].filter(Boolean)
  for (const p of candidates) {
    try {
      if (fs.existsSync(p)) return JSON.parse(fs.readFileSync(p, 'utf-8'))
    } catch {}
  }
  return []
}

export function writePosts(posts) {
  const writePath = getWritablePath()
  if (!writePath) {
    throw new Error(
      'Cannot write blogs.json — run this on your server after each deploy:\n' +
      `chmod 666 /var/www/nakshatra/data/blogs.json`
    )
  }
  fs.writeFileSync(writePath, JSON.stringify(posts, null, 2), 'utf-8')
}
