import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    text: "Dr. Nick breaks down complex procedures into steps you can actually implement on Monday morning. This isn't theory — it's real clinical education.",
    name: 'Dr. K.',
    role: 'General Dentist, NY',
    initials: 'DK',
  },
  {
    text: 'The branding course alone changed how I think about my practice. I went from invisible to getting DMs from patients who found me through content.',
    name: 'Dr. S.M.',
    role: 'Cosmetic Dentist, NJ',
    initials: 'SM',
  },
  {
    text: "Finally, CE that doesn't feel like a chore. The implant course gave me the confidence to take on cases I was previously referring out.",
    name: 'Dr. R.P.',
    role: 'Associate Dentist, PA',
    initials: 'RP',
  },
]

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="testimonials" className="py-24 bg-brand-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
            Student Reviews
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
            What Dentists Are Saying
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
            Real feedback from real practitioners leveling up their skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-border-subtle rounded-xl p-8 hover:border-border-hover hover:shadow-md transition-all"
            >
              <div className="flex gap-1 text-brand-green-light mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-[0.95rem] text-text-secondary leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-green to-brand-green-light flex items-center justify-center text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
