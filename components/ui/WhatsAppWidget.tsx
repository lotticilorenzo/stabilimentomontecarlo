'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// SVG Icons
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.88-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─── Guided Options ───────────────────────────────────────────────────────────

const phoneNumber = '390544000000'

const OPTIONS = [
  {
    label: 'Prenota Ristorante',
    text: 'Salve! Vorrei prenotare un tavolo al ristorante per...',
  },
  {
    label: 'Prenota Spiaggia',
    text: 'Salve! Vorrei avere informazioni sui lettini e ombrelloni per il periodo...',
  },
  {
    label: 'Informazioni Generali',
    text: 'Salve! Vi contatto per chiedervi un\'informazione...',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const toggleOpen = () => setIsOpen((prev) => !prev)

  return (
    <div className="whatsapp-widget fixed right-6 z-50 flex flex-col items-end" ref={menuRef}>
      
      {/* ── Guided Options Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="mb-4 w-72 bg-white/95 backdrop-blur-md border border-dark/10 shadow-2xl overflow-hidden origin-bottom-right"
            style={{ borderRadius: '16px' }}
          >
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 text-white">
              <div className="flex items-center gap-3 mb-1">
                <WhatsAppIcon />
                <span className="font-jost font-medium tracking-wide">Inizia una chat</span>
              </div>
              <p className="font-jost text-xs opacity-90 font-light">
                Come possiamo aiutarti oggi?
              </p>
            </div>

            {/* Options List */}
            <div className="flex flex-col p-2">
              {OPTIONS.map((opt, i) => {
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(opt.text)}`
                return (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="group px-4 py-3 hover:bg-black/5 transition-colors rounded-lg flex items-center justify-between"
                  >
                    <span className="font-jost text-sm text-dark/80 group-hover:text-dark transition-colors">
                      {opt.label}
                    </span>
                    <span className="text-[#25D366] opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      →
                    </span>
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Action Button ── */}
      <button
        onClick={toggleOpen}
        aria-label="Apri WhatsApp"
        aria-expanded={isOpen}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <CloseIcon />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <WhatsAppIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

    </div>
  )
}
