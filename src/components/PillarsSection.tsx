import {
  StackIllustration,
  ClusterIllustration,
  FanIllustration,
  EnvelopeIllustration,
} from './PillarIllustrations'

interface Pillar {
  id: string
  label: string
  description: string
  Illustration: () => React.ReactElement
}

const PILLARS: Pillar[] = [
  {
    id: 'inbox',
    label: 'Inbox',
    description:
      'Every comment, DM, and message lands in one place. TikTok, Instagram, WhatsApp, email, and SMS — nothing missed.',
    Illustration: StackIllustration,
  },
  {
    id: 'ai-agents',
    label: 'AI Agents',
    description:
      'AI replies in seconds, any hour, in your brand voice — qualifying and routing leads without a script.',
    Illustration: ClusterIllustration,
  },
  {
    id: 'crm',
    label: 'CRM',
    description:
      'Full context and lead history live with the conversation — tags and status sync automatically.',
    Illustration: FanIllustration,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    description:
      "Leads that don't convert today are enrolled in nurture automatically — every conversation grows your list.",
    Illustration: EnvelopeIllustration,
  },
]

function PillarsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <h2 className="text-[40px] font-medium leading-[1.1] tracking-tight text-text-primary sm:text-[48px]">
        One system. Four jobs.
      </h2>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {PILLARS.map(({ id, label, description, Illustration }) => (
          <div key={id}>
            <p className="text-[11px] font-medium uppercase tracking-wide text-text-muted">{label}</p>
            <p className="mt-2 text-base leading-relaxed text-text-secondary">{description}</p>
            <div className="mt-6 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface">
              <Illustration />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PillarsSection
