// soft decorative lines flowing in from a panel's edges — a smaller, non-
// converging cousin of the hero's thread motif so it doesn't repeat that
// exact effect, just echoes the same accent-thread token
const LEFT_ROWS = [18, 30, 42, 54, 66]
const RIGHT_ROWS = [22, 34, 46, 58, 70]

function PanelGlowLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="panel-glow-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6C47FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6C47FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="panel-glow-right" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#6C47FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6C47FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {LEFT_ROWS.map((y, i) => (
        <path
          key={`l-${i}`}
          d={`M 0 ${y + (i % 2 === 0 ? -3 : 3)} Q 20 ${y} 40 ${y - (i % 2 === 0 ? 4 : -4)}`}
          stroke="url(#panel-glow-left)"
          strokeWidth="0.3"
        />
      ))}
      {RIGHT_ROWS.map((y, i) => (
        <path
          key={`r-${i}`}
          d={`M 100 ${y + (i % 2 === 0 ? 3 : -3)} Q 80 ${y} 60 ${y - (i % 2 === 0 ? -4 : 4)}`}
          stroke="url(#panel-glow-right)"
          strokeWidth="0.3"
        />
      ))}
    </svg>
  )
}

export default PanelGlowLines
