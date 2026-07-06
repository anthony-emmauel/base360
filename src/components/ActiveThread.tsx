import { UserRound, Paperclip, Smile, Send, Zap } from 'lucide-react'

export function ThreadHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-[12px] font-medium text-black/80">
          JM
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-medium text-text-primary">Jordan Miller</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <p className="text-xs text-text-muted">@jordanm_styles · Customer since Aug 2023</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary transition-colors hover:text-text-primary"
        >
          <UserRound size={13} />
          View Profile
        </button>
        <button
          type="button"
          className="rounded-lg border border-border px-3 py-1.5 text-xs text-text-secondary transition-colors hover:text-text-primary"
        >
          Resolve
        </button>
      </div>
    </div>
  )
}

export function ThreadMessages() {
  return (
    <div className="px-6 py-6">
      <p className="mb-6 text-center text-xs text-text-muted">Today, 10:42 AM</p>

      <ThreadMessage author="Jordan Miller" meta="commented on post">
        <div className="inline-block rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary">
          Is this in stock?
        </div>
      </ThreadMessage>

      <ThreadMessage author="Base360 AI" meta="replied to comment" isAI>
        <div className="inline-block rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-text-primary">
          Yes it is! I can send you a direct link if you'd like?
        </div>
      </ThreadMessage>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span className="shrink-0 text-[10px] font-medium tracking-wide text-text-muted">
          SWITCHED TO INSTAGRAM DM
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <ThreadMessage author="Jordan Miller" meta="sent a message">
        <div className="inline-block rounded-lg bg-white/[0.06] px-4 py-2.5 text-sm text-text-primary">
          Yes please
        </div>
      </ThreadMessage>

      <ThreadMessage author="Base360 AI" meta="sent a message" isAI>
        <div className="inline-block rounded-lg bg-white/[0.06] px-4 py-2.5 text-sm text-text-primary">
          Here's the link to purchase:{' '}
          <a href="#" className="text-sky-400 underline underline-offset-2 hover:text-sky-300">
            base360.co/c/8f92k
          </a>
          . Let me know if you need help.
        </div>
      </ThreadMessage>

      <div className="mt-6 flex justify-center">
        <span className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[11px] font-medium tracking-wide text-white">
          <Zap size={12} />
          LEAD AUTOMATICALLY TAGGED AS HOT
        </span>
      </div>
    </div>
  )
}

function ActiveThread() {
  return (
    <div className="flex flex-1 flex-col">
      <ThreadHeader />

      <div className="flex-1 overflow-y-auto">
        <ThreadMessages />
      </div>

      {/* Input */}
      <div className="border-t border-border px-6 py-4">
        <div className="flex items-center gap-2 rounded-full border border-border bg-white/[0.02] px-4 py-2.5">
          <input
            type="text"
            placeholder="Type a message or press '/' for AI commands..."
            className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
          />
          <Paperclip size={16} className="shrink-0 text-text-muted" />
          <Smile size={16} className="shrink-0 text-text-muted" />
          <button
            type="button"
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-text-primary transition-colors hover:border-white/20"
          >
            Send
            <Send size={12} />
          </button>
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] text-text-muted">
          <span className="tracking-wide">REPLYING IN INSTAGRAM DM</span>
          <span>
            Press <kbd className="rounded border border-border px-1">⌘</kbd> +{' '}
            <kbd className="rounded border border-border px-1">Enter</kbd> to send
          </span>
        </div>
      </div>
    </div>
  )
}

function ThreadMessage({
  author,
  meta,
  isAI,
  children,
}: {
  author: string
  meta: string
  isAI?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="mb-4 flex items-start gap-3">
      <div
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-medium ${
          isAI ? 'bg-white/10 text-text-primary' : 'bg-teal-500 text-black/80'
        }`}
      >
        {isAI ? (
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M10 1L18.5 5.5L10 10L1.5 5.5L10 1Z" fill="currentColor" />
          </svg>
        ) : (
          author
            .split(' ')
            .map((w) => w[0])
            .join('')
        )}
      </div>
      <div>
        <p className="mb-1 text-xs">
          <span className="font-medium text-text-primary">{author}</span>{' '}
          <span className="text-text-muted">{meta}</span>
        </p>
        {children}
      </div>
    </div>
  )
}

export default ActiveThread
