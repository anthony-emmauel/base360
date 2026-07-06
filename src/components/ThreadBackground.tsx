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

const LINE_COUNT = 18
// sweep from left-horizon (185°) up through the top (270°) to right-horizon (355°),
// covering the dome above the panel the way rays fan out from it
const ANGLE_START = 185
const ANGLE_END = 355

function buildLines(width: number, height: number, focusX: number, focusY: number) {
  const radius = Math.sqrt(width * width + height * height) * 0.8

  return Array.from({ length: LINE_COUNT }, (_, i) => {
    const t = i / (LINE_COUNT - 1)
    const angle = ((ANGLE_START + t * (ANGLE_END - ANGLE_START)) * Math.PI) / 180
    const r = radius * (0.85 + 0.3 * (((i * 37) % 7) / 6))

    const startX = focusX + Math.cos(angle) * r
    const startY = focusY + Math.sin(angle) * r

    const midX = focusX + Math.cos(angle) * r * 0.5
    const midY = focusY + Math.sin(angle) * r * 0.5
    const perpAngle = angle + Math.PI / 2
    const bend = (i % 2 === 0 ? 1 : -1) * (18 + (i % 5) * 5)
    const controlX = midX + Math.cos(perpAngle) * bend
    const controlY = midY + Math.sin(perpAngle) * bend

    const jitterX = ((i % 3) - 1) * 14
    const jitterY = ((i % 4) - 1.5) * 8

    return {
      d: `M ${startX} ${startY} Q ${controlX} ${controlY} ${focusX + jitterX} ${focusY + jitterY}`,
      delay: `${-(i * 0.5)}s`,
      duration: `${7 + (i % 5)}s`,
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
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {lines.map((_, i) => (
          <linearGradient
            key={i}
            id={`thread-gradient-${i}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2={width}
            y2={height}
          >
            <stop offset="0%" stopColor="#6C47FF" stopOpacity="0" />
            <stop offset="100%" stopColor="#6C47FF" stopOpacity="0.16" />
          </linearGradient>
        ))}
        <filter id="thread-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* static base threads, faintly present at rest */}
      {lines.map((line, i) => (
        <path key={`base-${i}`} d={line.d} stroke={`url(#thread-gradient-${i})`} strokeWidth="1" />
      ))}

      {/* traveling pulses that give the threads a sense of flow */}
      {lines.map((line, i) => (
        <path
          key={`pulse-${i}`}
          className="thread-line"
          d={line.d}
          pathLength={100}
          stroke="#9C87F5"
          strokeOpacity="0.5"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="4 96"
          filter="url(#thread-glow)"
          style={{ animationDelay: line.delay, animationDuration: line.duration }}
        />
      ))}
    </svg>
  )
}

export default ThreadBackground
