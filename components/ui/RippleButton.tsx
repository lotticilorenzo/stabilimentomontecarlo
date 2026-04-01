'use client'

import { useRef, type MouseEvent, type ButtonHTMLAttributes } from 'react'

type RippleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  /** Extra CSS classes */
  className?: string
}

/**
 * RippleButton
 * Drop-in replacement for <button> that adds the CSS ripple effect on click.
 * Automatically applies btn-ripple class. All other button props are passed through.
 */
export default function RippleButton({
  children,
  className = '',
  onClick,
  ...props
}: RippleButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current
    if (!btn) return

    const rect = btn.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    btn.style.setProperty('--ripple-x', `${x}%`)
    btn.style.setProperty('--ripple-y', `${y}%`)

    btn.classList.remove('ripple-active')
    // Force reflow to restart animation
    void btn.offsetWidth
    btn.classList.add('ripple-active')

    // Cleanup after animation
    setTimeout(() => {
      if (btnRef.current) btnRef.current.classList.remove('ripple-active')
    }, 600)

    if (onClick) onClick(e)
  }

  return (
    <button
      ref={btnRef}
      className={`btn-ripple ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
