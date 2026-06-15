import { motion } from 'framer-motion'
import { projects } from '../data'

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

      {/* Project list */}
      <div className="px-4 md:px-8 py-8 space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            className="bg-zinc-800/70 border border-zinc-700/30 rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ borderColor: 'rgba(99,102,241,0.4)' }}
          >
            <div className="flex md:flex-row flex-col gap-8 p-7 md:p-10">
              {/* Screenshot */}
              <div className="md:w-80 md:shrink-0 overflow-hidden rounded-lg self-start">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover rounded-lg"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-2xl md:text-4xl font-bold text-white hover:text-cyan-400 transition-colors mb-4 md:mb-6"
                >
                  {project.title}
                  <span className="inline-block ml-2 text-xl opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>

                <h4 className="text-red-400 text-sm font-bold mb-2 uppercase tracking-wider">Description</h4>
                <p className="text-zinc-300 text-sm md:text-base font-medium mb-5 leading-relaxed">
                  {project.description}
                </p>

                <h4 className="text-red-400 text-sm font-bold mb-3 uppercase tracking-wider">Tech Stack</h4>
                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
                >
                  {project.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold px-2.5 py-1 rounded"
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(99,102,241,0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <div>
                  <h4 className="text-red-400 text-sm font-bold mb-1 uppercase tracking-wider">Domain</h4>
                  <p className="text-zinc-300 font-medium">{project.domain}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
