const LINES = [
  { d: 'M -40 60 Q 400 220 720 640', delay: '0s', dash: '10 14' },
  { d: 'M 1480 40 Q 1000 240 740 620', delay: '-2s', dash: '8 16' },
  { d: 'M -60 460 Q 300 560 700 660', delay: '-4s', dash: '14 10' },
  { d: 'M 1500 500 Q 1150 580 760 670', delay: '-1.5s', dash: '12 12' },
  { d: 'M 200 -40 Q 400 320 720 630', delay: '-3s', dash: '9 15' },
  { d: 'M 1260 -40 Q 1050 300 750 630', delay: '-5s', dash: '11 13' },
  { d: 'M -40 820 Q 300 720 690 680', delay: '-6s', dash: '13 11' },
  { d: 'M 1500 840 Q 1180 730 770 680', delay: '-2.6s', dash: '10 10' },
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
            <stop offset="100%" stopColor="#6C47FF" stopOpacity="0.18" />
          </linearGradient>
        ))}
      </defs>

      {LINES.map((line, i) => (
        <path
          key={i}
          className="thread-line"
          d={line.d}
          stroke={`url(#thread-gradient-${i})`}
          strokeWidth="1"
          strokeDasharray={line.dash}
          style={{ animationDelay: line.delay }}
        />
      ))}
    </svg>
  )
}

export default ThreadBackground
