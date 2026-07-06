import { useEffect, useRef } from 'react'
import ThreadBackground from './components/ThreadBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyUsSection from './components/WhyUsSection'
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
    <div className="bg-bg">
      <div ref={bleedRef} className="relative overflow-hidden">
        <ThreadBackground containerRef={bleedRef} targetRef={panelRef} />
        <Nav />
        <Hero />
        <TrustBar />
        <ProductPanel ref={panelRef} />
      </div>
      <WhyUsSection />
    </div>
  )
}

export default App
