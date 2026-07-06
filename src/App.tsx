import { useEffect, useRef } from 'react'
import ThreadBackground from './components/ThreadBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProductPanel from './components/ProductPanel'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isCapture = params.get('static') === 'true'
    document.body.classList.toggle('capture-mode', isCapture)
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-bg">
      <ThreadBackground containerRef={containerRef} targetRef={panelRef} />
      <Nav />
      <Hero />
      <TrustBar />
      <ProductPanel ref={panelRef} />
    </div>
  )
}

export default App
