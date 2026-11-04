import Navbar from '@/components/Navbar'
import AnimObserver from '@/components/AnimObserver'
import { SeoKeywords, Footer, WaFloat } from '@/components/Sections'
import { getPost } from '@/lib/blogSource'
import { SITE } from '@/data/siteData'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }) {
  const { post } = await getPost(params.slug)
  if (!post) return { title: 'Blog | NNC Digital' }
  const description = post.description || `${post.title} practical insights from NNC Digital's in-house team in Bengaluru. Expert guide on ${post.category.toLowerCase()} for businesses in India.`
  const metaTitle = (post.metaTitle && post.metaTitle.trim()) || `${post.title} | NNC Digital Blog`
  return {
    title: metaTitle,
    description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      title: metaTitle,
      description,
      type: 'article',
      publishedTime: post.date,
      url: `${SITE.url}/blog/${post.slug}`,
      images: [{ url: SITE.teamPhoto, width: 1200, height: 630, alt: `${post.title} NNC Digital Blog` }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@nncbengaluru',
      title: metaTitle,
      description,
      images: [SITE.teamPhoto],
    },
  }
}

function parseLine(line) {
  const m = line.match(/^(#{1,3})\s+(.+)$/)
  if (m) return { type: `h${m[1].length}`, text: m[2] }
  return { type: 'p', text: line }
}

const INLINE_PATTERNS = [
  { re: /\[([^\]]+)\]\(([^)\s]+)\)/,     type: 'linkUrl' },
  { re: /\[\[([^\]]+)\]\]/,              type: 'linkPlain' },
  { re: /\*\*([^*]+)\*\*/,               type: 'bold' },
  { re: /__([^_]+)__/,                   type: 'underline' },
  { re: /\*([^*]+)\*/,                   type: 'italic' },
]

function renderInline(text) {
  const out = []
  let remaining = text
  let key = 0
  while (remaining.length) {
    let best = null
    for (const p of INLINE_PATTERNS) {
      const m = p.re.exec(remaining)
      if (m && (!best || m.index < best.m.index)) best = { p, m }
    }
    if (!best) { out.push(remaining); break }
    if (best.m.index > 0) out.push(remaining.slice(0, best.m.index))
    const m = best.m
    if (best.p.type === 'linkUrl') {
      out.push(<a key={`l${key++}`} href={m[2]} target="_blank" rel="noreferrer" style={{ color: '#2196F3', textDecoration: 'underline' }}>{m[1]}</a>)
    } else if (best.p.type === 'linkPlain') {
      out.push(<span key={`lp${key++}`} style={{ color: '#2196F3', textDecoration: 'underline' }}>{m[1]}</span>)
    } else if (best.p.type === 'bold') {
      out.push(<strong key={`b${key++}`}>{m[1]}</strong>)
    } else if (best.p.type === 'underline') {
      out.push(<u key={`u${key++}`}>{m[1]}</u>)
    } else {
      out.push(<em key={`i${key++}`}>{m[1]}</em>)
    }
    remaining = remaining.slice(m.index + m[0].length)
  }
  return out
}

function isHtml(s) {
  return /<(h[1-6]|p|strong|em|u|a|span|br|div|table|thead|tbody|tr|td|th)\b/i.test(s || '')
}

function generateContent(post) {
  if (post.body && post.body.trim()) {
    if (isHtml(post.body)) return { html: post.body }
    return { blocks: post.body.split('\n').filter(p => p.trim()).map(parseLine) }
  }
  const opener = post.description && post.description.trim()
    ? post.description
    : `This is a comprehensive guide on ${post.title.toLowerCase()} from NNC Digital's team in Bengaluru. Our in-house specialists have delivered 565+ projects and bring real, hands-on experience to every topic we cover.`
  return {
    blocks: [
      opener,
      `Understanding ${post.category.toLowerCase()} is critical for businesses in India looking to grow their digital presence. Whether you're a startup or an established company, the insights here will help you make smarter decisions.`,
      `At NNC Digital, we've worked with businesses across healthcare, real estate, e-commerce, education and more. Our team of 35+ permanent in-house specialists has seen what works and what doesn't in the Indian market.`,
      `The key takeaway from our experience: the best results come from clarity of requirements, a fixed-price engagement, and a team that is permanently accountable for what they build. Not freelancers. Not outsourced work. Permanent employees with skin in the game.`,
      `If you have questions about ${post.title.toLowerCase()}, or want to discuss how NNC Digital can help your business, contact our team. We respond with a detailed scope and fixed price within 24 hours.`,
    ].map(text => ({ type: 'p', text })),
  }
}

export default async function BlogPostPage({ params }) {
  const { post, related } = await getPost(params.slug)

  if (!post) return <div style={{ padding: 80, textAlign: 'center', fontSize: 18, color: '#6B7A99' }}>Blog post not found.</div>

  const content = generateContent(post)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    url: `${SITE.url}/blog/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {Array.isArray(post.faqs) && post.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faqs.map(f => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }) }} />
      )}
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <nav style={{ background: '#071435', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
          <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', gap: 6, fontSize: 12.5, flexWrap: 'wrap' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,.45)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: 'rgba(255,255,255,.2)' }}>›</span>
            <span style={{ color: '#2196F3', fontWeight: 600 }}>{post.category}</span>
          </div>
        </nav>

        {/* Article */}
        <article style={{ background: '#fff' }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg,#040E25 0%,#0a2055 55%,#0e2d6a 100%)', padding: '64px 0 52px' }}>
            <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: '#2196F3', background: 'rgba(33,150,243,.18)', padding: '3px 10px', borderRadius: 20 }}>{post.category}</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{post.readTime} read</span>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,.35)' }}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <h1 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.15, marginBottom: 16 }}>{post.title}</h1>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,.45)' }}>By <strong style={{ color: 'rgba(255,255,255,.7)' }}>NNC Digital Team</strong> · Bengaluru</p>
            </div>
          </div>

          {/* Body */}
          <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 24px 80px' }}>
            {content.html ? (
              <>
                <style>{`
                  .blog-html-body{font-size:17px;color:#374151;line-height:1.85;max-width:720px;}
                  .blog-html-body p{margin:0 0 22px;}
                  .blog-html-body h1{font-size:30px;font-weight:800;color:#0B1F4B;letter-spacing:-.03em;line-height:1.25;margin:40px 0 16px;}
                  .blog-html-body h2{font-size:24px;font-weight:800;color:#0B1F4B;letter-spacing:-.02em;line-height:1.3;margin:32px 0 14px;}
                  .blog-html-body h3{font-size:19px;font-weight:700;color:#0B1F4B;letter-spacing:-.01em;line-height:1.35;margin:26px 0 12px;}
                  .blog-html-body a{color:#2196F3;text-decoration:underline;}
                  .blog-html-body strong{font-weight:800;}
                  .blog-html-body em{font-style:italic;}
                  .blog-html-body table{border-collapse:collapse;width:100%;margin:28px 0;font-size:15px;display:block;overflow-x:auto;}
                  .blog-html-body thead{background:#F1F5F9;}
                  .blog-html-body th{color:#0B1F4B;font-weight:800;text-align:left;padding:12px 14px;border:1.5px solid #E2E8F0;white-space:nowrap;}
                  .blog-html-body td{padding:12px 14px;border:1.5px solid #E2E8F0;color:#374151;vertical-align:top;}
                  .blog-html-body tbody tr:nth-child(even){background:#FAFBFF;}
                `}</style>
                <div className="blog-html-body" dangerouslySetInnerHTML={{ __html: content.html }} />
              </>
            ) : (
              <div style={{ fontSize: 17, color: '#374151', lineHeight: 1.85, maxWidth: 720 }}>
                {content.blocks.map((block, i) => {
                  const inner = renderInline(block.text)
                  if (block.type === 'h1') return <h2 key={i} style={{ fontSize: 30, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em', lineHeight: 1.25, margin: '40px 0 16px' }}>{inner}</h2>
                  if (block.type === 'h2') return <h3 key={i} style={{ fontSize: 24, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.02em', lineHeight: 1.3, margin: '32px 0 14px' }}>{inner}</h3>
                  if (block.type === 'h3') return <h4 key={i} style={{ fontSize: 19, fontWeight: 700, color: '#0B1F4B', letterSpacing: '-.01em', lineHeight: 1.35, margin: '26px 0 12px' }}>{inner}</h4>
                  return <p key={i} style={{ marginBottom: 22 }}>{inner}</p>
                })}
              </div>
            )}

            {/* FAQs */}
            {Array.isArray(post.faqs) && post.faqs.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em', marginBottom: 18 }}>Frequently Asked Questions</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {post.faqs.map((f, i) => (
                    <details key={i} style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '14px 18px' }}>
                      <summary style={{ fontSize: 15, fontWeight: 700, color: '#0B1F4B', cursor: 'pointer', listStyle: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                        <span>{f.question}</span>
                        <span style={{ fontSize: 20, color: '#94A3B8', fontWeight: 400, flexShrink: 0 }}>+</span>
                      </summary>
                      <div style={{ marginTop: 10, fontSize: 14.5, color: '#475569', lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>{f.answer}</div>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* CTA block */}
            <div style={{ marginTop: 56, padding: '32px 36px', background: '#071435', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Want help with {post.category.toLowerCase()}?</div>
                <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.4)' }}>NNC Digital delivers {post.category.toLowerCase()} projects in Bengaluru, Mumbai & Hyderabad.</div>
              </div>
              <Link href="/contact-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#2196F3', color: '#fff', padding: '12px 24px', borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
                Get Free Quote <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
              <div style={{ marginTop: 56 }}>
                <h2 style={{ fontSize: 20, fontWeight: 800, color: '#0B1F4B', letterSpacing: '-.03em', marginBottom: 20 }}>Related Articles</h2>
                <div className="row g-3">
                  {related.map(r => (
                    <div key={r.slug} className="col-12 col-md-4">
                      <Link href={`/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                        <div className="card-hover" style={{ background: '#F8FAFC', border: '1.5px solid #E2E8F0', borderRadius: 12, padding: '18px', height: '100%' }}>
                          <span style={{ fontSize: 10.5, fontWeight: 700, color: '#2196F3', background: '#EFF6FF', padding: '2px 8px', borderRadius: 20, display: 'inline-block', marginBottom: 8 }}>{r.category}</span>
                          <div style={{ fontSize: 13.5, fontWeight: 700, color: '#0B1F4B', lineHeight: 1.4 }}>{r.title}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </main>
      <SeoKeywords />
      <Footer />
      <WaFloat />
      <AnimObserver />
    </>
  )
}
