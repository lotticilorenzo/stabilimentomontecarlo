'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

// ── Singleton globale — altri componenti possono usarlo se necessario ──────────
let _lenis: Lenis | null = null
export const getLenis = () => _lenis

export default function SmoothScroll() {
  const pathname = usePathname()

  // ── Inizializza Lenis una sola volta ─────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2,
    })

    _lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      _lenis = null
    }
  }, [])

  // ── Resetta lo scroll via Lenis ad ogni cambio pagina ────────────────────
  // IMPORTANTE: usare lenis.scrollTo(0) e NON window.scrollTo —
  // window.scrollTo bypassa lo stato interno di Lenis e causa desync
  useEffect(() => {
    _lenis?.scrollTo(0, { immediate: true })
  }, [pathname])

  return null
}
