import { LayoutDashboard, Phone, Mail, MessageSquare, Pencil, Settings } from 'lucide-react'

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82a4.28 4.28 0 0 1-3.14-1.4V15.4a5.25 5.25 0 1 1-4.5-5.2v2.3a2.95 2.95 0 1 0 2.08 2.82V2h2.42a4.28 4.28 0 0 0 3.14 3.82Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

const TOP_ICONS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: TikTokIcon, label: 'TikTok' },
  { icon: Phone, label: 'Phone' },
  { icon: InstagramIcon, label: 'Instagram' },
  { icon: Mail, label: 'Mail' },
  { icon: MessageSquare, label: 'Chat' },
]

const BOTTOM_ICONS = [
  { icon: Pencil, label: 'Compose' },
  { icon: Settings, label: 'Settings' },
]

function IconRail() {
  return (
    <div className="flex w-14 shrink-0 flex-col items-center justify-between border-r border-border py-4">
      <div className="flex flex-col items-center gap-1">
        {TOP_ICONS.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className={`relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              active
                ? 'bg-white/10 text-text-primary'
                : 'text-text-muted hover:text-text-secondary'
            }`}
          >
            {active && (
              <span className="absolute -left-[9px] top-1/2 h-4 w-[3px] -translate-y-1/2 rounded-full bg-white" />
            )}
            <Icon size={18} />
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center gap-1">
        {BOTTOM_ICONS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted transition-colors hover:text-text-secondary"
          >
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default IconRail
