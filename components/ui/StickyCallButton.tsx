'use client'

import { motion } from 'framer-motion'

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.13-1.13a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}

/**
 * PhoneFAB — piccolo bottone circolare fisso in basso a destra.
 * Stacked sotto il widget WhatsApp, stessa estetica FAB.
 */
export default function StickyCallButton() {
  return (
    <motion.a
      href="tel:+390544123456"
      aria-label="Chiama Bagno Montecarlo"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed z-[90] flex items-center justify-center text-cream"
      style={{
        right: '24px',
        bottom: 'calc(env(safe-area-inset-bottom, 0px) + 24px)',
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        backgroundColor: '#1B4F6B',
        boxShadow: '0 4px 20px rgba(27,79,107,0.40)',
      }}
    >
      <PhoneIcon />
    </motion.a>
  )
}
