'use client'
import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import { WORKS } from '@/data/worksData'

// ─── Project Data ─────────────────────────────────────────────────────────────
// Project list now lives in src/data/worksData.js so the landing portfolio
// section can read from the same source.

const CATEGORIES = [
  'All',
  'Website Development',
  'Mobile Apps',
  'CRM & Web Apps',
  'Animation',
  'Corporate Video',
]

const CAT_META = {
  'All':                 { color: '#6366F1', light: '#EEF2FF', icon: 'M4 6h16M4 12h16M4 18h16' },
  'Website Development': { color: '#2563EB', light: '#DBEAFE', icon: 'M3 3h18v14H3zM8 21h8M12 17v4' },
  'Mobile Apps':         { color: '#059669', light: '#D1FAE5', icon: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z' },
  'CRM & Web Apps':      { color: '#D97706', light: '#FEF3C7', icon: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5' },
  'Animation':           { color: '#7C3AED', light: '#EDE9FE', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664zM21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  'Corporate Video':     { color: '#DC2626', light: '#FEE2E2', icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z' },
  'Digital Marketing':   { color: '#0284C7', light: '#E0F2FE', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
  'Videos':              { color: '#DC2626', light: '#FEE2E2', icon: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z' },
  'Behind The Scenes':   { color: '#B45309', light: '#FEF3C7', icon: 'M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2zM12 17a4 4 0 100-8 4 4 0 000 8z' },
}

// ─── Industry Taxonomy (secondary filter) ─────────────────────────────────────
const INDUSTRY_META = {
  'E-commerce':       { color: '#DC2626', light: '#FEE2E2' },
  'Healthcare':       { color: '#DB2777', light: '#FCE7F3' },
  'Education':        { color: '#F59E0B', light: '#FEF3C7' },
  'Real Estate':      { color: '#0284C7', light: '#E0F2FE' },
  'Interior Design':  { color: '#7C3AED', light: '#EDE9FE' },
  'Corporate & B2B':  { color: '#2563EB', light: '#DBEAFE' },
  'Travel':           { color: '#0891B2', light: '#CFFAFE' },
  'Industrial':       { color: '#475569', light: '#E2E8F0' },
  'Services':         { color: '#059669', light: '#D1FAE5' },
  'Creative & Media': { color: '#C026D3', light: '#FAE8FF' },
  'Food & Beverage':  { color: '#92400E', light: '#FEF3C7' },
  'Finance':          { color: '#16A34A', light: '#D1FAE5' },
  'Events':           { color: '#EA580C', light: '#FED7AA' },
  'IT & Technology':  { color: '#6366F1', light: '#E0E7FF' },
}

// Derives an industry bucket from a project's `type`.
// Project rows may set `industry` explicitly to override — used where the type is ambiguous
// (e.g. Novus's type is "Corporate Website" but the client is actually Healthcare).
function deriveIndustry(w) {
  if (w.industry) return w.industry
  const t = (w.type || '').toLowerCase()
  if (/\be-?commerce\b/.test(t)) return 'E-commerce'
  if (/health|clinic|dermatology|drug|wellness|medical|hospital/.test(t)) return 'Healthcare'
  if (/education|consultancy|consulting|edtech|e-learning|elearning|learning|library|cybersecurity|school|college/.test(t)) return 'Education'
  if (/real estate|property|housing|rental/.test(t)) return 'Real Estate'
  if (/interior|decor/.test(t)) return 'Interior Design'
  if (/travel|tour|holidays|hospitality/.test(t)) return 'Travel'
  if (/industrial|manufacturing|control components/.test(t)) return 'Industrial'
  if (/food|beverage|f&b|restaurant/.test(t)) return 'Food & Beverage'
  if (/wedding|event/.test(t)) return 'Events'
  if (/finance|investment|banking/.test(t)) return 'Finance'
  if (/it services|project management|productivity|saas/.test(t)) return 'IT & Technology'
  if (/photography|cinematic|video|film|animation|animated|motion|graphics|reel|showcase|documentary|creative|entertainment|studio|2d|3d/.test(t)) return 'Creative & Media'
  if (/b2b|gifting|global sourcing/.test(t)) return 'Corporate & B2B'
  return 'Services'
}

// ─── Video Card ───────────────────────────────────────────────────────────────
function VideoCard({ w, onPlay }) {
  const [hovered, setHovered] = useState(false)
  const thumb = `https://img.youtube.com/vi/${w.videoId}/maxresdefault.jpg`

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onPlay(w.videoId)}
      style={{
        borderRadius: 18,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 24px 60px rgba(220,38,38,.25), 0 4px 16px rgba(0,0,0,.2)'
          : '0 4px 20px rgba(0,0,0,.12)',
        transform: hovered ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'all .32s cubic-bezier(.16,1,.3,1)',
        aspectRatio: '16/9',
      }}
    >
      {/* Thumbnail */}
      <img
        src={thumb}
        alt={w.name}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        onError={e => { e.target.style.background = '#1C1C2E' }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.2) 50%, transparent 100%)'
          : 'linear-gradient(to top, rgba(0,0,0,.7) 0%, rgba(0,0,0,.1) 60%, transparent 100%)',
        transition: 'background .3s',
      }} />

      {/* Play button */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: hovered ? 72 : 60,
          height: hovered ? 72 : 60,
          borderRadius: '50%',
          background: hovered ? '#DC2626' : 'rgba(255,255,255,.92)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: hovered ? '0 0 0 12px rgba(220,38,38,.25), 0 8px 32px rgba(220,38,38,.4)' : '0 4px 20px rgba(0,0,0,.3)',
          transition: 'all .3s cubic-bezier(.16,1,.3,1)',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill={hovered ? '#fff' : '#DC2626'} style={{ marginLeft: 3 }}>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      {/* Duration-style badge */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        display: 'flex', alignItems: 'center', gap: 5,
        background: 'rgba(220,38,38,.9)',
        backdropFilter: 'blur(8px)',
        padding: '4px 10px',
        borderRadius: 20,
        fontSize: 9.5, fontWeight: 800,
        color: '#fff',
        letterSpacing: '.08em',
        textTransform: 'uppercase',
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#fff',
          display: 'inline-block',
          animation: 'vid-rec 1.2s ease-in-out infinite',
        }} />
        VIDEO
      </div>

      {/* Bottom info */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 16px',
      }}>
        <div style={{
          fontSize: 15, fontWeight: 800,
          color: '#fff', letterSpacing: '-.02em',
          lineHeight: 1.3, marginBottom: 4,
        }}>
          {w.name}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: 11, fontWeight: 600,
            color: 'rgba(255,255,255,.65)',
          }}>{w.type}</span>
          <span style={{
            fontSize: 10.5, fontWeight: 700,
            color: '#FCA5A5',
            background: 'rgba(220,38,38,.3)',
            padding: '2px 8px', borderRadius: 12,
          }}>{w.result}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({ videoId, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'rgba(0,0,0,.88)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24,
        animation: 'modal-in .25s ease',
      }}
    >
      <style>{`
        @keyframes modal-in { from { opacity:0; transform:scale(.95) } to { opacity:1; transform:scale(1) } }
        @keyframes vid-rec { 0%,100% { opacity:1 } 50% { opacity:.2 } }
      `}</style>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 20,
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,.12)',
          border: '1px solid rgba(255,255,255,.2)',
          color: '#fff', fontSize: 20, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background .2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(220,38,38,.7)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,.12)'}
      >
        ✕
      </button>

      {/* Player */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 900,
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,.6)',
          aspectRatio: '16/9',
          position: 'relative',
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="NNC Video"
          allow="autoplay; fullscreen"
          allowFullScreen
          style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        />
      </div>
    </div>
  )
}

// ─── Behind The Scenes Card ───────────────────────────────────────────────────
const BTS_ROTATIONS = [-2.5, 1.8, -1.2, 2.2, -1.8, 1.5]
function BtsCard({ w, index }) {
  const [hovered, setHovered] = useState(false)
  const [flashed, setFlashed] = useState(false)
  const rotation = BTS_ROTATIONS[index % BTS_ROTATIONS.length]

  const handleHover = (on) => {
    setHovered(on)
    if (on && !flashed) {
      setFlashed(true)
      setTimeout(() => setFlashed(false), 400)
    }
  }

  const TAG_COLORS = { Team:'#6366F1', Process:'#059669', Build:'#2563EB', Studio:'#DC2626', Culture:'#7C3AED', People:'#D97706' }
  const tagColor = TAG_COLORS[w.tag] || '#6366F1'

  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{
        transform: hovered ? 'rotate(0deg) translateY(-8px) scale(1.03)' : `rotate(${rotation}deg)`,
        transition: 'transform .4s cubic-bezier(.16,1,.3,1)',
        cursor: 'default',
        position: 'relative',
      }}
    >
      {/* Camera flash overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        background: '#fff',
        borderRadius: 4,
        opacity: flashed ? 0.7 : 0,
        transition: flashed ? 'opacity 0s' : 'opacity .4s',
        pointerEvents: 'none',
      }} />

      {/* Polaroid frame */}
      <div style={{
        background: '#fff',
        padding: '10px 10px 48px',
        borderRadius: 4,
        boxShadow: hovered
          ? '0 28px 60px rgba(0,0,0,.22), 0 4px 12px rgba(0,0,0,.12)'
          : '0 8px 24px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08)',
        transition: 'box-shadow .4s',
      }}>
        {/* Photo area */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '4/3',
          background: '#E2E8F0',
        }}>
          <img
            src={w.img}
            alt={w.name}
            loading="lazy"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              display: 'block',
              transform: hovered ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform .5s cubic-bezier(.16,1,.3,1)',
            }}
          />
          {/* Tag badge */}
          <div style={{
            position: 'absolute', top: 10, left: 10,
            background: tagColor,
            color: '#fff',
            fontSize: 9, fontWeight: 800,
            padding: '3px 9px', borderRadius: 20,
            letterSpacing: '.08em', textTransform: 'uppercase',
          }}>
            {w.tag}
          </div>
          {/* Camera icon top-right */}
          <div style={{
            position: 'absolute', top: 10, right: 10,
            width: 28, height: 28, borderRadius: '50%',
            background: 'rgba(0,0,0,.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        {/* Polaroid caption area */}
        <div style={{ padding: '10px 4px 0', textAlign: 'center' }}>
          <div style={{
            fontSize: 12.5, fontWeight: 800,
            color: '#1E293B',
            letterSpacing: '-.02em',
            marginBottom: 4,
            fontFamily: "'Caveat', cursive, sans-serif",
            fontSize: 15,
          }}>
            {w.name}
          </div>
          <div style={{
            fontSize: 10.5, color: '#94A3B8',
            fontStyle: 'italic', lineHeight: 1.5,
          }}>
            {w.caption}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Work Card ────────────────────────────────────────────────────────────────
function WorkCard({ w }) {
  const [hovered, setHovered] = useState(false)
  const meta = CAT_META[w.category] || CAT_META['All']
  const hasLink = Boolean(w.url)

  const cardInner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        borderRadius: 18,
        padding: '22px 22px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        border: `1.5px solid ${hovered ? meta.color + '45' : '#E9EEF5'}`,
        boxShadow: hovered
          ? `0 16px 48px rgba(11,31,75,.13), 0 2px 12px ${meta.color}18`
          : '0 2px 10px rgba(11,31,75,.05)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all .28s cubic-bezier(.16,1,.3,1)',
        cursor: hasLink ? 'pointer' : 'default',
        position: 'relative',
      }}
    >
      {/* Top row: icon + category badge */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        {/* Icon box or Logo */}
        <div style={{
          width: 52, height: 52,
          borderRadius: 14,
          background: w.logo ? '#fff' : hovered ? meta.color : meta.light,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          transition: 'background .28s',
          boxShadow: hovered
            ? w.logo ? '0 6px 20px rgba(0,0,0,.12)' : `0 6px 18px ${meta.color}40`
            : w.logo ? '0 2px 8px rgba(0,0,0,.08)' : 'none',
          border: w.logo ? '1.5px solid #F0F4FA' : 'none',
          overflow: 'hidden',
          padding: w.logo ? 4 : 0,
        }}>
          {w.logo ? (
            <img src={w.logo} alt={w.name} style={{ width:'100%', height:'100%', objectFit:'contain', filter: w.logo === '/assets/st99.webp' ? 'brightness(0)' : 'none' }} />
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke={hovered ? '#fff' : meta.color}
              strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
              style={{ transition: 'stroke .28s' }}>
              <path d={meta.icon} />
            </svg>
          )}
        </div>

        {/* Category pill */}
        <span style={{
          fontSize: 10, fontWeight: 700,
          color: meta.color,
          background: meta.light,
          border: `1px solid ${meta.color}28`,
          padding: '4px 10px',
          borderRadius: 20,
          letterSpacing: '.05em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          {w.category}
        </span>
      </div>

      {/* Project name + type */}
      <div>
        <div style={{
          fontSize: 16, fontWeight: 800,
          color: '#0B1F4B',
          letterSpacing: '-.03em',
          lineHeight: 1.3,
          marginBottom: 4,
        }}>
          {w.name}
        </div>
        <div style={{
          fontSize: 12, fontWeight: 600,
          color: '#94A3B8',
          letterSpacing: '.02em',
        }}>
          {w.type}
        </div>
      </div>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
        {w.tech.map(t => (
          <span key={t} style={{
            fontSize: 10.5, fontWeight: 600,
            color: '#64748B',
            background: '#F5F7FA',
            border: '1px solid #E9EEF5',
            padding: '3px 9px',
            borderRadius: 20,
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Result metric */}
      <div style={{
        marginTop: 'auto',
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 13px',
        background: meta.light,
        borderRadius: 12,
        border: `1.5px solid ${meta.color}22`,
      }}>
        <div style={{
          width: 26, height: 26,
          borderRadius: 8,
          background: meta.color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke="#fff" strokeWidth="2.8" strokeLinecap="round">
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <span style={{
          fontSize: 12.5, fontWeight: 700,
          color: meta.color,
          lineHeight: 1.3,
          flex: 1,
        }}>
          {w.result}
        </span>
        {hasLink && (
          <div style={{
            width: 26, height: 26,
            borderRadius: 8,
            background: hovered ? meta.color : '#fff',
            border: `1.5px solid ${meta.color}${hovered ? '00' : '55'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            transition: 'all .25s cubic-bezier(.16,1,.3,1)',
            transform: hovered ? 'translate(2px,-2px)' : 'translate(0,0)',
            boxShadow: hovered ? `0 4px 12px ${meta.color}55` : 'none',
          }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
              stroke={hovered ? '#fff' : meta.color}
              strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )

  if (hasLink) {
    return (
      <a
        href={w.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${w.name} website`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
      >
        {cardInner}
      </a>
    )
  }
  return cardInner
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function OurWorksContent() {
  const [active, setActive] = useState('All')
  const [activeIndustry, setActiveIndustry] = useState('All')
  const [playingVideo, setPlayingVideo] = useState(null)
  const [industryScroll, setIndustryScroll] = useState({ left: 0, max: 0 })
  const scrollRef = useRef(null)
  const industryScrollRef = useRef(null)

  // Reset industry filter whenever the top-level category changes.
  useEffect(() => { setActiveIndustry('All') }, [active])

  // Projects in the currently selected category (before industry filter).
  const inCategory = useMemo(
    () => active === 'All' ? WORKS : WORKS.filter(w => w.category === active),
    [active]
  )

  // Industries present in the current category (or across every project when 'All' is selected),
  // ordered by frequency so the biggest buckets surface first.
  const industriesForCategory = useMemo(() => {
    const counts = {}
    for (const w of inCategory) {
      const ind = deriveIndustry(w)
      counts[ind] = (counts[ind] || 0) + 1
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1])
  }, [inCategory])

  // Track scroll position + overflow of the industry row so the arrow buttons
  // can appear only when there's actually content to scroll into.
  // Declared after industriesForCategory because the effect reruns when its length changes.
  useEffect(() => {
    const el = industryScrollRef.current
    if (!el) return
    const update = () => setIndustryScroll({ left: el.scrollLeft, max: el.scrollWidth - el.clientWidth })
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    // Convert vertical mouse-wheel into horizontal scroll on this row (desktop convenience).
    const onWheel = (e) => {
      if (e.deltaY === 0) return
      if (el.scrollWidth <= el.clientWidth) return
      e.preventDefault()
      el.scrollBy({ left: e.deltaY, behavior: 'auto' })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('scroll', update)
      el.removeEventListener('wheel', onWheel)
      ro.disconnect()
    }
  }, [industriesForCategory.length])

  const scrollIndustryBy = (delta) => {
    const el = industryScrollRef.current
    if (!el) return
    el.scrollBy({ left: delta, behavior: 'smooth' })
  }

  const filtered = useMemo(() => {
    if (activeIndustry === 'All') return inCategory
    return inCategory.filter(w => deriveIndustry(w) === activeIndustry)
  }, [inCategory, activeIndustry])

  const countFor = cat =>
    cat === 'All' ? WORKS.length : WORKS.filter(w => w.category === cat).length

  const activeMeta = CAT_META[active] || CAT_META['All']
  const industryMeta = INDUSTRY_META[activeIndustry] || { color: activeMeta.color, light: activeMeta.light }

  return (
    <>
      {/* ── Filter Tab Bar ── */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: 'linear-gradient(180deg,#F8FAFF 0%,#fff 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1.5px solid #E8EEFF',
        boxShadow: '0 4px 24px rgba(99,102,241,.08)',
      }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '10px clamp(12px,3vw,24px)' }}>
          <div
            ref={scrollRef}
            className="ow-tab-scroll"
            style={{
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`div::-webkit-scrollbar{display:none}`}</style>
            <div style={{ display: 'flex', gap: 6, minWidth: 'max-content', padding: '2px 0' }}>
              {CATEGORIES.map(cat => {
                const isActive = cat === active
                const meta = CAT_META[cat] || CAT_META['All']
                const count = countFor(cat)

                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="ow-tab-btn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 7,
                      padding: '8px 14px',
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? '#fff' : '#475569',
                      border: isActive ? 'none' : '1.5px solid #E2E8F0',
                      borderRadius: 10,
                      cursor: 'pointer',
                      transition: 'all .22s cubic-bezier(.16,1,.3,1)',
                      fontFamily: 'inherit',
                      whiteSpace: 'nowrap',
                      outline: 'none',
                      WebkitTapHighlightColor: 'transparent',
                      background: isActive
                        ? `linear-gradient(135deg,${meta.color},${meta.color}CC)`
                        : '#fff',
                      boxShadow: isActive
                        ? `0 4px 14px ${meta.color}40`
                        : '0 1px 3px rgba(0,0,0,.06)',
                      transform: isActive ? 'translateY(-1px)' : 'none',
                    }}
                  >
                    {/* Icon — hidden on mobile */}
                    <span className="ow-tab-icon" style={{
                      width: 24, height: 24,
                      borderRadius: 6,
                      background: isActive ? 'rgba(255,255,255,.2)' : meta.color + '15',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke={isActive ? '#fff' : meta.color}
                        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={meta.icon} />
                      </svg>
                    </span>

                    {/* Label */}
                    {cat === 'Videos' ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                        <span style={{
                          width: 6, height: 6, borderRadius: '50%',
                          background: isActive ? '#fff' : '#DC2626',
                          display: 'inline-block',
                          animation: 'rec-pulse 1.2s ease-in-out infinite',
                          flexShrink: 0,
                        }} />
                        Videos
                      </span>
                    ) : cat}

                    {/* Count badge */}
                    <span style={{
                      fontSize: 10.5, fontWeight: 700,
                      padding: '1px 7px',
                      borderRadius: 20,
                      background: isActive ? 'rgba(255,255,255,.25)' : meta.color + '15',
                      color: isActive ? '#fff' : meta.color,
                      minWidth: 22, textAlign: 'center',
                      transition: 'all .22s',
                    }}>
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── Industry (sub-filter) row ── */}
          {industriesForCategory.length > 1 && (() => {
            const canLeft  = industryScroll.left > 4
            const canRight = industryScroll.left < industryScroll.max - 4
            // Edge-fade mask: left side fades when there's content behind it, right side when there's content ahead.
            const leftFade  = canLeft  ? 'black 32px' : 'black 0'
            const rightFade = canRight ? 'black calc(100% - 32px)' : 'black 100%'
            const mask = `linear-gradient(to right, transparent 0, ${leftFade}, ${rightFade}, transparent 100%)`
            return (
          <div style={{ position: 'relative', marginTop: 8, paddingTop: 8, borderTop: '1px dashed #E2E8F0' }}>
            <div
              ref={industryScrollRef}
              className="ow-tab-scroll"
              style={{
                overflowX: 'auto',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                width: '100%',
                maxWidth: '100%',
                WebkitMaskImage: mask,
                maskImage: mask,
              }}
            >
              <div style={{ display: 'flex', gap: 6, minWidth: 'max-content', padding: '2px 24px 2px 0', alignItems: 'center' }}>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: '#94A3B8',
                  letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  marginRight: 4,
                  whiteSpace: 'nowrap',
                }}>
                  Industry
                </span>
                {[['All', inCategory.length], ...industriesForCategory].map(([ind, count]) => {
                  const isActive = ind === activeIndustry
                  const m = INDUSTRY_META[ind] || { color: activeMeta.color, light: activeMeta.light }
                  return (
                    <button
                      key={ind}
                      onClick={(e) => {
                        setActiveIndustry(ind)
                        const btn = e.currentTarget
                        const scroller = industryScrollRef.current
                        if (!scroller) return
                        const btnLeft = btn.offsetLeft
                        const btnRight = btnLeft + btn.offsetWidth
                        const viewLeft = scroller.scrollLeft
                        const viewRight = viewLeft + scroller.clientWidth
                        const PAD = 16
                        if (btnLeft < viewLeft + PAD) {
                          scroller.scrollTo({ left: Math.max(0, btnLeft - PAD), behavior: 'smooth' })
                        } else if (btnRight > viewRight - PAD) {
                          scroller.scrollTo({ left: btnRight - scroller.clientWidth + PAD, behavior: 'smooth' })
                        }
                      }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        padding: '6px 12px',
                        fontSize: 12, fontWeight: isActive ? 700 : 500,
                        color: isActive ? '#fff' : '#475569',
                        border: isActive ? 'none' : '1.5px solid #E2E8F0',
                        borderRadius: 20,
                        cursor: 'pointer',
                        transition: 'all .22s cubic-bezier(.16,1,.3,1)',
                        fontFamily: 'inherit',
                        whiteSpace: 'nowrap',
                        outline: 'none',
                        WebkitTapHighlightColor: 'transparent',
                        background: isActive
                          ? `linear-gradient(135deg,${m.color},${m.color}CC)`
                          : '#fff',
                        boxShadow: isActive ? `0 3px 10px ${m.color}40` : 'none',
                      }}
                    >
                      {ind}
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        padding: '1px 7px',
                        borderRadius: 20,
                        background: isActive ? 'rgba(255,255,255,.25)' : m.color + '15',
                        color: isActive ? '#fff' : m.color,
                        minWidth: 20, textAlign: 'center',
                      }}>
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Scroll-left button — appears only when there's hidden content to the left */}
            {canLeft && (
              <button
                onClick={() => scrollIndustryBy(-240)}
                aria-label="Scroll industry filter left"
                style={{
                  position: 'absolute', left: -6, top: '50%',
                  transform: 'translateY(-50%)',
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#fff',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(11,31,75,.1)',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                  color: '#475569',
                  padding: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            {/* Scroll-right button — appears only when there's hidden content to the right */}
            {canRight && (
              <button
                onClick={() => scrollIndustryBy(240)}
                aria-label="Scroll industry filter right"
                style={{
                  position: 'absolute', right: -6, top: '50%',
                  transform: 'translateY(-50%)',
                  width: 32, height: 32, borderRadius: '50%',
                  background: '#fff',
                  border: '1.5px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(11,31,75,.1)',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  zIndex: 2,
                  color: '#475569',
                  padding: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )}
          </div>
            )
          })()}
        </div>
      </div>

      {/* ── Grid Section ── */}
      <section style={{
        background: active === 'Behind The Scenes'
          ? 'linear-gradient(180deg,#FFFBEB 0%,#FEF3C7 100%)'
          : '#F7F9FC',
        padding: '48px 0 80px',
        transition: 'background .4s',
      }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>

          {/* Result count bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 32,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 5, height: 22,
                borderRadius: 3,
                background: activeMeta.color,
              }} />
              <p style={{
                fontSize: 14, color: '#64748B',
                fontWeight: 600, margin: 0,
              }}>
                Showing{' '}
                <strong style={{ color: '#0B1F4B', fontSize: 15 }}>
                  {filtered.length}
                </strong>{' '}
                project{filtered.length !== 1 ? 's' : ''}
                {active !== 'All' && (
                  <>
                    {' '}in{' '}
                    <strong style={{ color: activeMeta.color }}>{active}</strong>
                  </>
                )}
                {activeIndustry !== 'All' && (
                  <>
                    {' · '}
                    <strong style={{ color: industryMeta.color }}>{activeIndustry}</strong>
                  </>
                )}
              </p>
            </div>

            {/* Active filter chips */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {activeIndustry !== 'All' && (
                <button
                  onClick={() => setActiveIndustry('All')}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 13px',
                    background: industryMeta.light,
                    border: `1.5px solid ${industryMeta.color}30`,
                    borderRadius: 20,
                    fontSize: 12.5, fontWeight: 700,
                    color: industryMeta.color,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all .2s',
                  }}
                >
                  {activeIndustry}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
              {active !== 'All' && (
                <button
                  onClick={() => setActive('All')}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '6px 13px',
                    background: activeMeta.light,
                    border: `1.5px solid ${activeMeta.color}30`,
                    borderRadius: 20,
                    fontSize: 12.5, fontWeight: 700,
                    color: activeMeta.color,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'all .2s',
                  }}
                >
                  {active}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Project grid */}
          <div className="row g-4" style={active === 'Behind The Scenes' ? { padding: '20px 0 40px' } : {}}>
            {filtered.map((w, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                {w.videoId ? (
                  <VideoCard w={w} onPlay={setPlayingVideo} />
                ) : w.category === 'Behind The Scenes' ? (
                  <BtsCard w={w} index={i} />
                ) : (
                  <WorkCard w={w} />
                )}
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '80px 20px',
            }}>
              <div style={{
                width: 72, height: 72,
                borderRadius: 20,
                background: '#EFF2F8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 20px',
              }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                  stroke="#CBD5E1" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#0B1F4B', marginBottom: 8 }}>
                No projects found
              </h3>
              <p style={{ color: '#94A3B8', fontSize: 14 }}>
                Try selecting a different category above.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── Video Modal ── */}
      {playingVideo && (
        <VideoModal videoId={playingVideo} onClose={() => setPlayingVideo(null)} />
      )}
    </>
  )
}
