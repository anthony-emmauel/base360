import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Step {
  id: string
  label: string
  headline: string
  description: string
  linkLabel: string
  image: string
  imageAlt: string
}

const STEPS: Step[] = [
  {
    id: 'comment',
    label: 'Comment',
    headline: 'Every comment gets seen',
    description: "No comment goes unanswered, even the ones your team would've missed.",
    linkLabel: 'Explore the inbox',
    image: 'https://images.unsplash.com/photo-1746014601711-75145d1b241e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A DTC seller checking a TikTok Shop comment on her phone',
  },
  {
    id: 'public-reply',
    label: 'Public reply',
    headline: 'Answered before they scroll away',
    description: "AI replies publicly in seconds, in your brand's voice.",
    linkLabel: 'Explore AI agents',
    image: 'https://images.unsplash.com/photo-1758874383904-c3c409aeb32d?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A small business owner smiling at an instant reply on his phone',
  },
  {
    id: 'dm',
    label: 'Slides into DMs',
    headline: 'The conversation follows them',
    description: 'AI moves the conversation to DMs to close privately.',
    linkLabel: 'See how it switches channels',
    image: 'https://images.unsplash.com/photo-1486403184395-fc4990866136?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A seller holding her phone as the conversation moves into Instagram DMs',
  },
  {
    id: 'hot',
    label: 'Tagged as HOT',
    headline: 'Sales knows the second it matters',
    description: 'High-intent leads are tagged and synced to CRM automatically.',
    linkLabel: 'Explore the CRM',
    image: 'https://images.unsplash.com/photo-1761370980969-a803951cf104?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A seller reacting to a hot-lead notification on her phone outdoors',
  },
  {
    id: 'call',
    label: 'AI voice call',
    headline: 'A real call, not just a chatbot',
    description: 'AI walks high-intent leads through the product by phone.',
    linkLabel: 'Hear how it sounds',
    image: 'https://images.unsplash.com/photo-1657206225937-5f614c7901ae?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A founder on a phone call, walking a lead through the product',
  },
  {
    id: 'nurture',
    label: 'Nurture sequence',
    headline: 'Not ready yet? Still nurtured',
    description: "Leads who don't convert immediately are enrolled in email follow-up automatically.",
    linkLabel: 'Explore nurture sequences',
    image: 'https://images.unsplash.com/photo-1750378863933-91d9c9c54e4b?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'A founder at a home-office desk while a nurture sequence runs in the background',
  },
]

function StepText({ step }: { step: Step }) {
  return (
    <>
      <p className="text-[11px] font-medium uppercase tracking-wide text-text-muted">{step.label}</p>
      <h3 className="mt-3 text-[28px] font-medium leading-tight text-text-primary sm:text-[34px]">{step.headline}</h3>
      <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">{step.description}</p>
      <a
        href="#get-started"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
      >
        {step.linkLabel}
        <ArrowUpRight size={14} />
      </a>
    </>
  )
}

function HowItWorksSection() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    // On every scroll, the step whose vertical center is closest to the
    // viewport center becomes the active one the pinned image shows. Direct
    // measurement rather than IntersectionObserver so it can't silently miss.
    let frame = 0
    const update = () => {
      frame = 0
      const viewportCenter = window.innerHeight / 2
      let nearest = 0
      let nearestDist = Infinity
      stepRefs.current.forEach((el, i) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        if (rect.height === 0) return // hidden (mobile layout)
        const dist = Math.abs(rect.top + rect.height / 2 - viewportCenter)
        if (dist < nearestDist) {
          nearestDist = dist
          nearest = i
        }
      })
      setActive(nearest)
    }
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-20 pb-0 sm:pt-28">
      <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
        <h2 className="text-balance text-[40px] font-medium leading-[1.1] tracking-tight text-text-primary sm:text-[48px]">
          From first comment to closed customer
        </h2>
        <p className="max-w-md text-lg leading-relaxed text-text-secondary md:pt-2">
          Six automatic steps carry every conversation from a public comment to a synced, nurtured lead — with no
          manual work anywhere in between.
        </p>
      </div>

      {/* Desktop: image pinned left, steps scroll right, image swaps per step */}
      <div className="relative mt-16 hidden md:block">
        {/* faint vertical rules framing the section */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-border" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-border" />

        <div className="grid md:grid-cols-2 md:gap-20">
          <div className="sticky top-0 flex h-screen items-center justify-center px-10">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-black/10">
              {STEPS.map((step, i) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt={step.imageAlt}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="pr-10">
            {STEPS.map((step, i) => (
              <div
                key={step.id}
                data-index={i}
                ref={(el) => {
                  stepRefs.current[i] = el
                }}
                className="flex min-h-screen flex-col justify-center"
              >
                <StepText step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: simple stacked image + text per step */}
      <div className="mt-12 space-y-16 md:hidden">
        {STEPS.map((step) => (
          <div key={step.id}>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl outline outline-1 -outline-offset-1 outline-black/10">
              <img src={step.image} alt={step.imageAlt} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="mt-6">
              <StepText step={step} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection
