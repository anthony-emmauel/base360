import { useEffect, useRef } from 'react'
import ThreadBackground from './components/ThreadBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyUsSection from './components/WhyUsSection'
import HowItWorksSection from './components/HowItWorksSection'
import PillarsSection from './components/PillarsSection'
import SocialProofSection from './components/SocialProofSection'
import FaqSection from './components/FaqSection'
import Footer from './components/Footer'
import TrustBar from './components/TrustBar'
import ProductPanel from './components/ProductPanel'

function App() {
  const bleedRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isCapture = params.get('static') === 'true'
    document.body.classList.toggle('capture-mode', isCapture)
  }, [])

  return (
    <div>
      <div ref={bleedRef} className="theme-light relative overflow-hidden bg-bg">
        <ThreadBackground containerRef={bleedRef} targetRef={panelRef} />
        <Nav />
        <Hero />
        <TrustBar />
        {/* the dark dashboard sits on the light hero (top) with its base on a
            black band (bottom) that carries into the dark WhyUs section; the
            threads converge onto its top edge since it lives in this container */}
        <div className="relative">
          <div aria-hidden className="theme-dark pointer-events-none absolute inset-x-0 bottom-0 top-[60%] bg-bg" />
          <ProductPanel ref={panelRef} />
        </div>
      </div>
      <div className="theme-dark bg-bg">
        <WhyUsSection />
      </div>
      <div className="theme-light bg-bg">
        <HowItWorksSection />
      </div>
      <div className="theme-dark bg-bg">
        <PillarsSection />
      </div>
      <div className="theme-light bg-bg">
        <SocialProofSection />
      </div>
      <div className="theme-dark bg-bg">
        <FaqSection />
      </div>
      <div className="theme-dark bg-bg">
        <Footer />
      </div>
    </div>
  )
}

export default App
