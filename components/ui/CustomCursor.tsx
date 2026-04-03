'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

/**
 * CustomCursor — Dot + Ring
 * - Dot piccolo (6px) segue il mouse esattamente
 * - Anello più grande (28px) segue con lag (lerp 0.12)
 * - Su hover: anello si espande a 48px, colore oro
 * - Niente mix-blend-mode → sempre visibile su qualsiasi sfondo
 * - Su touch device: non renderizzato
 */

const MAGNETIC_SELECTORS = [
  'a[href="/contatti"]',
  'button[type="submit"]',
  '.cta-magnetic',
].join(', ')

const MAGNETIC_RADIUS   = 80    // px — detection range
const MAGNETIC_STRENGTH = 0.28  // 0–1 pull factor

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  const mousePos      = useRef({ x: -100, y: -100 })
  const ringPos       = useRef({ x: -100, y: -100 })
  const rafRef        = useRef<number>(0)
  const isHoveringRef = useRef(false)

  const [isVisible,  setIsVisible]  = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  // ── Animation loop ─────────────────────────────────────────────────────────
  const animate = useCallback(() => {
    // Continuiamo il loop anche se i ref non ci sono ancora (a causa del setState isVisible)
    rafRef.current = requestAnimationFrame(animate)

    if (!dotRef.current || !ringRef.current) return

    // Dot: segue esattamente
    dotRef.current.style.transform =
      `translate(${mousePos.current.x - 3}px, ${mousePos.current.y - 3}px)`

    // Ring: segue con lerp
    ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
    ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12

    const ringSize = isHoveringRef.current ? 48 : 28
    ringRef.current.style.transform =
      `translate(${ringPos.current.x - ringSize / 2}px, ${ringPos.current.y - ringSize / 2}px)`
  }, [])

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches
    if (isTouch) return

    setIsVisible(true)
    rafRef.current = requestAnimationFrame(animate)

    // Cache magnetic elements — queried once on mount, refreshed every 800ms
    // to catch dynamic DOM changes without hammering querySelectorAll on every event
    let cachedEls: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>(MAGNETIC_SELECTORS))
    const refreshInterval = setInterval(() => {
      cachedEls = Array.from(document.querySelectorAll<HTMLElement>(MAGNETIC_SELECTORS))
    }, 800)

    const onMouseMove = (e: MouseEvent) => {
      let tx = e.clientX
      let ty = e.clientY

      // Magnetismo sui CTA
      for (const el of cachedEls) {
        const rect = el.getBoundingClientRect()
        const cx   = rect.left + rect.width  / 2
        const cy   = rect.top  + rect.height / 2
        const dx   = e.clientX - cx
        const dy   = e.clientY - cy
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MAGNETIC_RADIUS) {
          const pull = (1 - dist / MAGNETIC_RADIUS) * MAGNETIC_STRENGTH
          tx = e.clientX - dx * pull
          ty = e.clientY - dy * pull
          break
        }
      }
      mousePos.current = { x: tx, y: ty }
    }

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const hovering = !!el?.closest('a, button, [role="button"], input, textarea, select, label')
      isHoveringRef.current = hovering
      setIsHovering(hovering)
    }

    const onOut = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const stillHovering = !!el?.closest('a, button, [role="button"], input, textarea, select, label')
      if (!stillHovering) {
        isHoveringRef.current = false
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout',  onOut)

    return () => {
      cancelAnimationFrame(rafRef.current)
      clearInterval(refreshInterval)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout',  onOut)
    }
  }, [animate])

  if (!isVisible) return null

  return (
    <>
      {/* Dot — piccolo, segue esattamente */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99999] select-none"
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: isHovering ? '#C9A84C' : '#3A7FA0',
          boxShadow: '0 0 4px rgba(250, 250, 248, 0.4)', // White glow to ensure visibility on black
          transition: 'background-color 200ms ease',
          willChange: 'transform',
        }}
      />

      {/* Ring — più grande, segue con lag */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[99998] select-none"
        style={{
          width:  isHovering ? '48px' : '28px',
          height: isHovering ? '48px' : '28px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? '#C9A84C' : '#3A7FA0'}`,
          backgroundColor: isHovering ? 'rgba(201,168,76,0.06)' : 'rgba(58,127,160,0.06)',
          transition: [
            'width 280ms cubic-bezier(0.25,0.1,0.25,1)',
            'height 280ms cubic-bezier(0.25,0.1,0.25,1)',
            'border-color 200ms ease',
            'background-color 200ms ease',
          ].join(', '),
          willChange: 'transform',
        }}
      />
    </>
  )
}
