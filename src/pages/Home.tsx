import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { stats, trustedBy } from "../data";
import Background from "../components/Background";
import Typewriter from "../components/Typewriter";
import Counter from "../components/Counter";

// ---------- Page ----------
export default function Home() {
  return (
    <div className="min-h-full relative">
      {/* Background */}
      <Background />

      {/* Dark overlay */}
      {/* <div className="fixed inset-0 bg-zinc-900/60 z-[2]" /> */}

      {/* Page content above background */}
      <div className="relative z-10 flex flex-col">
        {/* Hero */}
        <div className="relative flex flex-col items-center pt-20 pb-6 overflow-hidden">
          {/* Ambient glow behind profile */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

          {/* Profile image + rotating ring */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            {/* Outer spinning gradient ring */}
            <div
              className="absolute rounded-full animate-spin-slow"
              style={{
                width: "calc(100% + 16px)",
                height: "calc(100% + 16px)",
                background:
                  "conic-gradient(from 0deg, #06b6d4, #6366f1, #a78bfa, #06b6d4)",
                filter: "blur(2px)",
              }}
            />
            {/* Inner ring counter-spin */}
            <div
              className="absolute rounded-full animate-spin-reverse opacity-60"
              style={{
                width: "calc(100% + 8px)",
                height: "calc(100% + 8px)",
                background:
                  "conic-gradient(from 180deg, #a78bfa, #06b6d4, #6366f1, #a78bfa)",
                filter: "blur(1px)",
              }}
            />
            {/* Profile cutout background */}
            <div className="absolute inset-[6px] rounded-full bg-zinc-900" />
            {/* Profile image */}
            <img
              src="/assets/images/home/profile.jpg"
              alt="Sheikh Haris Zahid"
              className="relative md:w-[380px] w-[260px] rounded-full"
              style={{ zIndex: 1 }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-white mt-6 font-extrabold text-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight px-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Sheikh Haris Zahid
          </motion.h1>
        </div>

        {/* Stats */}
        <motion.div
          className="max-w-4xl mx-auto px-4"
          style={{
            background:
              "linear-gradient(#18181b, #18181b) padding-box, linear-gradient(135deg, #06b6d4, #a2cbe0, #6366f1) border-box",
            border: "1px solid transparent",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-700/40">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="p-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 + i * 0.15 }}
              >
                <div
                  className="text-3xl lg:text-4xl font-extrabold"
                  style={{
                    background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-1.5 text-zinc-300 text-sm lg:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Title + description */}
        <motion.div
          className="text-center w-4/5 max-w-3xl mx-auto pt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white flex items-center justify-center gap-3 h-14">
            <MoveRight className="w-5 sm:w-7 text-amber-400 shrink-0" />
            <Typewriter text="Full-Stack AI Developer" />
          </h2>

          <motion.p
            className="mt-6 text-zinc-300 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            Specialising in Generative AI integration, RAG systems, and
            AI-powered applications. I architect end-to-end solutions — from LLM
            orchestration and vector databases to production-ready full-stack
            apps. 7+ years building scalable systems, now laser-focused on the
            AI engineering layer that turns cutting-edge models into real
            product value.
          </motion.p>
        </motion.div>

        {/* Download resume button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <div className="relative group">
            <a
              href="/assets/pdf/resume.pdf"
              download
              className="relative z-10 block bg-white text-black font-semibold py-4 px-8 transition-transform duration-200 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            >
              Download Resume
            </a>
            <div
              className="absolute left-[6px] -bottom-[6px] w-full h-3/4 z-0"
              style={{
                background:
                  "linear-gradient(135deg, #06b6d4, #a2cbe0, #6366f1)",
              }}
            />
          </div>
        </motion.div>

        {/* Trusted by */}
        <motion.div
          className="hidden md:flex items-center justify-around max-w-3xl mx-auto mt-16 mb-12 px-6 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <h3 className="text-white text-2xl font-bold shrink-0">Trusted By</h3>
          {trustedBy.map((brand, i) => (
            <motion.img
              key={brand.name}
              src={brand.logo}
              alt={brand.name}
              className="w-28 object-contain opacity-70 hover:opacity-100 transition-opacity"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 2 + i * 0.12 }}
            />
          ))}
        </motion.div>
      </div>
      {/* end z-10 content wrapper */}
    </div>
  );
}
