'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { CASE_STUDIES, PROCESS_STEPS, TESTIMONIALS, CLIENTS, INDUSTRIES, TECH_STACK, FAQS, SITE, OFFICES } from '@/data/siteData'
import { Honeypot, useRenderedAt, TurnstileWidget, readTurnstileToken } from '@/utils/formSpamProtection'

/* ── CASE STUDIES ─────────────────────────────────────────────── */
export function CaseStudies() {
  return (
    <section className="results-sec py-5" id="work" aria-label="Case Studies">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,24px)' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />Case Studies</div>
            <h2 className="sec-h">Real Outcomes.<br /><span className="sky">Documented Results.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">Three representative NNC projects the brief, what was built and the measured result.</p>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          {CASE_STUDIES.map((r, i) => (
            <div key={i} className="result-card anim" style={{ transitionDelay: `${i * 0.12}s` }}>
              {/* Top bar */}
              <div className="rc-top d-flex align-items-start justify-content-between flex-wrap gap-3">
                <div>
                  <div className="rc-client">{r.client} · {r.industry}</div>
                  <div className="rc-title">{r.title}</div>
                </div>
                <div className="d-flex gap-2 flex-wrap">
                  {r.tags.map((t, ti) => <span key={ti} className="rc-tag">{t}</span>)}
                </div>
              </div>
              {/* Body */}
              <div className="row g-0" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="col-md-6 rc-col" style={{ borderRight: '1px solid var(--border)', padding: 28 }}>
                  <div className="rc-lbl">Before NNC</div>
                  <p className="rc-tx">{r.challenge}</p>
                </div>
                <div className="col-md-6 rc-col" style={{ padding: 28 }}>
                  <div className="rc-lbl">What NNC Built</div>
                  <p className="rc-tx">{r.solution}</p>
                  <div className="rc-hl">{r.highlight}</div>
                </div>
              </div>
              {/* Metrics */}
              <div className="row g-0">
                {r.metrics.map((m, mi) => (
                  <div key={mi} className="col-6 col-md-3 rcm-item"
                       style={{ borderRight: mi < r.metrics.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div className="rcm-n">{m.n}</div>
                    <div className="rcm-l">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROCESS ──────────────────────────────────────────────────── */
export function Process() {
  return (
    <section className="proc-sec" aria-label="Our Process">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(28px,5vw,48px) clamp(16px,4vw,24px) clamp(36px,6vw,64px)' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />How We Work</div>
            <h2 className="sec-h">Six Steps. Your Approval<br /><span className="sky">At Every Stage.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">No black boxes. You see and approve every major decision before we proceed. Weekly updates on a live staging site you can access.</p>
          </div>
        </div>

        <div className="row g-0" style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', boxShadow: 'var(--sh)' }}>
          {PROCESS_STEPS.map((p, i) => (
            <div key={i} className="col-12 col-sm-6 col-lg-2 proc-card anim"
                 style={{ transitionDelay: `${i * 0.06}s`, borderRight: i < PROCESS_STEPS.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="ps-num"><span>{p.num}</span></div>
              <div className="ps-ti">{p.title}</div>
              <p className="ps-tx">{p.desc}</p>
              <span className="ps-time">{p.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ─────────────────────────────────────────────── */
export function Testimonials() {
  return (
    <section className="testi-section py-5" id="testimonials" aria-label="Client Reviews">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,24px)', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-4 mb-4 anim">
          <div>
           
            <h2 className="sec-h" style={{ color: '#fff' }}>
              Google Reviews.<br /><span className="sky">One Consistent Verdict.</span>
            </h2>
          </div>
          <button className="btn btn-outline-light fw-semibold">View All on Google →</button>
        </div>

        {/* Google badge */}
        <div className="g-badge mb-4 anim">
          <div className="gb-main">
            <div className="gb-g">
              <svg width="19" height="19" viewBox="0 0 24 24">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064 5.96 5.96 0 014.117 1.592l2.896-2.896A9.995 9.995 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" fill="#4285F4" />
              </svg>
            </div>
            <div>
              <div className="gb-score">4.9</div>
              <div className="d-flex gap-1 my-1">{[...Array(5)].map((_, i) => <div key={i} className="gb-star" />)}</div>
              <div className="gb-lbl">Google Business Profile · Bengaluru</div>
            </div>
          </div>
          {[{ n: '87', l: 'Verified Reviews' }, { n: '565+', l: 'Projects Delivered' }, { n: '8+', l: 'Years Operating' }, { n: '4', l: 'Physical Offices' }].map((s, i) => (
            <div key={i} className="gb-stat">
              <div className="gb-sn">{s.n}</div>
              <div className="gb-sl">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Review cards */}
        <div className="row g-1 mb-1">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className={`tc-card h-100 anim ${t.featured ? 'tc-feat' : ''}`}
                   style={{ transitionDelay: `${i * 0.09}s` }}>
                <div className="d-flex gap-1 mb-3">{[...Array(5)].map((_, si) => <div key={si} className="tc-s" />)}</div>
                <p className="tc-q mb-3">{t.quote}</p>
                <hr style={{ background: 'rgba(255,255,255,.08)', margin: '14px 0' }} />
                <div className="tc-auth">{t.author}</div>
                <div className="tc-co">{t.company}</div>
                <div className="tc-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--mint)" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="tc-badge-tx">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client strip */}
        <div className="d-flex flex-wrap" style={{ borderTop: '1px solid rgba(255,255,255,.07)' }}>
          {CLIENTS.map((c, i) => (
            <div key={i} className="csi-item flex-grow-1">
              <div className="csi-n">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── INDUSTRIES ───────────────────────────────────────────────── */
export function Industries() {
  return (
    <section className="ind-sec" id="industries" aria-label="Industries We Serve">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,24px)' }}>
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-5 anim">
            <div className="section-tag"><span className="tag-dot" />Industries We Serve</div>
            <h2 style={{ fontSize: 'clamp(28px,3.5vw,42px)', fontWeight: 800, color: '#fff', letterSpacing: '-.04em', lineHeight: 1.1, marginBottom: 16 }}>
              Ten Industries.<br /><span style={{ color: 'var(--sky)' }}>Sector-Specific Knowledge.</span>
            </h2>
            <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 24, maxWidth: 420 }}>
              Deep domain expertise across verticals not generic templates, but solutions shaped by real industry workflows.
            </p>
            <a href="#faq" className="btn btn-sky fw-bold px-4"
               onClick={e => { e.preventDefault(); document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Discuss Your Sector →
            </a>
          </div>
          <div className="col-lg-7 anim-r">
            <div className="ind-grid">
              {INDUSTRIES.map((ind, i) => (
                <div key={i} className="ind-card">
                  <div className="ind-ico" style={{ background: ind.bg, color: ind.color }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={ind.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={ind.icon} /></svg>
                  </div>
                  <div>
                    <div className="ind-name">{ind.name}</div>
                    <div className="ind-sub">{ind.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── TECH STACK ───────────────────────────────────────────────── */
export function TechStack() {
  return (
    <section className="tech-sec py-5" aria-label="Technology Stack">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(32px,5vw,72px) clamp(16px,4vw,24px)' }}>
        <div className="row g-5 mb-5 anim">
          <div className="col-lg-5">
            <div className="section-tag"><span className="tag-dot" />Technology Stack</div>
            <h2 className="sec-h">Modern Technology.<br /><span className="sky">Proven in Production.</span></h2>
          </div>
          <div className="col-lg-7 d-flex align-items-end">
            <p className="sec-sub">We choose the stack that fits your project not the easiest for us. React JS, Next JS and Node JS for web. React Native and Flutter for mobile.</p>
          </div>
        </div>

        <div className="row g-0" style={{ border: '1.5px solid var(--border)', borderRadius: 'var(--r)', overflow: 'hidden', background: 'var(--border)' }}>
          {TECH_STACK.map((t, i) => (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg ti-item anim"
                 style={{ transitionDelay: `${i * 0.05}s`, borderRight: i < TECH_STACK.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="ti-ico mx-auto">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                     stroke="var(--sky)" strokeWidth="1.8" strokeLinecap="round">
                  <path d={t.icon} />
                </svg>
              </div>
              <span className="ti-name">{t.name}</span>
              <span className="ti-type">{t.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ + CONTACT ────────────────────────────────────────────── */
// export function FaqContact() {
//   const router = useRouter()
//   const [open, setOpen] = useState(null)
//   const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
//   const [sending, setSending] = useState(false)
//   const [error, setError] = useState('')
//    const [errors, setErrors] = useState({ name: '', phone: '', email: '', message: '' })

//   const toggle = (i) => setOpen(open === i ? null : i)


//    // Validation helpers
//   const validateName = (value) => {
//     const trimmed = value.trim();
//     if (!trimmed) return 'Full name is required';
//     if (!/^[A-Za-z\s]+$/.test(trimmed)) return 'Only alphabets and spaces allowed';
//     if (trimmed.length < 2) return 'At least 2 characters';
//     return '';
//   };

//   const validatePhone = (value) => {
//     const digits = value.replace(/\D/g, '');
//     if (!digits) return 'Phone number is required';
//     if (digits.length !== 10) return 'Enter a valid 10-digit mobile number';
//     return '';
//   };
//    const validateEmail = (value) => {
//     const trimmed = value.trim();
//     if (!trimmed) return 'Email is required';
//     const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
//     if (!re.test(trimmed)) return 'Enter a valid email (e.g., name@domain.com)';
//     if (trimmed.includes(' ')) return 'Email cannot contain spaces';
//     return '';
//   };

//   const validateMessage = (value) => {
//     const trimmed = value.trim();
//     if (!trimmed) return 'Please describe your project';
//     if (trimmed.length < 10) return 'Please provide at least 10 characters';
//     if (!/[A-Za-z]/.test(trimmed)) return 'Please include meaningful text (letters required)';
//     return '';
//   };
//   const validateField = (name, value) => {
//     let errorMsg = '';
//     switch (name) {
//       case 'name': errorMsg = validateName(value); break;
//       case 'phone': errorMsg = validatePhone(value); break;
//       case 'email': errorMsg = validateEmail(value); break;
//       case 'message': errorMsg = validateMessage(value); break;
//       default: return;
//     }
//     setErrors(prev => ({ ...prev, [name]: errorMsg }));
//   };
//    const handleChange = (e) => {
//     const { name, value } = e.target;
//     let filteredValue = value;

//     if (name === 'name') {
//       filteredValue = value.replace(/[^A-Za-z\s]/g, '');
//     } else if (name === 'phone') {
//       filteredValue = value.replace(/\D/g, '').slice(0, 10);
//     } else if (name === 'message') {
//       filteredValue = value.replace(/\s+/g, ' ').trimStart();
//     }

//     setForm(prev => ({ ...prev, [name]: filteredValue }));

//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };
//    const handleBlur = (e) => {
//     const { name, value } = e.target;
//     validateField(name, value);
//   };
//  const submit = async (e) => {
//     e.preventDefault();
//     setError('');

//     const nameErr = validateName(form.name);
//     const phoneErr = validatePhone(form.phone);
//     const emailErr = validateEmail(form.email);
//     const messageErr = validateMessage(form.message);

//     if (nameErr || phoneErr || emailErr || messageErr) {
//       setErrors({
//         name: nameErr,
//         phone: phoneErr,
//         email: emailErr,
//         message: messageErr,
//       });
//       return;
//     }

//     setErrors({ name: '', phone: '', email: '', message: '' });
//     setSending(true);
//     try {
//        const res = await fetch('/api/enquiry', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ ...form, landingPage: typeof window !== 'undefined' ? window.location.pathname : '/' }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         router.push('/thankyou');
//       } else {
//         setError(data.error || 'Something went wrong. Please try again.');
//       }
//     } catch {
//       setError('Network error. Please try again.');
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <section className="faq-sec" id="faq" aria-label="FAQ and Contact">
//       <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(28px,5vw,48px) clamp(16px,4vw,24px) clamp(36px,6vw,64px)' }}>
//         <div className="row g-5">

//           {/* FAQ */}
//           <div className="col-lg-6 anim-l">
//             <div className="section-tag"><span className="tag-dot" />FAQ</div>
//             <h2 className="faq-h mb-2">Questions. <span className="sky">Answered Honestly.</span></h2>
//             <p className="sec-sub mb-4" style={{ fontSize: 15.5 }}>
//               Every new client asks these questions. We answer them directly including the ones that make us look harder to work with.
//             </p>

//             <div style={{ borderTop: '1px solid var(--border)' }}>
//               {FAQS.map((f, i) => (
//                 <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
//                   <button className="faq-btn w-100 d-flex justify-content-between align-items-center py-3 border-0 bg-transparent text-start"
//                           onClick={() => toggle(i)} aria-expanded={open === i}>
//                     <span className="faq-q">{f.q}</span>
//                     <span className={`faq-ic flex-shrink-0 ${open === i ? 'open' : ''}`}>
//                       <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
//                            stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//                         <line x1="12" y1="5" x2="12" y2="19" />
//                         <line x1="5" y1="12" x2="19" y2="12" />
//                       </svg>
//                     </span>
//                   </button>
//                   {open === i && (
//                     <p className="faq-ans pb-3" style={{ margin: 0 }}>{f.a}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="col-lg-6 anim-r">
//             <div className="contact-card">
//               <div className="cc-eyebrow"><span className="cc-eyebrow-tx">Start a Project</span></div>
//               <div className="cc-h mb-2">Let&apos;s talk about<br />what you need.</div>
//               <p className="cc-sub mb-4">Tell us your goals. We&apos;ll come back with clear scope, timeline and a fixed price within 24 hours. No obligation.</p>

//               {/* Direct links */}
//               <div className="d-flex flex-column gap-2 mb-4">
//                 <a href={SITE.phoneHref} className="cc-link">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
//                   </svg>
//                   <div>
//                     {SITE.phone}
//                     <small>Mon–Sat, 9am–7pm IST</small>
//                   </div>
//                 </a>
//                 <a href={`mailto:${SITE.email}`} className="cc-link">
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                     <rect x="2" y="4" width="20" height="16" rx="2" />
//                     <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
//                   </svg>
//                   {SITE.email}
//                 </a>
//               </div>

//               <form onSubmit={submit} noValidate>
//                   <div className="row g-2 mb-2">
//                     <div className="col-6"><input className="cc-inp" type="text" placeholder="Your name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value.replace(/[^A-Za-z\s.'-]/g, '') })} maxLength={100} required /></div>
//                     <div className="col-6"><input className="cc-inp" type="tel" placeholder="Phone *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value.replace(/[^0-9+\-\s()]/g, '') })} maxLength={15} required /></div>
//                   </div>
//                   <input className="cc-inp d-block mb-2" type="email" placeholder="Email address *" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} maxLength={150} />
//                   <input className="cc-inp d-block mb-2" placeholder="What do you need? (website, app, CRM...)" value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} />
//                   <textarea className="cc-ta d-block mb-2" rows="3" placeholder="Brief description of your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
//                   {error && <p style={{ color: '#EF4444', fontSize: 12.5, marginBottom: 10, marginTop: 2 }}>{error}</p>}
//                   <button type="submit" className="cc-submit mb-3" disabled={sending}>
//                     {sending ? 'Sending…' : <>Send Enquiry <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></>}
//                   </button>
//                   <div className="d-flex justify-content-center gap-4 flex-wrap">
//                     <span className="cc-ti">✓ No spam</span>
//                     <span className="cc-ti">✓ 24hr response</span>
//                     <span className="cc-ti">✓ Fixed price</span>
//                   </div>
//                 </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


export function FaqContact() {
  const router = useRouter()
  const [open, setOpen] = useState(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', message: '' })
  const [hp, setHp] = useState('')
  const [cfToken, setCfToken] = useState('')
  const renderedAt = useRenderedAt()
  const captchaPassed = cfToken === '__no_captcha__' || cfToken.length > 0

  const toggle = (i) => setOpen(open === i ? null : i)

  // ========== VALIDATION HELPERS ==========
  const validateName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Full name is required';
    if (!/^[A-Za-z\s]+$/.test(trimmed)) return 'Only alphabets and spaces allowed';
    if (trimmed.length < 2) return 'At least 2 characters';
    return '';
  };

  const validatePhone = (value) => {
    const digits = value.replace(/\D/g, '');
    if (!digits) return 'Phone number is required';
    if (digits.length !== 10) return 'Enter a valid 10-digit mobile number';
    return '';
  };

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required';
    const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!re.test(trimmed)) return 'Enter a valid email (e.g., name@domain.com)';
    if (trimmed.includes(' ')) return 'Email cannot contain spaces';
    return '';
  };

  const validateMessage = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Please describe your project';
    if (trimmed.length < 10) return 'Please provide at least 10 characters';
    if (!/[A-Za-z]/.test(trimmed)) return 'Please include meaningful text (letters required)';
    return '';
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'name': errorMsg = validateName(value); break;
      case 'phone': errorMsg = validatePhone(value); break;
      case 'email': errorMsg = validateEmail(value); break;
      case 'message': errorMsg = validateMessage(value); break;
      default: return;
    }
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  // ========== HANDLERS ==========
  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === 'name') {
      filteredValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === 'phone') {
      filteredValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'message') {
      filteredValue = value.replace(/\s+/g, ' ').trimStart();
    }

    setForm(prev => ({ ...prev, [name]: filteredValue }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // ========== SUBMIT ==========
  const submit = async (e) => {
    e.preventDefault();
    setError('');

    const nameErr = validateName(form.name);
    const phoneErr = validatePhone(form.phone);
    const emailErr = validateEmail(form.email);
    const messageErr = validateMessage(form.message);

    if (nameErr || phoneErr || emailErr || messageErr) {
      setErrors({
        name: nameErr,
        phone: phoneErr,
        email: emailErr,
        message: messageErr,
      });
      return;
    }

    setErrors({ name: '', phone: '', email: '', message: '' });
    setSending(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          landingPage: typeof window !== 'undefined' ? window.location.pathname : '/',
          company_website: hp,
          renderedAt: renderedAt.current,
          cfToken: cfToken === '__no_captcha__' ? '' : (cfToken || readTurnstileToken()),
        }),
      });
      const data = await res.json();
      if (res.ok) {
        router.push('/thankyou');
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  };

  // ========== RENDER ==========
  return (
    <section className="faq-sec" id="faq" aria-label="FAQ and Contact">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(28px,5vw,48px) clamp(16px,4vw,24px) clamp(36px,6vw,64px)' }}>
        <div className="row g-5">

          {/* FAQ COLUMN */}
          <div className="col-lg-6 anim-l">
            <div className="section-tag"><span className="tag-dot" />FAQ</div>
            <h2 className="faq-h mb-2">Questions. <span className="sky">Answered Honestly.</span></h2>
            <p className="sec-sub mb-4" style={{ fontSize: 15.5 }}>
              Every new client asks these questions. We answer them directly including the ones that make us look harder to work with.
            </p>

            <div style={{ borderTop: '1px solid var(--border)' }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                  <button
                    className="faq-btn w-100 d-flex justify-content-between align-items-center py-3 border-0 bg-transparent text-start"
                    onClick={() => toggle(i)}
                    aria-expanded={open === i}
                  >
                    <span className="faq-q">{f.q}</span>
                    <span className={`faq-ic flex-shrink-0 ${open === i ? 'open' : ''}`}>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {open === i && (
                    <p className="faq-ans pb-3" style={{ margin: 0 }}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM COLUMN */}
          <div className="col-lg-6 anim-r">
            <div className="contact-card">
              <div className="cc-eyebrow"><span className="cc-eyebrow-tx">Start a Project</span></div>
              <div className="cc-h mb-2">Let&apos;s talk about<br />what you need.</div>
              <p className="cc-sub mb-4">Tell us your goals. We&apos;ll come back with clear scope, timeline and a fixed price within 24 hours. No obligation.</p>

              {/* Direct contact links */}
              <div className="d-flex flex-column gap-2 mb-4">
                <a href={SITE.phoneHref} className="cc-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <div>
                    {SITE.phone}
                    <small>Mon–Sat, 9am–7pm IST</small>
                  </div>
                </a>
                <a href={`mailto:${SITE.email}`} className="cc-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                  </svg>
                  {SITE.email}
                </a>
              </div>

              <form onSubmit={submit} noValidate>
                <Honeypot value={hp} onChange={setHp} />
                <div className="row g-2 mb-2">
                  {/* NAME */}
                  <div className="col-6">
                    <input
                      className="cc-inp"
                      type="text"
                      placeholder="Your name *"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={100}
                      style={{ borderColor: errors.name ? '#EF4444' : undefined }}
                    />
                    {errors.name && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 2 }}>{errors.name}</div>}
                  </div>
                  {/* PHONE */}
                  <div className="col-6">
                    <input
                      className="cc-inp"
                      type="tel"
                      placeholder="Phone *"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ borderColor: errors.phone ? '#EF4444' : undefined }}
                    />
                    {errors.phone && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 2 }}>{errors.phone}</div>}
                  </div>
                </div>

                {/* EMAIL */}
                <input
                  className="cc-inp d-block mb-2"
                  type="email"
                  placeholder="Email address *"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: errors.email ? '#EF4444' : undefined }}
                />
                {errors.email && <div style={{ color: '#EF4444', fontSize: 11, marginTop: -4, marginBottom: 6 }}>{errors.email}</div>}

                {/* SERVICE (optional) */}
                <input
                  className="cc-inp d-block mb-2"
                  placeholder="What do you need? (website, app, CRM...)"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                />

                {/* MESSAGE */}
                <textarea
                  className="cc-ta d-block mb-2"
                  rows="3"
                  placeholder="Brief description of your project... (minimum 10 characters)"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{ borderColor: errors.message ? '#EF4444' : undefined }}
                />
                {errors.message && <div style={{ color: '#EF4444', fontSize: 11, marginTop: -4, marginBottom: 6 }}>{errors.message}</div>}

                {/* GENERAL ERROR (network/api) */}
                {error && <p style={{ color: '#EF4444', fontSize: 12.5, marginBottom: 10, marginTop: 2 }}>{error}</p>}

                <TurnstileWidget theme="dark" onVerify={setCfToken} />
                {!captchaPassed && (
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', marginBottom: 10 }}>Please complete the verification above to enable sending.</div>
                )}

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="cc-submit mb-3"
                  disabled={sending || !captchaPassed || Object.values(errors).some(e => e !== '')}
                >
                  {sending ? 'Sending…' : (
                    <>
                      Send Enquiry
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                </button>

                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  <span className="cc-ti">✓ No spam</span>
                  <span className="cc-ti">✓ 24hr response</span>
                  <span className="cc-ti">✓ Fixed price</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CTA BAND ─────────────────────────────────────────────────── */
export function CtaBand() {
  return (
    <section className="cta-section py-5" aria-label="Call to Action">
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,80px) clamp(16px,4vw,24px)', position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-8 anim">
            <h2 className="cta-h mb-2">
              Ready to Build Something<br /><span className="sky">That Actually Grows Your Business?</span>
            </h2>
            <p className="cta-sub mb-3">Tell us what you need. We&apos;ll come back with a clear scope, timeline and fixed price within 24 hours.</p>
            <div className="d-flex flex-wrap gap-4">
              {['Free consultation', 'PageSpeed 90+ guaranteed', 'Source code 100% yours', 'Fixed price'].map((chip, i) => (
                <span key={i} className="cta-chip">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="col-lg-4 d-flex flex-column align-items-lg-end gap-2 anim">
            <button className="btn btn-sky fw-bold px-4 py-3 d-inline-flex align-items-center gap-2 w-100 w-lg-auto justify-content-center"
              onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}>
              Get Free Quote
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href={SITE.phoneHref} style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,.4)', textAlign: 'center' }}>
              Or call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FOOTER ───────────────────────────────────────────────────── */
/* ── SEO KEYWORDS SECTION (placed ABOVE footer) ─────────────── */
const SEO_CATS = [
  /* ── BANGALORE ── */
  { title: 'Website Development — Bangalore', ico: 'M3 3h18v14H3zM8 21h8M12 17v4', color: '#2196F3', links: [
    { t: 'Website Development Company in Bangalore', h: '/website-development-company-in-bangalore' },
    { t: 'Web Development Company in Bangalore', h: '/web-development-company-in-bangalore' },
    { t: 'Website Design Company in Bangalore', h: '/website-design-company-in-bangalore' },
    { t: 'Website Developers in Bangalore', h: '/website-developers-in-bangalore' },
    { t: 'Best Website Development Company in Bangalore', h: '/best-website-development-company-in-bangalore' },
    { t: 'Top Website Development Company in Bangalore', h: '/top-website-development-company-in-bangalore' },
    { t: 'Custom Website Development Company in Bangalore', h: '/custom-website-development-company-in-bangalore' },
    { t: 'Corporate Website Development in Bangalore', h: '/corporate-website-development-in-bangalore' },
    { t: 'Business Website Design Bangalore', h: '/business-website-design-in-bangalore' },
    { t: 'React JS Development Company Bangalore', h: '/react-js-development-company-in-bangalore' },
    { t: 'Next JS Development Company Bangalore', h: '/next-js-development-company-in-bangalore' },
    { t: 'Website Maker in Bangalore', h: '/website-maker-in-bangalore' },
    { t: 'Website Design Services Bangalore', h: '/website-design-services-bangalore' },
    { t: 'Affordable Website Development Bangalore', h: '/affordable-website-development-bangalore' },
    { t: 'Professional Website Design Bangalore', h: '/professional-website-design-bangalore' },
    { t: 'Responsive Website Development Bangalore', h: '/responsive-website-development-bangalore' },
    { t: 'Website Development Services Bangalore', h: '/website-development-services-bangalore' },
    { t: 'Hire Web Developers Bangalore', h: '/hire-web-developers-bangalore' },
    { t: 'Web Design Agency Bangalore', h: '/web-design-agency-bangalore' },

    { t: 'Website Development Company in RR Nagar', h: '/website-development-company-in-rr-nagar' },
    { t: 'Web Development Company RR Nagar', h: '/web-development-company-rr-nagar' },
    { t: 'Website Design in RR Nagar Bangalore', h: '/website-design-in-rr-nagar-bangalore' },

    { t: 'Website Development Company in HSR Layout', h: '/website-development-company-in-hsr-layout' },
    { t: 'Web Development Company HSR Layout', h: '/web-development-company-hsr-layout' },
    { t: 'Website Design HSR Layout Bangalore', h: '/website-design-hsr-layout-bangalore' },
    
    { t: 'Website Development Company in Malleshwaram', h: '/website-development-company-in-malleshwaram' },
    { t: 'Web Development Company Malleshwaram', h: '/web-development-company-malleshwaram' },
    { t: 'Website Design Malleshwaram Bangalore', h: '/website-design-malleshwaram-bangalore' },

    { t: 'Website Development Company in JP Nagar', h: '/website-development-company-in-jpnagar' },
    { t: 'Web Development Company JP Nagar', h: '/web-development-company-jp-nagar' },
    { t: 'Website Design JP Nagar Bangalore', h: '/website-design-jp-nagar-bangalore' },

    { t: 'Website Development Company in Rajajinagar', h: '/website-development-company-in-rajajinagar' },
    { t: 'Web Development Company in Rajajinagar', h: '/web-development-company-in-rajajinagar' },
    { t: 'Website Design in Rajajinagar Bangalore', h: '/website-design-in-rajajinagar-bangalore' },

    { t: 'Website Designing Company in Jayanagar', h: '/website-designing-company-in-jayanagar' },
    { t: 'Web Design Company Jayanagar', h: '/website-designing-company-in-jayanagar' },
    { t: 'Creative Web Design Jayanagar', h: '/website-designing-company-in-jayanagar' },

    { t: 'Website Development Company in Indiranagar', h: '/website-development-company-in-indiranagar' },
    { t: 'Web Development Company Indiranagar', h: '/website-development-company-in-indiranagar' },
    { t: 'Website Design Indiranagar Bangalore', h: '/website-development-company-in-indiranagar' },
  ]},
  { title: 'E-commerce — Bangalore', ico: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0', color: '#F59E0B', links: [
    { t: 'Ecommerce Website Development Company Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Ecommerce Development Company in Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Ecommerce Website Design Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Online Store Development Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Shopify Development Company Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'WooCommerce Development Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Magento Development Company Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'D2C Website Development Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Custom Ecommerce Platform Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'B2B Ecommerce Development Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Marketplace Development Company Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
    { t: 'Ecommerce App Development Bangalore', h: '/ecommerce-website-development-company-in-bangalore' },
  ]},
  { title: 'Mobile App Development — Bangalore', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', color: '#10B981', links: [
    { t: 'Mobile App Development Company in Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'App Development Company in Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Mobile App Developers in Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Best Mobile App Development Company Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Top App Development Company Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'App Developers in Bangalore', h: '/app-developers-in-bangalore' },
    { t: 'Mobile App Development Company in RR Nagar', h: '/mobile-app-development-company-in-rr-nagar' },
    { t: 'App Development Company RR Nagar', h: '/mobile-app-development-company-in-rr-nagar' },
    { t: 'Mobile App Developers RR Nagar', h: '/mobile-app-development-company-in-rr-nagar' },
    { t: 'Mobile Application Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Custom Mobile App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Enterprise Mobile App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'On Demand App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Hire Mobile App Developers Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'App Development Services Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Startup App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'MVP App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'App Development Agency Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Android App Development Company Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Android App Developers Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Native Android App Development Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Kotlin App Development Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Java Android Development Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Hire Android Developers Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Play Store App Development Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Android Application Development Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Enterprise Android App Development Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'Android App Maker Bangalore', h: '/android-app-development-company-in-bangalore' },
    { t: 'iOS App Development Company Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'React Native Development Company Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Flutter App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Cross Platform App Development Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'iOS App Development Company in Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'iPhone App Development Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'iPad App Development Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'Swift App Development Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'Hire iOS Developers Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'Native iOS App Development Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'Apple App Development Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'iOS Application Development Bangalore', h: '/ios-app-development-company-in-bangalore' },
    { t: 'Hire Mobile App Developers Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'App Development Agency Bangalore', h: '/mobile-app-development-company-in-bangalore' },
    { t: 'Flutter App Development Company in Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'Flutter Developers Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'Flutter App Development Services Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'Dart App Development Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'Cross Platform App Development Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'Hire Flutter Developers Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'Flutter Web Development Bangalore', h: '/flutter-app-development-company-in-bangalore' },
    { t: 'React Native App Development Company in Bangalore', h: '/react-native-app-development-company-in-bangalore' },
    { t: 'React Native Developers Bangalore', h: '/react-native-app-development-company-in-bangalore' },
    { t: 'Hire React Native Developers Bangalore', h: '/react-native-app-development-company-in-bangalore' },
    { t: 'React Native Services Bangalore', h: '/react-native-app-development-company-in-bangalore' },
    { t: 'JavaScript Mobile App Development Bangalore', h: '/react-native-app-development-company-in-bangalore' },
    { t: 'React Native Agency Bangalore', h: '/react-native-app-development-company-in-bangalore' },
  ]},
  { title: 'CRM & Software — Bangalore', ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', color: '#7C3AED', links: [
    { t: 'CRM Software Development Company in Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'CRM Development Company in Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'CRM Software Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Custom CRM Software Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Enterprise CRM Development Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Sales CRM Software Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'CRM Developers Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'SaaS CRM Development Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Lead Management Software Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'CRM System Development Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Zoho Alternative CRM Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Salesforce Alternative Bangalore', h: '/crm-software-development-company-in-bangalore' },
    { t: 'Custom CRM Development Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Bespoke CRM Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Tailored CRM Software Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Custom CRM Solutions Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Industry Specific CRM Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Real Estate CRM Development Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Healthcare CRM Development Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Manufacturing CRM Bangalore', h: '/custom-crm-development-bangalore' },
    { t: 'Software Development Company in Bangalore', h: '/software-development-company-in-bangalore' },
    { t: 'IT Software Company Bangalore', h: '/software-development-company-in-bangalore' },
    { t: 'Custom Software Development Bangalore', h: '/software-development-company-in-bangalore' },
    { t: 'Software Development Services Bangalore', h: '/software-development-company-in-bangalore' },
    { t: 'Web Application Development Bangalore', h: '/software-development-company-in-bangalore' },
  ]},
  { title: 'Digital Marketing & SEO — Bangalore', ico: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '#EF4444', links: [
    { t: 'Digital Marketing Agency in Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Digital Marketing Company Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Digital Marketing Services Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Best Digital Marketing Agency Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Top Digital Marketing Company Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Digital Marketing Experts Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Online Marketing Agency Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'SEO Services in Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'SEO Company in Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Best SEO Company Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Local SEO Services Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'SEO Agency in Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Technical SEO Services Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'On Page SEO Services Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'SEO Experts Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'SEO Consultants Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Ecommerce SEO Services Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Hire SEO Expert Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Affordable SEO Services Bangalore', h: '/seo-services-company-in-bangalore' },
    { t: 'Google Ads Agency in Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Google Ads Management Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'PPC Agency Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'PPC Services Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Google Adwords Agency Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Google Ads Experts Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Adwords Management Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Google Ads Consultants Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Pay Per Click Agency Bangalore', h: '/google-ads-agency-in-bangalore' },
    { t: 'Performance Marketing Agency Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Lead Generation Agency Bangalore', h: '/digital-marketing-agency-in-bangalore' },
    { t: 'Digital Marketing Consultants Bangalore', h: '/digital-marketing-agency-in-bangalore' },
  ]},
  { title: 'Video, Animation & Design — Bangalore', ico: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z', color: '#F97316', links: [
    { t: 'Corporate Video Production Company in Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Video Production Company Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Corporate Film Makers Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Brand Film Production Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Ad Film Production Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Drone Video Production Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Product Video Shoot Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Corporate Video Makers Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: 'Commercial Video Production Bangalore', h: '/corporate-video-production-company-in-bangalore' },
    { t: '2D Animation Studio in Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: '2D Animation Company Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Explainer Video Company Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Animated Explainer Videos Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Character Animation Studio Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Whiteboard Animation Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Motion Graphics Company Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Animation Services Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Product Explainer Video Bangalore', h: '/2d-animation-studio-in-bangalore' },
    { t: 'Graphic Design Company in Bangalore', h: '/graphic-design-company-in-bangalore' },
    { t: 'Branding Agency Bangalore', h: '/graphic-design-company-in-bangalore' },
    { t: 'Logo Design Company Bangalore', h: '/graphic-design-company-in-bangalore' },
    { t: 'UI UX Design Company Bangalore', h: '/graphic-design-company-in-bangalore' },
    { t: 'Brand Identity Agency Bangalore', h: '/graphic-design-company-in-bangalore' },
    { t: 'Packaging Design Company Bangalore', h: '/graphic-design-company-in-bangalore' },
    { t: 'Creative Agency Bangalore', h: '/graphic-design-company-in-bangalore' },
  ]},
  { title: 'Social Media Marketing — Bangalore', ico: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', color: '#EC4899', links: [
    { t: 'Social Media Marketing Agency Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'Social Media Marketing Company Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'Instagram Marketing Agency Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'Facebook Ads Agency Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'Meta Ads Agency Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'Social Media Management Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'LinkedIn Marketing Agency Bangalore', h: '/social-media-marketing-agency-bangalore' },
    { t: 'Social Media Services Bangalore', h: '/social-media-marketing-agency-bangalore' },
  ]},
  { title: 'B2B Marketing — Bangalore', ico: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z', color: '#0EA5E9', links: [
    { t: 'B2B Marketing Agency in Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
    { t: 'LinkedIn Lead Generation Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
    { t: 'B2B Lead Generation Company Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
    { t: 'Account Based Marketing Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
    { t: 'ABM Agency Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
    { t: 'B2B Digital Marketing Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
    { t: 'Enterprise Marketing Agency Bangalore', h: '/b2b-marketing-agency-in-bangalore' },
  ]},
  /* ── MYSURU ── */
  { title: 'Website Development — Mysuru', ico: 'M3 3h18v14H3zM8 21h8M12 17v4', color: '#2196F3', links: [
    { t: 'Website Development Company in Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Web Development Company in Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Website Design Company in Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Website Developers in Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Best Website Development Company Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Custom Website Development Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Corporate Website Development Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'React JS Development Company Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Next JS Development Company Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Business Website Design Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Professional Website Design Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Responsive Web Development Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Affordable Website Development Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Website Development Services Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Website Company Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Website Design Services Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Website Maker in Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Hire Web Developers Mysuru', h: '/website-development-company-in-mysuru' },
    { t: 'Web Design Agency Mysuru', h: '/website-development-company-in-mysuru' },
  ]},
  { title: 'E-commerce — Mysuru', ico: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0', color: '#F59E0B', links: [
    { t: 'Ecommerce Website Development Company Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Ecommerce Development Company in Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Ecommerce Website Design Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Online Store Development Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Shopify Development Company Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'WooCommerce Development Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Magento Development Company Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Ecommerce App Development Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'B2B Ecommerce Development Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'D2C Website Development Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Custom Ecommerce Platform Mysuru', h: '/ecommerce-website-development-mysuru' },
    { t: 'Marketplace Development Company Mysuru', h: '/ecommerce-website-development-mysuru' },
  ]},
  { title: 'Mobile App Development — Mysuru', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', color: '#10B981', links: [
    { t: 'Mobile App Development Company in Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'App Development Company in Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Mobile App Developers in Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Best Mobile App Development Company Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Android App Development Company Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Android App Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'iOS App Development Company Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'React Native App Development Company Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'React Native Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Flutter App Development Company Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Flutter Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Custom Mobile App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'On Demand App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Enterprise Mobile App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Startup App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Cross Platform App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Kotlin App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Swift App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'MVP App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Hire Mobile App Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'App Development Agency Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Native Android App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Native iOS App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Play Store App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'iPhone App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Hire Flutter Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Hire React Native Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Dart App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'JavaScript Mobile App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Android App Maker Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'App Development Services Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Flutter Web Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Flutter App Development Services Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'React Native Services Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'React Native Agency Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Apple App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Hire Android Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Hire iOS Developers Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'App Developers in Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Mobile Application Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Top App Development Company Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Enterprise Android App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'Java Android Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'iPad App Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
    { t: 'iOS Application Development Mysuru', h: '/mobile-app-development-company-in-mysuru' },
  ]},
  { title: 'Android App Development — Mysuru', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', color: '#34D399', links: [
    { t: 'Android App Development Company in Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Android App Developers Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Native Android App Development Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Kotlin App Development Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Java Android Development Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Hire Android Developers Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Play Store App Development Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Android Application Development Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Enterprise Android App Development Mysuru', h: '/android-app-development-company-in-mysuru' },
    { t: 'Android App Maker Mysuru', h: '/android-app-development-company-in-mysuru' },
  ]},
  { title: 'iOS App Development — Mysuru', ico: 'M12 2a10 10 0 100 20 10 10 0 000-20z', color: '#A78BFA', links: [
    { t: 'iOS App Development Company in Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'iPhone App Development Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'iPad App Development Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'Swift App Development Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'Hire iOS Developers Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'Native iOS App Development Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'Apple App Development Mysuru', h: '/ios-app-development-company-in-mysuru' },
    { t: 'iOS Application Development Mysuru', h: '/ios-app-development-company-in-mysuru' },
  ]},
  { title: 'Flutter App Development — Mysuru', ico: 'M4 4h6l6 6-6 6H4l6-6z', color: '#06B6D4', links: [
    { t: 'Flutter App Development Company in Mysuru', h: '/flutter-app-development-company-in-mysuru' },
    { t: 'Flutter Developers Mysuru', h: '/flutter-app-development-company-in-mysuru' },
    { t: 'Flutter App Development Services Mysuru', h: '/flutter-app-development-company-in-mysuru' },
    { t: 'Dart App Development Mysuru', h: '/flutter-app-development-company-in-mysuru' },
    { t: 'Cross Platform App Development Mysuru', h: '/flutter-app-development-company-in-mysuru' },
    { t: 'Hire Flutter Developers Mysuru', h: '/flutter-app-development-company-in-mysuru' },
    { t: 'Flutter Web Development Mysuru', h: '/flutter-app-development-company-in-mysuru' },
  ]},
  { title: 'React Native Development — Mysuru', ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', color: '#3B82F6', links: [
    { t: 'React Native App Development Company in Mysuru', h: '/react-native-app-development-company-in-mysuru' },
    { t: 'React Native Developers Mysuru', h: '/react-native-app-development-company-in-mysuru' },
    { t: 'Hire React Native Developers Mysuru', h: '/react-native-app-development-company-in-mysuru' },
    { t: 'React Native Services Mysuru', h: '/react-native-app-development-company-in-mysuru' },
    { t: 'JavaScript Mobile App Development Mysuru', h: '/react-native-app-development-company-in-mysuru' },
    { t: 'React Native Agency Mysuru', h: '/react-native-app-development-company-in-mysuru' },
  ]},
  { title: 'CRM & Software — Mysuru', ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', color: '#7C3AED', links: [
    { t: 'CRM Software Development Company in Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'CRM Development Company in Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'CRM Software Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Custom CRM Software Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Enterprise CRM Development Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Sales CRM Software Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'CRM Developers Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'SaaS CRM Development Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Lead Management Software Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'CRM System Development Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Zoho Alternative CRM Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Salesforce Alternative Mysuru', h: '/crm-software-development-company-in-mysuru' },
    { t: 'Custom CRM Development Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Bespoke CRM Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Tailored CRM Software Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Custom CRM Solutions Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Industry Specific CRM Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Real Estate CRM Development Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Healthcare CRM Development Mysuru', h: '/custom-crm-development-mysuru' },
    { t: 'Manufacturing CRM Mysuru', h: '/custom-crm-development-mysuru' },
  ]},
  { title: 'Digital Marketing & SEO — Mysuru', ico: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '#EF4444', links: [
    { t: 'Digital Marketing Agency in Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Digital Marketing Company Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Digital Marketing Services Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Best Digital Marketing Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Top Digital Marketing Company Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Digital Marketing Experts Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Online Marketing Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Performance Marketing Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Lead Generation Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Digital Marketing Consultants Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'SEO Services in Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'SEO Company in Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Best SEO Company Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Local SEO Services Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Technical SEO Services Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'On Page SEO Services Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'SEO Experts Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'SEO Consultants Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Ecommerce SEO Services Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Affordable SEO Services Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'SEO Agency in Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Hire SEO Expert Mysuru', h: '/seo-services-company-in-mysuru' },
    { t: 'Google Ads Agency in Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Google Ads Management Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'PPC Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'PPC Services Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Google Adwords Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Google Ads Experts Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Pay Per Click Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Social Media Marketing Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Social Media Marketing Company Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Instagram Marketing Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Facebook Ads Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Meta Ads Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Social Media Management Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'LinkedIn Marketing Agency Mysuru', h: '/digital-marketing-agency-in-mysuru' },
    { t: 'Social Media Services Mysuru', h: '/digital-marketing-agency-in-mysuru' },
  ]},
  { title: 'Video, Animation & Design — Mysuru', ico: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z', color: '#F97316', links: [
    { t: 'Corporate Video Production Company in Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Video Production Company Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Corporate Film Makers Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Brand Film Production Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Ad Film Production Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Drone Video Production Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Product Video Shoot Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Corporate Video Makers Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: 'Commercial Video Production Mysuru', h: '/corporate-video-production-company-in-mysuru' },
    { t: '2D Animation Studio in Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: '2D Animation Company Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Explainer Video Company Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Animated Explainer Videos Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Character Animation Studio Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Whiteboard Animation Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Motion Graphics Company Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Animation Services Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Product Explainer Video Mysuru', h: '/2d-animation-studio-in-mysuru' },
    { t: 'Graphic Design Company in Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Branding Agency Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Logo Design Company Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Brand Identity Design Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'UI UX Design Company Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Packaging Design Company Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Brochure Design Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Brand Identity Agency Mysuru', h: '/graphic-design-company-in-mysuru' },
    { t: 'Creative Agency Mysuru', h: '/graphic-design-company-in-mysuru' },
  ]},
  { title: 'B2B Marketing — Mysuru', ico: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z', color: '#0EA5E9', links: [
    { t: 'B2B Marketing Agency in Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
    { t: 'LinkedIn Lead Generation Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
    { t: 'B2B Lead Generation Company Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
    { t: 'Account Based Marketing Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
    { t: 'ABM Agency Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
    { t: 'B2B Digital Marketing Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
    { t: 'Enterprise Marketing Agency Mysuru', h: '/b2b-marketing-agency-in-mysuru' },
  ]},
  /* ── HYDERABAD ── */
  { title: 'Mobile App Development — Hyderabad', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', color: '#10B981', links: [
    { t: 'Mobile App Development Company Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'App Development Company Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'Mobile App Developers Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'Android App Development Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'iOS App Development Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'React Native App Development Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'Flutter App Development Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'Enterprise App Development Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'On Demand App Development Hyderabad', h: '/mobile-app-development-company-hyderabad' },
    { t: 'Hire Mobile App Developers Hyderabad', h: '/mobile-app-development-company-hyderabad' },
  ]},
  { title: 'Website Development — Hyderabad', ico: 'M3 3h18v14H3zM8 21h8M12 17v4', color: '#2196F3', links: [
    { t: 'Website Development Company in Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Web Development Company Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Website Developers Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Business Website Development Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Custom Website Development Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Website Design Company Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Best Website Development Company Hyderabad', h: '/website-development-company-in-hyderabad' },
    { t: 'Next JS Development Hyderabad', h: '/website-development-company-in-hyderabad' },
  ]},
  { title: 'Digital Marketing — Hyderabad', ico: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', color: '#8B5CF6', links: [
    { t: 'Digital Marketing Agency Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Digital Marketing Company Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Digital Marketing Services Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'SEO Agency Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Google Ads Agency Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Social Media Marketing Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Performance Marketing Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Online Marketing Agency Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Conversion Optimisation Hyderabad', h: '/digital-marketing-agency-hyderabad' },
    { t: 'Best Digital Marketing Agency Hyderabad', h: '/digital-marketing-agency-hyderabad' },
  ]},
  { title: 'Video & Animation — Hyderabad', ico: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z', color: '#F97316', links: [
    { t: '2D Animation Studio Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: 'Animation Studio Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: 'Explainer Video Company Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: 'Animated Video Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: 'Motion Graphics Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: 'Whiteboard Animation Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: '2D Animation Company Hyderabad', h: '/2d-animation-studio-hyderabad' },
    { t: 'Character Animation Hyderabad', h: '/2d-animation-studio-hyderabad' },
  ]},
  /* ── MUMBAI ── */
  { title: 'Website Development — Mumbai', ico: 'M3 3h18v14H3zM8 21h8M12 17v4', color: '#2196F3', links: [
    { t: 'Website Development Company in Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Web Development Company in Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Design Company in Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Developers in Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Best Website Development Company Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Top Website Development Company Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Custom Website Development Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Corporate Website Development Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Business Website Design Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'React JS Development Company Mumbai', h: '/react-js-development-company-in-mumbai' },
    { t: 'React JS Developers Mumbai', h: '/react-js-development-company-in-mumbai' },
    { t: 'React JS Web App Mumbai', h: '/react-js-development-company-in-mumbai' },
    { t: 'Next JS Development Company Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Maker in Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Design Services Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Affordable Website Development Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Professional Website Design Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Responsive Website Development Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Development Services Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Company Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Hire Web Developers Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Web Design Agency Mumbai', h: '/website-development-company-in-mumbai' },
    { t: 'Website Designing Company in Mumbai', h: '/website-designing-company-in-mumbai' },
    { t: 'Website Designing Mumbai', h: '/website-designing-company-in-mumbai' },
    { t: 'Creative Website Design Mumbai', h: '/website-designing-company-in-mumbai' },
    { t: 'Modern Website Design Mumbai', h: '/website-designing-company-in-mumbai' },
    { t: 'Website Designers in Mumbai', h: '/website-designers-in-mumbai' },
    { t: 'Website Designer Mumbai', h: '/website-designers-in-mumbai' },
    { t: 'Web Design Experts Mumbai', h: '/website-designers-in-mumbai' },
    { t: 'Hire Website Designer Mumbai', h: '/website-designers-in-mumbai' },
    { t: 'Website Developers in Mumbai', h: '/website-developers-in-mumbai' },
    { t: 'Website Developer Mumbai', h: '/website-developers-in-mumbai' },
    { t: 'Hire Website Developers Mumbai', h: '/website-developers-in-mumbai' },
    { t: 'Web Developers Mumbai', h: '/website-developers-in-mumbai' },
    { t: 'Website Designer in Mumbai', h: '/website-designer-in-mumbai' },
    { t: 'Best Website Designer Mumbai', h: '/website-designer-in-mumbai' },
    { t: 'Custom Web Designer Mumbai', h: '/website-designer-in-mumbai' },
    { t: 'Hire Website Designer in Mumbai', h: '/website-designer-in-mumbai' },
    { t: 'Best Website Designer in Mumbai', h: '/best-website-designer-in-mumbai' },
    { t: 'Top Website Designer Mumbai', h: '/best-website-designer-in-mumbai' },
    { t: 'Digital Website Service Mumbai', h: '/best-website-designer-in-mumbai' },
    { t: 'Best Web Designer Mumbai', h: '/best-website-designer-in-mumbai' },
    { t: 'Best Website Design and Development Company in Mumbai', h: '/best-website-design-and-development-company-in-mumbai' },
    { t: 'Best Website Design Company Mumbai', h: '/best-website-design-and-development-company-in-mumbai' },
    { t: 'Best Website Development Company Mumbai', h: '/best-website-design-and-development-company-in-mumbai' },
    { t: 'Top Website Company Mumbai', h: '/best-website-design-and-development-company-in-mumbai' },
  ]},
  { title: 'E-commerce — Mumbai', ico: 'M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0', color: '#F59E0B', links: [
    { t: 'Ecommerce Website Development Company Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Ecommerce Development Company in Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Ecommerce Website Design Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Online Store Development Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Shopify Development Company Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'WooCommerce Development Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Magento Development Company Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Ecommerce App Development Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'B2B Ecommerce Development Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'D2C Website Development Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Custom Ecommerce Platform Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
    { t: 'Marketplace Development Company Mumbai', h: '/ecommerce-website-development-company-in-mumbai' },
  ]},
  { title: 'Mobile App Development — Mumbai', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', color: '#10B981', links: [
    { t: 'Mobile App Development Company in Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'App Development Company in Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Mobile App Developers in Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Best Mobile App Development Company Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Top App Development Company Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'App Developers in Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Mobile Application Development Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Custom Mobile App Development Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Enterprise Mobile App Development Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'On Demand App Development Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Hire Mobile App Developers Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'App Development Services Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Startup App Development Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'MVP App Development Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'App Development Agency Mumbai', h: '/mobile-app-development-company-in-mumbai' },
    { t: 'Mobile App Developers in Mumbai', h: '/mobile-app-developers-in-mumbai' },
    { t: 'Hire Mobile App Developers in Mumbai', h: '/mobile-app-developers-in-mumbai' },
    { t: 'Best Mobile App Developers Mumbai', h: '/mobile-app-developers-in-mumbai' },
    { t: 'Enterprise App Developers Mumbai', h: '/mobile-app-developers-in-mumbai' },
  ]},
  { title: 'Android App Development — Mumbai', ico: 'M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z', color: '#34D399', links: [
    { t: 'Android App Development Company in Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Android App Developers Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Native Android App Development Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Kotlin App Development Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Java Android Development Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Hire Android Developers Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Play Store App Development Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Android Application Development Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Enterprise Android App Development Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Android App Maker Mumbai', h: '/android-app-development-company-in-mumbai' },
    { t: 'Android App Development in Mumbai', h: '/android-app-development-in-mumbai' },
    { t: 'Android Software Development Mumbai', h: '/android-app-development-in-mumbai' },
    { t: 'Custom Android App Mumbai', h: '/android-app-development-in-mumbai' },
  ]},
  { title: 'iOS App Development — Mumbai', ico: 'M12 2a10 10 0 100 20 10 10 0 000-20z', color: '#A78BFA', links: [
    { t: 'iOS App Development Company in Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'iPhone App Development Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'iPad App Development Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'Swift App Development Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'Hire iOS Developers Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'Native iOS App Development Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'Apple App Development Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'iOS Application Development Mumbai', h: '/ios-app-development-company-in-mumbai' },
    { t: 'iOS App Development in Mumbai', h: '/ios-app-development-in-mumbai' },
    { t: 'iPhone App Experts Mumbai', h: '/ios-app-development-in-mumbai' },
    { t: 'iOS Mobile App Mumbai', h: '/ios-app-development-in-mumbai' },
  ]},
  { title: 'Flutter App Development — Mumbai', ico: 'M4 4h6l6 6-6 6H4l6-6z', color: '#06B6D4', links: [
    { t: 'Flutter App Development Company in Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Flutter Developers Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Flutter App Development Services Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Dart App Development Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Cross Platform App Development Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Hire Flutter Developers Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Flutter Web Development Mumbai', h: '/flutter-app-development-company-in-mumbai' },
    { t: 'Flutter App Development in Mumbai', h: '/flutter-app-development-in-mumbai' },
    { t: 'Flutter Cross Platform App Mumbai', h: '/flutter-app-development-in-mumbai' },
    { t: 'Flutter Mobile App Mumbai', h: '/flutter-app-development-in-mumbai' },
  ]},
  { title: 'React Native Development — Mumbai', ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', color: '#3B82F6', links: [
    { t: 'React Native App Development Company in Mumbai', h: '/react-native-app-development-company-in-mumbai' },
    { t: 'React Native Developers Mumbai', h: '/react-native-app-development-company-in-mumbai' },
    { t: 'Hire React Native Developers Mumbai', h: '/react-native-app-development-company-in-mumbai' },
    { t: 'React Native Services Mumbai', h: '/react-native-app-development-company-in-mumbai' },
    { t: 'JavaScript Mobile App Development Mumbai', h: '/react-native-app-development-company-in-mumbai' },
    { t: 'React Native Agency Mumbai', h: '/react-native-app-development-company-in-mumbai' },
    { t: 'React Native App Developers in Mumbai', h: '/react-native-app-developers-in-mumbai' },
    { t: 'Hire React Native Developers Mumbai', h: '/react-native-app-developers-in-mumbai' },
    { t: 'React Native Mobile App Mumbai', h: '/react-native-app-developers-in-mumbai' },
  ]},
  { title: 'CRM & Software — Mumbai', ico: 'M12 2L2 7l10 5 10-5-10-5M2 17l10 5 10-5M2 12l10 5 10-5', color: '#7C3AED', links: [
    { t: 'CRM Software Development Company in Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'CRM Development Company in Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'CRM Software Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Custom CRM Software Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Enterprise CRM Development Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Sales CRM Software Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'CRM Developers Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'SaaS CRM Development Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Lead Management Software Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'CRM System Development Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Zoho Alternative CRM Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Salesforce Alternative Mumbai', h: '/crm-software-development-company-in-mumbai' },
    { t: 'Custom CRM Development Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Bespoke CRM Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Tailored CRM Software Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Custom CRM Solutions Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Industry Specific CRM Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Real Estate CRM Development Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Healthcare CRM Development Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Manufacturing CRM Mumbai', h: '/custom-crm-development-mumbai' },
    { t: 'Software Development Company in Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'IT Software Company Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'Custom Software Development Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'Web Application Development Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'Enterprise Software Development Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'SaaS Development Company Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'Software Developers Mumbai', h: '/software-development-company-in-mumbai' },
    { t: 'Node JS Development Company in Mumbai', h: '/node-js-development-company-in-mumbai' },
    { t: 'Node JS Developers Mumbai', h: '/node-js-development-company-in-mumbai' },
    { t: 'Backend Development Company Mumbai', h: '/node-js-development-company-in-mumbai' },
    { t: 'Node JS API Development Mumbai', h: '/node-js-development-company-in-mumbai' },
  ]},
  { title: 'Digital Marketing & SEO — Mumbai', ico: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '#EF4444', links: [
    { t: 'Digital Marketing Agency in Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Digital Marketing Company Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Digital Marketing Services Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Best Digital Marketing Agency Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Top Digital Marketing Company Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Digital Marketing Experts Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Online Marketing Agency Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Performance Marketing Agency Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Lead Generation Agency Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'Digital Marketing Consultants Mumbai', h: '/digital-marketing-agency-in-mumbai' },
    { t: 'SEO Services in Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'SEO Company in Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'Best SEO Company Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'Local SEO Services Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'SEO Agency in Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'Technical SEO Services Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'On Page SEO Services Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'SEO Experts Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'SEO Consultants Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'Ecommerce SEO Services Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'Hire SEO Expert Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'Affordable SEO Services Mumbai', h: '/seo-services-company-in-mumbai' },
    { t: 'SEO Services in Mumbai', h: '/seo-services-in-mumbai' },
    { t: 'SEO Services Mumbai', h: '/seo-services-in-mumbai' },
    { t: 'Organic Traffic Growth Mumbai', h: '/seo-services-in-mumbai' },
    { t: 'Search Engine Optimisation Mumbai', h: '/seo-services-in-mumbai' },
    { t: 'Google Ads Agency in Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Google Ads Management Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'PPC Agency Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'PPC Services Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Google Adwords Agency Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Google Ads Experts Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Adwords Management Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Google Ads Consultants Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Pay Per Click Agency Mumbai', h: '/google-ads-agency-in-mumbai' },
    { t: 'Paid Marketing Services in Mumbai', h: '/paid-marketing-services-in-mumbai' },
    { t: 'Paid Marketing Mumbai', h: '/paid-marketing-services-in-mumbai' },
    { t: 'Performance Marketing Services Mumbai', h: '/paid-marketing-services-in-mumbai' },
    { t: 'Paid Advertising Agency Mumbai', h: '/paid-marketing-services-in-mumbai' },
    { t: 'Social Media Marketing Agency Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Social Media Marketing Company Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Instagram Marketing Agency Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Facebook Ads Agency Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Meta Ads Agency Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Social Media Management Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'LinkedIn Marketing Agency Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Social Media Services Mumbai', h: '/social-media-marketing-agency-mumbai' },
    { t: 'Social Media Marketing in Mumbai', h: '/social-media-marketing-in-mumbai' },
    { t: 'Social Media Marketing Mumbai', h: '/social-media-marketing-in-mumbai' },
    { t: 'Paid Social Campaigns Mumbai', h: '/social-media-marketing-in-mumbai' },
    { t: 'Social Media Advertising Mumbai', h: '/social-media-marketing-in-mumbai' },
  ]},
  { title: 'Video, Animation & Design — Mumbai', ico: 'M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.9L15 14M3 8h12v8H3z', color: '#F97316', links: [
    { t: 'Corporate Video Production Company in Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Video Production Company Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Corporate Film Makers Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Brand Film Production Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Ad Film Production Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Drone Video Production Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Product Video Shoot Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Corporate Video Makers Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Commercial Video Production Mumbai', h: '/corporate-video-production-company-in-mumbai' },
    { t: 'Corporate Video Production Company Mumbai', h: '/corporate-video-production-company-mumbai' },
    { t: 'Brand Video Production Mumbai', h: '/corporate-video-production-company-mumbai' },
    { t: 'Business Video Production Mumbai', h: '/corporate-video-production-company-mumbai' },
    { t: 'Corporate Videography Mumbai', h: '/corporate-video-production-company-mumbai' },
    { t: 'Corporate Film Makers in Mumbai', h: '/corporate-film-makers-in-mumbai' },
    { t: 'Corporate Filmmakers Mumbai', h: '/corporate-film-makers-in-mumbai' },
    { t: 'Marketing Video Production Mumbai', h: '/corporate-film-makers-in-mumbai' },
    { t: 'Business Film Makers Mumbai', h: '/corporate-film-makers-in-mumbai' },
    { t: 'Corporate Video Makers in Mumbai', h: '/corporate-video-makers-in-mumbai' },
    { t: 'Promotional Video Makers Mumbai', h: '/corporate-video-makers-in-mumbai' },
    { t: 'Brand Video Makers Mumbai', h: '/corporate-video-makers-in-mumbai' },
    { t: 'Promotional Video Production Mumbai', h: '/corporate-video-makers-in-mumbai' },
    { t: '2D Animation Studio in Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: '2D Animation Company Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Explainer Video Company Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Animated Explainer Videos Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Character Animation Studio Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Whiteboard Animation Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Motion Graphics Company Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Motion Graphics Service in Mumbai', h: '/motion-graphics-service-in-mumbai' },
    { t: 'Motion Graphics Mumbai', h: '/motion-graphics-service-in-mumbai' },
    { t: 'Digital Animation Mumbai', h: '/motion-graphics-service-in-mumbai' },
    { t: 'After Effects Animation Mumbai', h: '/motion-graphics-service-in-mumbai' },
    { t: 'Animation Services Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: 'Product Explainer Video Mumbai', h: '/2d-animation-studio-in-mumbai' },
    { t: '2D Animation Service in Mumbai', h: '/2d-animation-service-in-mumbai' },
    { t: 'Animation Service Mumbai', h: '/2d-animation-service-in-mumbai' },
    { t: 'Animated Video Service Mumbai', h: '/2d-animation-service-in-mumbai' },
    { t: 'Animated Video Creators in Mumbai', h: '/animated-video-creators-in-mumbai' },
    { t: 'Animation Video Creators Mumbai', h: '/animated-video-creators-in-mumbai' },
    { t: 'Brand Animation Service Mumbai', h: '/animated-video-creators-in-mumbai' },
    { t: 'Animated Video Production Mumbai', h: '/animated-video-creators-in-mumbai' },
    { t: 'Graphic Design Company in Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Branding Agency Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Logo Design Company Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Brand Identity Design Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'UI UX Design Company Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Packaging Design Company Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Brochure Design Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Brand Identity Agency Mumbai', h: '/graphic-design-company-in-mumbai' },
    { t: 'Creative Agency Mumbai', h: '/graphic-design-company-in-mumbai' },
  ]},
  { title: 'B2B Marketing — Mumbai', ico: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z', color: '#0EA5E9', links: [
    { t: 'B2B Marketing Agency in Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'LinkedIn Lead Generation Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'B2B Lead Generation Company Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'Account Based Marketing Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'ABM Agency Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'B2B Digital Marketing Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'Enterprise Marketing Agency Mumbai', h: '/b2b-marketing-agency-in-mumbai' },
    { t: 'B2B Marketing Company in Mumbai', h: '/b2b-marketing-company-in-mumbai' },
    { t: 'B2B Digital Marketing Company Mumbai', h: '/b2b-marketing-company-in-mumbai' },
    { t: 'B2B Marketing Services Mumbai', h: '/b2b-marketing-company-in-mumbai' },
  ]},
]

export function SeoKeywords() {
  return (
    <section style={{ background: 'var(--navy3)', padding: '28px 0' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '0 clamp(16px,4vw,24px)' }}>
        {SEO_CATS.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: ci < SEO_CATS.length - 1 ? 14 : 0 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px 7px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 10.5, fontWeight: 700, color: cat.color, background: `${cat.color}15`, border: `1px solid ${cat.color}25`, borderRadius: 4, padding: '2px 8px', marginRight: 2, whiteSpace: 'nowrap', flexShrink: 0 }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={cat.color} strokeWidth="2.5" strokeLinecap="round"><path d={cat.ico} /></svg>
                {cat.title}
              </span>
              {cat.links.map((l, li) => (
                <span key={li} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <a href={l.h} style={{ fontSize: 11, color: 'rgba(255,255,255,.28)', textDecoration: 'none', transition: 'color .15s', lineHeight: 1.6 }}
                    onMouseEnter={e => e.target.style.color = cat.color}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.28)'}>
                    {l.t}
                  </a>
                  {li < cat.links.length - 1 && <span style={{ color: 'rgba(255,255,255,.08)', margin: '0 3px', fontSize: 8 }}>|</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="main-footer" aria-label="Footer">

      {/* ── MAIN FOOTER ── */}
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: 'clamp(36px,6vw,56px) clamp(16px,4vw,24px) 0' }}>
        <div className="row g-4 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,.06)' }}>

          {/* Brand column */}
          <div className="col-12 col-lg-3 mb-2">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <img src={SITE.logo} alt="Nakshatra Namaha Creations NNC Digital Logo" width={44} height={44} style={{ borderRadius: 10, objectFit: 'contain' }} />
              <span className="ft-brand">{SITE.name}</span>
            </div>
            <p className="ft-desc">
              Full-stack digital agency in Bangalore. Website development, mobile apps, CRM software, digital marketing, 2D animation &amp; corporate video production. 565+ projects since 2015.
            </p>
            <div className="d-flex flex-column gap-2 mb-4">
              <a href={SITE.phoneHref} className="ft-cl">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="ft-cl">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" /></svg>
                {SITE.email}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="ft-cl">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /></svg>
                WhatsApp Us
              </a>
            </div>
            {/* Social */}
            <div className="d-flex gap-2">
              {[
                { href: SITE.social.instagram, icon: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></> },
                { href: SITE.social.linkedin, icon: <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /> },
                { href: SITE.social.youtube, icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
                { href: SITE.social.facebook, icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="ft-soc">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="ft-col-h">Services</div>
            <a href="/website-development-company-in-bangalore" className="ft-link">Website Development</a>
            <a href="/mobile-app-development-company-in-bangalore" className="ft-link">Mobile App Development</a>
            <a href="/custom-crm-development" className="ft-link">CRM & Custom Software</a>
            <a href="/digital-marketing-agency-in-bangalore" className="ft-link">Digital Marketing & SEO</a>
            <a href="/corporate-video-production-company-in-bangalore" className="ft-link">Corporate Video Production</a>
            <a href="/graphic-design-company-in-bangalore" className="ft-link">Graphic Design & Branding</a>
            <a href="/2d-animation-studio-in-bangalore" className="ft-link">2D Animation</a>
            <a href="/b2b-marketing-agency-in-bangalore" className="ft-link">B2B Marketing</a>
          </div>

          {/* Company */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="ft-col-h">Company</div>
            <a href="/about-us" className="ft-link">About Us</a>
            <a href="/our-team" className="ft-link">Our Team</a>
            <a href="/client-reviews" className="ft-link">Client Reviews</a>
            <a href="/case-studies" className="ft-link">Case Studies</a>
            <a href="/process" className="ft-link">Our Process</a>
            <a href="/pricing" className="ft-link">Pricing Guide</a>
            <a href="/careers" className="ft-link">Careers</a>
            <a href="/contact-us" className="ft-link">Contact Us</a>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-3 col-lg-2">
            <div className="ft-col-h">Resources</div>
            <a href="/blog" className="ft-link">Blog & Insights</a>
            <a href="/privacy" className="ft-link">Privacy Policy</a>
            <a href="/terms" className="ft-link">Terms of Service</a>
          </div>

          {/* Offices */}
          <div className="col-6 col-md-3 col-lg-3">
            <div className="ft-col-h">Our Offices</div>
            {OFFICES.map((o, i) => (
              <div key={i} className="ft-office">
                <div className="ft-office-city">
                  <span className="ft-office-dot" style={{ animationDelay: `${i * 0.5}s` }} />
                  {o.city} <span className="ft-office-type">· {o.type}</span>
                </div>
                <div className="ft-office-addr">{o.address}, {o.pin}</div>
              </div>
            ))}
            <div style={{ marginTop: 16 }}>
              <div className="ft-col-h">Working Hours</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)', lineHeight: 1.6 }}>
                Mon – Sat: 9:00 AM – 7:00 PM IST<br />Sunday: Closed
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3" style={{ padding: '20px 0' }}>
          <p className="ft-copy mb-0">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <div className="d-flex align-items-center flex-wrap gap-3">
            <span className="ft-copy">Bengaluru</span>
            <span className="ft-copy">·</span>
            <span className="ft-copy">Mumbai</span>
            <span className="ft-copy">·</span>
            <span className="ft-copy">Mysuru</span>
            <span className="ft-copy">·</span>
            <span className="ft-copy">Hyderabad</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ── FLOATING WHATSAPP ────────────────────────────────────────── */
// Replaced by the WhatsAppChat chatbot in layout.js render nothing here.
export function WaFloat() {
  return null
}
