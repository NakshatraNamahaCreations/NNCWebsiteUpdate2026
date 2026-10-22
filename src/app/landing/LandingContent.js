'use client'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LANDING_COMPANY, DIFFERENTIATORS, PROCESS_STEPS, PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS, TESTIMONIALS, PROBLEM_CATEGORIES, TOTAL_PROBLEMS } from '@/data/landingPages'

const HERO_STATS = [
  ['4.9★', 'Google rating'],
  ['2K+', 'Websites delivered'],
  ['35+', 'In house team'],
  ['100%', 'Code ownership'],
]

const PROBLEMS = [
  {
    label: 'Losing business online',
    headline: "You're invisible where it matters most",
    items: [
      "Customers can't find us on Google.",
      'Competitors outrank us on search.',
      'Our site gets visitors but almost no enquiries.',
      'We rely entirely on referrals.',
    ],
  },
  {
    label: 'Outdated & unprofessional',
    headline: 'First impressions are made in seconds',
    items: [
      'Our website looks ten years old.',
      "The design feels cheap and hurts our brand.",
      "It's embarrassing to share our link.",
      'Nothing about the site feels premium.',
    ],
  },
  {
    label: 'Slow & broken',
    headline: 'Every second of load time costs you customers',
    items: [
      'Our website takes forever to load.',
      'Pages freeze on older phones.',
      'Contact forms fail silently.',
      'Our PageSpeed score is deep in the red.',
    ],
  },
]

const GRADS = ['lp-g1', 'lp-g2', 'lp-g3', 'lp-g4', 'lp-g5', 'lp-g6']
const PROB_DOTS = ['#60b7fa', '#0ea5e9', '#10b981', '#f59e0b', '#f97316', '#93d0fd', '#7c3aed', '#ec4899', '#06b6d4', '#ef4444', '#22c55e', '#2196f3']

export default function LandingContent({ page }) {
  const router = useRouter()
  const { service, location, keyword, faqs } = page
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [status, setStatus] = useState({ sending: false, ok: false, err: '' })
  const [hp, setHp] = useState('')            // honeypot — bots fill this, humans don't
  const renderedAt = useRef(Date.now())       // spam guard: too-fast submits are bots
  const [portfolioTab, setPortfolioTab] = useState('all')
  const shownWork = portfolioTab === 'all' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((w) => w.cat === portfolioTab)

  /* Pinned horizontal scroll for the Problems section (desktop only).
     As the user scrolls down while the section is pinned, the track slides
     left → right, exactly like the original GSAP scroll. */
  const probPinRef = useRef(null)
  const probStickyRef = useRef(null)
  const probTrackRef = useRef(null)
  useEffect(() => {
    const pin = probPinRef.current
    const sticky = probStickyRef.current
    const track = probTrackRef.current
    if (!pin || !sticky || !track) return
    const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches
    let raf = 0

    const update = () => {
      raf = 0
      if (!isDesktop()) {
        track.style.transform = ''
        sticky.classList.remove('is-pinned', 'is-done')
        pin.style.height = ''
        return
      }
      const distance = track.scrollWidth - window.innerWidth
      if (distance <= 0) {
        track.style.transform = ''
        sticky.classList.remove('is-pinned', 'is-done')
        return
      }
      const top = pin.offsetTop
      const y = window.scrollY
      const scrolled = y - top
      // Hold the intro fully visible for a moment before the track starts moving.
      const HOLD = Math.round(window.innerHeight * 0.5)
      const total = distance + HOLD

      if (scrolled <= 0) {
        // before the section
        sticky.classList.remove('is-pinned', 'is-done')
        track.style.transform = 'translate3d(0,0,0)'
      } else if (scrolled >= total) {
        // past the section — park it at the bottom
        sticky.classList.remove('is-pinned')
        sticky.classList.add('is-done')
        track.style.transform = `translate3d(${-distance}px,0,0)`
      } else {
        // pinned: hold first, then slide the track as we scroll
        sticky.classList.add('is-pinned')
        sticky.classList.remove('is-done')
        const moved = Math.max(0, scrolled - HOLD)
        track.style.transform = `translate3d(${-Math.min(moved, distance)}px,0,0)`
      }
    }

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }

    const setHeight = () => {
      if (!isDesktop()) { pin.style.height = ''; return }
      const distance = track.scrollWidth - window.innerWidth
      const HOLD = Math.round(window.innerHeight * 0.5)
      pin.style.height = distance > 0 ? `${window.innerHeight + distance + HOLD}px` : ''
    }

    const onResize = () => { setHeight(); update() }

    setHeight()
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const setF = (k, v) => setForm((p) => ({ ...p, [k]: v }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) {
      setStatus({ sending: false, ok: false, err: 'Please enter your name.' })
      return
    }
    // Indian mobiles: exactly 10 digits starting 6-9.
    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      setStatus({
        sending: false, ok: false,
        err: 'Please enter a valid 10-digit mobile number (starting with 6, 7, 8 or 9).',
      })
      return
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setStatus({ sending: false, ok: false, err: 'Please enter a valid email address.' })
      return
    }
    setStatus({ sending: true, ok: false, err: '' })
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: service.name,
          message: form.message,
          landingPage: `/${page.slug}`,
          company_website: hp,          // honeypot
          renderedAt: renderedAt.current,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.success !== false) {
        // Same as the site's other forms: go to the shared thank-you page.
        router.push('/thankyou')
      } else {
        setStatus({ sending: false, ok: false, err: data.error === 'invalid_contact'
          ? 'Please enter a valid 10-digit mobile number.'
          : 'Could not send. Please call ' + LANDING_COMPANY.phone })
      }
    } catch {
      setStatus({ sending: false, ok: false, err: 'Could not send. Please call ' + LANDING_COMPANY.phone })
    }
  }

  return (
    <div className="lp">
      {/* ── HERO ── */}
      <section className="lp-hero">
        <video className="lp-hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/landing/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="lp-hero-overlay" />
        <div className="lp-hero-overlay-2" />
        <div className="lp-container lp-hero-inner">
          <span className="lp-badge">
            <span className="lp-star">★</span>
            {`${LANDING_COMPANY.stats.googleRating}★ on Google · ${LANDING_COMPANY.stats.websites} websites since ${LANDING_COMPANY.foundedYear}`}
          </span>
          <h1 className="lp-h1">
            {`Best ${service.name} Company in `}
            <span className="lp-accent">{location.name}</span>
          </h1>
          <p className="lp-hero-lead">Websites that actually grow your business.</p>
          <p className="lp-hero-sub">
            {`Looking for the ${keyword}? ${service.summary} You own the code, and every site ships with a PageSpeed 90+ guarantee in writing.`}
          </p>
          <div className="lp-hero-cta">
            <a href="#lp-quote" className="lp-btn lp-btn-primary">Get a free quote →</a>
            <a href="#lp-work" className="lp-btn lp-btn-ghost">✦ See our work</a>
          </div>
          <p className="lp-hero-note">In house team · You own the code · PageSpeed 90+ guaranteed</p>
          <div className="lp-hero-stats">
            {HERO_STATS.map(([v, l]) => (
              <div className="lp-stat" key={l}>
                <div className="lp-stat-val">{v}</div>
                <div className="lp-stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="lp-section lp-section-white" id="lp-work">
        <div className="lp-container">
          <div className="lp-eyebrow">What we build</div>
          <h2 className="lp-h2">{`What the ${keyword} builds`}</h2>
          <p className="lp-sub">{service.summary}</p>
          <div className="lp-grid">
            {service.deliverables.map((d, i) => (
              <div className="lp-card" key={d.title}>
                <span className={`lp-card-icon ${GRADS[i % GRADS.length]}`}>◆</span>
                <h3 className="lp-card-title">{d.title}</h3>
                <p className="lp-card-desc">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS (dark, pinned horizontal scroll) ── */}
      <section className="lp-problems" ref={probPinRef}>
        <div className="lp-problems-sticky" ref={probStickyRef}>
          <div className="lp-problems-track" ref={probTrackRef}>
            {/* Intro panel */}
            <div className="lp-prob-intro">
              <p className="lp-eyebrow" style={{ color: '#fbbf24', textAlign: 'left' }}>Sound familiar?</p>
              <h2 className="lp-prob-intro-h">{TOTAL_PROBLEMS} reasons businesses come to us</h2>
              <p className="lp-prob-intro-p">
                {`Most companies in ${location.name} don't have a design problem. They have a growth problem hiding inside their website.`}
              </p>
              <p className="lp-prob-scroll">Scroll to explore →</p>
            </div>

            {/* Category cards */}
            {PROBLEM_CATEGORIES.map((cat, i) => (
              <div className="lp-prob-card" key={cat.label}>
                <div className="lp-prob-label"><span className="lp-prob-dot" style={{ background: PROB_DOTS[i % PROB_DOTS.length] }} />{cat.label}</div>
                <h3 className="lp-prob-head">{cat.headline}</h3>
                <ul className="lp-prob-list">
                  {cat.problems.map((p) => (
                    <li key={p}><span style={{ background: PROB_DOTS[i % PROB_DOTS.length] }} className="lp-prob-li-dot" />{p}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Outro CTA panel */}
            <div className="lp-prob-outro">
              <h3>Every one of these, solved by one team.</h3>
              <a href="#lp-quote" className="lp-btn" style={{ background: '#fff', color: 'var(--lp-brand-600)', marginTop: 20 }}>Get a free quote →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div className="lp-eyebrow">Why Nakshatra Namaha Creations</div>
          <h2 className="lp-h2">{`Why we're the ${keyword}`}</h2>
          <p className="lp-sub">The things most agencies leave vague, we put in writing.</p>
          <div className="lp-grid">
            {DIFFERENTIATORS.map((d, i) => (
              <div className="lp-card" key={d.title}>
                <span className={`lp-card-icon ${GRADS[i % GRADS.length]}`}>✓</span>
                <h3 className="lp-card-title">{d.title}</h3>
                <p className="lp-card-desc">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="lp-section lp-section-white">
        <div className="lp-container">
          <div className="lp-eyebrow">How we work</div>
          <h2 className="lp-h2">From idea to launch in four clear steps</h2>
          <p className="lp-sub">{`How the ${keyword} takes you from idea to launch, with no mystery and no scope creep.`}</p>
          <div className="lp-grid lp-grid-4">
            {PROCESS_STEPS.map((s, i) => (
              <div className="lp-card" key={s.title}>
                <span className={`lp-step-num ${GRADS[i % GRADS.length]}`}>{i + 1}</span>
                <h3 className="lp-card-title">{s.title}</h3>
                <p className="lp-card-desc">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="lp-section lp-section-light" id="lp-portfolio">
        <div className="lp-container">
          <div className="lp-eyebrow">Selected work</div>
          <h2 className="lp-h2">{`A glimpse of our ${LANDING_COMPANY.stats.websites} websites`}</h2>
          <p className="lp-sub">{`See why we are called the ${keyword}. Animated experiences, ecommerce, landing pages, corporate sites, web apps and mobile apps — each one owned outright by the client.`}</p>
          <div className="lp-tabs">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`lp-tab${portfolioTab === c.id ? ' active' : ''}`}
                onClick={() => setPortfolioTab(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="lp-work-grid">
            {shownWork.map((w) => (
              <article className="lp-work-card" key={w.name}>
                <div className="lp-work-thumb" style={{ background: w.grad }}>
                  <span className="lp-work-dots"><i /><i /><i /></span>
                  <span className="lp-work-name">{w.name}</span>
                </div>
                <div className="lp-work-body">
                  <div className="lp-work-head">
                    <h3>{w.name}</h3>
                    <span className="lp-work-url">↗</span>
                  </div>
                  <div className="lp-work-url-text">{w.url}</div>
                  <div className="lp-work-tags">
                    {w.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="lp-section lp-section-white">
        <div className="lp-container">
          <div className="lp-eyebrow">Reviews</div>
          <h2 className="lp-h2">{`Rated ${LANDING_COMPANY.stats.googleRating} by ${LANDING_COMPANY.stats.reviewCount} clients on Google`}</h2>
          <p className="lp-sub">Real businesses, real results. Here is what a few of them said.</p>
          <div className="lp-grid">
            {TESTIMONIALS.map((t) => (
              <div className="lp-review-card" key={t.name}>
                <div className="lp-stars">{'★★★★★'.slice(0, t.rating)}</div>
                <p className="lp-review-quote">“{t.quote}”</p>
                <div className="lp-review-author">
                  <span className="lp-review-avatar">{t.name.charAt(0)}</span>
                  <div>
                    <div className="lp-review-name">{t.name}</div>
                    <div className="lp-review-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="lp-section lp-section-light">
        <div className="lp-container">
          <div className="lp-eyebrow">Questions</div>
          <h2 className="lp-h2">Frequently asked questions</h2>
          <div className="lp-faq-wrap">
            {faqs.map((f) => (
              <details className="lp-faq" key={f.question}>
                <summary>{f.question}<span className="lp-faq-plus">+</span></summary>
                <div className="lp-faq-body">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + FORM ── */}
      <section className="lp-section lp-section-dark lp-cta" id="lp-quote">
        <video className="lp-cta-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/landing/videos/cta.mp4" type="video/mp4" />
        </video>
        <div className="lp-cta-overlay" />
        <span className="lp-cta-blob lp-cta-blob-1" aria-hidden="true" />
        <span className="lp-cta-blob lp-cta-blob-2" aria-hidden="true" />
        <div className="lp-container">
          <div className="lp-cta-grid">
            <div>
              <h2 style={{ textAlign: 'left', margin: 0, maxWidth: '18ch' }} className="lp-h2">
                {`Work with the ${keyword}`}
              </h2>
              <p style={{ textAlign: 'left', margin: '18px 0 0', maxWidth: '46ch' }} className="lp-sub">
                {`Tell us what you need built in ${location.name} and we will get back to you with a clear scope and timeline.`}
              </p>
              <ul className="lp-cta-points">
                {['Free, no obligation quote', 'You own all the source code', 'PageSpeed 90+ guaranteed in writing', 'One in house team, no outsourcing'].map((p) => (
                  <li key={p}><span className="lp-cta-check">✓</span>{p}</li>
                ))}
              </ul>
              <div className="lp-cta-contact">
                <a href={`tel:+${LANDING_COMPANY.phoneDigits}`}>📞 {LANDING_COMPANY.phone}</a>
                <a href={`mailto:${LANDING_COMPANY.email}`}>✉ {LANDING_COMPANY.email}</a>
              </div>
            </div>

            <div className="lp-cta-card">
              <form onSubmit={submit}>
                <h3>Get a free quote</h3>
                <p>Takes under a minute. No obligation.</p>

                {/* honeypot: hidden from users, catches bots */}
                <input
                  type="text"
                  name="company_website"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
                />

                <label className="lp-field"><span>Your name *</span>
                  <input value={form.name} onChange={(e) => setF('name', e.target.value)} placeholder="Priya Sharma" />
                </label>
                <label className="lp-field"><span>Phone (10 digits) *</span>
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => setF('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="9876543210"
                  />
                </label>
                <label className="lp-field"><span>Email</span>
                  <input type="email" value={form.email} onChange={(e) => setF('email', e.target.value)} placeholder="you@company.com" />
                </label>
                <label className="lp-field"><span>What do you need?</span>
                  <textarea rows={3} value={form.message} onChange={(e) => setF('message', e.target.value)} placeholder={`Tell us about your ${service.name.toLowerCase()} project`} />
                </label>
                {status.err && <div className="lp-form-msg err">{status.err}</div>}
                <button type="submit" className="lp-btn lp-btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }} disabled={status.sending}>
                  {status.sending ? 'Sending…' : 'Get my free quote →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
