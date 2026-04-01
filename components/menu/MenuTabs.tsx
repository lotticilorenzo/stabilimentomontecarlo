'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import MenuCategory from './MenuCategory'

interface MenuItem {
  name: string
  description?: string
  price: string
  badge?: string
}

interface Category {
  id: string
  label: string
  items: MenuItem[]
}

interface MenuTabsProps {
  categories: Category[]
  accentColor?: string
}

export default function MenuTabs({ categories, accentColor = '#1B4F6B' }: MenuTabsProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id)
  const tabsRef = useRef<HTMLDivElement>(null)

  const activeCategory = categories.find((c) => c.id === activeId)

  return (
    <div>
      {/* Tab navigation */}
      <div
        ref={tabsRef}
        className="flex gap-0 border-b border-sand-dark/30 mb-12 overflow-x-auto scrollbar-hide"
        role="tablist"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeId === cat.id}
            aria-controls={`panel-${cat.id}`}
            onClick={() => setActiveId(cat.id)}
            className="relative px-6 py-4 font-jost text-sm tracking-[0.1em] uppercase shrink-0 transition-colors duration-300 flex items-baseline gap-2"
            style={{
              color: activeId === cat.id ? accentColor : 'rgba(26,26,24,0.45)',
            }}
          >
            <span>{cat.label}</span>
            {/* Item counter */}
            <span
              className="font-jost text-[10px] font-light tracking-[0.08em] transition-opacity duration-300"
              style={{
                opacity: activeId === cat.id ? 0.5 : 0.3,
                color: activeId === cat.id ? accentColor : 'rgba(26,26,24,0.55)',
              }}
            >
              · {cat.items.length}
            </span>
            {activeId === cat.id && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                style={{ backgroundColor: accentColor }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab panel */}
      {activeCategory && (
        <motion.div
          key={activeId}
          id={`panel-${activeId}`}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <MenuCategory label={activeCategory.label} items={activeCategory.items} />
        </motion.div>
      )}

      {/* Allergeni note */}
      <div className="mt-16 pt-8 border-t border-sand-dark/20">
        <p className="font-jost text-xs font-light text-dark/80 leading-relaxed max-w-2xl">
          <span className="tracking-[0.15em] uppercase">Allergeni:</span> se hai allergie o intolleranze alimentari,
          informa il nostro personale prima di ordinare. I nostri piatti possono contenere o essere
          entrati in contatto con allergeni. Menu soggetto a variazioni stagionali.
        </p>
      </div>
    </div>
  )
}
