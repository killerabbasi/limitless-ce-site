import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const brands: { name: string; logo: string | null }[] = [
  { name: 'Colgate', logo: null },
  { name: 'Listerine', logo: null },
  { name: 'Sensodyne', logo: '/logos/sensodyne.png' },
  { name: 'Henry Schein', logo: '/logos/henryschein.svg' },
  { name: 'Dentsply Sirona', logo: null },
  { name: 'American Express', logo: '/logos/amex.svg' },
  { name: 'Verizon', logo: null },
  { name: 'SprintRay', logo: '/logos/sprintray.svg' },
  { name: 'Garrison Dental', logo: '/logos/garrison.png' },
  { name: 'Orabrush', logo: null },
  { name: 'Laurel Road', logo: null },
  { name: 'Dandy', logo: null },
  { name: 'Zirkonite', logo: '/logos/zirkonite.png' },
]

export default function BrandCollabs() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className="py-20 bg-[#212121] border-t border-b border-[rgba(255,255,255,0.1)]"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center text-xs tracking-[3px] uppercase text-[#999] mb-10">
          Trusted By & Collaborated With
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-x-10 gap-y-6 flex-wrap"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.04 }}
              className="opacity-50 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-8"
              title={brand.name}
            >
              {brand.logo ? (
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-6 w-auto max-w-[130px] object-contain brightness-0 invert"
                  loading="lazy"
                />
              ) : (
                <span className="font-heading text-[0.9rem] font-extrabold tracking-[0.5px] text-white whitespace-nowrap">
                  {brand.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
