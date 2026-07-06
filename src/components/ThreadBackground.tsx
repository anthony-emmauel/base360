import { useEffect, useState } from 'react'

interface ThreadBackgroundProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  targetRef: React.RefObject<HTMLDivElement | null>
}

interface Dimensions {
  width: number
  height: number
  focusX: number
  focusY: number
}

// scattered anchor points (fractions of container width/height) around the
// full perimeter — top-left, left-mid, bottom-left, top-right, etc. — not an
// evenly-spaced fan, so lines read as independent signals, not a grid
const START_POINTS = [
  { x: 0.06, y: 0.02 },
  { x: -0.02, y: 0.32 },
  { x: -0.03, y: 0.6 },
  { x: 0.14, y: 0.95 },
  { x: 0.36, y: -0.03 },
  { x: 0.66, y: -0.03 },
  { x: 0.93, y: 0.05 },
  { x: 1.03, y: 0.3 },
  { x: 1.02, y: 0.64 },
  { x: 0.84, y: 0.96 },
]

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function buildLines(width: number, height: number, focusX: number, focusY: number) {
  return START_POINTS.map((p, i) => {
    const startX = p.x * width
    const startY = p.y * height

    const jitterX = (seededRandom(i + 10) - 0.5) * 30
    const jitterY = (seededRandom(i + 20) - 0.5) * 20
    const endX = focusX + jitterX
    const endY = focusY + jitterY

    const dx = endX - startX
    const dy = endY - startY
    const len = Math.sqrt(dx * dx + dy * dy) || 1
    const perpX = -dy / len
    const perpY = dx / len
    const bend = (seededRandom(i) - 0.5) * len * 0.35
    const controlX = (startX + endX) / 2 + perpX * bend
    const controlY = (startY + endY) / 2 + perpY * bend

    return {
      startX,
      startY,
      endX,
      endY,
      d: `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`,
      delay: `${(0.2 + seededRandom(i + 30) * 0.6).toFixed(2)}s`,
      duration: `${(3 + seededRandom(i + 40) * 2).toFixed(2)}s`,
    }
  })
}

function ThreadBackground({ containerRef, targetRef }: ThreadBackgroundProps) {
  const [dims, setDims] = useState<Dimensions | null>(null)

  useEffect(() => {
    const measure = () => {
      const container = containerRef.current
      const target = targetRef.current
      if (!container || !target) return
      const containerRect = container.getBoundingClientRect()
      const targetRect = target.getBoundingClientRect()
      setDims({
        width: containerRect.width,
        height: containerRect.height,
        focusX: targetRect.left - containerRect.left + targetRect.width / 2,
        focusY: targetRect.top - containerRect.top,
      })
    }

    measure()
    const observer = new ResizeObserver(measure)
    if (containerRef.current) observer.observe(containerRef.current)
    if (targetRef.current) observer.observe(targetRef.current)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [containerRef, targetRef])

  if (!dims) return null

  const { width, height, focusX, focusY } = dims
  const lines = buildLines(width, height, focusX, focusY)

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {lines.map((line, i) => (
          <linearGradient
            key={i}
            id={`thread-gradient-${i}`}
            gradientUnits="userSpaceOnUse"
            x1={line.startX}
            y1={line.startY}
            x2={line.endX}
            y2={line.endY}
          >
            <stop offset="0%" stopColor="#6C47FF" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#6C47FF" stopOpacity="0.3" />
          </linearGradient>
        ))}
      </defs>

      {/* static gradient-faded lines — always visible, the reduced-motion fallback */}
      {lines.map((line, i) => (
        <path key={`base-${i}`} d={line.d} stroke={`url(#thread-gradient-${i})`} strokeWidth="0.75" />
      ))}

      {/* short dashes traveling toward the panel, staggered so signals don't pulse in sync */}
      {lines.map((line, i) => (
        <path
          key={`flow-${i}`}
          className="thread-line"
          d={line.d}
          pathLength={100}
          stroke={`url(#thread-gradient-${i})`}
          strokeWidth="1"
          strokeDasharray="4 6"
          style={{ animationDelay: line.delay, animationDuration: line.duration }}
        />
      ))}
    </svg>
  )
}

export default ThreadBackground
