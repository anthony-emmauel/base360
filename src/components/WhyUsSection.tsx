import IconRail from './IconRail'
import InboxList from './InboxList'
import { ThreadHeader, ThreadMessages } from './ActiveThread'

interface Column {
  key: string
  headline: string
  body: string
  crop: React.ReactNode
}

const COLUMNS: Column[] = [
  {
    key: 'inbox',
    headline: 'One inbox, every channel',
    body: 'TikTok, WhatsApp, Instagram, email, and SMS — one view, nothing missed.',
    crop: (
      <div className="flex h-full origin-top scale-110">
        <IconRail />
        <InboxList />
      </div>
    ),
  },
  {
    key: 'ai',
    headline: 'AI that actually closes',
    body: 'Replies, qualifies, and hands off high-intent leads — no scripts, no delay.',
    crop: (
      <div className="-mt-44 w-full origin-top scale-75 bg-surface">
        <ThreadMessages />
      </div>
    ),
  },
  {
    key: 'tracking',
    headline: 'Every lead, tracked automatically',
    body: 'Full context and history live with the conversation — no separate CRM to update.',
    crop: (
      <div className="flex h-full origin-top scale-110 items-center bg-surface">
        <ThreadHeader />
      </div>
    ),
  },
]

function WhyUsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <h2 className="text-center text-[32px] font-medium leading-tight text-text-primary sm:text-4xl">
        A better way to turn comments into customers.
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.key} className="flex flex-col">
            <div className="h-56 w-full overflow-hidden rounded-xl border border-border bg-surface">
              <div className="pointer-events-none h-full w-full">{col.crop}</div>
            </div>

            <h3 className="mt-6 text-left text-xl font-medium text-text-primary">{col.headline}</h3>
            <p className="mt-2 text-left text-sm leading-relaxed text-text-secondary">{col.body}</p>

            <a
              href="#"
              className="mt-4 self-start text-sm text-text-muted transition-colors hover:text-accent-hover"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUsSection
