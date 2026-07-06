import { useEffect } from 'react'
import ThreadBackground from './components/ThreadBackground'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import ProductPanel from './components/ProductPanel'

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const isCapture = params.get('static') === 'true'
    document.body.classList.toggle('capture-mode', isCapture)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-bg">
      <ThreadBackground />
      <Nav />
      <Hero />
      <TrustBar />
      <ProductPanel />
    </div>
  )
}

export default App
