import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function MobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-xl border-t border-[rgba(0,0,0,0.08)] px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]"
        >
          <a
            href="https://limitlessce.com/courses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-br from-brand-green to-brand-green-light text-white rounded-full font-semibold text-sm no-underline"
          >
            Browse Courses
            <ArrowRight size={16} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
