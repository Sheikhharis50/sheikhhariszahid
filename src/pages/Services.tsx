import { motion } from 'framer-motion'
import { Brain, Database, MessageSquare, Layers, Server, Lightbulb } from 'lucide-react'
import { services } from '../data'
import TiltCard from '../components/TiltCard'

const serviceIcons: Record<string, React.ReactNode> = {
  'AI Integration': <Brain size={40} className="text-white mb-3" />,
  'RAG & Knowledge Systems': <Database size={40} className="text-white mb-3" />,
  'AI Chatbots & Agents': <MessageSquare size={40} className="text-white mb-3" />,
  'Full Stack AI Applications': <Layers size={40} className="text-white mb-3" />,
  'Back-End Development': <Server size={40} className="text-white mb-3" />,
  'AI Consulting': <Lightbulb size={40} className="text-white mb-3" />,
}

const expectList = [
  {
    title: 'AI Integration',
    body: 'Embedding OpenAI, Anthropic, and other LLMs into existing products — streaming responses, prompt design, and production guardrails that hold up under real load.',
  },
  {
    title: 'RAG & Knowledge Systems',
    body: 'End-to-end retrieval pipelines over your own data using pgvector, Pinecone, LangChain, and LlamaIndex for accurate, grounded answers — not hallucinations.',
  },
  {
    title: 'AI Chatbots & Agents',
    body: 'Production-ready conversational agents with tool use, memory, and multi-step planning — far beyond a simple ChatGPT wrapper.',
  },
  {
    title: 'Full Stack AI Applications',
    body: 'React/Next.js frontends paired with FastAPI or Node.js backends, connected to your AI layer — deployed, monitored, and production-ready.',
  },
  {
    title: 'Back-End Development',
    body: 'Scalable APIs, microservices, and event-driven systems in Python and Node.js, built to support both AI features and traditional workloads.',
  },
  {
    title: 'AI Consulting',
    body: 'Vendor-neutral guidance on model selection, architecture, cost optimisation, and building the right AI system for your specific use case.',
  },
]

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
            I specialise in the full AI engineering stack — from prompt design and RAG pipelines
            to production deployment. Whether you need to embed a single LLM feature or build an
            autonomous agent from the ground up, I bring both the AI expertise and the full-stack
            engineering to ship it reliably.
          </p>
          <h2 className="text-lg font-semibold mb-4" style={sectionHeadingStyle}>
            Frameworks & Tools I Work With
          </h2>
          <ul className="space-y-3 text-zinc-300 text-sm">
            <li>
              <span className="font-semibold text-white">LLM Frameworks</span>: LangChain,
              LlamaIndex, OpenAI Agents SDK, and LangGraph for building sophisticated AI pipelines
              and agent workflows.
            </li>
            <li>
              <span className="font-semibold text-white">Full-Stack AI</span>: React/Next.js
              frontends + FastAPI/Node.js backends, wired to vector databases and LLM APIs for
              seamless, production-ready AI products.
            </li>
          </ul>

          <div className="relative inline-block group mt-8">
            <a
              href="/assets/pdf/resume.pdf"
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
