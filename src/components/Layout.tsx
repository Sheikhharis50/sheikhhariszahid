import { type ReactNode, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import ParticleBg from './ParticleBg'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative bg-black h-screen overflow-hidden">
      <ParticleBg />
      <CursorGlow />
      <div className="relative z-10 h-full flex flex-col md:flex-row">
        <div className="flex-1 section-scroll pb-16 md:pb-0">{children}</div>
        <Navbar />
      </div>
    </div>
  )
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`
      el.style.top = `${e.clientY}px`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed w-[500px] h-[500px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        top: '50%',
        left: '50%',
        zIndex: 1,
        transition: 'top 0.5s ease, left 0.5s ease',
      }}
    />
  )
}
