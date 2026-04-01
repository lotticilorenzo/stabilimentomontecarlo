# SKILL.md — Bagno Montecarlo Website
## Skill per Claude Code: Sito Premium Stabilimento Balneare

---

## 🎯 DESCRIZIONE SKILL

Questa skill guida la costruzione di un sito web **ultra-premium** per uno stabilimento balneare italiano. Il risultato finale deve essere visivamente indistinguibile dai migliori beach club mondiali (Scorpios, Nikki Beach, FINNS Bali) — non un sito locale, ma un'esperienza digitale di lusso mediterraneo.

**Leggi sempre il CLAUDE.md nella root del progetto per le specifiche complete.**

---

## 🧠 COME USARE QUESTA SKILL

Quando ricevi un task relativo a questo progetto:

1. **Leggi prima il CLAUDE.md** per le specifiche di design, struttura e contenuti
2. **Applica i principi di questa SKILL** per il metodo di lavoro
3. **Costruisci in ordine logico** (vedi sequenza sotto)
4. **Verifica la checklist finale** prima di dichiarare completo

---

## 🔧 SEQUENZA DI BUILD CONSIGLIATA

Costruisci il progetto in questo ordine per evitare blocchi:

```
FASE 1 — Setup
  1. Inizializza Next.js 14 con TypeScript e Tailwind
  2. Installa dipendenze: framer-motion, @types/node
  3. Configura tailwind.config.ts con colori custom e font
  4. Crea globals.css con CSS variables e font imports
  5. Crea app/layout.tsx con metadata e font

FASE 2 — Componenti base
  6. GrainOverlay.tsx
  7. CustomCursor.tsx
  8. ScrollReveal.tsx
  9. SectionDivider.tsx
  10. Navbar.tsx
  11. Footer.tsx

FASE 3 — Data
  12. data/menu-ristorante.json
  13. data/menu-aperitivi.json
  14. data/menu-pizza.json

FASE 4 — Pagine (in ordine di priorità)
  15. app/page.tsx (Homepage)
  16. app/cucina/page.tsx
  17. app/ristorazione/page.tsx
  18. app/aperitivi/page.tsx
  19. app/pizza/page.tsx
  20. app/bagni/page.tsx
  21. app/chi-siamo/page.tsx
  22. app/contatti/page.tsx

FASE 5 — Rifinitura
  23. Verifica responsive su tutti i breakpoint
  24. Controlla animazioni e transizioni
  25. SEO metadata su tutte le pagine
  26. Test navigazione completa
```

---

## 🎨 PRINCIPI DI DESIGN — REGOLE FERME

### ✅ DA FARE SEMPRE
- Usa **Cormorant Garamond** per tutti i titoli H1/H2
- Usa **Jost** per body text e UI elements
- Applica la palette colori esatta dal CLAUDE.md (niente colori improvvisati)
- Ogni sezione ha **abbondante breathing space** — padding generoso (py-24 minimo)
- Le immagini hanno sempre `object-fit: cover` e dimensioni esplicite
- Ogni animazione ha `duration >= 600ms` — niente di brusco
- Il grain overlay è presente su ogni pagina (opacity 0.025)

### ❌ NON FARE MAI
- Non usare font di sistema (Arial, Helvetica, system-ui)
- Non usare colori fuori dalla palette definita senza motivo
- Non mostrare **MAI** prezzi nella sezione `/bagni`
- Non usare `<form>` HTML nativo — usa controlled components React
- Non mettere animazioni con `duration < 300ms` per elementi visivi principali
- Non usare purple gradients, card con border-radius > 12px, o layout "AI generici"
- Non usare immagini senza lazy loading

---

## 📐 PATTERN DI LAYOUT RICORRENTI

### Hero Section (usato su ogni pagina)
```tsx
// Pattern standard per hero di ogni pagina
<section className="relative h-screen min-h-[600px] overflow-hidden">
  {/* Immagine background */}
  <Image src={...} fill className="object-cover" priority />
  
  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-sea/30 to-dark/70" />
  
  {/* Grain texture */}
  <div className="absolute inset-0 noise-overlay" />
  
  {/* Contenuto centrato */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
    <span className="font-cormorant-sc text-sm tracking-[0.3em] uppercase mb-4 opacity-80">
      label sezione
    </span>
    <h1 className="font-cormorant text-6xl md:text-8xl font-light italic mb-6">
      Titolo Pagina
    </h1>
    <p className="font-jost text-lg font-light max-w-md opacity-90">
      Sottotitolo evocativo
    </p>
  </div>
  
  {/* Scroll indicator */}
  <ScrollIndicator />
</section>
```

### Menu Item (usato in ristorante/aperitivi/pizza)
```tsx
// Pattern per voce di menu
<div className="flex justify-between items-baseline py-4 border-b border-sand-dark/30 group">
  <div>
    <span className="font-cormorant text-xl italic text-dark group-hover:text-sea transition-colors">
      {item.name}
    </span>
    {item.description && (
      <p className="font-jost text-sm text-dark/50 mt-1">{item.description}</p>
    )}
  </div>
  <span className="font-jost text-base font-light text-dark/70 ml-8 shrink-0">
    € {item.price}
  </span>
</div>
```

### Service Card (usato in /bagni)
```tsx
// Card servizio SENZA prezzo
<div className="flex flex-col items-center text-center p-8 group">
  <div className="w-12 h-12 mb-4 text-sea">
    {/* SVG icon */}
  </div>
  <h3 className="font-cormorant text-xl mb-2">{service.title}</h3>
  <p className="font-jost text-sm text-dark/60">{service.description}</p>
</div>
```

---

## 🌊 CONFIGURAZIONE TAILWIND

```typescript
// tailwind.config.ts — configurazione essenziale
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand:       '#F5EDD8',
        'sand-dark':'#E8D5B0',
        sea:        '#1B4F6B',
        'sea-light':'#3A7FA0',
        'sea-pale': '#B8D9E8',
        cream:      '#FAFAF8',
        dark:       '#1A1A18',
        gold:       '#C9A84C',
        terra:      '#C4704A',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        'cormorant-sc': ['"Cormorant SC"', 'serif'],
        baskerville: ['"Libre Baskerville"', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
        'slow-zoom':  'slowZoom 8s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
```

---

## 🔤 GOOGLE FONTS IMPORT

```css
/* In globals.css o layout.tsx */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Cormorant+SC:wght@300;400;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400;500&display=swap');
```

---

## 📦 PACKAGE.JSON DIPENDENZE

```json
{
  "dependencies": {
    "next": "14.2.x",
    "react": "^18",
    "react-dom": "^18",
    "framer-motion": "^11",
    "typescript": "^5"
  },
  "devDependencies": {
    "tailwindcss": "^3",
    "autoprefixer": "^10",
    "postcss": "^8",
    "@types/react": "^18",
    "@types/node": "^20"
  }
}
```

---

## 🖼️ GESTIONE IMMAGINI

### Placeholder Unsplash (da sostituire con foto reali)
```typescript
// Mappatura placeholder per ogni sezione
const IMAGES = {
  hero:         'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  ristorante:   'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80',
  aperitivi:    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&q=80',
  pizza:        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1920&q=80',
  spiaggia:     'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
  ombrelloni:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
  chiSiamo:     'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80',
}
```

### Next.js Image config
```typescript
// next.config.ts
const config = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}
```

---

## 📍 SEO LOCAL — RAVENNA

Ogni pagina deve avere metadata ottimizzato per ricerca locale:

```typescript
// Pattern SEO per ogni pagina
{
  title: '[Nome Pagina] | Bagno Montecarlo Ravenna',
  description: '[Descrizione unica] — Bagno Montecarlo, stabilimento balneare a Ravenna sulla Riviera Adriatica.',
  keywords: 'bagno montecarlo ravenna, stabilimento balneare ravenna, spiaggia ravenna, ristorante pesce ravenna',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    siteName: 'Bagno Montecarlo',
  }
}
```

---

## ♿ ACCESSIBILITÀ — REQUISITI MINIMI

- Tutti i `<Image>` hanno `alt` descrittivo
- Contrasto colore: minimo 4.5:1 per testo body
- Focus visible su tutti gli elementi interattivi (outline custom in `--color-gold`)
- `aria-label` su link icon-only
- `role="navigation"` sulla navbar
- Menu mobile accessibile da tastiera (trap focus)

---

## 🐛 PROBLEMI COMUNI E SOLUZIONI

| Problema | Soluzione |
|----------|-----------|
| Font non caricano | Verifica `font-display: swap` e preconnect |
| Animazioni jerky su mobile | Usa `transform` invece di `top/left`, aggiungi `will-change: transform` |
| Immagini Unsplash bloccate | Aggiungi dominio in `next.config.ts` remotePatterns |
| Custom cursor visibile su mobile | Wrap in `@media (hover: hover) and (pointer: fine)` |
| Navbar trasparente non funziona | Usa `useEffect` con `window.addEventListener('scroll', ...)` |
| Layout shift con font | Usa `size-adjust` o font-fallback con metriche simili |

---

## ✅ QUALITY CHECKLIST — PRIMA DEL COMPLETAMENTO

### Design
- [ ] Palette colori coerente in tutte le pagine
- [ ] Cormorant Garamond su tutti i titoli
- [ ] Grain texture visibile ma sottile
- [ ] Animazioni fluide (niente scatti)
- [ ] Negative space abbondante

### Funzionalità
- [ ] Navbar: trasparente → opaca allo scroll
- [ ] Menu mobile funzionante
- [ ] Dropdown "Cucina" funzionante
- [ ] Tab menu funzionanti (ristorante/aperitivi/pizza)
- [ ] Form contatti con validazione
- [ ] Custom cursor su desktop

### Contenuti
- [ ] ZERO prezzi nella pagina /bagni
- [ ] Tutti i menu caricano dai JSON
- [ ] Testi in italiano
- [ ] Meta tags su tutte le pagine

### Performance
- [ ] `next/image` su tutte le immagini
- [ ] Font preload nel layout
- [ ] Nessun layout shift (CLS)
- [ ] Lighthouse score > 85 su Performance

---

*SKILL.md — Bagno Montecarlo | Da usare insieme a CLAUDE.md*