import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'

export default function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (inView) animate(count, value, { duration: 2, ease: 'easeOut' })
  }, [inView, count, value])

  return <motion.span ref={ref}>{rounded}</motion.span>
}
