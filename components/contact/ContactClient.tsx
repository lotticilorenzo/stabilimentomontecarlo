'use client'

import { useState, useId } from 'react'
import Image from 'next/image'
import ScrollReveal from '@/components/ui/ScrollReveal'
import RippleButton from '@/components/ui/RippleButton'

// ─── Floating‑label field ─────────────────────────────────────────────────────

type FieldProps = {
  id: string
  name: string
  label: string
  type?: string
  value: string
  error?: string
  autoComplete?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function FloatField({
  id, name, label, type = 'text', value, error, autoComplete, onChange,
}: FieldProps) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative pt-5">
      <label
        htmlFor={id}
        className="absolute left-0 transition-all duration-300 pointer-events-none select-none"
        style={{
          top: lifted ? '0' : '1.5rem',
          fontSize: lifted ? '10px' : '14px',
          letterSpacing: lifted ? '0.15em' : '0',
          textTransform: lifted ? 'uppercase' : 'none',
          color: error
            ? '#C4704A'
            : focused
            ? '#1B4F6B'
            : 'rgba(26,26,24,0.7)',
        }}
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className="w-full bg-transparent py-2.5 font-jost text-base font-light text-dark outline-none md:text-[15px]"
        style={{
          borderBottom: `1px solid ${
            error
              ? '#C4704A'
              : focused
              ? '#1B4F6B'
              : 'rgba(26,26,24,0.2)'
          }`,
          transition: 'border-color 0.3s',
        }}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 font-jost text-[11px] tracking-wide"
          style={{ color: '#C4704A' }}
        >
          {error}
        </p>
      )}
    </div>
  )
}

// ─── Floating‑label textarea ──────────────────────────────────────────────────

type TextAreaProps = {
  id: string
  name: string
  label: string
  value: string
  error?: string
  rows?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

function FloatTextarea({
  id, name, label, value, error, rows = 5, onChange,
}: TextAreaProps) {
  const [focused, setFocused] = useState(false)
  const lifted = focused || value.length > 0

  return (
    <div className="relative pt-5">
      <label
        htmlFor={id}
        className="absolute left-0 transition-all duration-300 pointer-events-none select-none"
        style={{
          top: lifted ? '0' : '1.5rem',
          fontSize: lifted ? '10px' : '14px',
          letterSpacing: lifted ? '0.15em' : '0',
          textTransform: lifted ? 'uppercase' : 'none',
          color: error
            ? '#C4704A'
            : focused
            ? '#1B4F6B'
            : 'rgba(26,26,24,0.42)',
        }}
      >
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        rows={rows}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className="w-full bg-transparent py-2.5 font-jost text-base font-light text-dark outline-none resize-none md:text-[15px]"
        style={{
          borderBottom: `1px solid ${
            error
              ? '#C4704A'
              : focused
              ? '#1B4F6B'
              : 'rgba(26,26,24,0.4)'
          }`,
          transition: 'border-color 0.3s',
        }}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 font-jost text-[11px] tracking-wide"
          style={{ color: '#C4704A' }}
        >
          {error}
        </p>
      )}
    </div>
  )
}

// ─── Icone inline ─────────────────────────────────────────────────────────────

const IconPin = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
      d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.314-2.686-6-6-6z" />
    <circle cx="12" cy="8" r="2" strokeWidth={1.4} />
  </svg>
)

const IconPhone = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4}
      d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .772-.014 1.154-.042.37-.028.694-.257.854-.6l1.8-3.9a1 1 0 00-.29-1.2l-3.5-2.5a1 1 0 00-1.28.12l-1.52 1.52a12.07 12.07 0 01-5.42-5.42l1.52-1.52a1 1 0 00.12-1.28L9.44 3.186a1 1 0 00-1.2-.29l-3.9 1.8a1.004 1.004 0 00-.6.854C3.014 5.13 3 5.386 3 5.5z" />
  </svg>
)

const IconMail = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" strokeWidth={1.4} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M2 8l10 7 10-7" />
  </svg>
)

const IconClock = () => (
  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="9" strokeWidth={1.4} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.4} d="M12 7v5l3 3" />
  </svg>
)

const IconIG = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const IconFB = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

// ─── Tabella orari stagionali ──────────────────────────────────────────────────

const orari = [
  { periodo: 'Maggio', orario: '9:00 – 19:00', note: 'Apertura stagione' },
  { periodo: 'Giugno', orario: '8:30 – 20:00', note: 'Alta stagione' },
  { periodo: 'Luglio', orario: '8:30 – 20:30', note: 'Alta stagione' },
  { periodo: 'Agosto', orario: '8:00 – 20:30', note: 'Picco estivo' },
  { periodo: 'Settembre', orario: '9:00 – 19:00', note: 'Fine stagione' },
]

// ─── Form state ───────────────────────────────────────────────────────────────

type FormData = {
  nome: string
  email: string
  oggetto: string
  messaggio: string
}

type FormErrors = Partial<FormData>

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactClient() {
  const uid = useId()

  const [formData, setFormData] = useState<FormData>({
    nome: '', email: '', oggetto: '', messaggio: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const validate = (): FormErrors => {
    const e: FormErrors = {}
    if (!formData.nome.trim()) e.nome = 'Il nome è richiesto'
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      e.email = "Inserisci un'email valida"
    if (!formData.oggetto.trim()) e.oggetto = "Indica l'oggetto del messaggio"
    if (formData.messaggio.trim().length < 10)
      e.messaggio = 'Il messaggio deve contenere almeno 10 caratteri'
    return e
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length > 0) { setErrors(v); return }
    setErrors({})
    setSending(true)
    // Simulated async submit
    await new Promise(r => setTimeout(r, 1200))
    setSending(false)
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ nome: '', email: '', oggetto: '', messaggio: '' })
  }

  return (
    <>
      {/* ── Hero panoramico ───────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ height: '100dvh', minHeight: '600px' }}
      >
        {/* Background Image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&q=80"
            alt="Tramonto sulla spiaggia di Bagno Montecarlo Ravenna"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/30 to-dark/80" />
        </div>

        <div className="relative z-10 px-6">
          <div className="inline-flex items-center justify-center px-6 py-2.5 mb-6 border border-white/10 bg-black/30 backdrop-blur-md rounded-full">
            <span className="font-jost text-[10px] sm:text-[11px] tracking-[0.3em] font-light uppercase text-cream">
              Bagno Montecarlo · Ravenna
            </span>
          </div>
          <h1
            className="font-cormorant font-light italic text-cream leading-none"
            style={{ fontSize: 'clamp(3.2rem, 9vw, 7rem)' }}
          >
            Contatti
          </h1>
          <div
            className="mx-auto mt-7"
            style={{ width: '40px', height: '1px', backgroundColor: '#3A7FA0', opacity: 0.55 }}
            aria-hidden="true"
          />
        </div>
      </section>

      {/* ── Info + Mappa ─────────────────────────────────────────────────────── */}
      <section className="bg-sand py-16 md:py-16 md:py-16 md:py-20 lg:py-28 overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-0 md:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row shadow-2xl bg-white/80 border border-dark/5">
            
            {/* ── Colonna sinistra (Info Card) ─────────────────────────────── */}
            <div className="lg:w-5/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative z-10">
              <ScrollReveal direction="left">
                <span className="font-cormorant-sc text-[11px] tracking-[0.4em] uppercase text-dark/80 block mb-12">
                  Informazioni
                </span>

                <div className="space-y-10">
                  {/* Indirizzo */}
                  <div className="flex items-start gap-5">
                    <span className="text-sea mt-1 opacity-80">
                      <IconPin />
                    </span>
                    <div>
                      <p className="font-cormorant text-xl italic text-dark/90 mb-2">Dove siamo</p>
                      <address className="not-italic font-jost text-[15px] font-light text-dark/80 leading-relaxed">
                        Viale della Pace, 421<br />
                        48122 Marina di Ravenna (RA)
                      </address>
                    </div>
                  </div>

                  <div className="h-px bg-dark/5" aria-hidden="true" />

                  {/* Telefono */}
                  <div className="flex items-start gap-5">
                    <span className="text-sea mt-1 opacity-80">
                      <IconPhone />
                    </span>
                    <div>
                      <p className="font-cormorant text-xl italic text-dark/90 mb-2">Telefono</p>
                      <a
                        href="tel:+390544000000"
                        className="font-jost text-[15px] font-light text-dark/80 transition-colors duration-300 hover:text-sea"
                      >
                        +39 0544 000 000
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-dark/5" aria-hidden="true" />

                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <span className="text-sea mt-1 opacity-80">
                      <IconMail />
                    </span>
                    <div>
                      <p className="font-cormorant text-xl italic text-dark/90 mb-2">Email</p>
                      <a
                        href="mailto:info@bagnomontecarlo.it"
                        className="font-jost text-[15px] font-light text-dark/80 transition-colors duration-300 hover:text-sea"
                      >
                        info@bagnomontecarlo.it
                      </a>
                    </div>
                  </div>

                  <div className="h-px bg-dark/5" aria-hidden="true" />

                  {/* Orari stagionale */}
                  <div className="flex items-start gap-5">
                    <span className="text-sea mt-1 opacity-80">
                      <IconClock />
                    </span>
                    <div className="w-full">
                      <p className="font-cormorant text-xl italic text-dark/90 mb-5">Orari Stagionali</p>
                      <table className="w-full min-w-[280px]" aria-label="Orari stagionali Bagno Montecarlo">
                        <thead>
                          <tr>
                            <th className="text-left font-jost text-[10px] tracking-[0.2em] uppercase pb-3 text-dark/50 font-light">
                              Periodo
                            </th>
                            <th className="text-left font-jost text-[10px] tracking-[0.2em] uppercase pb-3 text-dark/80 font-light">
                              Orario
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orari.map((r) => (
                            <tr key={r.periodo} className="border-t border-dark/5">
                              <td className="font-cormorant text-[16px] italic py-3 text-dark/90">
                                {r.periodo}
                              </td>
                              <td className="font-jost text-[14px] font-light py-3 text-dark/80">
                                {r.orario}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="h-px bg-dark/5" aria-hidden="true" />

                  {/* Social */}
                  <div>
                    <p className="font-cormorant text-xl italic text-dark/90 mb-5">Seguici</p>
                    <div className="flex gap-8">
                      <a
                        href="https://instagram.com/bagnomontecarlo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 font-jost text-[12px] tracking-[0.15em] uppercase text-dark/80 hover:text-sea transition-colors duration-300"
                      >
                        <span className="text-dark/80 group-hover:text-sea transition-colors duration-300">
                          <IconIG />
                        </span>
                        Instagram
                      </a>
                      <a
                        href="https://facebook.com/bagnomontecarlo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 font-jost text-[12px] tracking-[0.15em] uppercase text-dark/80 hover:text-sea transition-colors duration-300"
                      >
                        <span className="text-dark/80 group-hover:text-sea transition-colors duration-300">
                          <IconFB />
                        </span>
                        Facebook
                      </a>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            </div>

            {/* ── Colonna destra (Mappa) ────────────────────────────────────── */}
            <div className="lg:w-7/12 h-[450px] lg:h-auto relative">
              <ScrollReveal delay={0.2} direction="right" className="absolute inset-0 w-full h-full">
                <iframe
                  title="Mappa Bagno Montecarlo Marina di Ravenna"
                  src="https://maps.google.com/maps?q=Viale%20della%20Pace%20421%2C%20Marina%20di%20Ravenna&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  style={{
                    border: 0,
                    width: '100%',
                    height: '100%',
                    filter: 'grayscale(0.8) contrast(1.1) brightness(0.95)',
                  }}
                />
                {/* Sea-tone color overlay via mix-blend-mode */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: '#1B4F6B', opacity: 0.1, mixBlendMode: 'color' }}
                  aria-hidden="true"
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Form contatto full‑width ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#EDE6D0' }} className="py-16 md:py-16 md:py-16 md:py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="font-cormorant-sc text-[10px] tracking-[0.4em] uppercase text-dark/80 block mb-5">
                Scrivici
              </span>
              <h2
                className="font-cormorant font-light italic text-dark"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}
              >
                Manda un Messaggio
              </h2>
            </div>
          </ScrollReveal>

          {submitted ? (
            /* ── Stato success ──────────────────────────────────────────────── */
            <div
              className="text-center py-16"
              style={{
                animation: 'fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards',
              }}
            >
              <style>{`
                @keyframes fadeInUp {
                  from { opacity: 0; transform: translateY(24px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes checkDraw {
                  from { stroke-dashoffset: 40; }
                  to   { stroke-dashoffset: 0; }
                }
                @keyframes ringPulse {
                  0%   { transform: scale(1); opacity: 0.6; }
                  100% { transform: scale(1.6); opacity: 0; }
                }
              `}</style>

              {/* Animated check */}
              <div className="relative w-20 h-20 mx-auto mb-8">
                {/* Pulse ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '1.5px solid #1B4F6B',
                    animation: 'ringPulse 1.4s ease-out 0.3s forwards',
                  }}
                  aria-hidden="true"
                />
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(27,79,107,0.08)', border: '1px solid rgba(27,79,107,0.2)' }}
                >
                  <svg className="w-9 h-9" fill="none" stroke="#1B4F6B" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                      style={{
                        strokeDasharray: 40,
                        strokeDashoffset: 40,
                        animation: 'checkDraw 0.5s cubic-bezier(0.22,1,0.36,1) 0.4s forwards',
                      }}
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-cormorant text-2xl italic text-dark mb-3">
                Messaggio inviato
              </h3>
              <p className="font-jost text-[14px] font-light mb-10" style={{ color: 'rgba(26,26,24,0.52)' }}>
                Grazie, <span className="text-dark/80">{formData.nome}</span>.
                Ti risponderemo entro 24 ore.
              </p>
              <button
                onClick={handleReset}
                className="font-jost text-[11px] tracking-[0.25em] uppercase transition-colors duration-300"
                style={{ color: 'rgba(26,26,24,0.4)', borderBottom: '1px solid rgba(26,26,24,0.2)' }}
              >
                Invia un altro messaggio
              </button>
            </div>
          ) : (
            /* ── Form ──────────────────────────────────────────────────────── */
            <ScrollReveal delay={0.1}>
              <form onSubmit={handleSubmit} noValidate className="space-y-8">

                {/* Row: Nome + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <FloatField
                    id={`${uid}-nome`}
                    name="nome"
                    label="Nome"
                    value={formData.nome}
                    error={errors.nome}
                    autoComplete="name"
                    onChange={handleChange}
                  />
                  <FloatField
                    id={`${uid}-email`}
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    error={errors.email}
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </div>

                {/* Oggetto */}
                <FloatField
                  id={`${uid}-oggetto`}
                  name="oggetto"
                  label="Oggetto"
                  value={formData.oggetto}
                  error={errors.oggetto}
                  onChange={handleChange}
                />

                {/* Messaggio */}
                <FloatTextarea
                  id={`${uid}-messaggio`}
                  name="messaggio"
                  label="Messaggio"
                  value={formData.messaggio}
                  error={errors.messaggio}
                  rows={5}
                  onChange={handleChange}
                />

                {/* Submit */}
                <div className="pt-4 flex flex-col items-start gap-4">
                  <RippleButton
                    type="submit"
                    disabled={sending}
                    className="font-jost text-[11px] tracking-[0.3em] uppercase px-14 py-5 transition-all duration-500 disabled:opacity-60"
                    style={{
                      backgroundColor: sending ? '#3A7FA0' : '#1B4F6B',
                      color: '#FAFAF8',
                    }}
                    onMouseEnter={e => {
                      if (!sending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#15415A'
                    }}
                    onMouseLeave={e => {
                      if (!sending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#1B4F6B'
                    }}
                  >
                    {sending ? (
                      <span className="flex items-center gap-3">
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            cx="12" cy="12" r="10"
                            stroke="currentColor"
                            strokeOpacity="0.25"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 2a10 10 0 0110 10"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Invio in corso…
                      </span>
                    ) : (
                      'Invia Messaggio'
                    )}
                  </RippleButton>
                  <p className="font-jost text-[11px] font-light" style={{ color: 'rgba(26,26,24,0.38)' }}>
                    Ti risponderemo entro 24 ore.
                  </p>
                </div>

              </form>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── Social CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#1B4F6B' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-cormorant text-3xl md:text-4xl font-light italic text-cream mb-3">
              Seguici su Instagram
            </h2>
            <p className="font-jost text-sm font-light mb-8" style={{ color: 'rgba(250,250,248,0.5)' }}>
              Ogni giorno il tramonto, il mare, la tavola. La vita di Montecarlo.
            </p>
            <a
              href="https://instagram.com/bagnomontecarlo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-jost text-[11px] tracking-[0.2em] uppercase transition-all duration-400 px-10 py-4"
              style={{
                border: '1px solid rgba(250,250,248,0.25)',
                color: 'rgba(250,250,248,0.65)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#C9A84C'
                el.style.color = '#C9A84C'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(250,250,248,0.25)'
                el.style.color = 'rgba(250,250,248,0.65)'
              }}
            >
              <IconIG />
              @bagnomontecarlo
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
