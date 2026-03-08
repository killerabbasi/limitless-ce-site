import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const credentials = [
  { name: 'Kois Center, Seattle', detail: '1 of 1,139 Graduates Worldwide' },
  { name: 'Implant Pathway, Arizona', detail: 'Dr. Justin Moody' },
  { name: 'FICOI', detail: 'Implant Fellow' },
  { name: 'AAFE Certified', detail: 'Botox & Fillers' },
]

export default function CredibilityBar() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className="py-16 border-t border-b border-border-subtle bg-brand-dark-2"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center text-xs tracking-[3px] uppercase text-text-muted mb-8">
          Education & Training
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-12 flex-wrap"
        >
          {credentials.map((c) => (
            <div
              key={c.name}
              className="flex flex-col items-center gap-1 opacity-75 hover:opacity-100 transition-opacity text-center"
            >
              <div className="text-sm font-semibold text-text-secondary">
                {c.name}
              </div>
              <div className="text-[0.7rem] text-text-muted">{c.detail}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
