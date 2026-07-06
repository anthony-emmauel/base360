import { Search, SlidersHorizontal } from 'lucide-react'
import { CONVERSATIONS } from './inboxData'

function InboxList() {
  return (
    <div className="flex w-[300px] shrink-0 flex-col border-r border-border">
      <div className="flex items-center justify-between border-b border-border px-4 py-4">
        <h3 className="text-[15px] font-medium text-text-primary">Inbox</h3>
        <div className="flex items-center gap-3 text-text-muted">
          <Search size={15} />
          <SlidersHorizontal size={15} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {CONVERSATIONS.map((c) => (
          <div
            key={c.id}
            className={`flex cursor-pointer gap-3 border-b border-border/60 px-4 py-3 text-left transition-colors ${
              c.active ? 'border-l-2 border-l-white bg-white/[0.04]' : 'border-l-2 border-l-transparent hover:bg-white/[0.03]'
            }`}
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-medium text-black/80"
              style={{ backgroundColor: c.avatarColor }}
            >
              {c.initials}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-1.5">
                  <span className="truncate text-sm font-medium text-text-primary">{c.name}</span>
                  <span className="shrink-0 rounded border border-border px-1 py-px text-[10px] text-text-muted">
                    {c.channel}
                  </span>
                </div>
                <span className="shrink-0 text-[11px] text-text-muted">{c.time}</span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5">
                {c.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />}
                <p className="truncate text-[13px] text-text-secondary">{c.preview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InboxList
