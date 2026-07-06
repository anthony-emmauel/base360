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

// start/control points as fractions of container width/height; endOffset is
// a small px nudge off the focus point so lines don't all land on one pixel
const EDGE_POINTS = [
  { start: [-0.028, 0.067], control: [0.278, 0.244], endOffset: [-10, -10], delay: '0s', duration: '7s' },
  { start: [1.028, 0.044], control: [0.694, 0.267], endOffset: [10, -30], delay: '-2s', duration: '8s' },
  { start: [-0.042, 0.511], control: [0.208, 0.622], endOffset: [-30, 10], delay: '-4s', duration: '6.5s' },
  { start: [1.042, 0.556], control: [0.799, 0.644], endOffset: [30, 20], delay: '-1.5s', duration: '9s' },
  { start: [0.139, -0.044], control: [0.278, 0.356], endOffset: [-10, -20], delay: '-3s', duration: '7.5s' },
  { start: [0.875, -0.044], control: [0.729, 0.333], endOffset: [20, -20], delay: '-5s', duration: '8.5s' },
  { start: [-0.028, 0.911], control: [0.208, 0.8], endOffset: [-40, 30], delay: '-6s', duration: '6s' },
  { start: [1.042, 0.933], control: [0.819, 0.811], endOffset: [40, 30], delay: '-2.6s', duration: '10s' },
] as const

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

  const lines = EDGE_POINTS.map((p) => ({
    d: `M ${p.start[0] * width} ${p.start[1] * height} Q ${p.control[0] * width} ${p.control[1] * height} ${
      focusX + p.endOffset[0]
    } ${focusY + p.endOffset[1]}`,
    delay: p.delay,
    duration: p.duration,
  }))

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
            <stop offset="100%" stopColor="#6C47FF" stopOpacity="0.22" />
          </linearGradient>
        ))}
        <filter id="thread-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
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
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 94"
          filter="url(#thread-glow)"
          style={{ animationDelay: line.delay, animationDuration: line.duration }}
        />
      ))}
    </svg>
  )
}

export default ThreadBackground
