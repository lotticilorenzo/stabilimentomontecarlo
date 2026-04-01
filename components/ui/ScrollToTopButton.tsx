'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * ScrollToTopButton
 * Appears after 500px of scroll in the bottom-right corner.
 * Circle with arrow — smooth scrolls to top on click.
 */
export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={scrollToTop}
          aria-label="Torna in cima alla pagina"
          className="fixed z-[900] flex items-center justify-center transition-all duration-300"
          style={{
            bottom: 'calc(2rem + env(safe-area-inset-bottom))',
            right: '2rem',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            border: '1px solid rgba(26,26,24,0.18)',
            backgroundColor: 'rgba(245,237,216,0.92)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 24px rgba(26,26,24,0.08)',
            cursor: 'none', // keep custom cursor active
          }}
          whileHover={{ scale: 1.08, borderColor: '#C9A84C' }}
          whileTap={{ scale: 0.94 }}
        >
          {/* Arrow up */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="#1A1A18"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M8 13V3M3 8l5-5 5 5" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
