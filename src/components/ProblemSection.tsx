import { Check, X } from 'lucide-react'

const BEFORE_ITEMS = [
  'Comments buried across TikTok, IG, WhatsApp',
  'Hot leads answered hours (or days) later',
  'Sales team chasing conversations across 5 apps',
  'No record of who said what, where',
]

const AFTER_ITEMS = [
  'Every channel lands in one inbox',
  'AI replies in seconds, any time of day',
  'Leads tagged and routed automatically',
  'Full conversation history, one place',
]

function ChecklistRow({ text, tone }: { text: string; tone: 'bad' | 'good' }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
          tone === 'bad' ? 'bg-red-400/10' : 'bg-emerald-400/10'
        }`}
      >
        {tone === 'bad' ? (
          <X size={12} className="text-red-400/80" />
        ) : (
          <Check size={12} className="text-emerald-400/80" />
        )}
      </span>
      <span className="text-sm leading-relaxed text-text-secondary sm:text-base">{text}</span>
    </li>
  )
}

function ProblemSection() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <h2 className="text-center text-[32px] font-medium leading-tight text-text-primary sm:text-4xl">
        Every comment you miss is a sale walking away.
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-bg p-8">
          <h3 className="mb-6 text-base font-medium text-text-primary">Before Base360</h3>
          <ul className="flex flex-col gap-4">
            {BEFORE_ITEMS.map((item) => (
              <ChecklistRow key={item} text={item} tone="bad" />
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-8">
          <h3 className="mb-6 text-base font-medium text-text-primary">After Base360</h3>
          <ul className="flex flex-col gap-4">
            {AFTER_ITEMS.map((item) => (
              <ChecklistRow key={item} text={item} tone="good" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
