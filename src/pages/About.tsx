import { motion } from 'framer-motion'
import { skillCategories, experiences } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
}

// ---------- Animated skill bar ----------
function SkillBar({ name, level, icon, index }: { name: string; level: number; icon?: string; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-3 group"
    >
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      )}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-zinc-200 text-sm font-medium">{name}</span>
          <span className="text-zinc-400 text-xs font-mono">{level}%</span>
        </div>
        <div className="skill-bar-container">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background:
                level >= 80
                  ? 'linear-gradient(90deg, #b91c1c, #ef4444)'
                  : level >= 60
                  ? 'linear-gradient(90deg, #9333ea, #ef4444)'
                  : 'linear-gradient(90deg, #6366f1, #9333ea)',
            }}
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: index * 0.04, ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// ---------- Page ----------
export default function About() {
  return (
    <div>
      {/* Skills */}
      <div className="p-6 md:p-10 border-b border-zinc-700/50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-2xl md:text-4xl font-bold">I'm Specialized in</h2>
          <h3
            className="mt-2 text-2xl md:text-4xl font-bold font-mono"
            style={{
              background: 'linear-gradient(135deg, #06b6d4, #6366f1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            <img src="/assets/svg/about/arrow.svg" alt="" className="w-5 inline mr-2" />
            Modern Frameworks_
          </h3>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skillCategories.map((cat) => (
            <div key={cat.title}>
              <h4 className="text-white text-lg font-semibold border-l-2 border-yellow-400 pl-3 mb-5">
                {cat.title}
              </h4>
              <motion.div
                className="flex flex-col gap-4"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {cat.skills.map((skill, i) => (
                  <SkillBar key={skill.name} {...skill} index={i} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="p-6 md:p-10 bg-gradient-to-b from-zinc-900 to-zinc-800/60">
        <motion.h2
          className="text-white text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-x-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${i}`}
              className="border-b border-zinc-600/50 py-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.15 }}
            >
              {/* Top row */}
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <h3 className="text-white text-lg font-semibold">{exp.company}</h3>
                <span className="text-zinc-400 text-sm font-medium shrink-0">{exp.period}</span>
              </div>
              <p className="text-zinc-400 text-xs mb-1">{exp.location}</p>
              <p className="text-white text-base font-medium mb-3">{exp.role}</p>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.achievements.map((a, j) => (
                  <li key={j} className="text-zinc-300 text-sm flex gap-2">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: 'linear-gradient(135deg, #29b1f5, #4c4ef0)' }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: a.replace(/(\d+%?)/g, '<b class="gradient-text-blue">$1</b>') }} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">Education</h2>
          <div className="border border-zinc-700/50 rounded-lg p-6 max-w-2xl mx-auto bg-zinc-900/60 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div
                className="w-2 h-full self-stretch rounded-full shrink-0"
                style={{ background: 'linear-gradient(to bottom, #06b6d4, #6366f1)', minHeight: 60 }}
              />
              <div>
                <h3 className="text-white text-xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-zinc-400 mt-1">University of Central Punjab, Lahore, Pakistan</p>
                <p className="text-zinc-500 text-sm mt-0.5">Graduated 2020</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-center pb-6">
          <p className="text-white text-xl font-bold">Ready to discuss your project?</p>
          <p className="text-zinc-300 mt-1 mb-6">Let's super-charge your business today!</p>
          <div className="relative inline-block group">
            <a
              href="/assets/pdf/Haris_Zahid_Resume.pdf"
              download
              className="relative z-10 block bg-white text-black font-semibold py-4 px-8 transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            >
              Download Resume
            </a>
            <div
              className="absolute left-[6px] -bottom-[6px] w-full h-3/4 z-0"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #a2cbe0, #6366f1)' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
