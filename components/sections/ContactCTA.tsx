import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import HeroParallaxImage from '@/components/ui/HeroParallaxImage'

// ─── Icons ────────────────────────────────────────────────────────────────────

const IconPin = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 7.2c0 7.3-8 11.8-8 11.8z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconPhone = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
)

const IconClock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
)

const IconMail = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 6l-10 7L2 6" />
  </svg>
)

// ─── Info row ─────────────────────────────────────────────────────────────────

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4 text-left">
      <div className="mt-1 text-gold">{icon}</div>
      <div>
        <span className="font-cormorant-sc text-[10px] tracking-[0.3em] uppercase text-cream/75 block mb-1">
          {label}
        </span>
        <span className="font-jost text-[14px] font-light text-cream/90">
          {value}
        </span>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-48" style={{ minHeight: '800px' }}>
      
      {/* ── Parallax Background ── */}
      <HeroParallaxImage
        src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
        alt="Tramonto sull'Adriatico - Bagno Montecarlo"
        factor={0.15}
      />

      {/* ── Dark Overlay ── */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ background: 'linear-gradient(to bottom, rgba(26,26,24,0.4) 0%, rgba(26,26,24,0.8) 100%)' }} 
        aria-hidden="true" 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 flex items-center justify-center">
        
        {/* ── Glassmorphism Card ── */}
        <ScrollReveal delay={0.1}>
          <div className="w-full max-w-3xl backdrop-blur-xl bg-dark/40 border border-white/10 p-10 md:p-16 text-center shadow-2xl">
            
            {/* Eyebrow */}
            <span className="inline-flex items-center justify-center px-5 py-2 mb-8 border border-white/10 bg-black/20 backdrop-blur-md rounded-full font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
                Ti Aspettiamo
            </span>

            {/* Title */}
            <h2
              className="font-cormorant font-light italic text-cream leading-[1.05] mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Prenota il tuo spazio
            </h2>

            <p className="font-jost text-base font-light text-cream/80 max-w-lg mx-auto mb-12">
              Sia che tu voglia un ombrellone per l'intera stagione o riservare un tavolo per una cena indimenticabile al tramonto.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-xl mx-auto mb-14 border-t border-b border-white/10 py-10">
              <InfoRow icon={<IconPin />} label="Indirizzo" value="Viale della Pace 421, Ravenna" />
              <InfoRow icon={<IconPhone />} label="Telefono" value="+39 0544 123456" />
              <InfoRow icon={<IconClock />} label="Orari" value="Ogni giorno 8:30 – 20:00" />
              <InfoRow icon={<IconMail />} label="Email" value="info@bagnomontecarlo.it" />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link
                href="/contatti"
                className={[
                  'font-jost text-[11px] tracking-[0.25em] uppercase',
                  'bg-gold text-dark px-10 py-4 inline-flex items-center justify-center min-w-[200px]',
                  'transition-all duration-300',
                  'hover:bg-cream',
                ].join(' ')}
              >
                Vai ai Contatti
              </Link>

              <Link
                href="/cucina"
                className={[
                  'font-jost text-[11px] tracking-[0.25em] uppercase',
                  'border border-cream/30 text-cream px-10 py-4 inline-flex items-center justify-center min-w-[200px]',
                  'transition-all duration-300',
                  'hover:border-cream hover:bg-cream/5',
                ].join(' ')}
              >
                Scopri la Cucina
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
