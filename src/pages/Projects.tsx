import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'

const COLLAPSE_HEIGHT = 72 // ~3 lines

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [overflows, setOverflows] = useState(false)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (descRef.current) {
      setOverflows(descRef.current.scrollHeight > COLLAPSE_HEIGHT)
    }
  }, [])

  return (
    <motion.div
      className="bg-zinc-800/70 border border-zinc-700/30 rounded-lg overflow-hidden group flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ borderColor: 'rgba(99,102,241,0.4)' }}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Image */}
        <div className="overflow-hidden rounded-lg mb-4">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full rounded-lg"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Title + domain */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
        >
          {project.title}
          <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
        </a>
        <p className="text-zinc-400 text-sm mb-4">{project.domain}</p>

        {/* Description with expand */}
        <h4 className="text-amber-400 text-xs font-bold mb-2 uppercase tracking-wider">Description</h4>
        <div
          className="overflow-hidden transition-all duration-300"
          style={{ maxHeight: expanded ? 1000 : COLLAPSE_HEIGHT }}
        >
          <p ref={descRef} className="text-zinc-300 text-sm leading-relaxed">{project.description}</p>
        </div>
        {overflows && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-cyan-400 text-xs font-semibold mt-1 mb-5 text-left hover:text-cyan-300 transition-colors"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}
        {!overflows && <div className="mb-5" />}

        {/* Tech stack */}
        <h4 className="text-amber-400 text-xs font-bold mb-3 uppercase tracking-wider">Tech Stack</h4>
        <motion.div
          className="flex flex-wrap gap-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold px-2.5 py-1 rounded"
              variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
              whileHover={{ scale: 1.08, backgroundColor: 'rgba(99,102,241,0.2)' }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <div>
      {/* Header */}
      <div className="px-8 md:px-14 pt-9 pb-6 border-b border-zinc-700/40 bg-gradient-to-r from-zinc-900 to-zinc-800">
        <motion.h1
          className="text-3xl md:text-4xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Latest Projects
        </motion.h1>
        <motion.p
          className="text-zinc-400 text-lg mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I have transformed ideas into remarkable digital products.
        </motion.p>
      </div>

      {/* Project grid */}
      <div className="px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  )
}
