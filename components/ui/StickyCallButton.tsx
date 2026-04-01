'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCallButton() {
  const pathname = usePathname()
  
  // Hide on contact page
  const isContactPage = pathname === '/contatti'
  
  return (
    <AnimatePresence>
      {!isContactPage && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1 }}
          className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[calc(100%-48px)] max-w-sm"
        >
          <a
            href="tel:+390544000000"
            className="flex items-center justify-center gap-3 w-full py-4 bg-sea text-cream rounded-full shadow-[0_12px_40px_rgba(27,79,107,0.3)] font-jost text-[12px] tracking-[0.2em] uppercase transition-transform active:scale-95"
            style={{ 
              backdropFilter: 'blur(8px)',
              paddingBottom: 'calc(1rem + env(safe-area-inset-bottom))',
              marginBottom: 'env(safe-area-inset-bottom)'
            }}
          >
            <span className="text-lg">📞</span>
            Chiama Ora
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
