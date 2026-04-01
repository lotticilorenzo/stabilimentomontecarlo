# CLAUDE.md — Bagno Montecarlo Website
## Istruzioni Completa per Claude Code

---

## 🎯 OBIETTIVO PROGETTO

Realizzare un sito web **premium / ultra-luxury** per **Bagno Montecarlo**, uno stabilimento balneare situato a **Ravenna**, sulla Riviera Adriatica italiana.

Il sito deve essere al livello dei migliori beach club mondiali (Scorpios Mykonos, Nikki Beach, FINNS Bali, Blue Marlin Ibiza) — non un sito da stabilimento balneare locale, ma un'esperienza digitale di lusso mediterraneo.

**Riferimento esistente (da superare):** https://bagno-montecarlo.jimdosite.com/

---

## 🏗️ STACK TECNICO

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS custom properties
- **Animazioni**: Framer Motion
- **Font**: Google Fonts o CDN
- **Deployment**: Vercel-ready (static export possibile)
- **Lingue**: Italiano (principale) — struttura pronta per EN
- **NO backend necessario** — tutto statico/JSON

---

## 🎨 DESIGN DIRECTION — "Adriatico Eterno"

### Concept
Eleganza mediterranea senza tempo. L'Adriatico ha millenni di storia — il sito deve evocare **lusso quieto**, sabbia calda, azzurro profondo. Non un beach club ibizenko rumoroso. Una **oasi sofisticata** sulla costa romagnola.

### Palette Colori
```css
--color-sand:       #F5EDD8;   /* sabbia chiara — background principale */
--color-sand-dark:  #E8D5B0;   /* sabbia scura */
--color-sea:        #1B4F6B;   /* blu Adriatico profondo */
--color-sea-light:  #3A7FA0;   /* azzurro chiaro */
--color-sea-pale:   #B8D9E8;   /* cielo mattutino */
--color-white:      #FAFAF8;   /* bianco caldo */
--color-dark:       #1A1A18;   /* quasi nero */
--color-gold:       #C9A84C;   /* oro Adriatico — accento */
--color-terracotta: #C4704A;   /* terracotta — accento caldo */
```

### Tipografia
```
Display/Hero: "Cormorant Garamond" (Google Fonts) — serif elegantissimo, stile magazine di lusso
Subheading:   "Libre Baskerville" — serif leggibile
Body:         "Jost" — sans-serif moderno, leggibile
Accent/Label: "Cormorant SC" — small caps per etichette sezione
```

### Mood
- Fotografie full-bleed con overlay gradient sottile
- Molto negative space — respiro, non densità
- Animazioni: lente, sensuali, come le onde. Niente scatti rapidi
- Linee sottili orizzontali come separatori (stile nautico)
- Texture: leggero grain overlay su tutti gli sfondi
- Cursore custom: cerchio sottile che segue il mouse

---

## 📁 STRUTTURA FILE PROGETTO

```
/
├── app/
│   ├── layout.tsx              # Layout root con font, metadata, cursor
│   ├── page.tsx                # Homepage
│   ├── chi-siamo/
│   │   └── page.tsx
│   ├── cucina/
│   │   └── page.tsx            # Hub cucina con sottosezioni
│   ├── ristorazione/
│   │   └── page.tsx            # Menu ristorante
│   ├── aperitivi/
│   │   └── page.tsx            # Menu aperitivi
│   ├── pizza/
│   │   └── page.tsx            # Menu pizza
│   ├── bagni/
│   │   └── page.tsx            # Ombrelloni, servizi spiaggia
│   └── contatti/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigazione premium
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── CustomCursor.tsx
│   │   ├── ScrollReveal.tsx    # Wrapper animazione scroll
│   │   ├── SectionDivider.tsx  # Linea decorativa
│   │   └── GrainOverlay.tsx    # Texture grain
│   ├── sections/               # Sezioni homepage
│   │   ├── HeroSection.tsx
│   │   ├── IntroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── KitchenPreview.tsx
│   │   ├── BeachPreview.tsx
│   │   └── ContactCTA.tsx
│   └── menu/
│       ├── MenuCard.tsx
│       └── MenuCategory.tsx
├── data/
│   ├── menu-ristorante.json
│   ├── menu-aperitivi.json
│   └── menu-pizza.json
├── public/
│   └── images/                 # Placeholder immagini
└── styles/
    └── globals.css
```

---

## 📄 PAGINE — Specifiche Dettagliate

---

### 1. `app/layout.tsx` — Layout Root

**Elementi globali:**
- Font preload: Cormorant Garamond (300, 400, 600, italic), Jost (300, 400, 500)
- Metadata SEO: title "Bagno Montecarlo | Ravenna", description, og:image
- `CustomCursor` component (solo desktop, hidden su mobile)
- `GrainOverlay` globale (opacity 0.03, fixed, pointer-events none)
- Smooth scroll: `scroll-behavior: smooth`
- Background default: `--color-sand`

---

### 2. `components/layout/Navbar.tsx`

**Design:**
- Posizione: `fixed top-0`, full-width, z-50
- Inizialmente: `background: transparent`, testo bianco (sopra hero)
- Dopo 80px scroll: `background: rgba(245, 237, 216, 0.95)` con `backdrop-blur`, testo scuro
- Transizione: smooth 400ms

**Struttura desktop:**
```
[Logo "MONTECARLO"] ........ [Chi Siamo] [Cucina ▾] [Bagni] [Contatti]
```
- Logo: testo in Cormorant Garamond, lettering espaciato
- Dropdown "Cucina": appare al hover con sottomenu [Ristorante] [Aperitivi] [Pizza]
- Nessun hamburger menu aggressivo — icona elegante (3 linee sottili)

**Mobile:**
- Menu slide-in da destra, full-screen overlay con background `--color-sea`
- Testo bianco, font grande, animazione Framer Motion

---

### 3. `app/page.tsx` — Homepage

**Sezioni in ordine:**

#### 3a. HeroSection
- **Background**: Video loop OR immagine full-screen del mare (2560x1440 ideale)
- **Overlay**: gradient `from-sea/40 to-dark/60`
- **Contenuto centrato:**
  ```
  [piccola label in Cormorant SC]  "Ravenna · Dal Mare"
  [H1 grande]  "Bagno Montecarlo"
  [tagline]  "Un luogo dove il tempo rallenta"
  [CTA button]  "Scopri di più"  (bordo bianco, hover fill bianco)
  ```
- **Scroll indicator**: freccia animata in basso al centro
- **Animazione**: fade-in staggered, elementi appaiono con delay 200ms l'uno

#### 3b. IntroSection
- Background: `--color-sand`
- Layout asimmetrico: testo a sinistra (60%), immagine a destra (40%) con clip-path
- Testo:
  ```
  [label piccola] "La Nostra Storia"
  [H2] "Dove l'Adriatico diventa casa"
  [paragrafo] Breve storia/filosofia del bagno — 3-4 righe evocative
  [link] "Scopri chi siamo →"
  ```

#### 3c. ServicesGrid — "Il Mondo di Montecarlo"
- 3 card grandi in grid orizzontale, con hover zoom effect
- Card 1: **Cucina** — foto di cibo/ristorante
- Card 2: **Spiaggia** — foto ombrelloni/mare
- Card 3: **Aperitivi** — foto cocktail al tramonto
- Ogni card: immagine full-bleed, overlay scuro al bottom, titolo e link

#### 3d. KitchenPreview — "La Nostra Cucina"
- Background: `--color-dark` (sezione scura per contrasto)
- Layout split: testo a sinistra, 2 immagini a destra (sovrapposte, offset)
- Intro alla filosofia culinaria
- 3 icone/pill: [Ristorante] [Aperitivi] [Pizza]

#### 3e. BeachSection — "La Spiaggia"
- Background: `--color-sea`
- Testo bianco
- Immagine panoramica wide della spiaggia con ombrelloni
- Breve copy sulla qualità della spiaggia/servizio

#### 3f. ContactCTA — "Vieni a Trovarci"
- Background: `--color-sand-dark`
- Centered, grande
- Indirizzo, orari stagionali, CTA a pagina contatti

---

### 4. `app/chi-siamo/page.tsx` — Chi Siamo

**Layout:**
- Hero: immagine panoramica Ravenna/mare con titolo overlay "Chi Siamo"
- Sezione storia: testo lungo 2 colonne, serif elegante
- Team: griglia foto staff (se disponibili) o sezione valori
- Valori/filosofia: 3 pilastri con icona linea + testo
  - Es: "Mare" / "Cucina" / "Accoglienza"
- Foto gallery: masonry grid 4-6 immagini

---

### 5. `app/cucina/page.tsx` — Hub Cucina

**Funzione**: pagina hub con navigazione alle 3 sezioni cucina

**Layout:**
- Hero con sfondo `--color-dark`, testo bianco
- Titolo: "La Nostra Cucina"
- Introduzione filosofia culinaria (testo evocativo)
- 3 card grandi cliccabili:
  ```
  [Foto grande]  [Titolo] [Descrizione breve] [→ Scopri il Menù]
  ```
  - Card 1: Ristorante — cucina di mare
  - Card 2: Aperitivi — cocktail e stuzzichini
  - Card 3: Pizza — pizza artigianale

---

### 6. `app/ristorazione/page.tsx` — Menu Ristorante

**Layout:**
- Hero: immagine del ristorante, titolo "Ristorante"
- Sottotitolo/filosofia: 2-3 righe (es. "Pesce fresco dell'Adriatico, prodotti locali...")
- **Menu interattivo** con tab categories:
  - Antipasti
  - Primi
  - Secondi
  - Contorni
  - Dolci
- Tab navigation: linea sottile animata che scorre sotto la tab attiva
- Ogni voce menu:
  ```
  [Nome piatto]  .......  [Prezzo]
  [Descrizione ingredienti — piccola, grigia]
  ```
- Design: sfondo bianco caldo, testo scuro, font Jost per prezzi, Cormorant per nomi piatti
- **Nota Allergeni** in fondo pagina

**Data**: leggere da `data/menu-ristorante.json`

**Esempio struttura JSON:**
```json
{
  "categories": [
    {
      "id": "antipasti",
      "label": "Antipasti",
      "items": [
        {
          "name": "Carpaccio di Branzino",
          "description": "limone, capperi, fiori edibili",
          "price": "14"
        }
      ]
    }
  ]
}
```

---

### 7. `app/aperitivi/page.tsx` — Menu Aperitivi

**Layout simile al ristorante ma:**
- Hero: immagine golden hour con cocktail
- Palette: più calda, sfumature `--color-gold` e `--color-terracotta`
- Categories:
  - Cocktail Classici
  - Signature Cocktail
  - Analcolici
  - Vini al calice
  - Birre
  - Sfizi (stuzzichini)
- Font nomi cocktail in italic Cormorant — evoca eleganza

---

### 8. `app/pizza/page.tsx` — Menu Pizza

**Layout:**
- Hero: foto pizza con ingredienti freschi
- Intro: filosofia dell'impasto, ingredienti
- Categories:
  - Pizze Classiche
  - Pizze Speciali / Gourmet
  - Pizze Bianche
  - Per i Piccoli
- Ogni pizza con nome, ingredienti, prezzo
- Badge speciale per pizze "del giorno" o "signature"

---

### 9. `app/bagni/page.tsx` — La Spiaggia

**IMPORTANTE: Nessun prezzo da mostrare**

**Layout:**
- Hero full-screen: panoramica spiaggia con ombrelloni
- Sezione intro: testo sulla qualità della spiaggia, posizione, atmosfera
- **Servizi** — griglia icon+testo (non prezzi):
  - 🏖️ Ombrelloni e lettini
  - 🚿 Docce e spogliatoi
  - 🎾 Servizi sportivi (beach volley, ping pong se presenti)
  - 🏄 Sport acquatici (se presenti)
  - 👶 Area bambini
  - 🅿️ Parcheggio
  - ♿ Accessibilità
- **Stagione**: indicazione mesi di apertura
- **Prenotazioni**: CTA a pagina contatti o form semplice
- Gallery: foto belle della spiaggia

---

### 10. `app/contatti/page.tsx` — Contatti

**Layout:**
- Hero minimal: titolo "Contatti" su sfondo scuro
- 2 colonne:
  - **Sinistra**: informazioni
    - Indirizzo completo (Ravenna)
    - Telefono (con link tel:)
    - Email (con link mailto:)
    - Orari stagionali
    - Social media links (Instagram, Facebook)
  - **Destra**: mappa Google Maps embed (iframe)
- **Form di contatto** semplice (solo frontend, senza backend):
  - Nome
  - Email
  - Messaggio
  - Submit button
  - Nota: "Ti risponderemo entro 24 ore"
- **Social Section**: link Instagram con call to action "Seguici"

---

## 🧩 COMPONENTI RIUTILIZZABILI

### CustomCursor (`components/ui/CustomCursor.tsx`)
```tsx
// Cerchio vuoto 20px che segue il mouse
// Si espande a 40px su elementi cliccabili (hover)
// Blend mode: mix-blend-mode: difference
// Solo su device non-touch
```

### ScrollReveal (`components/ui/ScrollReveal.tsx`)
```tsx
// Wrapper con Framer Motion
// Props: delay, direction (up/left/right)
// Animazione: opacity 0→1, y: 30→0 (o x per laterali)
// Trigger: quando entra nel viewport (IntersectionObserver)
```

### SectionDivider (`components/ui/SectionDivider.tsx`)
```tsx
// Linea sottile ornamentale
// Varianti: semplice | con rombo centrale | con testo
// Colori: light (su scuro) | dark (su chiaro)
```

### GrainOverlay (`components/ui/GrainOverlay.tsx`)
```tsx
// SVG noise filter come texture
// Fixed, pointer-events: none, z-index: 9999
// Opacity: 0.025 — appena percettibile
```

---

## 🗃️ DATA FILES — Contenuto Menu

### `data/menu-ristorante.json`
Crea menu completo con piatti di pesce adriatico. Esempi:
- Antipasti: carpaccio di tonno, frittura di paranza, insalata di mare
- Primi: spaghetti alle vongole, tagliolini all'astice, risotto ai frutti di mare
- Secondi: branzino al sale, frittura mista, rombo al forno
- Contorni: insalata, patate al forno, verdure grigliate
- Dolci: tiramisù, panna cotta, gelato artigianale

### `data/menu-aperitivi.json`
- Cocktail classici: Spritz, Negroni, Mojito, Hugo, Bellini
- Signature: 4-5 cocktail con nomi evocativi (es. "Adriatico Rosso", "Tramonto di Ravenna")
- Analcolici: frullati freschi, acque, succhi
- Sfizi: taglieri, bruschette, olive, patatine gourmet

### `data/menu-pizza.json`
- Classiche: Margherita, Marinara, Capricciosa, Prosciutto
- Gourmet: 4-5 pizze speciali con ingredienti premium
- Bianche: 2-3 pizze senza pomodoro
- Per bambini: pizzette semplici

---

## 📱 RESPONSIVE DESIGN

### Breakpoints
```
mobile:  < 640px
tablet:  640px - 1024px
desktop: > 1024px
```

### Comportamenti Mobile
- Navbar: hamburger → fullscreen overlay menu
- Hero: immagine crop intelligente (object-position: center)
- Grid 3 colonne → 1 colonna su mobile
- Menu tab → scroll orizzontale su mobile
- Custom cursor: disabilitato su touch device
- Font size: scala proporzionalmente (clamp())

---

## ✨ ANIMAZIONI E MICRO-INTERACTIONS

### Principi
- **Lentezza**: durations tra 600ms e 1200ms — niente di brusco
- **Easing**: `cubic-bezier(0.25, 0.1, 0.25, 1)` per movimenti naturali
- **Stagger**: elementi in sequenza con 100-200ms di delay

### Implementazioni specifiche

1. **Hero text reveal**: lettere o parole che appaiono una dopo l'altra
2. **Navbar transition**: dissolve elegante da trasparente a opaco
3. **Card hover**: leggero scale(1.02) + shadow più profonda, 300ms
4. **Image hover**: zoom interno sull'immagine (scale 1.05 sull'img, overflow hidden sul container)
5. **Menu item hover**: underline che cresce da sinistra (transform: scaleX)
6. **Tab switch**: underline indicator scorre fluido tra tab
7. **Page transitions**: fade in/out tra pagine (Framer Motion AnimatePresence)
8. **Scroll parallax**: hero image si muove a velocità ridotta durante lo scroll

---

## 🔍 SEO & PERFORMANCE

### Metadata per ogni pagina
```tsx
// app/page.tsx
export const metadata = {
  title: 'Bagno Montecarlo | Stabilimento Balneare a Ravenna',
  description: 'Bagno Montecarlo a Ravenna: spiaggia premium, ristorante di pesce, aperitivi al tramonto. La tua oasi sull\'Adriatico.',
  openGraph: { ... }
}

// app/ristorazione/page.tsx  
title: 'Ristorante | Bagno Montecarlo Ravenna'
// etc per ogni pagina
```

### Performance
- Immagini: Next.js `<Image>` con lazy loading, WebP
- Font: `font-display: swap`, preconnect a Google Fonts
- Animazioni: `will-change: transform` solo durante animazione attiva

---

## 🖼️ PLACEHOLDER IMMAGINI

Finché non si hanno le foto reali, usare:
- `https://images.unsplash.com/` con query per immagini di:
  - Beach/mare Adriatico: `?q=80&w=1920` + search "adriatic beach"
  - Cibo/pesce: "seafood restaurant italy"
  - Cocktail: "aperitivo sunset"
  - Ombrelloni: "beach umbrella italy summer"
- Dimensioni sempre specificate per evitare layout shift

---

## 📋 CHECKLIST FINALE

Prima di considerare il sito completo, verificare:

- [ ] Navbar funzionante su mobile e desktop
- [ ] Tutte le pagine accessibili dalla navigazione
- [ ] Menu dati caricati dai JSON
- [ ] Animazioni scroll attive
- [ ] Custom cursor attivo su desktop
- [ ] Form contatti con validazione base
- [ ] Meta tags SEO su tutte le pagine
- [ ] Responsive verificato a 375px, 768px, 1440px
- [ ] No prezzi nella sezione Bagni
- [ ] Footer con link social e info base
- [ ] Favicon impostato

---

## 💡 NOTE FINALI PER CLAUDE CODE

- **Priorità estetica**: questo sito compete con i migliori beach club del mondo. Ogni pixel deve respirare lusso.
- **Contenuto reale**: i testi del menu sono placeholder eleganti — il cliente li sostituirà con i valori reali.
- **No prezzi spiaggia**: il cliente ha esplicitamente richiesto di non mostrare prezzi di ombrelloni/servizi spiaggia.
- **Italiano**: tutti i testi del sito in italiano. Variante inglese nella struttura ma non necessaria ora.
- **Performance prima di tutto**: belle animazioni sì, ma mai a scapito della velocità su mobile.

---

*Documento preparato per Claude Code — Bagno Montecarlo, Ravenna*
*Versione 1.0*