// Original isometric line-art for the WhyUsSection cards — inspired by the
// thin monochrome figure style used on dev-tool marketing sites, built from
// scratch (no imagery assets) using plain SVG polygons so the stroke color
// stays bound to the page's own accent-thread token family.
const STROKE = 'rgba(255, 255, 255, 0.35)'
const STROKE_DIM = 'rgba(255, 255, 255, 0.18)'

function FigCaption({ label }: { label: string }) {
  return (
    <span className="absolute left-8 top-8 font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
      {label}
    </span>
  )
}

function DotGrid({ x, y }: { x: number; y: number }) {
  const dots: React.ReactNode[] = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      dots.push(<circle key={`${row}-${col}`} cx={x + col * 6} cy={y + row * 6} r={1} fill="rgba(255, 255, 255, 0.3)" />)
    }
  }
  return <>{dots}</>
}

function cubeHex(cx: number, cy: number, s: number) {
  const dx = s * 0.866
  const dy = s * 0.5
  return {
    top: [cx, cy - s] as const,
    ur: [cx + dx, cy - dy] as const,
    lr: [cx + dx, cy + dy] as const,
    bottom: [cx, cy + s] as const,
    ll: [cx - dx, cy + dy] as const,
    ul: [cx - dx, cy - dy] as const,
  }
}

function Cube({ cx, cy, s, strokeColor = STROKE }: { cx: number; cy: number; s: number; strokeColor?: string }) {
  const { top, ur, lr, bottom, ll, ul } = cubeHex(cx, cy, s)
  const points = [top, ur, lr, bottom, ll, ul].map((p) => p.join(',')).join(' ')
  return (
    <g>
      <polygon points={points} fill="none" stroke={strokeColor} strokeWidth={1} strokeLinejoin="round" />
      <line x1={cx} y1={cy} x2={top[0]} y2={top[1]} stroke={strokeColor} strokeWidth={1} />
      <line x1={cx} y1={cy} x2={lr[0]} y2={lr[1]} stroke={strokeColor} strokeWidth={1} />
      <line x1={cx} y1={cy} x2={ll[0]} y2={ll[1]} stroke={strokeColor} strokeWidth={1} />
    </g>
  )
}

// Channels stacking into one surface: layered flat panels topped by one cube.
export function StackIllustration() {
  const cx = 120
  const layers = [168, 152, 136, 120, 104, 88]
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full max-w-[220px]" fill="none" aria-hidden="true">
      <FigCaption label="FIG 01" />
      {layers.map((cy, i) => (
        <polygon
          key={cy}
          points={`${cx},${cy - 20} ${cx + 62},${cy} ${cx},${cy + 20} ${cx - 62},${cy}`}
          fill="none"
          stroke={i === layers.length - 1 ? STROKE : STROKE_DIM}
          strokeWidth={1}
        />
      ))}
      <Cube cx={cx} cy={64} s={30} />
      <DotGrid x={cx - 9} y={54} />
    </svg>
  )
}

// Distributed agents working as one system: interlocking cubes at different depths.
export function ClusterIllustration() {
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full max-w-[220px]" fill="none" aria-hidden="true">
      <FigCaption label="FIG 02" />
      <Cube cx={92} cy={152} s={34} strokeColor={STROKE_DIM} />
      <Cube cx={152} cy={132} s={28} strokeColor={STROKE_DIM} />
      <Cube cx={166} cy={168} s={20} strokeColor={STROKE_DIM} />
      <Cube cx={120} cy={94} s={38} />
    </svg>
  )
}

// A single flat isometric envelope: a rhombus body with a shallow flap.
function Envelope({ cx, cy, s = 15, strokeColor = STROKE_DIM }: { cx: number; cy: number; s?: number; strokeColor?: string }) {
  const dx = s
  const dy = s * 0.5
  const top = `${cx},${cy - dy}`
  const right = `${cx + dx},${cy}`
  const bottom = `${cx},${cy + dy}`
  const left = `${cx - dx},${cy}`
  return (
    <g fill="none" stroke={strokeColor} strokeWidth={1} strokeLinejoin="round">
      <polygon points={`${top} ${right} ${bottom} ${left}`} />
      <path d={`M ${left} L ${cx},${cy} L ${right}`} />
    </g>
  )
}

// Nurture: envelopes orbiting a central node on a dotted path.
export function EnvelopeIllustration() {
  const cx = 120
  const cy = 128
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full max-w-[220px]" fill="none" aria-hidden="true">
      <FigCaption label="FIG 04" />
      <ellipse cx={cx} cy={cy} rx={72} ry={30} fill="none" stroke={STROKE_DIM} strokeWidth={1} strokeDasharray="2 5" />
      <Cube cx={cx} cy={cy} s={13} />
      <Envelope cx={cx} cy={cy - 42} strokeColor={STROKE} />
      <Envelope cx={cx + 64} cy={cy - 6} />
      <Envelope cx={cx - 58} cy={cy + 12} />
      <Envelope cx={cx + 20} cy={cy + 42} />
      <DotGrid x={cx - 9} y={cy - 51} />
    </svg>
  )
}

// Records accumulating: a fan of thin vertical panels offset behind one another.
export function FanIllustration() {
  const panels = [
    { x: 66, h: 58 },
    { x: 88, h: 74 },
    { x: 110, h: 90 },
    { x: 132, h: 90 },
    { x: 154, h: 74 },
    { x: 176, h: 58 },
  ]
  const cy = 130
  return (
    <svg viewBox="0 0 240 240" className="h-full w-full max-w-[220px]" fill="none" aria-hidden="true">
      <FigCaption label="FIG 03" />
      {panels.map((p, i) => (
        <rect
          key={p.x}
          x={p.x}
          y={cy - p.h / 2}
          width={14}
          height={p.h}
          rx={6}
          fill="none"
          stroke={i === 2 || i === 3 ? STROKE : STROKE_DIM}
          strokeWidth={1}
        />
      ))}
    </svg>
  )
}
