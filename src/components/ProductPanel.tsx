import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import IconRail from './IconRail'
import InboxList from './InboxList'
import ActiveThread from './ActiveThread'

function Dashboard() {
  return (
    <div className="flex h-full bg-bg">
      <IconRail />
      <InboxList />
      <ActiveThread />
    </div>
  )
}

function ProductPanel({ ref }: { ref?: React.Ref<HTMLDivElement> }) {
  const rowRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const row = rowRef.current
    if (!row) return
    const ctx = gsap.context(() => {
      gsap.from(row, { y: 60, opacity: 0, duration: 1.1, ease: 'power3.out' })
    }, row)
    return () => ctx.revert()
  }, [])

  // A single elevated dark dashboard. It uses a lifted near-black (not the
  // page's true #0a0a0a) so it reads as a raised panel; its upper part sits on
  // the light hero, its lower part on the black band (see App.tsx) that carries
  // into the dark WhyUs section below.
  return (
    <div ref={ref} className="relative z-10 mx-auto w-[90vw] max-w-[1400px] px-6 pt-0 pb-16 sm:pb-20">
      <div
        ref={rowRef}
        className="theme-dark relative h-[640px] overflow-hidden rounded-2xl border border-border shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]"
        style={{ ['--bg' as string]: '#171717', ['--surface' as string]: '#212121' } as React.CSSProperties}
      >
        <Dashboard />
      </div>
    </div>
  )
}

export default ProductPanel
