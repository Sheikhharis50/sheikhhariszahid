import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { certifications } from '../data'
import ToptalBadge from '../components/ToptalBadge'

export default function Certifications() {
  return (
    <div className="p-6 md:p-10">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-white text-3xl md:text-4xl font-bold">Badges & Certifications</h1>
        <h2
          className="mt-2 text-xl md:text-2xl font-semibold"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Verified expertise & credentials
        </h2>
      </motion.div>

      {/* ── Badges ── */}
      <motion.h3
        className="text-white text-xl font-bold border-l-2 border-amber-400 pl-3 mb-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Badges
      </motion.h3>

      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <motion.div
          className="border border-zinc-700/40 rounded-xl p-8 bg-zinc-900/50 hover:border-sky-500/40 transition-colors flex flex-col justify-between"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <ToptalBadge />
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: 'rgba(37,169,239,0.15)', color: '#25a9ef' }}
              >
                Top 3% Globally
              </div>
            </div>
            <h3 className="text-white text-xl font-bold mb-2">Toptal Vetted Expert</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Accepted after a rigorous screening covering technical interviews, live problem-solving,
              and test projects — top 3% of all applicants worldwide.
            </p>
          </div>
          <a
            href="https://www.toptal.com/developers/resume/haris-zahid#M59VDn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-lg transition-opacity hover:opacity-80 mt-6"
            style={{ background: 'linear-gradient(135deg, #296bff, #25a9ef)', color: '#fff', width: 'fit-content' }}
          >
            View Profile on Toptal
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>

      {/* ── Certifications ── */}
      <motion.h3
        className="text-white text-xl font-bold border-l-2 border-amber-400 pl-3 mb-6"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Certifications
      </motion.h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            className="border border-zinc-700/40 rounded-xl p-8 bg-zinc-900/50 hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {cert.icon && (
                  <img src={cert.icon} alt={cert.issuer} className="w-10 h-10 rounded-lg shrink-0" />
                )}
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc' }}
                >
                  {cert.issuer}
                </div>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{cert.title}</h3>
              {cert.date && <p className="text-zinc-500 text-sm mb-4">{cert.date}</p>}
            </div>
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-lg transition-opacity hover:opacity-80 mt-4"
                style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', color: '#fff', width: 'fit-content' }}
              >
                View credential
                <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
