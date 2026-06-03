'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Honeypot, useRenderedAt, TurnstileWidget, readTurnstileToken } from '@/utils/formSpamProtection'
import {
  MYSURU_APP_PAGE, MYSURU_APP_STATS, MYSURU_APP_TECH, MYSURU_APP_TYPES,
  MYSURU_APP_PROCESS, MYSURU_APP_FEATURES, MYSURU_APP_PRICING,
  MYSURU_APP_PORTFOLIO, MYSURU_APP_FAQS, MYSURU_APP_TESTIMONIALS,
} from '@/data/mobileAppMysuruData'
import { SITE } from '@/data/siteData'

const sc = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
const Ico = ({ d, size = 14, color = 'currentColor', sw = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
)

/* ── BREADCRUMB ── */
function Breadcrumb() {
  return (
    <nav style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)', padding: '12px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5 }}>
        {MYSURU_APP_PAGE.breadcrumb.map((b, i) => (
          <span key={i} className="d-flex align-items-center gap-2">
            {i > 0 && <span style={{ color: 'var(--ink5)', fontSize: 11 }}>›</span>}
            {b.href ? <Link href={b.href} style={{ color: 'var(--sky)', fontWeight: 500 }}>{b.label}</Link>
                    : <span style={{ color: 'var(--ink2)', fontWeight: 600 }}>{b.label}</span>}
          </span>
        ))}
      </div>
    </nav>
  )
}

/* ══════════════════════════════════════════════════════════════
   HERO — Light, clean, professional (About-page style)
═══════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section style={{ padding: 'clamp(48px,8vw,80px) 0', background: '#fff', borderBottom: '1px solid var(--border)', overflow: 'hidden', position: 'relative' }}>
      {/* Subtle grid background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)', backgroundSize: '60px 60px', opacity: .35, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 clamp(16px,4vw,24px)', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-6">
            <div className="section-tag anim"><span className="tag-dot" />Mobile App Development · Mysuru</div>

            <h1 className="sec-h anim" style={{ fontSize: 'clamp(36px,5vw,60px)', marginBottom: 18 }}>
              Build Apps That<br />
              <span className="sky">Mysuru Businesses</span><br />
              Actually Need.
            </h1>

            <p className="anim" style={{ fontSize: 17, color: 'var(--ink3)', lineHeight: 1.72, maxWidth: 520, marginBottom: 36 }}>
              Custom <strong style={{ color: 'var(--ink2)' }}>Android & iOS apps</strong> by a{' '}
              <strong style={{ color: 'var(--ink2)' }}>35+ member in-house team</strong> with a walk-in office in JP Nagar, Mysuru.
              React Native, Flutter, zero outsourcing.{' '}
              <strong style={{ color: 'var(--ink2)' }}>150+ apps delivered. Source code yours.</strong>
            </p>

            <div className="d-flex flex-wrap gap-3 mb-4 anim">
              <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2" onClick={() => sc('contact')}>
                Get a Free Quote <Ico d="M5 12h14M12 5l7 7-7 7" color="#fff" sw={2.5} size={15} />
              </button>
              <button className="btn btn-outline-dark fw-semibold px-4 py-3 d-inline-flex align-items-center gap-2" onClick={() => sc('portfolio')}>
                <Ico d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z" size={14} /> View Portfolio
              </button>
            </div>

            <div className="d-flex flex-wrap gap-3 anim">
              {['Walk-in Mysuru Office','React Native & Flutter','Fixed Price','Source Code Yours'].map(t => (
                <div key={t} className="hero-check">
                  <div className="hc-ico"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg></div>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Dark info panel */}
          <div className="col-lg-6 d-none d-lg-block anim">
            <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', boxShadow: '0 24px 64px rgba(7,20,53,.18)', border: '1.5px solid rgba(37,99,235,.15)', background: 'linear-gradient(135deg, #071435 0%, #0f2460 50%, #1a3a8f 100%)', padding: 32 }}>
              {/* Decorative circles */}
              <div style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: 'rgba(37,99,235,.12)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: -30, left: -30, width: 160, height: 160, borderRadius: '50%', background: 'rgba(14,165,233,.1)', pointerEvents: 'none' }} />

              {/* Live badge */}
              <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', alignItems: 'center', gap: 6, background: 'rgba(34,197,94,.15)', border: '1px solid rgba(34,197,94,.3)', borderRadius: 20, padding: '5px 12px', zIndex: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulse 2.5s infinite' }} />
                <span style={{ fontSize: 11, fontWeight: 700, color: '#22c55e' }}>Mysuru Office</span>
              </div>

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28, position: 'relative', zIndex: 1 }}>
                <div style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Mobile App Development</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Nakshatra Namaha Creations · Mysuru</div>
                </div>
              </div>

              {/* Tech grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20, position: 'relative', zIndex: 1 }}>
                {[
                  { ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', label: 'React Native', c: '#38bdf8' },
                  { ico: 'M4 4h6l6 6-6 6H4l6-6z', label: 'Flutter', c: '#a78bfa' },
                  { ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', label: 'Android (Kotlin)', c: '#34d399' },
                  { ico: 'M12 2a10 10 0 100 20 10 10 0 000-20z', label: 'iOS (Swift)', c: '#fbbf24' },
                  { ico: 'M22 12h-4l-3 9L9 3l-3 9H2', label: 'Node JS APIs', c: '#fb923c' },
                  { ico: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', label: 'AWS Cloud', c: '#f472b6' },
                ].map(s => (
                  <div key={s.label} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(4px)', transition: 'all .28s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,.12)'; e.currentTarget.style.borderColor = 'rgba(56,189,248,.3)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.1)' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={s.c} strokeWidth="1.8" strokeLinecap="round"><path d={s.ico} /></svg>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'rgba(255,255,255,.85)' }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Bottom stats */}
              <div style={{ display: 'flex', background: 'rgba(255,255,255,.07)', borderRadius: 12, border: '1px solid rgba(255,255,255,.1)', overflow: 'hidden', position: 'relative', zIndex: 1 }}>
                {[['150+','Apps Delivered'],['35+','Team Size'],['4.9★','Google'],['Since','2015']].map(([n,l], i, a) => (
                  <div key={l} style={{ flex: 1, textAlign: 'center', padding: '14px 8px', borderRight: i < a.length - 1 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: '#38bdf8', letterSpacing: '-.03em', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,.45)', fontWeight: 500, marginTop: 3 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   STATS BAR
═══════════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <div className="stats-bar">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-0">
          {MYSURU_APP_STATS.map((s, i) => (
            <div key={i} className="col stat-item anim" style={{ transitionDelay: `${i * .06}s` }}>
              <div className="si-n">
                {s.n.includes('★') ? <>{s.n.replace('★','')}<em>★</em></> :
                 s.n.includes('+') ? <>{s.n.replace('+','')}<em>+</em></> :
                 s.n.includes('%') ? <>{s.n.replace('%','')}<em>%</em></> : s.n}
              </div>
              <div className="si-l">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════════════════════════
   MYSURU OFFICE — Dark navy section (WhyNNC style, NOT green)
═══════════════════════════════════════════════════════════════ */
function MysuruOffice() {
  return (
    <section style={{ background: 'var(--navy2)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Dot pattern */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
      {/* Glow */}
      <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '50vw', height: '50vw', background: 'radial-gradient(circle,rgba(33,150,243,.1),transparent 60%)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-7 anim-l">
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 14 }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#22c55e', marginRight: 8, animation: 'pulse 2.5s infinite', boxShadow: '0 0 8px rgba(34,197,94,.5)' }} />
              Walk-in Office · JP Nagar, Mysuru
            </div>

            <h2 style={{ fontSize: 'clamp(28px,3.8vw,48px)', fontWeight: 800, letterSpacing: '-.05em', lineHeight: 1.06, color: '#fff', marginBottom: 22 }}>
              Meet Your App Team<br />in Person at Our <span style={{ color: 'var(--sky)' }}>Mysuru Office.</span>
            </h2>

            {/* Quote block */}
            <div style={{ borderLeft: '3px solid var(--sky)', padding: '20px 24px', background: 'rgba(33,150,243,.08)', borderRadius: '0 10px 10px 0', marginBottom: 28 }}>
              <p style={{ fontSize: 16, color: 'rgba(255,255,255,.7)', lineHeight: 1.76, margin: 0 }}>
                Unlike remote-only agencies, NNC has a physical office in JP Nagar, Mysuru. Walk in, sit with your project manager, review designs on a whiteboard, and track progress face-to-face. <strong style={{ color: '#fff' }}>No intermediaries. No surprises.</strong>
              </p>
            </div>

            {/* Why NNC style cards (2×2 grid) */}
            <div className="row g-3">
              {[
                { n: '01', title: 'Walk-in Mon–Sat, 9am–7pm', body: 'Visit without appointment. Meet your developer team in person any working day.' },
                { n: '02', title: 'Same team, start to finish', body: 'One named PM from discovery to handover. No handoffs, no confusion.' },
                { n: '03', title: 'Zero outsourcing, ever', body: '35+ permanent employees. No freelancers, no offshore contractors.' },
                { n: '04', title: 'Bengaluru HQ + 3 branches', body: 'Head office in Bengaluru with branches in Mysuru, Mumbai & Hyderabad.' },
              ].map((c, i) => (
                <div key={i} className="col-6">
                  <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)', borderRadius: 'var(--r)', padding: '20px 18px', transition: 'all .28s', cursor: 'default', height: '100%' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(33,150,243,.08)'; e.currentTarget.style.borderColor = 'rgba(33,150,243,.2)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,.025)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)' }}>
                    <div style={{ fontSize: 32, fontWeight: 800, color: 'rgba(255,255,255,.06)', letterSpacing: '-.04em', lineHeight: 1, marginBottom: 8 }}>{c.n}</div>
                    <div style={{ fontSize: 14, fontWeight: 800, color: '#fff', letterSpacing: '-.02em', marginBottom: 6 }}>{c.title}</div>
                    <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,.4)', lineHeight: 1.6, marginBottom: 0 }}>{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Office card */}
          <div className="col-lg-5 anim-r">
            <div style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 16, padding: 32, position: 'relative' }}>
              {/* Accent glow */}
              <div style={{ position: 'absolute', top: -30, right: -30, width: 120, height: 120, borderRadius: '50%', background: 'rgba(33,150,243,.08)', filter: 'blur(40px)', pointerEvents: 'none' }} />

              <div style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--sky)', textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: 8, position: 'relative', zIndex: 1 }}>NNC Mysuru Branch</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-.04em', marginBottom: 28, position: 'relative', zIndex: 1 }}>Visit Us Anytime</div>

              {[
                { ico: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z', t: 'Suswani Towers, JP Nagar 2nd Stage', s: 'Mysuru – 570 008, Karnataka' },
                { ico: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', t: '+91 99005 66466', s: 'Call or WhatsApp' },
                { ico: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', t: 'Mon–Sat, 9:00 AM – 7:00 PM', s: 'Walk in — no appointment needed' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'start', gap: 16, padding: '18px 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(33,150,243,.1)', border: '1px solid rgba(33,150,243,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="1.8" strokeLinecap="round"><path d={r.ico} /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: 15, color: '#fff', fontWeight: 600, lineHeight: 1.4 }}>{r.t}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', marginTop: 3 }}>{r.s}</div>
                  </div>
                </div>
              ))}

              <button className="btn btn-sky fw-bold w-100 py-3 mt-4 d-inline-flex align-items-center justify-content-center gap-2" style={{ borderRadius: 10, fontSize: 15, position: 'relative', zIndex: 1 }} onClick={() => sc('contact')}>
                Book a Visit <Ico d="M5 12h14M12 5l7 7-7 7" color="#fff" size={14} sw={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   TECH STACK
═══════════════════════════════════════════════════════════════ */
function TechStack() {
  const colors = ['#2196F3','#7C3AED','#10B981','#F59E0B']
  return (
    <section style={{ background: 'var(--off)', padding: '96px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5">
          <div className="col-lg-5 anim"><div className="section-tag"><span className="tag-dot" />Technology We Use</div><h2 className="sec-h">React Native. Flutter.<br /><span className="sky">Right tool for your app.</span></h2></div>
          <div className="col-lg-7 d-flex align-items-end anim"><p className="sec-sub">Both deliver Android + iOS from one codebase — saving 30–40% in cost. We recommend the right framework after understanding your requirements.</p></div>
        </div>
        <div className="row g-4">
          {MYSURU_APP_TECH.map((t, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="anim h-100 svc-card" style={{ transitionDelay: `${i * .08}s`, padding: '28px 24px' }}>
                <div className="svc-ico" style={{ background: `${colors[i]}14`, width: 52, height: 52, borderRadius: 'var(--r)' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={colors[i]} strokeWidth="1.8" strokeLinecap="round"><path d={t.ico} /></svg>
                </div>
                <div style={{ display: 'inline-flex', fontSize: 10, fontWeight: 700, color: colors[i], background: `${colors[i]}14`, border: `1px solid ${colors[i]}28`, padding: '3px 12px', borderRadius: 20, marginBottom: 10, marginTop: 14 }}>{t.tag}</div>
                <div className="svc-name" style={{ marginBottom: 8 }}>{t.name}</div>
                <p className="svc-body" style={{ marginBottom: 0 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   APP TYPES
═══════════════════════════════════════════════════════════════ */
function AppTypes() {
  return (
    <section style={{ background: '#fff', padding: '96px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-5 anim">
          <div className="section-tag d-inline-flex"><span className="tag-dot" />What We Build</div>
          <h2 className="sec-h mt-1">10 Types of Apps<br /><span className="sky">Built for Mysuru Businesses</span></h2>
          <p className="sec-sub mx-auto mt-2" style={{ maxWidth: 540 }}>From on-demand apps to enterprise platforms — built from 150+ delivered mobile projects.</p>
        </div>
        <div className="row g-3">
          {MYSURU_APP_TYPES.map((t, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="anim h-100 svc-card" style={{ transitionDelay: `${i * .04}s`, padding: '22px 20px' }}>
                <div style={{ fontSize: 32, lineHeight: 1, marginBottom: 12 }}>{t.ico}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', marginBottom: 7 }}>{t.name}</div>
                <p style={{ fontSize: 12.5, color: 'var(--ink3)', lineHeight: 1.62, marginBottom: 0 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   FEATURES — WhyNNC-style dark cards
═══════════════════════════════════════════════════════════════ */
function Features() {
  return (
    <section className="why-section" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5">
          <div className="col-lg-5 anim">
            <div className="section-tag" style={{ background: 'rgba(33,150,243,.15)', borderColor: 'rgba(33,150,243,.3)' }}><span className="tag-dot" />What Every App Gets</div>
            <h2 className="sec-h" style={{ color: '#fff' }}>Eight Things Included<br /><span className="sky">In Every NNC App</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end anim"><p className="sec-sub" style={{ color: 'rgba(255,255,255,.45)' }}>These aren&apos;t add-ons — they&apos;re the baseline. No surprise extras, no hidden fees.</p></div>
        </div>
        <div className="row g-0" style={{ border: '1px solid rgba(255,255,255,.06)', borderRadius: 'var(--r)', overflow: 'hidden' }}>
          {MYSURU_APP_FEATURES.map((f, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="why-card anim" style={{ transitionDelay: `${i * .05}s`, borderRight: (i + 1) % 4 !== 0 ? '1px solid rgba(255,255,255,.06)' : 'none', borderBottom: i < 4 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                <div className="wc-n" style={{ fontSize: 40 }}>{f.ico}</div>
                <div className="wc-title">{f.title}</div>
                <p className="wc-body">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   PROCESS — Vertical timeline
═══════════════════════════════════════════════════════════════ */
function ProcessSection() {
  return (
    <section style={{ background: '#fff', padding: '96px 0', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5">
          <div className="col-lg-5 anim">
            <div className="section-tag"><span className="tag-dot" />How We Build</div>
            <h2 className="sec-h">Six Steps to<br /><span className="sky">Your Live App.</span></h2>
            <p className="sec-sub mt-2" style={{ maxWidth: 400 }}>From discovery to Play Store — every step transparent. Weekly APK/TestFlight builds so you test on your own phone.</p>
            <button className="btn btn-sky fw-bold px-4 py-3 mt-3 d-inline-flex align-items-center gap-2" onClick={() => sc('contact')}>
              Start Your Project <Ico d="M5 12h14M12 5l7 7-7 7" color="#fff" sw={2.5} />
            </button>
          </div>

          <div className="col-lg-7 anim">
            <div style={{ position: 'relative', paddingLeft: 48 }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg, var(--sky), var(--mint))', borderRadius: 2 }} />

              {MYSURU_APP_PROCESS.map((p, i) => (
                <div key={i} style={{ position: 'relative', paddingBottom: i < MYSURU_APP_PROCESS.length - 1 ? 36 : 0 }}>
                  {/* Dot */}
                  <div style={{ position: 'absolute', left: -48, top: 2, width: 36, height: 36, borderRadius: '50%', background: '#fff', border: '2.5px solid var(--sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: 'var(--sky)', zIndex: 1, boxShadow: '0 2px 8px rgba(33,150,243,.15)', transition: 'all .28s' }}>
                    {p.n}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                    <div style={{ fontSize: 18, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.03em' }}>{p.title}</div>
                    <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--sky)', background: '#E3F2FD', border: '1px solid #BBDEFB', padding: '2px 10px', borderRadius: 20 }}>{p.time}</span>
                  </div>
                  <p style={{ fontSize: 13.5, color: 'var(--ink3)', lineHeight: 1.65, marginBottom: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   PORTFOLIO
═══════════════════════════════════════════════════════════════ */
function Portfolio() {
  const grads = ['linear-gradient(135deg,#0B1F4B,#1565C0)','linear-gradient(135deg,#064e3b,#0d9488)','linear-gradient(135deg,#3b0764,#7c3aed)']
  return (
    <section style={{ background: 'var(--off)', padding: '96px 0', borderBottom: '1px solid var(--border)' }} id="portfolio">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5 mb-5">
          <div className="col-lg-5 anim"><div className="section-tag"><span className="tag-dot" />App Portfolio</div><h2 className="sec-h">Apps We&apos;ve Built.<br /><span className="sky">Results We Can Prove.</span></h2></div>
          <div className="col-lg-7 d-flex align-items-end anim"><p className="sec-sub">Three live apps from NNC&apos;s 150+ portfolio. All on the Play Store with measurable outcomes.</p></div>
        </div>
        <div className="row g-4">
          {MYSURU_APP_PORTFOLIO.map((p, i) => (
            <div key={i} className="col-12 col-lg-4">
              <div className="anim h-100 result-card" style={{ transitionDelay: `${i * .1}s`, overflow: 'hidden', borderRadius: 'var(--r)' }}>
                {/* Colored top */}
                <div className="rc-top" style={{ background: grads[i % 3], padding: '28px 24px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 14, right: 14, display: 'flex', gap: 6 }}>
                    {p.stores.map((s, si) => <span key={si} className="rc-tag">{s}</span>)}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 4 }}>{p.type}</div>
                  <div className="rc-client" style={{ fontSize: 22 }}>{p.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', marginTop: 6 }}>{p.stack}</div>
                </div>
                {/* Metric + result */}
                <div style={{ padding: 24 }}>
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ textAlign: 'center', minWidth: 70, padding: '12px 14px', background: '#F0F8FF', borderRadius: 'var(--r2)', border: '1px solid #BBDEFB' }}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: 'var(--sky)', letterSpacing: '-.06em', lineHeight: 1 }}>{p.metric}</div>
                      <div style={{ fontSize: 10, color: 'var(--ink4)', marginTop: 3 }}>{p.metricLabel}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--navy)', lineHeight: 1.4 }}>{p.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   PRICING
═══════════════════════════════════════════════════════════════ */
function Pricing() {
  return (
    <section style={{ background: '#fff', padding: '96px 0', borderBottom: '1px solid var(--border)' }} id="pricing">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="text-center mb-5 anim">
          <div className="section-tag d-inline-flex"><span className="tag-dot" />Transparent Pricing</div>
          <h2 className="sec-h mt-1">Fixed Price. No Surprises.<br /><span className="sky">Three Plans for Every Stage.</span></h2>
          <p className="sec-sub mx-auto mt-2" style={{ maxWidth: 500 }}>50% at kickoff, 50% before delivery. Source code 100% yours.</p>
        </div>
        <div className="row g-4 justify-content-center">
          {MYSURU_APP_PRICING.map((plan, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className={`anim h-100 d-flex flex-column`} style={{
                transitionDelay: `${i * .1}s`,
                background: plan.highlight ? 'linear-gradient(150deg,var(--navy),#0d2a5e)' : '#fff',
                border: plan.highlight ? '2px solid var(--sky)' : '1.5px solid var(--border)',
                borderRadius: 16, padding: '36px 28px', position: 'relative', overflow: 'hidden',
                boxShadow: plan.highlight ? '0 20px 50px rgba(33,150,243,.25)' : 'var(--sh)',
                transition: 'all .35s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; if (!plan.highlight) e.currentTarget.style.boxShadow = '0 16px 48px rgba(11,31,75,.1)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; if (!plan.highlight) e.currentTarget.style.boxShadow = 'var(--sh)' }}>
                {plan.highlight && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'linear-gradient(90deg,#2196F3,#64B5F6,#2196F3)' }} />}
                {plan.highlight && <div style={{ position: 'absolute', top: 18, right: 18, fontSize: 10, fontWeight: 700, color: '#fff', background: 'var(--sky)', padding: '4px 14px', borderRadius: 20, letterSpacing: '.06em', textTransform: 'uppercase' }}>Most Popular</div>}

                <div style={{ marginBottom: 22 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: plan.highlight ? 'rgba(255,255,255,.5)' : 'var(--ink4)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: 10 }}>{plan.tier}</div>
                  <div style={{ fontSize: 'clamp(30px,4vw,44px)', fontWeight: 800, color: plan.highlight ? '#fff' : 'var(--navy)', letterSpacing: '-.06em', lineHeight: 1, marginBottom: 5 }}>{plan.price}</div>
                  {plan.priceGst && <div style={{ fontSize: 12.5, color: plan.highlight ? 'rgba(255,255,255,.38)' : 'var(--ink4)', marginBottom: 10 }}>{plan.priceGst} incl. GST</div>}
                  <div style={{ display: 'inline-flex', fontSize: 11, fontWeight: 700, color: 'var(--sky)', background: plan.highlight ? 'rgba(33,150,243,.2)' : '#E3F2FD', border: '1px solid rgba(33,150,243,.25)', padding: '4px 14px', borderRadius: 20 }}>{plan.timeline}</div>
                </div>

                <div style={{ fontSize: 13.5, color: plan.highlight ? 'rgba(255,255,255,.42)' : 'var(--ink3)', marginBottom: 22, paddingBottom: 22, borderBottom: `1px solid ${plan.highlight ? 'rgba(255,255,255,.08)' : 'var(--border)'}` }}>
                  Best for: <strong style={{ color: plan.highlight ? 'rgba(255,255,255,.65)' : 'var(--ink2)' }}>{plan.best}</strong>
                </div>

                <div className="d-flex flex-column gap-3 mb-4 flex-grow-1">
                  {plan.includes.map((f, fi) => (
                    <div key={fi} className="d-flex align-items-start gap-2" style={{ fontSize: 13.5, color: plan.highlight ? 'rgba(255,255,255,.68)' : 'var(--ink2)' }}>
                      <div style={{ width: 18, height: 18, borderRadius: '50%', background: plan.highlight ? 'rgba(33,150,243,.2)' : 'rgba(33,150,243,.1)', border: '1px solid rgba(33,150,243,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      {f}
                    </div>
                  ))}
                </div>

                <button className={`btn fw-bold w-100 py-3 mt-auto ${plan.highlight ? 'btn-sky' : 'btn-outline-dark'}`} style={{ borderRadius: 10, fontSize: 14.5 }} onClick={() => sc('contact')}>
                  {plan.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-4" style={{ fontSize: 13, color: 'var(--ink4)' }}>All prices exclude 18% GST · 50% at kickoff · 50% before delivery · Source code 100% yours</p>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════════════════════════════ */
function Reviews() {
  return (
    <section className="testi-section" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="text-center mb-5 anim">
          <div className="section-tag d-inline-flex" style={{ background: 'rgba(33,150,243,.15)', borderColor: 'rgba(33,150,243,.3)' }}><span className="tag-dot" />Client Reviews</div>
          <h2 className="sec-h mt-1" style={{ color: '#fff' }}>What Our App Clients<br /><span className="sky">Say on Google</span></h2>
        </div>

        {/* Google badge */}
        <div className="g-badge d-flex align-items-center mb-4 anim" style={{ flexWrap: 'wrap' }}>
          <div className="gb-main d-flex align-items-center gap-3 p-4" style={{ borderRight: '1px solid rgba(255,255,255,.08)', flexShrink: 0 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="19" height="19" viewBox="0 0 24 24"><path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 5.96 5.96 0 014.117 1.592l2.896-2.896A9.995 9.995 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4" /></svg>
            </div>
            <div>
              <div className="gb-score">4.9</div>
              <div className="d-flex gap-1 my-1">{[...Array(5)].map((_, si) => <div key={si} className="gb-star" />)}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)' }}>Google Business · 4 Offices</div>
            </div>
          </div>
          {[{ n: '87', l: 'Reviews' },{ n: '150+', l: 'Apps' },{ n: '8+', l: 'Years' },{ n: '4', l: 'Offices' }].map((s, si) => (
            <div key={si} className="gb-stat flex-grow-1 text-center p-4" style={{ borderRight: si < 3 ? '1px solid rgba(255,255,255,.08)' : 'none' }}>
              <div style={{ fontSize: 24, fontWeight: 800, color: '#fff', letterSpacing: '-.05em' }}>{s.n}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.3)', marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div className="row g-3">
          {MYSURU_APP_TESTIMONIALS.map((t, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className={`anim h-100 tc-card ${t.featured ? 'tc-feat' : ''}`} style={{ transitionDelay: `${i * .09}s` }}>
                <div className="d-flex gap-1 mb-3">{[...Array(5)].map((_, si) => <div key={si} className="gb-star" />)}</div>
                <p className="tc-q">{t.quote}</p>
                <hr style={{ background: 'rgba(255,255,255,.08)', margin: '14px 0' }} />
                <div className="tc-auth">{t.author}</div>
                <div style={{ fontSize: 11.5, color: 'rgba(255,255,255,.3)', marginTop: 2 }}>{t.role}</div>
                <div className="tc-badge d-inline-flex align-items-center gap-2 mt-3">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   FAQ + CONTACT
═══════════════════════════════════════════════════════════════ */
function FaqContact() {
  const router = useRouter()
  const [open, setOpen] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', app: '', budget: '', message: '' })
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [hp, setHp] = useState('')
  const renderedAt = useRenderedAt()

  const vName = v => { const t = v.trim(); if (!t) return 'Full name is required'; if (!/^[A-Za-z\s]+$/.test(t)) return 'Only alphabets and spaces'; if (t.length < 2) return 'At least 2 characters'; return '' }
  const vPhone = v => { const d = v.replace(/\D/g,''); if (!d) return 'Phone is required'; if (d.length !== 10) return 'Enter 10-digit number'; return '' }
  const vEmail = v => { const t = v.trim(); if (!t) return 'Email is required'; if (!/^[^\s@]+@([^\s@]+\.)+[^\s@]+$/.test(t)) return 'Enter valid email'; return '' }
  const vMsg = v => { const t = v.trim(); if (!t) return 'Describe your app idea'; if (t.length < 10) return 'At least 10 characters'; if (!/[A-Za-z]/.test(t)) return 'Include meaningful text'; return '' }

  const validateField = (n, v) => { const fn = { name: vName, phone: vPhone, email: vEmail, message: vMsg }[n]; if (fn) setErrors(p => ({ ...p, [n]: fn(v) })) }

  const handleChange = e => {
    let { name, value } = e.target
    if (name === 'name') value = value.replace(/[^A-Za-z\s]/g, '')
    else if (name === 'phone') value = value.replace(/\D/g, '').slice(0, 10)
    else if (name === 'message') value = value.replace(/\s+/g, ' ').trimStart()
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const submit = async e => {
    e.preventDefault(); setError('')
    const errs = { name: vName(form.name), phone: vPhone(form.phone), email: vEmail(form.email), message: vMsg(form.message) }
    if (Object.values(errs).some(Boolean)) { setErrors(errs); return }
    setErrors({ name: '', phone: '', email: '', message: '' }); setSending(true)
    try {
      const res = await fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: form.name, phone: form.phone, email: form.email, service: `Mobile App ${form.app||''} | Budget: ${form.budget||''}`, message: form.message, landingPage: '/mobile-app-development-mysuru', company_website: hp, renderedAt: renderedAt.current, cfToken: readTurnstileToken() }) })
      const data = await res.json()
      if (res.ok) router.push('/thankyou'); else setError(data.error || 'Something went wrong.')
    } catch { setError('Network error.') } finally { setSending(false) }
  }

  return (
    <section style={{ background: '#fff', padding: '96px 0' }} id="contact">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px' }}>
        <div className="row g-5">
          <div className="col-lg-6 anim-l">
            <div className="section-tag"><span className="tag-dot" />FAQ</div>
            <h2 className="faq-h mb-2">App Development<br /><span className="sky">Questions Answered</span></h2>
            <p className="sec-sub mb-4">Common questions from Mysuru clients building their first or next mobile app.</p>
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {MYSURU_APP_FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                    <span className="faq-q">{f.q}</span>
                    <span className={`faq-ic ${open === i ? 'open' : ''}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                    </span>
                  </button>
                  {open === i && <p className="faq-ans pb-3" style={{ margin: 0 }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 anim-r">
            <div className="contact-card">
              <div className="cc-eyebrow"><span className="cc-eyebrow-tx">Get a Free App Quote</span></div>
              <div className="cc-h mb-2">Tell us about<br />your app idea.</div>
              <p className="cc-sub mb-4">We&apos;ll respond with scope, tech stack, timeline and fixed price within 24 hours.</p>
              <div className="d-flex flex-column gap-2 mb-4">
                <a href={SITE.phoneHref} className="cc-link"><Ico d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" size={14} /><div>{SITE.phone}<small>Mon–Sat, 9am–7pm IST</small></div></a>
                <a href={`mailto:${SITE.email}`} className="cc-link"><Ico d="M2 4h20v16H2zM22 7l-10 6.5L2 7" size={14} />{SITE.email}</a>
              </div>
              <form onSubmit={submit} noValidate>
                <Honeypot value={hp} onChange={setHp} />
                <div className="row g-2 mb-2">
                  <div className="col-6">
                    <input className="cc-inp" type="text" placeholder="Your name *" name="name" value={form.name} onChange={handleChange} onBlur={e => validateField(e.target.name, e.target.value)} maxLength={100} style={{ borderColor: errors.name ? '#EF4444' : undefined }} />
                    {errors.name && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 2 }}>{errors.name}</div>}
                  </div>
                  <div className="col-6">
                    <input className="cc-inp" type="tel" placeholder="Phone *" name="phone" value={form.phone} onChange={handleChange} onBlur={e => validateField(e.target.name, e.target.value)} style={{ borderColor: errors.phone ? '#EF4444' : undefined }} />
                    {errors.phone && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 2 }}>{errors.phone}</div>}
                  </div>
                </div>
                <input className="cc-inp d-block mb-2" type="email" placeholder="Email *" name="email" value={form.email} onChange={handleChange} onBlur={e => validateField(e.target.name, e.target.value)} style={{ borderColor: errors.email ? '#EF4444' : undefined }} />
                {errors.email && <div style={{ color: '#EF4444', fontSize: 11, marginTop: -4, marginBottom: 6 }}>{errors.email}</div>}
                <input className="cc-inp d-block mb-2" placeholder="Type of app (on-demand, e-commerce, etc.)" name="app" value={form.app} onChange={handleChange} />
                <select className="cc-inp d-block mb-2" name="budget" value={form.budget} onChange={handleChange} style={{ background: 'rgba(255,255,255,.07)', color: form.budget ? '#fff' : 'rgba(255,255,255,.2)' }}>
                  <option value="" disabled>Estimated budget</option>
                  <option value="75k-150k" style={{ color: '#000', background: '#fff' }}>₹75,000 – ₹1,50,000 (MVP)</option>
                  <option value="150k-300k" style={{ color: '#000', background: '#fff' }}>₹1,50,000 – ₹3,00,000 (Business App)</option>
                  <option value="300k+" style={{ color: '#000', background: '#fff' }}>₹3,00,000+ (Enterprise)</option>
                  <option value="discuss" style={{ color: '#000', background: '#fff' }}>Not sure — let&apos;s discuss</option>
                </select>
                <textarea className="cc-ta d-block mb-2" rows="3" placeholder="Brief description of your app idea... (min 10 chars)" name="message" value={form.message} onChange={handleChange} onBlur={e => validateField(e.target.name, e.target.value)} style={{ borderColor: errors.message ? '#EF4444' : undefined }} />
                {errors.message && <div style={{ color: '#EF4444', fontSize: 11, marginTop: -4, marginBottom: 6 }}>{errors.message}</div>}
                {error && <p style={{ color: '#EF4444', fontSize: 12.5, marginBottom: 10 }}>{error}</p>}
                <TurnstileWidget theme="dark" />
                <button type="submit" className="cc-submit mb-3" disabled={sending || Object.values(errors).some(Boolean)}>
                  {sending ? 'Sending…' : <>Get Free App Quote <Ico d="M5 12h14M12 5l7 7-7 7" color="#fff" size={13} sw={2.5} /></>}
                </button>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  <span className="cc-ti">✓ No spam</span><span className="cc-ti">✓ 24hr response</span><span className="cc-ti">✓ Fixed price</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   CTA BAND
═══════════════════════════════════════════════════════════════ */
function CtaBand() {
  return (
    <section className="cta-section" style={{ padding: '96px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-8 anim">
            <h2 className="cta-h">Ready to Build Your App?<br /><span className="sky">Let&apos;s Talk Scope, Stack & Price.</span></h2>
            <p className="cta-sub" style={{ marginBottom: 24 }}>Visit our Mysuru office or share your idea online. Fixed price in writing within 24 hours.</p>
            <div className="d-flex flex-wrap gap-4">
              {['Free consultation','Mysuru walk-in office','React Native & Flutter','Source code yours'].map((c,i)=>(
                <span key={i} className="d-inline-flex align-items-center gap-2" style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.45)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--sky)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>{c}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-lg-end gap-3 anim">
            <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2 w-100 justify-content-center" style={{ fontSize: 15, borderRadius: 10 }} onClick={() => sc('contact')}>
              Get Free App Quote <Ico d="M5 12h14M12 5l7 7-7 7" color="#fff" size={14} sw={2.5} />
            </button>
            <a href={SITE.phoneHref} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.35)', textAlign: 'center' }}>Or call {SITE.phone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ══════════════════════════════════════════════════════════════
   ROOT
═══════════════════════════════════════════════════════════════ */
export default function MobileAppMysuruContent() {
  return (
    <>
      <Breadcrumb />
      <Hero />
      <StatsBar />
      <MysuruOffice />
      <TechStack />
      <AppTypes />
      <Features />
      <ProcessSection />
      <Portfolio />
      <Pricing />
      <Reviews />
      <FaqContact />
      <CtaBand />
    </>
  )
}
