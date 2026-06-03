'use client'
import { useRef, useEffect } from 'react'

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
 * Reads the latest Turnstile token at submit time.
 * Returns '' if Turnstile isn't loaded yet, no site key is configured,
 * or the widget hasn't been rendered. In all those cases the backend
 * will treat the submission as "no captcha attempted" and still process
 * it (the secret check is a no-op when TURNSTILE_SECRET is unset).
 */
export function readTurnstileToken() {
  if (typeof document === 'undefined') return ''
  const input = document.querySelector('[name="cf-turnstile-response"]')
  return input?.value || ''
}

/**
 * Renders the Cloudflare Turnstile widget if the site key is configured.
 * When the key is missing (e.g. during local dev before keys are issued),
 * the widget is silently omitted so the form still works.
 *
 * The widget injects a hidden <input name="cf-turnstile-response"> with the
 * token that readTurnstileToken() picks up at submit time.
 */
export function TurnstileWidget({ theme = 'light' }) {
  const ref = useRef(null)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey || !ref.current) return
    let cancelled = false
    let widgetId = null
    const tryRender = () => {
      if (cancelled) return
      const ts = typeof window !== 'undefined' ? window.turnstile : null
      if (ts && ref.current) {
        try {
          ref.current.innerHTML = ''
          widgetId = ts.render(ref.current, { sitekey: siteKey, theme })
        } catch {
          // ignore — widget already rendered or invalid key
        }
      } else {
        setTimeout(tryRender, 300)
      }
    }
    tryRender()
    return () => {
      cancelled = true
      const ts = typeof window !== 'undefined' ? window.turnstile : null
      if (ts && widgetId != null) {
        try { ts.remove(widgetId) } catch {}
      }
    }
  }, [siteKey, theme])

  if (!siteKey) return null
  return <div ref={ref} style={{ margin: '12px 0' }} />
}
