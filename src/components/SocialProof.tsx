import { motion } from 'framer-motion'
import { Video, BookOpen, Trophy } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedNumber from './AnimatedNumber'

const features = [
  {
    icon: Video,
    title: 'Video-First Learning',
    desc: 'Every course is built around real clinical footage, not slides.',
  },
  {
    icon: BookOpen,
    title: 'Learn on Your Schedule',
    desc: 'Self-paced. Watch on any device, anytime.',
  },
  {
    icon: Trophy,
    title: 'Built by a Practitioner',
    desc: 'Not a consultant. A dentist doing this work every day.',
  },
]

export default function SocialProof() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="lg:text-left text-center">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
              The Platform
            </span>
            <div className="font-heading text-[clamp(3rem,6vw,5rem)] font-black leading-none mb-2">
              <span className="bg-gradient-to-br from-brand-green to-brand-green-light bg-clip-text text-transparent">
                <AnimatedNumber end={160} suffix="K+" duration={2500} />
              </span>
              <br />
              Followers
            </div>
            <p className="text-lg text-text-secondary max-w-[500px] leading-relaxed mt-4 lg:mx-0 mx-auto">
              Dr. Nick has built one of the largest dental education audiences on
              social media — and now he's turning that into structured,
              real-world courses for your career.
            </p>

            <div className="flex flex-col gap-5 mt-9">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 lg:justify-start justify-center"
                >
                  <div className="w-11 h-11 min-w-[44px] bg-brand-green/12 rounded-[10px] flex items-center justify-center">
                    <f.icon size={20} className="text-brand-green-light" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[0.95rem] mb-1">
                      {f.title}
                    </div>
                    <div className="text-sm text-text-muted leading-relaxed">
                      {f.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0, duration: 0.4 }}
              className="bg-white border border-border-subtle rounded-xl p-6 text-center"
            >
              <div className="font-heading text-[1.75rem] font-extrabold">
                <AnimatedNumber end={2} prefix="$" suffix="M" />
              </div>
              <div className="text-xs text-text-muted mt-1">Year-One Collections</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-white border border-border-subtle rounded-xl p-6 text-center"
            >
              <div className="font-heading text-[1.75rem] font-extrabold">
                <AnimatedNumber end={160} suffix="K+" />
              </div>
              <div className="text-xs text-text-muted mt-1">Instagram Followers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-white border border-border-subtle rounded-xl p-6 text-center"
            >
              <div className="font-heading text-[1.75rem] font-extrabold">
                <AnimatedNumber end={18} suffix=".5K" />
              </div>
              <div className="text-xs text-text-muted mt-1">Threads Followers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-white border border-border-subtle rounded-xl p-6 text-center"
            >
              <div className="font-heading text-[1.75rem] font-extrabold">
                <AnimatedNumber end={9} suffix="+" />
              </div>
              <div className="text-xs text-text-muted mt-1">Brand Partnerships</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
