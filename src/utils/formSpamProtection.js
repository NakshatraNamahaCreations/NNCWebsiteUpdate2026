'use client'
import { useRef } from 'react'

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
