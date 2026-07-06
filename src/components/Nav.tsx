import Logo from './Logo'

const LINKS = ['Product', 'Solutions', 'Pricing']

function Nav() {
  return (
    <nav className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-3 items-center px-6 py-6 sm:px-10">
      <div className="justify-self-start">
        <Logo />
      </div>

      <div className="col-span-1 hidden justify-self-center gap-8 text-sm text-text-secondary sm:flex">
        {LINKS.map((link) => (
          <a key={link} href="#" className="transition-colors hover:text-text-primary">
            {link}
          </a>
        ))}
      </div>

      <div className="justify-self-end">
        <a
          href="#get-started"
          className="rounded-full border border-border px-4 py-2 text-sm text-text-primary transition-colors hover:border-white/20"
        >
          Get started free
        </a>
      </div>
    </nav>
  )
}

export default Nav
