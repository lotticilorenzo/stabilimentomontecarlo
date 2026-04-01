'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Types ────────────────────────────────────────────────────────────────────

interface MenuItem {
  name: string
  description: string
  price: string
}

interface Category {
  id: string
  label: string
  items: MenuItem[]
}

interface Props {
  categories: Category[]
}

// ─── Signature cocktail card — richer treatment ───────────────────────────────

function SignatureCard({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  return (
    <div
      className={`group py-7 ${!isLast ? 'border-b border-dark/[0.07]' : ''}`}
    >
      <div className="flex gap-5 items-stretch">

        {/* Gold left accent — brightens on hover */}
        <div
          className="shrink-0 w-[2px] rounded-full transition-all duration-500"
          style={{
            backgroundColor: 'rgba(201,168,76,0.2)',
          }}
          aria-hidden="true"
        />

        <div className="flex-1 min-w-0">
          {/* Name + price */}
          <div className="flex items-baseline justify-between gap-6 mb-2.5">
            <span
              className="font-cormorant text-[1.4rem] italic font-light leading-snug transition-colors duration-300 group-hover:text-gold"
              style={{ color: '#1A1A18' }}
            >
              {item.name}
            </span>
            <span className="shrink-0 font-jost text-sm font-light tabular-nums text-dark/80">
              € {item.price}
            </span>
          </div>

          {/* Ingredient list — full description, slightly more prominent */}
          <p className="font-jost text-[14px] font-light leading-[1.75] text-dark/75 max-w-lg">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Standard menu row (classici, analcolici, vini, sfizi) ────────────────────

function MenuRow({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  return (
    <div
      className={`group py-5 ${!isLast ? 'border-b border-dark/[0.07]' : ''}`}
    >
      <div className="flex items-baseline justify-between gap-6">
        <span className="font-cormorant text-[1.2rem] italic font-light text-dark group-hover:text-gold transition-colors duration-300 leading-snug">
          {item.name}
        </span>
        <span className="shrink-0 font-jost text-sm font-light text-dark/80 tabular-nums">
          € {item.price}
        </span>
      </div>

      {item.description && (
        <p className="font-jost text-[14px] font-light leading-relaxed text-dark/70 mt-1.5 max-w-xl">
          {item.description}
        </p>
      )}
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function AperitiviMenu({ categories }: Props) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')

  const activeCategory = categories.find((c) => c.id === activeId)
  const isSignature = activeId === 'signature'

  return (
    <div>
      {/* ── Tab bar ──────────────────────────────────────────────────── */}
      <div
        className="flex border-b border-dark/[0.09] mb-10 overflow-x-auto"
        role="tablist"
        aria-label="Categorie del menu aperitivi"
        style={{ scrollbarWidth: 'none' }}
      >
        {categories.map((cat) => {
          const isActive = cat.id === activeId
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tabpanel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActiveId(cat.id)}
              className="relative shrink-0 px-5 py-4 font-jost text-[15px] tracking-[0.1em] uppercase transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
              style={{ color: isActive ? '#1A1A18' : 'rgba(26,26,24,0.65)' }}
            >
              {cat.label}

              {isActive && (
                <motion.div
                  layoutId="aperitivi-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                  style={{ backgroundColor: '#C9A84C' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* ── Category panel ───────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {activeCategory && (
          <motion.div
            key={activeId}
            id={`tabpanel-${activeId}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeId}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Subtitle for signature section */}
            {isSignature && (
              <p className="font-jost text-[11px] tracking-[0.22em] uppercase text-dark/80 mb-8">
                Creazioni esclusive del nostro bar · disponibili ogni sera
              </p>
            )}

            {activeCategory.items.map((item, i) =>
              isSignature ? (
                <SignatureCard
                  key={item.name}
                  item={item}
                  isLast={i === activeCategory.items.length - 1}
                />
              ) : (
                <MenuRow
                  key={item.name}
                  item={item}
                  isLast={i === activeCategory.items.length - 1}
                />
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Note allergeni ───────────────────────────────────────────── */}
      <div className="mt-14 pt-8 border-t border-dark/[0.15]">
        <p className="font-jost text-sm font-light leading-[1.85] text-dark/70 max-w-2xl">
          <span className="font-medium tracking-[0.12em] uppercase text-dark">Allergeni — </span>
          Alcuni cocktail e sfizi possono contenere o essere entrati in contatto con
          sostanze allergeniche. Informa il bartender di eventuali allergie o intolleranze
          prima di ordinare. Menu e prezzi soggetti a variazioni stagionali.
        </p>
      </div>
    </div>
  )
}
