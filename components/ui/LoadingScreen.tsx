'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LETTERS = 'MONTECARLO'.split('')

/**
 * LoadingScreen
 * Elegant splash screen shown once per session.
 * Letters of "MONTECARLO" appear one-by-one, then the screen fades out.
 * Uses sessionStorage to only show on first load of the session.
 */
export default function LoadingScreen() {
  const [show, setShow] = useState(false)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Only show once per browser session
    const seen = sessionStorage.getItem('mc_loading_seen')
    if (seen) return

    setShow(true)
    // Block body scroll during loading
    document.body.style.overflow = 'hidden'

    // After letter animations complete (1500ms) → start exit
    const exitTimer = setTimeout(() => setExiting(true), 1600)

    // After exit animation (400ms) → hide completely, restore scroll
    const hideTimer = setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
      sessionStorage.setItem('mc_loading_seen', '1')
    }, 2000)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(hideTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!show) return null

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ backgroundColor: '#1A1A18' }}
          aria-hidden="true"
        >
          {/* Wave SVG background */}
          <svg
            className="absolute bottom-0 left-0 w-full opacity-[0.04]"
            viewBox="0 0 1440 200"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M0 100 C360 200 720 0 1080 100 C1260 150 1380 50 1440 100 L1440 200 L0 200Z"
              fill="#3A7FA0"
            />
          </svg>

          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cormorant-sc text-[9px] tracking-[0.55em] uppercase mb-6 block"
            style={{ color: 'rgba(250,250,248,0.3)' }}
          >
            Ravenna · Adriatico
          </motion.span>

          {/* MONTECARLO — letter by letter */}
          <div className="flex items-baseline overflow-hidden" aria-label="Montecarlo">
            {LETTERS.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.25 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-cormorant font-light text-cream"
                style={{
                  fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
                  letterSpacing: '0.3em',
                  lineHeight: 1,
                  display: 'inline-block',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: '#C9A84C',
              opacity: 0.55,
              marginTop: '20px',
              transformOrigin: 'center',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
