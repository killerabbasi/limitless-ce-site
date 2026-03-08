import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="relative py-32 bg-[#212121] text-center overflow-hidden text-white">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(91,104,84,0.12)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-[1200px] mx-auto px-6 relative"
      >
        <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
          Start Today
        </span>
        <h2 className="font-heading text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.15] mb-5">
          Your Practice Has
          <br />
          No Limits.
        </h2>
        <p className="text-lg text-[#DCDDDB] max-w-[550px] mx-auto leading-relaxed mb-10">
          Join a community of dentists leveling up their clinical skills,
          building their brand, and growing their practice — from beginner to
          Super GP.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://limitlessce.com/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-green to-brand-green-light text-white rounded-full font-semibold text-[0.95rem] no-underline shadow-[0_4px_20px_rgba(91,104,84,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(91,104,84,0.5)] transition-all group"
          >
            Browse All Courses
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="https://www.instagram.com/dr.nickc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-[0.95rem] no-underline hover:border-brand-green-light hover:bg-brand-green/10 transition-all"
          >
            Follow @dr.nickc
          </a>
        </div>
      </motion.div>
    </section>
  )
}
