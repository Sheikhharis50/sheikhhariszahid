import { useState, useRef, type MouseEvent } from 'react'

export default function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState({})

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    const x = ((e.clientX - left) / width - 0.5) * 14
    const y = ((e.clientY - top) / height - 0.5) * -14
    setStyle({ transform: `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.02)` })
  }

  const handleLeave = () =>
    setStyle({ transform: 'perspective(900px) rotateX(0) rotateY(0) scale(1)' })

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="h-full flex flex-col"
      style={{ ...style, transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
