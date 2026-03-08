import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AnimatedNumber from './AnimatedNumber'

const credentials = [
  'Kois Center (1 of 1,139)',
  'FICOI',
  'Implant Accelerator',
  'AAFE Certified',
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-brand-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* Image */}
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-border-subtle">
            <img
              src="https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/3200ac71051c7624cea743e36b073a82.png"
              alt="Dr. Nick Ciardiello"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
              Meet Your Instructor
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
              Dr. Nick Ciardiello, DMD, FICOI
            </h2>

            <div className="flex flex-wrap gap-2.5 mb-7">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="px-3.5 py-1.5 bg-brand-green/12 border border-brand-green/25 rounded-full text-[0.78rem] font-medium text-brand-accent"
                >
                  {c}
                </span>
              ))}
            </div>

            <p className="text-text-secondary mb-5 leading-relaxed">
              Before dentistry, Dr. Nick was a Division I baseball player and
              Mathematics major at the College of the Holy Cross — where he was
              named 2nd Team All-Patriot League and broke single-season records.
              After graduating from Rutgers School of Dental Medicine and
              completing his GPR at Jersey Shore University Medical Center, he
              spent nearly 7 years in cosmetic and surgical private practices
              across New Jersey and New York.
            </p>
            <p className="text-text-secondary mb-5 leading-relaxed">
              He trained under Dr. John Kois at the Kois Center in Seattle —
              becoming one of only 1,139 graduates in the program's 30-year
              history — and Dr. Justin Moody at the Implant Pathway in Arizona.
              He's also a graduate of the MOD Institute and has trained under
              Dr. Galip Gurel and Dr. Tal Morr, completing nearly 1,000 hours
              of specialty continuing education since dental school.
            </p>
            <p className="text-text-secondary mb-8 leading-relaxed">
              In September 2023, he founded Limitless Dental in Jersey City, NJ
              — a scratch startup that collected $2 million in its first year.
              He then built Limitless On Demand to teach other dentists how to
              do the same. He currently serves as a Clinical Instructor at
              Implant Accelerator and lectures internationally on cosmetic,
              implant, and digital dentistry.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-white border border-border-subtle rounded-xl text-center">
                <div className="font-heading text-xl font-extrabold text-brand-green-light">
                  <AnimatedNumber end={2} prefix="$" suffix="M" />
                </div>
                <div className="text-[0.7rem] text-text-muted mt-1">
                  Year-One Collections
                </div>
              </div>
              <div className="p-4 bg-white border border-border-subtle rounded-xl text-center">
                <div className="font-heading text-xl font-extrabold text-brand-green-light">
                  <AnimatedNumber end={160} suffix="K+" />
                </div>
                <div className="text-[0.7rem] text-text-muted mt-1">
                  Instagram Followers
                </div>
              </div>
              <div className="p-4 bg-white border border-border-subtle rounded-xl text-center">
                <div className="font-heading text-xl font-extrabold text-brand-green-light">
                  <AnimatedNumber end={1000} suffix="+" />
                </div>
                <div className="text-[0.7rem] text-text-muted mt-1">
                  Hours of CE
                </div>
              </div>
            </div>

            <a
              href="https://www.instagram.com/dr.nickc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-transparent border border-brand-green/30 text-brand-green rounded-full font-semibold text-[0.95rem] no-underline hover:bg-brand-green/10 transition-all group"
            >
              Follow on Instagram
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
