import { useState, useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Server, Globe, Monitor, Lightbulb, Layers } from 'lucide-react'
import { services } from '../data'

const serviceIcons: Record<string, React.ReactNode> = {
  'Mobile Development': <Smartphone size={40} className="text-white mb-3" />,
  'Back-end Development': <Server size={40} className="text-white mb-3" />,
  'Web Development': <Globe size={40} className="text-white mb-3" />,
  'Front-end Development': <Monitor size={40} className="text-white mb-3" />,
  'Consultancy': <Lightbulb size={40} className="text-white mb-3" />,
  'Full Stack Development': <Layers size={40} className="text-white mb-3" />,
}

const expectList = [
  {
    title: 'Web Development',
    body: 'Custom websites that are responsive, scalable, and optimised for performance. From e-commerce platforms to content management systems, I build solutions tailored to your needs.',
  },
  {
    title: 'Mobile Development',
    body: 'High-quality mobile apps for both iOS and Android, using modern technologies to ensure a seamless user experience.',
  },
  {
    title: 'Full Stack Development',
    body: 'Comprehensive development services covering both front-end and back-end to deliver complete and efficient web applications.',
  },
  {
    title: 'Front-end Development',
    body: 'Engaging and interactive user interfaces that provide a great user experience across all devices.',
  },
  {
    title: 'Back-end Development',
    body: 'Robust server-side solutions that ensure the reliability, security, and performance of your web applications.',
  },
  {
    title: 'Consultancy',
    body: 'Expert advice on technology strategy, system architecture, and project management to help you navigate complex technical decisions.',
  },
]

// ---------- 3-D tilt card ----------
function TiltCard({ children }: { children: React.ReactNode }) {
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

  const handleLeave = () => setStyle({ transform: 'perspective(900px) rotateX(0) rotateY(0) scale(1)' })

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

const sectionHeadingStyle = {
  background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  WebkitBackgroundClip: 'text' as const,
  WebkitTextFillColor: 'transparent' as const,
}

export default function Services() {
  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6"
        style={{
          background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        Services
      </motion.h1>

      {/* Two-column intro */}
      <div className="flex md:flex-row flex-col gap-10 mb-10">
        {/* What to expect */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-lg font-semibold mb-4" style={sectionHeadingStyle}>
            What you can expect:
          </h2>
          <ul className="space-y-3">
            {expectList.map((item) => (
              <li key={item.title} className="text-zinc-300 text-sm leading-relaxed">
                <span className="font-semibold text-white">{item.title}</span>: {item.body}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* My expertise */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <h2 className="text-lg font-semibold mb-4" style={sectionHeadingStyle}>
            My Expertise
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed mb-6">
            I focus on creating digital solutions that are not only aesthetically pleasing but also
            functional and user-friendly. My approach ensures that your products are shippable and
            deliverable, addressing both design and technical challenges effectively.
          </p>
          <h2 className="text-lg font-semibold mb-4" style={sectionHeadingStyle}>
            Applications I'm Fluent In
          </h2>
          <ul className="space-y-3 text-zinc-300 text-sm">
            <li>
              <span className="font-semibold text-white">Design Strategy</span>: Crafting a
              strategic approach to design that aligns with your business goals and user needs.
            </li>
            <li>
              <span className="font-semibold text-white">Web and Mobile App Development</span>:
              Developing intuitive and efficient web and mobile applications tailored to your
              specific requirements.
            </li>
          </ul>

          <div className="relative inline-block group mt-8">
            <a
              href="/assets/pdf/Haris_Zahid_Resume.pdf"
              download
              className="relative z-10 block bg-white text-black font-semibold py-4 px-8 transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5 text-sm"
            >
              Download Resume
            </a>
            <div
              className="absolute left-[6px] -bottom-[6px] w-full h-3/4 z-0"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #a2cbe0, #6366f1)' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Service cards grid */}
      <div className="grid md:grid-cols-3 gap-3">
        {services.map((svc, i) => (
          <motion.div
            key={svc.title}
            className="h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <TiltCard>
              {/* Header */}
              <div
                className="p-6"
                style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81, #4338ca)' }}
              >
                {serviceIcons[svc.title] ?? null}
                <h3 className="text-xl font-bold text-white">{svc.title}</h3>
              </div>
              {/* Body */}
              <div className="p-6 bg-white flex-1 flex flex-col">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{svc.description}</p>
                <p className="font-bold text-gray-900 text-sm mb-2">What I Offer</p>
                <ul className="space-y-1">
                  {svc.offerings.map((o) => (
                    <li key={o} className="text-gray-600 text-sm font-medium flex gap-2 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
