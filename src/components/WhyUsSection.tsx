import { useEffect, useLayoutEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { StackIllustration, ClusterIllustration, FanIllustration } from './PillarIllustrations'

gsap.registerPlugin(ScrollTrigger)

interface Feature {
  title: string
  description: string
}

interface CardData {
  id: string
  label: string
  headline: string
  features: Feature[]
  cta: string
  Illustration: () => React.ReactElement
}

const CARDS: CardData[] = [
  {
    id: 'inbox',
    label: 'Unified Inbox',
    headline: 'Every channel, one place to work',
    features: [
      { title: 'Social & DMs', description: 'TikTok, Instagram, and every comment thread in one queue.' },
      { title: 'Messaging channels', description: 'WhatsApp, SMS, and email routed to the same view.' },
    ],
    cta: 'Explore the inbox',
    Illustration: StackIllustration,
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    headline: 'Replies that actually close the sale',
    features: [
      { title: 'Instant response', description: 'AI replies in seconds, day or night, no scripts.' },
      { title: 'Lead qualification', description: 'High-intent contacts routed to sales automatically.' },
    ],
    cta: 'Explore AI agents',
    Illustration: ClusterIllustration,
  },
  {
    id: 'crm',
    label: 'Built-in CRM',
    headline: 'Every lead, tracked without lifting a finger',
    features: [
      { title: 'Automatic context', description: 'Full conversation history lives with the lead.' },
      { title: 'No manual entry', description: 'Tags, status, and history sync as the conversation happens.' },
    ],
    cta: 'Explore the CRM',
    Illustration: FanIllustration,
  },
]

/** Subtly shifts an element vertically as it crosses the viewport, skipped under prefers-reduced-motion. */
function useParallax<T extends HTMLElement>(strength = 0.08) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const elementCenter = rect.top + rect.height / 2
      const offset = (viewportCenter - elementCenter) * strength
      el.style.transform = `translateY(${offset}px)`
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
  }, [strength])

  return ref
}

function WhyUsCard({ label, headline, features, cta, Illustration, reversed }: CardData & { reversed: boolean }) {
  const parallaxRef = useParallax<HTMLDivElement>()

  return (
    <div
      className={`js-whyus-card flex flex-col overflow-hidden rounded-xl border border-border ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="flex flex-col justify-between bg-surface p-10 sm:p-12 md:w-1/2">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-wide text-text-muted">{label}</p>
          <h3 className="mt-3 text-balance text-[28px] font-medium leading-tight text-text-primary sm:text-[32px]">
            {headline}
          </h3>

          <div className="mt-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start justify-between gap-4 border-t border-border py-4 first:border-t-0"
              >
                <div>
                  <p className="text-sm font-semibold text-text-primary">{feature.title}</p>
                  <p className="mt-1 text-sm text-text-secondary">{feature.description}</p>
                </div>
                <button
                  type="button"
                  aria-label={`${feature.title} — learn more`}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
                >
                  <ArrowUpRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#get-started"
          className="mt-10 block rounded-full border border-border py-3 text-center text-sm font-medium text-text-primary transition-colors hover:border-text-muted"
        >
          {cta}
        </a>
      </div>

      <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-bg p-10 md:w-1/2">
        <div ref={parallaxRef} className="will-change-transform">
          <Illustration />
        </div>
      </div>
    </div>
  )
}

function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.js-whyus-card', {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%', once: true },
        y: 64,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <h2 className="text-balance text-center text-[32px] font-medium leading-tight text-text-primary sm:text-4xl">
        A better way to turn comments into customers.
      </h2>

      <div className="relative mt-14">
        {CARDS.map((card, i) => (
          <div key={card.id} className="sticky pb-6" style={{ top: `${1.5 + i * 1.5}rem`, zIndex: i + 1 }}>
            <WhyUsCard {...card} reversed={i % 2 === 1} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUsSection
