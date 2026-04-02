'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.8 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.29 6.29l1.13-1.13a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  )
}

export default function StickyCallButton() {
  const pathname = usePathname()
  const isContactPage = pathname === '/contatti'

  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-[90] flex justify-center px-6"
          // paddingBottom handles safe area once — env() is 0 on Android, ~34px on iPhone
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 16px)' }}
        >
          <a
            href="tel:+390544000000"
            className="flex items-center justify-center gap-2.5 w-full max-w-sm py-4 bg-sea text-cream rounded-full shadow-[0_12px_40px_rgba(27,79,107,0.35)] font-jost text-[11px] tracking-[0.22em] uppercase transition-transform active:scale-[0.97]"
          >
            <PhoneIcon />
            Chiama Ora
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
