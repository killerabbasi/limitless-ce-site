import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Learn the Clinical Skills',
    desc: 'Master cosmetic, implant, and digital procedures through real case walkthroughs — not textbook theory.',
  },
  {
    num: '02',
    title: 'Build Your Brand',
    desc: 'Grow your audience with proven social media and content strategies that attract patients and partnerships.',
  },
  {
    num: '03',
    title: 'Scale Your Practice',
    desc: 'Apply the Limitless Workflow to grow collections within your existing insurance-based practice while building your FFS brand.',
  },
]

const differentiators = [
  'Works within insurance-based practices',
  'Taught by a practicing dentist, not a consultant',
  'Real clinical footage, not lecture slides',
  'Skool community with like-minded dentists',
  'No brand affiliations — unbiased education',
  '10 yearly live virtual discussions with Dr. Nick',
  'Downloadable audio for on-the-go learning',
  'In-person shadowing available at Limitless Dental',
  'From a $2M scratch startup founder',
]

export default function Workflow() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
              The Method
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
              The Limitless Workflow
            </h2>
            <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
              Most dental CE teaches you procedures you can only do in FFS
              practices. The Limitless Workflow lets you grow clinically and
              financially — no matter your practice model.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative p-8 bg-white border border-border-subtle rounded-xl group hover:border-border-hover hover:shadow-md transition-all"
              >
                <div className="font-heading text-5xl font-black text-brand-green/20 mb-4">
                  {step.num}
                </div>
                <h3 className="font-heading text-lg font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Differentiators */}
          <div className="bg-white border border-border-subtle rounded-2xl p-10">
            <h3 className="font-heading text-xl font-bold mb-6 text-center">
              Why Dentists Choose Limitless
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {differentiators.map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 min-w-[24px] rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Check size={14} className="text-brand-green-light" />
                  </div>
                  <span className="text-sm text-text-secondary">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
