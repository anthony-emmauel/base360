function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-text-primary">
        <path d="M10 1L18.5 5.5L10 10L1.5 5.5L10 1Z" fill="currentColor" />
        <path d="M1.5 10L10 14.5L18.5 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.55" />
        <path d="M1.5 14L10 18.5L18.5 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
      <span className="text-[15px] font-semibold tracking-tight text-text-primary">Base360</span>
    </div>
  )
}

export default Logo
