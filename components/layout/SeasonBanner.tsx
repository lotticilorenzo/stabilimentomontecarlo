'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function SeasonBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isDismissed = sessionStorage.getItem('season-banner-dismissed')
    const initialVisible = !isDismissed
    setIsVisible(initialVisible)
    window.dispatchEvent(new CustomEvent('seasonBannerState', { detail: { visible: initialVisible } }))
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('season-banner-dismissed', 'true')
    window.dispatchEvent(new CustomEvent('seasonBannerState', { detail: { visible: false } }))
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full overflow-hidden"
          style={{ backgroundColor: '#1B4F6B' }}
        >
          <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-4 relative">
            {/* Wave icon */}
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" style={{ color: 'rgba(201,168,76,0.8)' }} aria-hidden="true">
              <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
            </svg>

            <p className="font-jost text-[11px] md:text-[12px] tracking-[0.12em] text-cream/75 text-center">
              Stagione estiva{' '}
              <span className="text-cream font-medium">2025</span>
              {' '}—{' '}
              Aperto dal{' '}
              <span className="text-cream font-medium">1° Maggio</span>
              {' '}al{' '}
              <span className="text-cream font-medium">30 Settembre</span>
            </p>

            {/* CTA prenotazione */}
            <Link
              href="/contatti"
              className="hidden sm:block font-jost text-[10px] tracking-[0.2em] uppercase px-4 py-1 border shrink-0 transition-colors duration-300"
              style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(201,168,76,0.75)' }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#C9A84C'
                el.style.color = '#C9A84C'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(201,168,76,0.4)'
                el.style.color = 'rgba(201,168,76,0.75)'
              }}
            >
              Prenota
            </Link>

            <button
              onClick={handleDismiss}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-1 transition-colors"
              aria-label="Chiudi banner"
              style={{ color: 'rgba(250,250,248,0.3)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(250,250,248,0.65)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(250,250,248,0.3)' }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

