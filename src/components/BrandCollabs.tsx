import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const brands = [
  'Colgate',
  'Listerine',
  'Sensodyne',
  'Henry Schein',
  'Dentsply Sirona',
  'American Express',
  'Verizon',
  'SprintRay',
  'Garrison Dental',
  'Orabrush',
  'Laurel Road',
  'Dandy',
  'Zirkonite',
]

export default function BrandCollabs() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className="py-20 bg-[#212121]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center text-xs tracking-[3px] uppercase text-[#777] mb-10">
          Trusted By & Collaborated With
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-x-8 gap-y-5 flex-wrap"
        >
          {brands.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.04 }}
              className="font-heading text-[0.85rem] font-bold tracking-[2px] uppercase text-white/40 hover:text-white/80 transition-colors duration-300 cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
