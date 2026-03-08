import { Instagram, Youtube, Linkedin, Facebook } from 'lucide-react'

const socialLinks = [
  { label: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/limitlessondemand' },
  { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/dr.nickc/' },
  { label: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@Dr_NickC' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/limitless-on-demand/' },
]

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 bg-[#212121] text-white border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand — wider */}
          <div className="lg:col-span-4">
            <a href="/" className="no-underline block">
              <img
                src="https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/26350748375594dac23d2b55c78bac0a.png"
                alt="Limitless On Demand"
                className="h-8 w-auto brightness-0 invert opacity-90"
                loading="lazy"
              />
            </a>
            <p className="text-sm text-text-muted leading-relaxed mt-4 max-w-[320px]">
              Unbiased. Unfiltered. Unsponsored. Real-world dental education
              from beginner to Super GP.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-[10px] bg-[#2a2a2a] border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-[#999] no-underline hover:border-brand-green-light hover:text-brand-green-light transition-all"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links — 3 columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Courses */}
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-[1.5px] text-text-secondary mb-5">
                Courses
              </h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="https://limitlessce.com/course/cosmetic-dentistry" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Cosmetic Dentistry</a></li>
                <li><a href="https://limitlessce.com/course/mastering-your-dental-brand" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Dental Brand</a></li>
                <li><a href="https://limitlessce.com/courses" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Implants</a></li>
                <li><a href="https://limitlessce.com/courses" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">All Courses</a></li>
                <li><a href="https://limitlessce.com/shadowing" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Shadowing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-[1.5px] text-text-secondary mb-5">
                Company
              </h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="#about" className="text-sm text-text-muted no-underline hover:text-white transition-colors">About Dr. Nick</a></li>
                <li><a href="https://bestdentistjerseycity.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Limitless Dental</a></li>
                <li><a href="https://www.skool.com/limitless-on-demand/about" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Community</a></li>
                <li><a href="https://limitlessce.com/contact-us" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Contact</a></li>
                <li><a href="https://limitlessce.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Sign In</a></li>
              </ul>
            </div>

            {/* Practice */}
            <div>
              <h4 className="font-heading text-xs font-bold uppercase tracking-[1.5px] text-text-secondary mb-5">
                Practice
              </h4>
              <ul className="list-none flex flex-col gap-3 p-0 m-0">
                <li><a href="https://bestdentistjerseycity.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted no-underline hover:text-white transition-colors">Limitless Dental</a></li>
                <li className="text-sm text-text-muted">314 Coles Street</li>
                <li className="text-sm text-text-muted">Jersey City, NJ 07310</li>
                <li><a href="tel:5515258284" className="text-sm text-text-muted no-underline hover:text-white transition-colors">(551) 525-8284</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.1)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Limitless On Demand. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="https://limitlessce.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted no-underline hover:text-text-secondary transition-colors">Privacy Policy</a>
            <a href="https://limitlessce.com/terms" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted no-underline hover:text-text-secondary transition-colors">Terms</a>
            <a href="https://limitlessce.com/cookies" target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted no-underline hover:text-text-secondary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
