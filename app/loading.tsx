'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-sand overflow-hidden">
      {/* ── Background decoration: subtle pulsing glow ─────────────────── */}
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ backgroundColor: 'rgba(201, 168, 76, 0.15)' }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* ── Custom Animated Spinner ───────────────────────────────────── */}
        <div className="relative w-24 h-24 mb-10">
          <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(26, 26, 24, 0.05)"
              strokeWidth="2"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#C9A84C"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 0.7, 0],
                rotate: [0, 360],
                opacity: 1
              }}
              transition={{
                pathLength: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 1.5, repeat: Infinity, ease: "linear" },
                opacity: { duration: 0.5 }
              }}
            />
          </svg>
          
          {/* Pulsing Dot in Center */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gold"
          />
        </div>

        {/* ── Pulsing Logo ─────────────────────────────────────────────── */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-center"
        >
          <span className="font-cormorant text-2xl md:text-3xl font-light tracking-[0.4em] uppercase text-dark">
            Montecarlo
          </span>
          <div 
            className="h-px w-8 bg-gold/40 mx-auto mt-4" 
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Floating sand particles decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold/30 rounded-full"
            initial={{ 
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
              y: 0
            }}
            animate={{ 
              opacity: [0, 1, 0],
              y: -20
            }}
            transition={{ 
              duration: 2 + Math.random() * 2, 
              repeat: Infinity, 
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </main>
  )
}
