import Logo from './Logo'

const LINKS = ['Product', 'Solutions', 'Pricing']

function Nav() {
  return (
    <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:grid sm:grid-cols-3 sm:px-10">
      <div className="sm:justify-self-start">
        <Logo />
      </div>

      <div className="col-span-1 hidden justify-self-center gap-8 text-sm text-text-secondary sm:flex">
        {LINKS.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-text-primary">
            {link}
          </a>
        ))}
      </div>

      <div className="sm:justify-self-end">
        <a
          href="#get-started"
          className="rounded-full border border-border bg-bg/70 px-4 py-2 text-sm text-text-primary backdrop-blur-sm transition-[border-color,scale] hover:border-text-muted active:scale-[0.96]"
        >
          Get started free
        </a>
      </div>
    </nav>
  )
}

export default Nav
