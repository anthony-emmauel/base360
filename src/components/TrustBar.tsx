const BRANDS = ['AURA', 'NATIVE', 'VELOCI', 'LUMEN', 'OASIS', 'KINETI']

function TrustBar() {
  return (
    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 pb-16 sm:pb-20">
      <p className="text-xs font-medium tracking-[0.15em] text-text-muted">
        TRUSTED BY DTC BRANDS CLOSING SALES ON SOCIAL
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {BRANDS.map((brand) => (
          <span
            key={brand}
            className="cursor-default text-lg font-semibold tracking-wide text-text-muted transition-colors duration-300 hover:text-accent-hover"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
