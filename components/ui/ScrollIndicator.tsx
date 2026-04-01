'use client'

import { motion } from 'framer-motion'

interface ScrollIndicatorProps {
  color?: 'light' | 'dark'
  className?: string
}

export default function ScrollIndicator({ color = 'light', className = '' }: ScrollIndicatorProps) {
  const textColor = color === 'light' ? 'text-cream/60' : 'text-dark/80'
  const borderColor = color === 'light' ? 'border-cream/40' : 'border-dark/30'
  const dotColor = color === 'light' ? 'bg-cream/70' : 'bg-dark/60'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className={`flex flex-col items-center gap-3 ${textColor} ${className}`}
      aria-hidden="true"
    >
      <span className="font-jost text-[10px] tracking-[0.3em] uppercase">Scorri</span>

      {/* Mouse icon */}
      <div className={`w-5 h-8 rounded-full border ${borderColor} flex justify-center pt-1.5`}>
        <motion.div
          className={`w-0.5 h-1.5 rounded-full ${dotColor}`}
          animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  )
}
