import { useEffect, useRef } from 'react'
import ThreadBackground from './components/ThreadBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import TrustBar from './components/TrustBar'
import ProductPanel from './components/ProductPanel'

function App() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isCapture = params.get('static') === 'true'
    document.body.classList.toggle('capture-mode', isCapture)
  }, [])

  return (
    <div className="bg-bg">
      <div ref={heroRef} className="relative overflow-hidden">
        <ThreadBackground containerRef={heroRef} />
        <Nav />
        <Hero />
      </div>
      <ProblemSection />
      <TrustBar />
      <ProductPanel />
    </div>
  )
}

export default App
