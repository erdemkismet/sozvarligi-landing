const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0">
      {/* Katmanlı ışık efektleri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-amber-500/25 via-orange-500/15 to-transparent blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-400/20 to-transparent blur-2xl animate-pulse-glow-delayed-1" />
      <div className="absolute bottom-1/3 right-1/3 translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-amber-600/15 to-transparent blur-2xl animate-pulse-glow-delayed-2" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Işık noktaları */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-amber-400/40 blur-sm animate-pulse" />
      <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 rounded-full bg-orange-400/30 blur-sm animate-pulse-delayed-0.5" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-amber-300/35 blur-sm animate-pulse-delayed-1.5" />
      <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-orange-300/30 blur-sm animate-pulse-delayed-2.5" />

      {/* Osmanlı tezhip çizgileri */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tezhipGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="1" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Üst süsleme */}
        <path d="M 0,100 Q 200,50 400,100 T 800,100 T 1200,100 T 1600,100 T 2000,100"
              stroke="url(#tezhipGrad)" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glow)" />
        <path d="M 0,120 Q 200,90 400,120 T 800,120 T 1200,120 T 1600,120 T 2000,120"
              stroke="url(#tezhipGrad)" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Alt süsleme */}
        <path d="M 0,900 Q 200,950 400,900 T 800,900 T 1200,900 T 1600,900 T 2000,900"
              stroke="url(#tezhipGrad)" strokeWidth="2" fill="none" opacity="0.5" filter="url(#glow)" />
        <path d="M 0,880 Q 200,910 400,880 T 800,880 T 1200,880 T 1600,880 T 2000,880"
              stroke="url(#tezhipGrad)" strokeWidth="1" fill="none" opacity="0.3" />

        {/* Sol motif */}
        <circle cx="100" cy="500" r="150" stroke="url(#tezhipGrad)" strokeWidth="1.5" fill="none" opacity="0.3" />
        <circle cx="100" cy="500" r="120" stroke="url(#tezhipGrad)" strokeWidth="1" fill="none" opacity="0.25" />
        <circle cx="100" cy="500" r="90" stroke="url(#tezhipGrad)" strokeWidth="0.5" fill="none" opacity="0.2" />
        <path d="M 100,500 L 100,350" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
        <path d="M 100,500 L 100,650" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
        <path d="M 100,500 L 250,500" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
        <path d="M 100,500 L -50,500" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />

        {/* Sağ motif */}
        <circle cx="1820" cy="500" r="150" stroke="url(#tezhipGrad)" strokeWidth="1.5" fill="none" opacity="0.3" />
        <circle cx="1820" cy="500" r="120" stroke="url(#tezhipGrad)" strokeWidth="1" fill="none" opacity="0.25" />
        <circle cx="1820" cy="500" r="90" stroke="url(#tezhipGrad)" strokeWidth="0.5" fill="none" opacity="0.2" />
        <path d="M 1820,500 L 1820,350" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
        <path d="M 1820,500 L 1820,650" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
        <path d="M 1820,500 L 1970,500" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
        <path d="M 1820,500 L 1670,500" stroke="url(#tezhipGrad)" strokeWidth="0.5" opacity="0.2" />
      </svg>
    </div>
  )
}

export default BackgroundEffects