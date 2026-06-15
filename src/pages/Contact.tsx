import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'

const countries = [
  'None', 'Pakistan', 'New Zealand', 'England', 'America', 'Afghanistan',
  'Azerbaijan', 'Austria', 'Angola', 'Australia', 'Baden', 'Bavaria',
  'Barbados', 'Bangladesh', 'Bahrain', 'Bahamas', 'Cabo Verde', 'Cambodia',
  'Cameroon', 'Canada', 'Cayman Islands', 'Central African Republic',
  'Central American Federation', 'Chad',
]

interface FormState {
  name: string
  email: string
  company: string
  phone: string
  country: string
  message: string
}

const initial: FormState = { name: '', email: '', company: '', phone: '', country: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initial)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const inputClass =
    'w-full bg-zinc-900/80 text-zinc-200 placeholder-zinc-500 border-b border-red-600/60 py-3 px-4 focus:outline-none focus:border-red-400 transition-colors duration-200'

  const field = (key: keyof FormState) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value })),
  })

  return (
    <div className="p-5 md:p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h1 className="text-white text-3xl md:text-4xl font-bold">Get in touch</h1>
        <h2
          className="text-3xl md:text-4xl font-bold mt-2"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Let's talk about your project
        </h2>
      </motion.div>

      <div className="flex md:flex-row flex-col gap-8">
        {/* Left: contact info */}
        <motion.div
          className="md:w-72 shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-zinc-300 text-base leading-relaxed mb-4">
            Thinking about a new project, a problem to solve, or just want to connect? Let's do it!
          </p>
          <p className="text-zinc-300 text-base leading-relaxed mb-6">
            Use the form on this page or get in touch by other means.
          </p>

          {/* Phone */}
          <a href="tel:+923104150111" className="flex items-center gap-3 text-zinc-200 hover:text-white transition-colors mb-4 group">
            <img src="/assets/svg/contact/phone.svg" alt="" className="w-5 shrink-0" />
            <span className="text-sm">
              Phone:{' '}
              <span className="group-hover:text-blue-400 transition-colors">+92 310 4150111</span>
            </span>
          </a>

          {/* Social */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-zinc-300 text-sm font-medium">Social:</span>
            {[
              { href: 'mailto:Itshariszahid@gmail.com', icon: '/assets/svg/contact/email.svg', label: 'Email' },
              { href: 'https://www.linkedin.com/in/sheikh-haris-zahid/', icon: '/assets/svg/contact/linkdin.svg', label: 'LinkedIn' },
              { href: 'https://github.com/Sheikhharis50', icon: '/assets/svg/contact/github.svg', label: 'GitHub' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-zinc-800 hover:bg-indigo-600/30 transition-colors"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={s.icon} alt={s.label} className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          className="flex-1 border border-zinc-600/50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {/* Form header */}
          <div className="bg-zinc-900/60 border-b border-zinc-700/50 px-6 py-4">
            <p className="text-zinc-200 font-medium">Your contact information</p>
          </div>

          {submitted ? (
            <motion.div
              className="p-8 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div
                className="text-5xl mb-4"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                ✓
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-zinc-400">Thank you for reaching out. I'll get back to you soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row 1 */}
              <div className="flex flex-wrap gap-y-0 px-5 pt-5">
                <div className="w-full md:w-2/3 pr-0 md:pr-3 pb-4">
                  <input className={inputClass} type="text" placeholder="Full name" required {...field('name')} />
                </div>
                <div className="w-full md:w-1/3 pb-4">
                  <input className={inputClass} type="email" placeholder="Email address" required {...field('email')} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-y-0 px-5 pb-5">
                <div className="w-full md:w-1/3 pr-0 md:pr-3 pb-4">
                  <input className={inputClass} type="text" placeholder="Company Name" {...field('company')} />
                </div>
                <div className="w-full md:w-1/3 pr-0 md:pr-3 pb-4">
                  <input className={inputClass} type="tel" placeholder="Phone Number" {...field('phone')} />
                </div>
                <div className="w-full md:w-1/3 pb-4 relative">
                  <select
                    className={`${inputClass} bg-zinc-900`}
                    {...field('country')}
                  >
                    <option value="">Select country</option>
                    {countries.slice(1).map((c) => (
                      <option key={c} value={c.toLowerCase()}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="bg-zinc-900/60 border-y border-dashed border-zinc-700/50 px-6 py-3">
                <p className="text-zinc-200 font-medium text-sm">Tell me about your project</p>
              </div>
              <div className="px-5 py-4">
                <textarea
                  className={`${inputClass} resize-none`}
                  rows={4}
                  placeholder="Project description..."
                  required
                  {...field('message')}
                />
              </div>

              {/* Submit */}
              <div className="bg-zinc-900/60 border-t border-dashed border-zinc-700/50 px-5 py-4">
                <div className="relative inline-block group w-full sm:w-auto">
                  <motion.button
                    type="submit"
                    className="relative z-10 bg-white text-black font-semibold py-4 px-10 w-full sm:w-auto transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5 cursor-pointer"
                    whileTap={{ scale: 0.97 }}
                  >
                    Submit
                  </motion.button>
                  <div
                    className="absolute left-[6px] -bottom-[6px] w-full h-3/4 z-0"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #a2cbe0, #6366f1)' }}
                  />
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
