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

// Anchor points as fractions of container width/height, deliberately spilling
// past the 0-1 edges (negative x, x>1, negative y) so lines enter the frame
// mid-flight rather than originating exactly at its border. Left-to-right
// ascending order matters: buildLines maps each point's rank in this array
// directly to its landing position in the convergence band, so lines never
// swap sides and the fan stays a clean, non-crossing cone.
const START_POINTS = [
  // left sweep
  { x: -0.09, y: 0.17 },
  { x: 0, y: 0.08 },
  { x: 0.03, y: 0 },
  { x: 0.1, y: -0.04 },
  { x: 0.17, y: -0.08 },
  { x: 0.24, y: -0.08 },
  // center
  { x: 0.35, y: -0.08 },
  { x: 0.42, y: -0.08 },
  { x: 0.5, y: -0.08 },
  { x: 0.58, y: -0.08 },
  { x: 0.65, y: -0.08 },
  // right sweep
  { x: 0.76, y: -0.08 },
  { x: 0.83, y: -0.08 },
  { x: 0.9, y: -0.04 },
  { x: 0.97, y: 0 },
  { x: 1.0, y: 0.08 },
  { x: 1.07, y: 0.17 },
]

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

function buildLines(width: number, height: number, focusX: number, focusY: number) {
  const count = START_POINTS.length
  const convergeWidth = width * 0.14

  return START_POINTS.map((p, i) => {
    const startX = p.x * width
    const startY = p.y * height

    // Rank-preserving landing spot: START_POINTS is already left-to-right,
    // so the leftmost start lands leftmost in the band and the rightmost
    // start lands rightmost — lines keep their relative order and form a
    // cone instead of weaving through each other.
    const rank = i / (count - 1)
    const endX = focusX - convergeWidth / 2 + convergeWidth * rank
    const endY = focusY + (seededRandom(i + 20) - 0.5) * 16

    const dx = endX - startX
    const dy = endY - startY

    // Two-control-point cubic: the first control point advances mostly
    // sideways with little vertical drop, so each line reads as drifting in
    // in the first half. The second control point sits much further down,
    // close to the end, so the back half of the line swoops steeply toward
    // the focus. Per-line variation is kept small so neighboring lines stay
    // roughly parallel rather than swinging into each other's lane.
    const c1x = startX + dx * (0.42 + seededRandom(i + 1) * 0.06)
    const c1y = startY + dy * (0.1 + seededRandom(i + 2) * 0.06)
    const c2x = startX + dx * (0.76 + seededRandom(i + 3) * 0.05)
    const c2y = startY + dy * (0.6 + seededRandom(i + 4) * 0.1)

    const strokeWidth = 0.6 + seededRandom(i + 5) * 0.8

    return {
      startX,
      startY,
      endX,
      endY,
      strokeWidth,
      d: `M ${startX} ${startY} C ${c1x} ${c1y} ${c2x} ${c2y} ${endX} ${endY}`,
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
      className="thread-mask pointer-events-none absolute inset-0 z-0 h-full w-full"
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
            <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ff5a1f" stopOpacity="0.55" />
          </linearGradient>
        ))}
      </defs>

      {/* static gradient-faded lines — always visible, the reduced-motion fallback */}
      {lines.map((line, i) => (
        <path key={`base-${i}`} d={line.d} stroke={`url(#thread-gradient-${i})`} strokeWidth={line.strokeWidth} />
      ))}

      {/* one soft comet-like streak traveling toward the panel per line, staggered so signals don't pulse in sync */}
      {lines.map((line, i) => (
        <path
          key={`flow-${i}`}
          className="thread-line"
          d={line.d}
          pathLength={100}
          stroke={`url(#thread-gradient-${i})`}
          strokeWidth={line.strokeWidth + 0.5}
          strokeLinecap="round"
          strokeDasharray="22 78"
          style={{ animationDelay: line.delay, animationDuration: line.duration }}
        />
      ))}
    </svg>
  )
}

export default ThreadBackground
