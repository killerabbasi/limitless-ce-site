import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Coffee } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const pricingTiers = [
  {
    label: 'LOD Members',
    price: 'FREE',
    note: 'Included with any course purchase',
    highlight: true,
  },
  {
    label: 'Students & Residents',
    price: '$250',
    note: '',
    highlight: false,
  },
  {
    label: 'Dentists',
    price: '$500',
    note: '',
    highlight: false,
  },
]

export default function Shadowing() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-brand-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
              In-Person Experience
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
              Shadow Dr. Nick
              <br />
              <span className="bg-gradient-to-br from-brand-green to-brand-green-light bg-clip-text text-transparent">
                At Limitless Dental
              </span>
            </h2>
            <p className="text-lg text-text-secondary max-w-[650px] mx-auto leading-relaxed">
              A behind-the-scenes day in the operatory. See clinical
              decision-making up close, observe systems and workflow, and
              understand how high-level dentistry actually runs day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — Details */}
            <div>
              <div className="flex flex-col gap-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 min-w-[44px] bg-brand-green/12 rounded-[10px] flex items-center justify-center">
                    <MapPin size={20} className="text-brand-green-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-[0.95rem] mb-1">Limitless Dental — Jersey City, NJ</div>
                    <div className="text-sm text-text-muted leading-relaxed">
                      3 SprintRay 3D printers, 2 TRIOS 5 scanners, Zirkonite 5-axis mill,
                      4K Mielscope, dedicated studio & consultation rooms.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 min-w-[44px] bg-brand-green/12 rounded-[10px] flex items-center justify-center">
                    <Clock size={20} className="text-brand-green-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-[0.95rem] mb-1">Full Clinical Day</div>
                    <div className="text-sm text-text-muted leading-relaxed">
                      Observe real procedures, patient communication, and practice
                      operations. Designated Q&A time with Dr. Nick.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 min-w-[44px] bg-brand-green/12 rounded-[10px] flex items-center justify-center">
                    <Coffee size={20} className="text-brand-green-light" />
                  </div>
                  <div>
                    <div className="font-semibold text-[0.95rem] mb-1">Come Prepared</div>
                    <div className="text-sm text-text-muted leading-relaxed">
                      Bring questions and a notebook. Snacks, water, and
                      fresh-brewed Starbucks coffee provided.
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://limitlessce.com/shadowing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-green to-brand-green-light text-white rounded-full font-semibold text-[0.95rem] no-underline shadow-[0_4px_20px_rgba(91,104,84,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(91,104,84,0.5)] transition-all group"
              >
                Book Shadowing
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

            {/* Right — Pricing Cards */}
            <div className="flex flex-col gap-4">
              {pricingTiers.map((tier, i) => (
                <motion.div
                  key={tier.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className={`p-6 rounded-xl border ${
                    tier.highlight
                      ? 'bg-brand-green/10 border-brand-green/30'
                      : 'bg-white border-border-subtle'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading text-base font-bold">{tier.label}</div>
                      {tier.note && (
                        <div className="text-xs text-brand-green-light mt-1">{tier.note}</div>
                      )}
                    </div>
                    <div className="font-heading text-2xl font-extrabold">
                      {tier.price}
                    </div>
                  </div>
                </motion.div>
              ))}
              <p className="text-xs text-text-muted mt-2 leading-relaxed">
                Participants are responsible for their own travel arrangements.
                Dates are subject to availability — first come, first served.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
