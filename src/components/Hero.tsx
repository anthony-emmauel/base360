function Hero() {
  return (
    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-16 pb-10 text-center sm:pt-20">
      <h1 className="text-[40px] font-medium leading-[1.1] tracking-tight text-text-primary sm:text-[52px] lg:text-[58px]">
        <span className="block">One comment.</span>
        <span className="block">Closed customer.</span>
        <span className="block">Zero effort.</span>
      </h1>

      <p className="mt-6 max-w-xl text-base text-text-secondary sm:text-lg">
        Base360 unifies every conversation, automates the work, and turns leads into
        sales — automatically.
      </p>

      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <a
          id="get-started"
          href="#get-started"
          className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Get started free
        </a>
        <a
          href="#how-it-works"
          className="text-sm font-medium text-text-primary transition-colors hover:text-text-secondary"
        >
          See how it works →
        </a>
      </div>

      <p className="mt-5 text-xs text-text-muted">
        Free 14-day trial · No credit card required
      </p>
    </div>
  )
}

export default Hero
