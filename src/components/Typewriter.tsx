import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export default function Typewriter({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    el.textContent = ''
    let i = 0
    const id = setInterval(() => {
      if (i < text.length) {
        el.textContent = text.slice(0, ++i)
      } else {
        clearInterval(id)
      }
    }, 55)
    return () => clearInterval(id)
  }, [inView, text])

  return (
    <span className="font-mono">
      <span ref={ref} />
      <span className="animate-blink">_</span>
    </span>
  )
}
