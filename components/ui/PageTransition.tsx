'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

/**
 * PageTransition — fade veloce (180ms) senza y-offset.
 * Il y-offset precedente (y: 20→0) aggiungeva 400ms di latenza percepita
 * e conflictava con Lenis che ristabilisce la posizione scroll indipendentemente.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
