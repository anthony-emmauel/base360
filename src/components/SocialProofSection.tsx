import { useState } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const BRANDS = ['AURA', 'NATIVE', 'VELOCI', 'LUMEN', 'OASIS', 'KINETI']

interface Testimonial {
  id: string
  stat: string
  statLabel: string
  quote: string
  name: string
  role: string
  avatar: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'lumio',
    stat: '<10s',
    statLabel: 'Response time',
    quote: 'Base360 replies faster than my team ever could — and never sleeps.',
    name: 'Alicia Moreno',
    role: 'Founder, Lumio',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=160&q=80',
  },
  {
    id: 'native',
    stat: '3.4x',
    statLabel: 'More leads closed',
    quote: 'Comments used to die in our notifications. Now every one turns into a real conversation.',
    name: 'Marcus Bell',
    role: 'Growth Lead, Native',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
  },
  {
    id: 'oasis',
    stat: '11 hrs',
    statLabel: 'Saved per week',
    quote: 'It qualifies and tags leads while I sleep. I stopped hiring for the inbox entirely.',
    name: 'Priya Shah',
    role: 'Owner, Oasis',
    avatar: 'https://images.unsplash.com/photo-1627161683077-e34782c24d81?auto=format&fit=crop&w=160&q=80',
  },
]

function SocialProofSection() {
  const [index, setIndex] = useState(0)
  const active = TESTIMONIALS[index]
  const go = (dir: number) => setIndex((i) => (i + dir + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-0">
      <div className="relative border-t border-border">
        {/* hairline side rules — continued from the Pillars frame above */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-border md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-border md:block" />

        {/* header */}
        <div className="border-b border-border px-8 py-14 text-center sm:py-20">
          <h2 className="text-balance text-[32px] font-medium leading-[1.1] tracking-tight text-text-primary sm:text-[44px]">
            Trusted by sellers. Proven in results.
          </h2>
          <p className="mt-4 text-base text-text-secondary">
            Real brands, real response times — no case study fluff.
          </p>
        </div>

        {/* brand logo strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-b border-border px-8 py-8">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="text-lg font-semibold tracking-wide text-text-muted transition-colors hover:text-text-secondary"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* testimonial carousel */}
        <div className="grid md:grid-cols-2">
          {/* left: stat panel */}
          <div className="flex flex-col items-center justify-center border-b border-border px-8 py-16 md:border-b-0 md:border-r">
            <p className="text-[64px] font-semibold leading-none tracking-tight text-accent sm:text-[80px]">
              {active.stat}
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.15em] text-text-muted">{active.statLabel}</p>
          </div>

          {/* right: quote + attribution + controls */}
          <div className="flex flex-col justify-between px-8 py-16">
            <blockquote className="text-balance text-[24px] font-medium leading-snug text-text-primary sm:text-[28px]">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            <div>
              <div className="mt-10 flex items-center gap-3">
                <img
                  src={active.avatar}
                  alt={active.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/10"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">{active.name}</p>
                  <p className="text-sm text-text-muted">{active.role}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <a
                  href="#get-started"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                >
                  View story
                  <ArrowRight size={14} />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous story"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next story"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-muted hover:text-text-primary"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProofSection
