import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface Faq {
  question: string
  answer: string
}

const FAQS: Faq[] = [
  {
    question: 'Will replies sound robotic, or like my brand?',
    answer:
      'Like your brand. Base360 learns your voice from your past replies, product pages, and FAQs, so answers read like you wrote them — not a generic script. You set the tone; it stays on-brand every time.',
  },
  {
    question: 'What happens when the AI gets something wrong?',
    answer:
      'It hands off. Low-confidence or high-stakes conversations are escalated to a human with the full thread and context attached — nothing gets stuck, and no customer is left talking to a wall.',
  },
  {
    question: 'Is my customer data safe across all these channels?',
    answer:
      'Yes. Every channel connects over official APIs, data is encrypted in transit and at rest, and access is scoped per teammate. (In production this would link to a full trust center.)',
  },
  {
    question: 'Do I need a developer to set this up?',
    answer:
      'No. Connecting TikTok, Instagram, WhatsApp, email, and SMS is a few clicks each — no code, no API keys to wrangle. Most sellers are live the same afternoon.',
  },
  {
    question: 'What if I already use a CRM?',
    answer:
      'Base360 works either way. Keep your CRM and sync leads and status into it automatically, or let the built-in CRM replace it entirely. No double entry, no matter which you choose.',
  },
]

function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-0 pb-0">
      <div className="relative border-t border-border">
        {/* hairline side rules — continued from the Social proof frame above */}
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-border md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-border md:block" />

        <div className="px-8 py-14 text-center sm:py-20">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-text-secondary">
            <HelpCircle size={12} />
            FAQ
          </span>
          <h2 className="mt-6 text-balance text-[36px] font-medium leading-[1.1] tracking-tight text-text-primary sm:text-[48px]">
            Frequently asked questions.
          </h2>
        </div>

        <div>
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question} className="border-t border-border px-8">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 py-6 text-left"
                >
                  <span className="w-5 shrink-0 font-mono text-xs text-text-muted">0{i + 1}</span>
                  <span className="flex-1 text-[17px] font-medium text-text-primary sm:text-lg">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-text-muted transition-transform duration-300 motion-reduce:transition-none ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-6 pl-10 text-[15px] leading-relaxed text-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FaqSection
