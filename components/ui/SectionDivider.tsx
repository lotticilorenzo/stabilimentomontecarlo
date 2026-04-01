interface SectionDividerProps {
  variant?: 'simple' | 'diamond' | 'text'
  color?: 'light' | 'dark'
  text?: string
  className?: string
}

export default function SectionDivider({
  variant = 'simple',
  color = 'dark',
  text,
  className = '',
}: SectionDividerProps) {
  const lineColor = color === 'light' ? 'border-cream/30' : 'border-dark/20'
  const textColor = color === 'light' ? 'text-cream/80' : 'text-dark/80'
  const dotColor = color === 'light' ? 'bg-cream/40' : 'bg-dark/30'

  if (variant === 'simple') {
    return (
      <div className={`w-full border-t ${lineColor} ${className}`} />
    )
  }

  if (variant === 'diamond') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className={`flex-1 border-t ${lineColor}`} />
        <div className={`w-1.5 h-1.5 rotate-45 ${dotColor}`} />
        <div className={`flex-1 border-t ${lineColor}`} />
      </div>
    )
  }

  if (variant === 'text' && text) {
    return (
      <div className={`flex items-center gap-6 ${className}`}>
        <div className={`flex-1 border-t ${lineColor}`} />
        <span className={`font-cormorant-sc text-xs tracking-[0.25em] uppercase ${textColor}`}>
          {text}
        </span>
        <div className={`flex-1 border-t ${lineColor}`} />
      </div>
    )
  }

  return null
}
