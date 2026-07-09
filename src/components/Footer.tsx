import Logo from './Logo'

interface Column {
  heading: string
  links: string[]
}

const COLUMNS: Column[] = [
  { heading: 'Product', links: ['Unified Inbox', 'AI Agents', 'Built-in CRM', 'Marketing', 'Pricing'] },
  { heading: 'Channels', links: ['TikTok', 'Instagram', 'WhatsApp', 'Email', 'SMS'] },
  { heading: 'Solutions', links: ['DTC Brands', 'Agencies', 'Creators', 'Enterprise'] },
  { heading: 'Company', links: ['About', 'Customers', 'Careers', 'Blog', 'Press'] },
  { heading: 'Resources', links: ['Help Center', 'API Docs', 'Guides', 'Changelog'] },
  { heading: 'Follow us', links: ['X (Twitter)', 'LinkedIn', 'YouTube'] },
]

function Footer() {
  return (
    <footer className="relative bg-bg">
      <div className="relative mx-auto max-w-6xl px-6">
        {/* blueprint frame — top rule connects down from the FAQ, side rules run the height */}
        <div className="pointer-events-none absolute left-6 right-6 top-0 hidden h-px bg-border md:block" />
        <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-px bg-border md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-6 hidden w-px bg-border md:block" />

        <div className="grid md:grid-cols-[1fr_2fr]">
          {/* brand + newsletter */}
          <div className="border-b border-border px-8 py-12 md:border-b-0 md:border-r">
            <Logo />
            <div className="mt-10 border-t border-border pt-8">
              <h3 className="text-base font-medium text-text-primary">Sign up to learn more</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-secondary">
                Discover how Base360 turns every comment, DM, and message into closed sales — with product updates
                delivered to your inbox.
              </p>
              <a
                href="#get-started"
                className="mt-6 inline-block rounded-full border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-text-muted"
              >
                Get started free
              </a>
            </div>
          </div>

          {/* link grid */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 px-8 py-12 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-medium text-text-primary">{col.heading}</p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-text-secondary transition-colors hover:text-text-primary">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border px-8 py-6 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© Base360 2026 · All rights reserved</span>
            <a href="#" className="transition-colors hover:text-text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-text-primary">
              Terms of service
            </a>
          </div>
          <a href="mailto:support@base360.co" className="transition-colors hover:text-text-primary">
            support@base360.co
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
