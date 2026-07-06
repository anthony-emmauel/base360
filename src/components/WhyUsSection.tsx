import IconRail from './IconRail'
import InboxList from './InboxList'
import { ThreadHeader, ThreadMessages } from './ActiveThread'
import PanelGlowLines from './PanelGlowLines'

interface Panel {
  key: string
  tabLabel: string
  headline: string
  body: string
  crop: React.ReactNode
}

const PANELS: Panel[] = [
  {
    key: 'inbox',
    tabLabel: 'Unify',
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
    tabLabel: 'Automate',
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
    tabLabel: 'Track',
    headline: 'Every lead, tracked automatically',
    body: 'Full context and history live with the conversation — no separate CRM to update.',
    crop: (
      <div className="flex h-full origin-top scale-110 items-center bg-surface">
        <ThreadHeader />
      </div>
    ),
  },
]

const TAB_HEIGHT = 52

function WhyUsSection() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 py-20 sm:py-28">
      <h2 className="text-center text-[32px] font-medium leading-tight text-text-primary sm:text-4xl">
        A better way to turn comments into customers.
      </h2>

      <div className="relative mt-14">
        {PANELS.map((panel, i) => (
          <div key={panel.key} className="sticky pb-6" style={{ top: i * TAB_HEIGHT, zIndex: i + 1 }}>
            <div
              className="flex items-center gap-2 rounded-t-2xl border border-b-0 border-border bg-bg px-6"
              style={{ height: TAB_HEIGHT }}
            >
              <span className="text-xs font-medium text-text-muted">0{i + 1}</span>
              <span className="text-xs font-medium text-text-secondary">{panel.tabLabel}</span>
            </div>

            <div className="relative flex min-h-[64vh] flex-col items-center justify-center overflow-hidden rounded-b-2xl rounded-tr-2xl border border-border bg-surface p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:p-12">
              <PanelGlowLines />

              <div className="relative flex flex-col items-center">
                <div className="h-56 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-surface">
                  <div className="pointer-events-none h-full w-full">{panel.crop}</div>
                </div>

                <div className="mt-8 max-w-lg text-center">
                  <h3 className="text-xl font-medium text-text-primary">{panel.headline}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{panel.body}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-sm text-text-muted transition-colors hover:text-accent-hover"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUsSection
