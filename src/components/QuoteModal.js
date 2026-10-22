'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Honeypot, TurnstileWidget, readTurnstileToken } from '@/utils/formSpamProtection'

const SERVICES = [
  'Website Development',
  'Mobile App Development',
  'CRM / Software Development',
  'Digital Marketing & SEO',
  '2D Animation',
  'Corporate Video Production',
  'Graphic Design',
  'Other',
]

export default function QuoteModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', landingPage: '' })
  const [errors, setErrors] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [hp, setHp] = useState('')
  const [cfToken, setCfToken] = useState('')
  const [captchaKey, setCaptchaKey] = useState(0)
  const renderedAt = useRef(0)
  const captchaPassed = cfToken === '__no_captcha__' || cfToken.length > 0

  const openModal = useCallback(() => {
    setOpen(true)
    setErrors({ name: '', phone: '', email: '', service: '', message: '' });
    setError('')
    setHp('')
    setCfToken('')
    setCaptchaKey(k => k + 1)
    renderedAt.current = Date.now()
    setForm({ name: '', phone: '', email: '', service: '', message: '', landingPage: typeof window !== 'undefined' ? window.location.pathname : '/' })
  }, [])

  const closeModal = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const handler = () => openModal()
    window.addEventListener('open-quote', handler)
    return () => window.removeEventListener('open-quote', handler)
  }, [openModal])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, closeModal])

  // Validation helpers
  const validateName = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Full name is required';
    if (!/^[A-Za-z\s]+$/.test(trimmed)) return 'Only alphabets and spaces allowed (no numbers or special characters)';
    if (trimmed.length < 2) return 'At least 2 characters';
    return '';
  };

  const validatePhone = (value) => {
    const digits = value.replace(/\D/g, '');
    if (!digits) return 'Phone number is required';
    if (digits.length !== 10) return 'Enter a valid 10-digit mobile number (India)';
    return '';
  };

  const validateEmail = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return 'Email is required';
    // Strict email regex – requires @ and domain
    const re = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
    if (!re.test(trimmed)) return 'Enter a valid email (e.g., name@domain.com)';
    if (trimmed.includes(' ')) return 'Email cannot contain spaces';
    return '';
  };

  const validateService = (value) => {
    if (!value) return 'Please select a service';
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
      case 'service': errorMsg = validateService(value); break;
      case 'message': errorMsg = validateMessage(value); break;
      default: return;
    }
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    let filteredValue = value;

    if (name === 'name') {
      // Only letters and spaces
      filteredValue = value.replace(/[^A-Za-z\s]/g, '');
    } else if (name === 'phone') {
      // Only digits, max 10
      filteredValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (name === 'message') {
      // Replace multiple spaces with a single space
      filteredValue = value.replace(/\s+/g, ' ').trimStart();
      // Note: trimStart() prevents leading space, but keeps single spaces between words
    }

    setForm(f => ({ ...f, [name]: filteredValue }));

    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Validate all required fields
    const nameErr = validateName(form.name);
    const phoneErr = validatePhone(form.phone);
    const emailErr = validateEmail(form.email);
    const serviceErr = validateService(form.service);
    const messageErr = validateMessage(form.message);

    if (nameErr || phoneErr || emailErr || serviceErr || messageErr) {
      setErrors({
        name: nameErr,
        phone: phoneErr,
        email: emailErr,
        service: serviceErr,
        message: messageErr,
      });
      setError(''); // clear generic error
      return;
    }
    // Clear all errors if validation passes
    setErrors({ name: '', phone: '', email: '', service: '', message: '' });
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, company_website: hp, renderedAt: renderedAt.current, cfToken: cfToken === '__no_captcha__' ? '' : (cfToken || readTurnstileToken()) }),
      })
      const data = await res.json()
      if (res.ok) {
        closeModal()
        router.push('/thankyou')
      } else {
        setError(data.error || 'Something went wrong. Please try again or call us directly.')
      }
    } catch {
      setError('Network error. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null

  return (
    <div
      style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
    >
      {/* Backdrop */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,14,37,.75)', backdropFilter: 'blur(4px)' }} />

      {/* Modal box */}
      <div
        style={{ position: 'relative', background: '#fff', borderRadius: 16, width: '100%', maxWidth: 520, maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 24px 64px rgba(0,0,0,.35)' }}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          style={{ position: 'absolute', top: 16, right: 16, width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #E2E8F0', background: '#F8FAFC', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Form State ── */}
        <div style={{ padding: '36px 40px 40px' }}>
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: 'inline-block', background: '#EFF6FF', color: '#2196F3', fontSize: 11.5, fontWeight: 700, padding: '4px 10px', borderRadius: 20, marginBottom: 10, letterSpacing: '.04em', textTransform: 'uppercase' }}>
              Free Quote 24hrs
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0B1F4B', margin: '0 0 6px', lineHeight: 1.2 }}>
              Tell Us About Your Project
            </h2>
            <p style={{ fontSize: 14, color: '#64748B', margin: 0 }}>Fixed price. No surprises. Source code is yours.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <Honeypot value={hp} onChange={setHp} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
              {/* Name - left column */}
              <div style={{ gridColumn: '1' }}>
                <label style={labelStyle}>Your Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Name"
                  style={{ ...inputStyle, borderColor: errors.name ? '#EF4444' : '#E2E8F0' }}
                />
                {errors.name && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 4 }}>{errors.name}</div>}
              </div>

              {/* Phone - right column */}
              <div style={{ gridColumn: '2' }}>
                <label style={labelStyle}>Phone (10 digits) *</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Number"
                  style={{ ...inputStyle, borderColor: errors.phone ? '#EF4444' : '#E2E8F0' }}
                />
                {errors.phone && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 4 }}>{errors.phone}</div>}
              </div>

              {/* Email - full width */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Email *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter Email"
                  style={{ ...inputStyle, borderColor: errors.email ? '#EF4444' : '#E2E8F0' }}
                />
                {errors.email && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 4 }}>{errors.email}</div>}
              </div>

              {/* Service Needed - required, full width */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Service Needed *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  style={{
                    ...inputStyle,
                    borderColor: errors.service ? '#EF4444' : '#E2E8F0',
                    color: form.service ? '#0B1F4B' : '#94A3B8'
                  }}
                >
                  <option value="">Select a service…</option>
                  {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 4 }}>{errors.service}</div>}
              </div>

              {/* Message - required, full width */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={labelStyle}>Tell us more *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Brief description of your project, budget or timeline… (minimum 10 characters)"
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: 80, borderColor: errors.message ? '#EF4444' : '#E2E8F0' }}
                />
                {errors.message && <div style={{ color: '#EF4444', fontSize: 11, marginTop: 4 }}>{errors.message}</div>}
              </div>
            </div>

            {error && (
              <p style={{ color: '#EF4444', fontSize: 13, marginTop: 10, marginBottom: 0 }}>{error}</p>
            )}

            <TurnstileWidget key={captchaKey} theme="light" onVerify={setCfToken} />
            {!captchaPassed && (
              <div style={{ fontSize: 12, color: '#64748B', marginTop: 4 }}>Please complete the verification above to enable sending.</div>
            )}

            <button
              type="submit"
              disabled={loading || !captchaPassed || Object.values(errors).some(err => err !== '')}
              style={{ marginTop: 18, width: '100%', background: (loading || !captchaPassed) ? '#93C5FD' : '#2196F3', color: '#fff', border: 'none', borderRadius: 8, padding: '14px', fontSize: 15, fontWeight: 700, cursor: (loading || !captchaPassed) ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background .2s' }}
            >
              {loading ? 'Sending…' : (
                <>
                  Get My Free Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
            <p style={{ textAlign: 'center', fontSize: 12, color: '#94A3B8', marginTop: 12, marginBottom: 0 }}>
              We reply within 24 hours · No spam · No obligation
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

const labelStyle = { display: 'block', fontSize: 12.5, fontWeight: 600, color: '#374151', marginBottom: 5 }
const inputStyle = { width: '100%', padding: '10px 13px', border: '1.5px solid #E2E8F0', borderRadius: 8, fontSize: 14, color: '#0B1F4B', background: '#fff', outline: 'none', boxSizing: 'border-box', fontFamily: 'inherit' }
