import { motion } from 'framer-motion'
import { Mic, ExternalLink } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const appearances = [
  {
    type: 'Podcast',
    title: 'Creative Content Ideation',
    show: 'Bulletproof Dental Practice',
    href: 'https://www.bulletproofdentalpractice.com/creative-content-ideation-with-dr-nick-ciardiello/',
  },
  {
    type: 'Podcast',
    title: 'The Value of Dental Mentorships',
    show: 'Dental Up Podcast',
    href: 'https://www.keatingdentallab.com/podcast/the-value-of-dental-mentorships-with-dr-nick-ciardiello-dmd/',
  },
  {
    type: 'Podcast',
    title: 'The Making of Limitless Dental',
    show: 'The Making Of Podcast',
    href: 'https://www.themakingofpodcast.com/episodes/the-making-of-limitless-dental-with-dr-nick-and-dr-ashley',
  },
  {
    type: 'Press',
    title: "Jersey City's Newest Dental Practice",
    show: 'Hoboken Girl',
    href: 'https://www.hobokengirl.com/dentist-jersey-city-limitless-dental/',
  },
  {
    type: 'Podcast',
    title: 'Social Media & Scratch Startups',
    show: 'Extracting Wisdom',
    href: 'https://open.spotify.com/episode/37YEtW62Qanat2emFTSfBh',
  },
  {
    type: 'Conference',
    title: 'Speaker',
    show: 'Voices of Dentistry',
    href: 'https://www.voicesofdentistry.com/speakers/dr-nick-ciardiello',
  },
]

export default function FeaturedIn() {
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
              Featured In
            </span>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
              Podcasts, Press & Speaking
            </h2>
            <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
              Dr. Nick shares his insights on building a dental practice and
              brand across top industry platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {appearances.map((item, i) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 p-5 bg-white border border-border-subtle rounded-xl no-underline text-text-primary hover:border-border-hover hover:-translate-y-0.5 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 min-w-[40px] rounded-lg bg-brand-green/12 flex items-center justify-center">
                  <Mic size={18} className="text-brand-green-light" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[0.7rem] font-semibold uppercase tracking-wider text-brand-green-light mb-1">
                    {item.type}
                  </div>
                  <div className="font-semibold text-sm mb-1 truncate">
                    {item.title}
                  </div>
                  <div className="text-xs text-text-muted flex items-center gap-1">
                    {item.show}
                    <ExternalLink
                      size={10}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
