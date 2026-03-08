import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Vimeo Background Video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/939085736?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute w-[177.78vh] min-w-full min-h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen"
          title="Background video"
        />
        <div className="absolute inset-0 bg-[#212121]/85" />
      </div>

      {/* Background glow */}
      <div className="absolute -top-1/2 -right-[30%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(91,104,84,0.12)_0%,transparent_70%)] rounded-full pointer-events-none z-[1]" />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="relative z-10 lg:order-1 order-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/20 border border-brand-green/30 rounded-full text-xs font-medium text-brand-green-light mb-7"
            >
              <span className="w-1.5 h-1.5 bg-brand-green-light rounded-full animate-pulse" />
              Unbiased. Unfiltered. Unsponsored.
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="font-heading font-extrabold text-[clamp(2.5rem,5vw,4rem)] leading-[1.08] tracking-tight mb-6 text-white"
            >
              Real-World Dental
              <br />
              Education.
              <br />
              <span className="bg-gradient-to-br from-brand-green to-brand-green-light bg-clip-text text-transparent">
                Without Limits.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg text-[#DCDDDB] max-w-[480px] mb-7 leading-relaxed"
            >
              Learn the clinical skills, branding, and practice growth
              strategies that most dental CE won't teach you — from a dentist
              who actually does the work every day.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="flex items-center gap-3 flex-wrap mb-9"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-[#DCDDDB]">
                FICOI Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-medium text-[#DCDDDB]">
                Kois Center — 1 of 1,139
              </span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex gap-4 flex-wrap"
            >
              <a
                href="https://limitlessce.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-green to-brand-green-light text-white rounded-full font-semibold text-[0.95rem] no-underline shadow-[0_4px_20px_rgba(91,104,84,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(91,104,84,0.5)] transition-all group"
              >
                Browse Courses
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-semibold text-[0.95rem] no-underline hover:border-brand-green-light hover:bg-brand-green/10 transition-all"
              >
                Meet Dr. Nick
              </a>
            </motion.div>

          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:order-2 order-1"
          >
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img
                src="https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/89fdaf48a5581d493088ff0547681bcf.png"
                alt="Dr. Nick Ciardiello, DMD, FICOI"
                className="w-full h-full object-cover object-top"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
