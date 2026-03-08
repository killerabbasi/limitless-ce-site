import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CredibilityBar from './components/CredibilityBar'
import About from './components/About'
import Workflow from './components/Workflow'
import Courses from './components/Courses'
import VideoShowcase from './components/VideoShowcase'
import Shadowing from './components/Shadowing'
import BrandCollabs from './components/BrandCollabs'
import Testimonials from './components/Testimonials'
import FeaturedIn from './components/FeaturedIn'
import SocialProof from './components/SocialProof'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobileCTA from './components/MobileCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityBar />
        <About />
        <Workflow />
        <Courses />
        <VideoShowcase />
        <Shadowing />
        <BrandCollabs />
        <Testimonials />
        <FeaturedIn />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </>
  )
}
