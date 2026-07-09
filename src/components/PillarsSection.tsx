interface Pillar {
  id: string
  title: string
  lead: string
  description: string
}

const PILLARS: Pillar[] = [
  {
    id: 'inbox',
    title: 'Every channel, one inbox',
    lead: 'Nothing slips through the cracks.',
    description:
      'TikTok, Instagram, WhatsApp, email, and SMS land in one queue — comments, DMs, and messages together, so nothing goes unanswered.',
  },
  {
    id: 'ai-agents',
    title: 'Replies that close, not deflect',
    lead: 'Answered before they scroll away.',
    description:
      'AI replies in seconds, any hour, in your brand voice — qualifying and routing high-intent leads to sales without a script.',
  },
  {
    id: 'crm',
    title: 'Context that keeps itself',
    lead: 'Every lead, tracked automatically.',
    description:
      'Full conversation history lives with the lead. Tags and status sync as the conversation happens — no separate CRM to update.',
  },
  {
    id: 'marketing',
    title: 'No lead left behind',
    lead: 'Every conversation grows your list.',
    description:
      "Leads that don't convert today are enrolled in nurture automatically, so a slow yes still becomes a sale.",
  },
]

function PillarsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-0">
      <div className="relative border-t border-border">
        {/* hairline side rules — same style/position as How-it-works, so the two frames read as one */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-border md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-border md:block" />

        {/* intro statement */}
        <div className="border-b border-border px-8 py-14 sm:py-20">
          <h2 className="max-w-2xl text-balance text-[32px] font-medium leading-[1.1] tracking-tight text-text-primary sm:text-[44px]">
            One system. Four jobs. Zero busywork.
          </h2>
        </div>

        {/* pillar rows */}
        {PILLARS.map(({ id, title, lead, description }, i) => (
          <div key={id} className={`grid md:grid-cols-2 ${i > 0 ? 'border-t border-border' : ''}`}>
            <div className="px-8 pt-12 pb-4 md:pb-12">
              <h3 className="text-balance text-[22px] font-medium leading-snug text-text-primary sm:text-[26px]">
                {title}
              </h3>
            </div>

            <div className="px-8 pb-12 md:pt-12">
              <p className="text-base font-medium text-text-primary">{lead}</p>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-text-secondary">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PillarsSection
