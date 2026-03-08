import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'Are these courses accredited for CE credits?',
    a: 'The courses are in the process of being accredited. The pre-sale bundle package will be approximately 20-25 CE credits. Check the individual course page for the latest accreditation status.',
  },
  {
    q: 'How long do I have access to the courses?',
    a: 'Once you enroll, you get lifetime access to the course content. Watch on your own schedule, revisit material anytime, and download audio lectures for on-the-go learning.',
  },
  {
    q: 'Can I watch on my phone or tablet?',
    a: 'Yes. The platform is fully responsive and works on any device — desktop, tablet, or smartphone. You can also download audio lectures to listen offline.',
  },
  {
    q: 'What makes Limitless different from other dental CE?',
    a: 'Unlike other courses that teach procedures primarily for Fee-For-Service practices, the Limitless Workflow allows you to still operate in an insurance-based practice while building your FFS brand. Plus, all content is unbiased, unfiltered, and unsponsored — no product agendas.',
  },
  {
    q: 'What is the Skool community?',
    a: 'When you enroll, you get access to the Limitless On Demand Skool Community — a private group where you can ask questions, share cases, and connect with like-minded dentists. Dr. Nick also hosts 10 yearly one-hour virtual live discussions with exclusive guest lecturers.',
  },
  {
    q: 'Can I shadow Dr. Nick at Limitless Dental?',
    a: 'Yes. Shadowing is included at no additional cost for members who have purchased any course. It\'s a behind-the-scenes day at Limitless Dental in Jersey City, where you can observe clinical decision-making, systems, workflow, and patient communication up close.',
  },
  {
    q: 'Do I get hands-on materials?',
    a: 'The Mastering Cosmetic Dentistry course includes a hands-on component — you\'ll receive pre-op models, 3D motivational mockups, a wax-up, prepared models, Dr. Nick\'s bur suggestions, and more delivered to your door.',
  },
  {
    q: 'Is there a payment plan option?',
    a: 'Yes. Payment plan options are available with 3-month or 6-month terms, both requiring 50% down to start. Check the individual course or bundle page for current pricing and options.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border-subtle">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
      >
        <span className="font-semibold text-[0.95rem] text-text-primary pr-4 group-hover:text-brand-green transition-colors">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-text-muted min-w-[18px] transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-text-secondary leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 bg-brand-dark" id="faq">
      <div className="max-w-[720px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
              FAQ
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15]">
              Common Questions
            </h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
