const LINES = [
  { d: 'M -40 60 Q 400 220 720 640', delay: '0s', duration: '7s' },
  { d: 'M 1480 40 Q 1000 240 740 620', delay: '-2s', duration: '8s' },
  { d: 'M -60 460 Q 300 560 700 660', delay: '-4s', duration: '6.5s' },
  { d: 'M 1500 500 Q 1150 580 760 670', delay: '-1.5s', duration: '9s' },
  { d: 'M 200 -40 Q 400 320 720 630', delay: '-3s', duration: '7.5s' },
  { d: 'M 1260 -40 Q 1050 300 750 630', delay: '-5s', duration: '8.5s' },
  { d: 'M -40 820 Q 300 720 690 680', delay: '-6s', duration: '6s' },
  { d: 'M 1500 840 Q 1180 730 770 680', delay: '-2.6s', duration: '10s' },
]

function ThreadBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {LINES.map((_, i) => (
          <linearGradient
            key={i}
            id={`thread-gradient-${i}`}
            gradientUnits="userSpaceOnUse"
            x1="0"
            y1="0"
            x2="1440"
            y2="900"
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
      {LINES.map((line, i) => (
        <path
          key={`base-${i}`}
          d={line.d}
          stroke={`url(#thread-gradient-${i})`}
          strokeWidth="1"
        />
      ))}

      {/* traveling pulses that give the threads a sense of flow */}
      {LINES.map((line, i) => (
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
