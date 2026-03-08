import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Courses', href: '#courses' },
  { label: 'Shadowing', href: 'https://limitlessce.com/shadowing', external: true },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[rgba(0,0,0,0.08)] py-3.5 shadow-sm'
            : 'py-5'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <img
              src="https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/26350748375594dac23d2b55c78bac0a.png"
              alt="Limitless On Demand"
              className={`h-8 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <ul className="hidden md:flex items-center gap-9 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`text-sm font-medium no-underline transition-colors ${
                    scrolled
                      ? 'text-[#555] hover:text-[#1a1a1a]'
                      : 'text-[#DCDDDB] hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://limitlessce.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold px-5 py-2 border rounded-full no-underline transition-all ${
                  scrolled
                    ? 'text-[#1a1a1a] border-[rgba(0,0,0,0.15)] hover:border-brand-green hover:bg-brand-green/5'
                    : 'text-white border-white/20 hover:border-brand-green-light hover:bg-brand-green/10'
                }`}
              >
                Sign In
              </a>
            </li>
            <li>
              <a
                href="https://limitlessce.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-brand-green to-brand-green-light text-white text-sm font-semibold px-6 py-2.5 rounded-full no-underline hover:shadow-[0_4px_20px_rgba(91,104,84,0.4)] transition-all"
              >
                Get Started
              </a>
            </li>
          </ul>

          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden bg-transparent border-none cursor-pointer ${scrolled ? 'text-[#1a1a1a]' : 'text-white'}`}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#212121]/98 backdrop-blur-xl z-[999] flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 bg-transparent border-none text-white cursor-pointer"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                className="font-heading text-2xl font-bold text-white no-underline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (i + 1) }}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="flex flex-col items-center gap-4 mt-4">
              <a
                href="https://limitlessce.com/courses"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-brand-green to-brand-green-light text-white font-semibold px-8 py-3.5 rounded-full no-underline"
              >
                Get Started
              </a>
              <a
                href="https://limitlessce.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#999] text-sm font-medium no-underline hover:text-white transition-colors"
              >
                Already a member? Sign In
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
