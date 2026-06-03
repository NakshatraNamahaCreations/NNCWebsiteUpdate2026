'use client'
import { useRef, useEffect, useState } from 'react'

export function useRenderedAt() {
  const ref = useRef(Date.now())
  return ref
}

export function Honeypot({ value, onChange }) {
  return (
    <input
      type="text"
      name="company_website"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px', top: 'auto', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }}
    />
  )
}

/**
 * Reads the latest reCAPTCHA token at submit time.
 * Falls back to scanning the first non-empty g-recaptcha-response textarea
 * (necessary when multiple widgets exist on the page — modal + inline form).
 */
export function readTurnstileToken() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return ''
  const inputs = document.querySelectorAll('textarea[name="g-recaptcha-response"]')
  for (const el of inputs) {
    if (el.value) return el.value
  }
  return ''
}

/**
 * Google reCAPTCHA v2 "I'm not a robot" checkbox.
 *
 * Handles multiple widgets on the same page (inline form + modal popup)
 * by rendering each into its own container and tracking its widget ID.
 *
 * Props:
 *   theme    — 'light' | 'dark'
 *   onVerify — called with the token string when user passes, '' when expired/error
 */
export function TurnstileWidget({ theme = 'light', onVerify }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)
  const onVerifyRef = useRef(onVerify)
  const [errorMsg, setErrorMsg] = useState(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  useEffect(() => { onVerifyRef.current = onVerify }, [onVerify])

  useEffect(() => {
    if (!siteKey) {
      if (onVerifyRef.current) onVerifyRef.current('__no_captcha__')
      return
    }
    if (!containerRef.current) return

    let cancelled = false
    let pollTimer = null

    const renderWidget = () => {
      if (cancelled) return
      const g = typeof window !== 'undefined' ? window.grecaptcha : null
      if (!g || !g.render) {
        pollTimer = setTimeout(renderWidget, 250)
        return
      }
      if (!containerRef.current) return

      // Create a fresh inner div for grecaptcha to render into. This avoids
      // the "reCAPTCHA has already been rendered in this element" error when
      // the component remounts (e.g. modal opens twice).
      const inner = document.createElement('div')
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(inner)

      try {
        widgetIdRef.current = g.render(inner, {
          sitekey: siteKey,
          theme,
          callback: (token) => {
            if (cancelled) return
            setErrorMsg(null)
            if (onVerifyRef.current) onVerifyRef.current(token || '')
          },
          'expired-callback': () => {
            if (cancelled) return
            if (onVerifyRef.current) onVerifyRef.current('')
          },
          'error-callback': () => {
            if (cancelled) return
            setErrorMsg('Verification could not load. Refresh or disable ad-blockers.')
            if (onVerifyRef.current) onVerifyRef.current('')
          },
        })
        if (!cancelled) setErrorMsg(null)
      } catch (e) {
        // Most common cause: trying to render into a container that already
        // has a widget. Wait a beat and try again with a fresh container.
        if (!cancelled) {
          console.warn('[recaptcha] render failed, retrying:', e?.message || e)
          pollTimer = setTimeout(renderWidget, 400)
        }
      }
    }

    renderWidget()

    return () => {
      cancelled = true
      if (pollTimer) clearTimeout(pollTimer)
      if (containerRef.current) {
        try { containerRef.current.innerHTML = '' } catch {}
      }
      widgetIdRef.current = null
    }
  }, [siteKey, theme])

  if (!siteKey) return null
  return (
    <div style={{ margin: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div ref={containerRef} />
      {errorMsg && (
        <div style={{ fontSize: 11, color: '#EF4444', marginTop: 6 }}>{errorMsg}</div>
      )}
    </div>
  )
}
