'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface WeatherData {
  temp: string
  condition: string
  icon: 'sun' | 'cloud' | 'rain' | 'storm' | 'snow' | 'wave'
}

// ─── SVG Icone meteo inline ────────────────────────────────────────────────────

function WeatherIcon({ type }: { type: WeatherData['icon'] }) {
  const base = 'w-5 h-5 shrink-0'
  switch (type) {
    case 'sun':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )
    case 'cloud':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17.5 19H9a7 7 0 110-14 7 7 0 0111.3 4.5A4.5 4.5 0 0117.5 19z" />
        </svg>
      )
    case 'rain':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 15.25M8 16v2M12 17v2M16 16v2" />
        </svg>
      )
    case 'storm':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 16.9A5 5 0 0018 7h-1.26A8 8 0 104 15.26M13 11l-4 6h6l-4 6" />
        </svg>
      )
    case 'snow':
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 15.25M8 16h.01M8 20h.01M12 18h.01M12 22h.01M16 16h.01M16 20h.01" />
        </svg>
      )
    case 'wave':
    default:
      return (
        <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <path d="M2 12c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
          <path d="M2 17c1.5-2 3-2 4.5 0s3 2 4.5 0 3-2 4.5 0 3 2 4.5 0" />
        </svg>
      )
  }
}

// ─── Logica icon WMO code ─────────────────────────────────────────────────────

function wmoToIcon(code: number): WeatherData['icon'] {
  if (code === 0 || code === 1) return 'sun'
  if (code <= 3) return 'cloud'
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) return 'rain'
  if (code >= 71 && code <= 77) return 'snow'
  if (code >= 95) return 'storm'
  return 'cloud'
}

function wmoToItalian(code: number): string {
  if (code === 0) return 'Soleggiato'
  if (code === 1) return 'Prevalentemente soleggiato'
  if (code === 2) return 'Parzialmente nuvoloso'
  if (code === 3) return 'Nuvoloso'
  if (code >= 45 && code <= 48) return 'Nebbioso'
  if (code >= 51 && code <= 55) return 'Pioviggine'
  if (code >= 61 && code <= 65) return 'Pioggia'
  if (code >= 71 && code <= 77) return 'Neve'
  if (code >= 80 && code <= 82) return 'Rovesci'
  if (code >= 95) return 'Temporale'
  return 'Variabile'
}

// ─── Descr da wttr.in ──────────────────────────────────────────────────────────

function descrToIcon(desc: string): WeatherData['icon'] {
  const d = desc.toLowerCase()
  if (d.includes('sun') || d.includes('clear')) return 'sun'
  if (d.includes('thunder') || d.includes('storm')) return 'storm'
  if (d.includes('snow') || d.includes('blizzard')) return 'snow'
  if (d.includes('rain') || d.includes('drizzle') || d.includes('shower')) return 'rain'
  if (d.includes('cloud') || d.includes('overcast') || d.includes('fog') || d.includes('mist')) return 'cloud'
  return 'wave'
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller

    async function fetchWeather() {
      // ── Primario: wttr.in ──
      try {
        const res = await fetch('https://wttr.in/Ravenna?format=j1', { signal })
        if (!res.ok) throw new Error('wttr.in fail')
        const data = await res.json()
        if (signal.aborted) return
        const c = data.current_condition[0]
        const desc: string = c.weatherDesc?.[0]?.value ?? ''
        const italianDesc: string = c.lang_it?.[0]?.value ?? desc
        setWeather({
          temp: c.temp_C,
          condition: italianDesc || desc,
          icon: descrToIcon(desc),
        })
        return
      } catch {
        if (signal.aborted) return // component unmounted — ignora
      }

      // ── Fallback: OpenMeteo ─────────────────────────────────────────────
      try {
        const res = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=44.42&longitude=12.20&current=temperature_2m,weathercode&timezone=Europe/Rome',
          { signal }
        )
        if (!res.ok) throw new Error('OpenMeteo fail')
        const data = await res.json()
        if (signal.aborted) return
        const code: number = data.current.weathercode
        const temp: number = Math.round(data.current.temperature_2m)
        setWeather({
          temp: String(temp),
          condition: wmoToItalian(code),
          icon: wmoToIcon(code),
        })
      } catch {
        // lascia il widget invisibile — non bloccare il layout
      }
    }

    fetchWeather()

    return () => {
      controller.abort() // cancella le fetch se il componente smonta
    }
  }, [])

  if (!weather) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="inline-flex items-center gap-3 py-2 px-4 rounded-full bg-cream/5 border border-cream/10"
        role="status"
        aria-label={`Meteo a Ravenna: ${weather.temp}°C, ${weather.condition}`}
      >
        <span style={{ color: 'rgba(201,168,76,0.75)' }}>
          <WeatherIcon type={weather.icon} />
        </span>
        <div className="flex flex-col">
          <span className="font-jost text-[10px] tracking-[0.2em] uppercase text-cream/80 leading-none mb-1">
            Meteo Ravenna
          </span>
          <span className="font-cormorant text-sm text-cream/80">
            {weather.temp}°C · <span className="italic">{weather.condition}</span>
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

