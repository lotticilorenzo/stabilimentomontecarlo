'use client'

import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'

const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=90&auto=format&fit=crop',
    alt: 'Spiaggia dorata di Bagno Montecarlo al tramonto, Ravenna Adriatico',
  },
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=90&auto=format&fit=crop',
    alt: 'Cucina di pesce fresco — specialità del ristorante Bagno Montecarlo',
  },
  {
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=90&auto=format&fit=crop',
    alt: 'Cocktail aperitivo al tramonto sulla spiaggia di Ravenna',
  },
  {
    url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=90&auto=format&fit=crop',
    alt: 'Ombrelloni e lettini sul mare Adriatico — Bagno Montecarlo',
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=90&auto=format&fit=crop',
    alt: 'Pizza artigianale a lunga lievitazione — serata al Bagno Montecarlo',
  },
  {
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=90&auto=format&fit=crop',
    alt: 'Vista panoramica della riviera adriatica da Bagno Montecarlo Ravenna',
  },
]

export default function InstagramFeed() {
  return (
    <section className="bg-sand-dark py-20 overflow-hidden border-t border-dark/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <ScrollReveal>
            <span className="font-cormorant-sc text-[10px] tracking-[0.45em] uppercase text-dark/80 block mb-4">
              Social Moments
            </span>
            <h2 className="font-cormorant font-light italic text-dark" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Seguici su Instagram
            </h2>
            <a 
              href="https://instagram.com/bagnomontecarlo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 font-jost text-[11px] tracking-[0.15em] uppercase text-sea hover:text-sea-light transition-colors inline-block"
            >
              @bagnomontecarlo
            </a>
          </ScrollReveal>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {PHOTOS.map((photo, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <a 
                href="https://instagram.com/bagnomontecarlo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden block"
                data-cursor="sea"
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-cream" fill="white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
