import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const courses = [
  {
    title: 'Mastering Cosmetic Dentistry',
    tag: 'Clinical',
    desc: 'Learn the Limitless Workflow for cosmetic and full mouth reconstructions. Follow along with a real 27-unit combination case from 3D mockup to final delivery.',
    image: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/eed36d791cc17adb1199f4607fd69d06.png',
    href: 'https://limitlessce.com/course/cosmetic-dentistry',
  },
  {
    title: 'Mastering Your Dental Brand',
    tag: 'Growth',
    desc: 'Position yourself as a leader in cosmetic dentistry through calculated branding — from the ideal patient experience to delivering beautiful smile makeovers.',
    image: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/b2295313d75e28f24735ba59a58864ed.png',
    href: 'https://limitlessce.com/course/mastering-your-dental-brand',
  },
  {
    title: 'Mastering Dental Marketing',
    tag: 'Growth',
    desc: 'The marketing playbook behind a $2M scratch startup. Ads, SEO, local strategy, and patient acquisition.',
    image: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/48672ccf776c0c4eb39310dc5d5ef76b.png',
    href: 'https://limitlessce.com/courses',
    comingSoon: true,
  },
  {
    title: 'Mastering Implants',
    tag: 'Clinical',
    desc: 'From single-tooth to full-arch — implant planning, placement, and prosthetics from an FICOI-certified practitioner.',
    image: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/81049386889207d38db504b37b573c44.png',
    href: 'https://limitlessce.com/courses',
    comingSoon: true,
  },
  {
    title: 'Mastering ExoCAD',
    tag: 'Digital',
    desc: 'Digital dentistry workflows — learn ExoCAD design from scan to final restoration with real case walkthroughs.',
    image: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/ebca85da579fe6cff8d43676a236a5b7.png',
    href: 'https://limitlessce.com/courses',
    comingSoon: true,
  },
  {
    title: 'Mastering Consult',
    tag: 'Practice',
    desc: 'Convert more consultations into accepted treatment plans. Communication frameworks that build trust and close cases.',
    image: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/4002bd6b14ccaaea0cacf6a7ee346aa1.png',
    href: 'https://limitlessce.com/courses',
    comingSoon: true,
  },
]

export default function Courses() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="courses" className="py-24 bg-brand-dark-2">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
            Courses
          </span>
          <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
            Master Every Discipline
          </h2>
          <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
            Real-world education from a dentist who's done it — not just taught
            it. Each course is built to level up your clinical skills and your
            career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.a
              key={course.title}
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-border-subtle rounded-xl overflow-hidden no-underline text-text-primary block hover:border-border-hover hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all group"
            >
              <div className="w-full aspect-[16/10] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-2.5 py-1 bg-brand-green/15 rounded text-[0.7rem] font-semibold text-brand-green-light uppercase tracking-wider mb-3">
                  {course.tag}
                </span>
                <h3 className="font-heading text-lg font-bold mb-2.5">
                  {course.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {course.desc}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                  <span className="text-sm font-semibold text-brand-green-light flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    {course.comingSoon ? 'Coming Soon' : <>View Course <ArrowRight size={14} /></>}
                  </span>
                  <span className="text-xs text-text-muted flex items-center gap-1">
                    <Play size={12} /> Video
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://limitlessce.com/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-brand-green to-brand-green-light text-white rounded-full font-semibold text-[0.95rem] no-underline shadow-[0_4px_20px_rgba(91,104,84,0.3)] hover:translate-y-[-2px] hover:shadow-[0_8px_30px_rgba(91,104,84,0.5)] transition-all group"
          >
            View All Courses
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
