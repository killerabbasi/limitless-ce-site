import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const videos = [
  {
    type: 'wistia' as const,
    id: 'kd6ygw0los',
    title: 'Cosmetic Dentistry Preview',
    subtitle: 'Course Preview',
    thumbnail: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/eed36d791cc17adb1199f4607fd69d06.png',
  },
  {
    type: 'wistia' as const,
    id: 'k6gr7t9uv4',
    title: 'Clinical Case Walkthrough',
    subtitle: 'Student Testimonial',
    thumbnail: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/81049386889207d38db504b37b573c44.png',
  },
  {
    type: 'wistia' as const,
    id: '6t5jp812v8',
    title: 'The Limitless Workflow',
    subtitle: 'Course Highlight',
    thumbnail: 'https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/48672ccf776c0c4eb39310dc5d5ef76b.png',
  },
  {
    type: 'youtube' as const,
    id: 'eafIeR3gViU',
    title: 'Studio Square Feature',
    subtitle: 'Media Appearance',
    thumbnail: `https://img.youtube.com/vi/eafIeR3gViU/hqdefault.jpg`,
  },
  {
    type: 'youtube' as const,
    id: 'CXKJEMidYxU',
    title: 'FYI Study Club',
    subtitle: 'Guest Lecture',
    thumbnail: `https://img.youtube.com/vi/CXKJEMidYxU/hqdefault.jpg`,
  },
  {
    type: 'youtube' as const,
    id: '7TRsI66sG0o',
    title: 'Clinical Demonstration',
    subtitle: 'Educational Content',
    thumbnail: `https://img.youtube.com/vi/7TRsI66sG0o/hqdefault.jpg`,
  },
]

export default function VideoShowcase() {
  const { ref, isVisible } = useScrollReveal()
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null)

  const closeVideo = useCallback(() => setActiveVideo(null), [])

  useEffect(() => {
    if (!activeVideo) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeVideo() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [activeVideo, closeVideo])

  return (
    <>
      <section className="py-24 bg-brand-dark" id="videos">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[3px] uppercase text-brand-green-light mb-4 block">
                See It In Action
              </span>
              <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.15] mb-5">
                Real Cases. Real Results.
              </h2>
              <p className="text-lg text-text-secondary max-w-[600px] mx-auto leading-relaxed">
                Watch course previews, clinical walkthroughs, and media
                appearances. This is what Limitless education looks like.
              </p>
            </div>

            {/* Featured Video - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-6 cursor-pointer group"
              onClick={() => setActiveVideo(videos[0])}
            >
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border-subtle">
                <img
                  src={videos[0].thumbnail}
                  alt={videos[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block px-3 py-1 bg-brand-green/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white mb-2">
                    {videos[0].subtitle}
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {videos[0].title}
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Video Grid - Smaller */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {videos.slice(1).map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="cursor-pointer group"
                  onClick={() => setActiveVideo(video)}
                >
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border-subtle">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={16} className="text-white ml-0.5" fill="white" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-brand-green-light font-medium">
                      {video.subtitle}
                    </div>
                    <div className="text-sm font-semibold truncate">
                      {video.title}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Reviews Image from current site */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-16"
            >
              <img
                src="https://lwfiles.mycourse.app/67b65dd5465d0270ce08c040-public/ff419cf3593dac2723d4b6a66fc41023.png"
                alt="Student Reviews"
                className="w-full max-w-[900px] mx-auto rounded-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close video"
          >
            <X size={20} />
          </button>
          <div
            className="w-full max-w-[900px] aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {activeVideo.type === 'wistia' ? (
              <iframe
                src={`https://fast.wistia.net/embed/iframe/${activeVideo.id}?autoPlay=true`}
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="autoplay; fullscreen"
                title={activeVideo.title}
              />
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                className="w-full h-full"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={activeVideo.title}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
