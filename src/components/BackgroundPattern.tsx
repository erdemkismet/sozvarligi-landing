const BackgroundPattern = () => {
  return (
    <>
      {/* Sade ebru hissi */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-stone-200/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Zarif Osmanlı tezhip motifi */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <OttomanPattern />
          </defs>
          <rect width="100%" height="100%" fill="url(#tezhip)" />
        </svg>
      </div>
    </>
  )
}

const OttomanPattern = () => {
  const petalCount = 8
  const leafRotations = [0, 90, 180, 270]

  return (
    <pattern id="tezhip" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
      <g transform="translate(200, 200)">
        {/* Merkezi şemse (rozet) */}
        <circle cx="0" cy="0" r="40" fill="none" stroke="#8B4513" strokeWidth="0.3" opacity="0.4" />
        <circle cx="0" cy="0" r="25" fill="none" stroke="#8B4513" strokeWidth="0.25" opacity="0.5" />

        {/* 8 yapraklı çiçek motifi */}
        {Array.from({ length: petalCount }).map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180
          const x = Math.cos(angle) * 30
          const y = Math.sin(angle) * 30

          return (
            <g key={i}>
              <path
                d={`M 0,0 Q ${x * 0.7},${y * 0.7} ${x},${y}`}
                fill="none"
                stroke="#8B4513"
                strokeWidth="0.25"
                opacity="0.3"
              />
              <circle cx={x} cy={y} r="3" fill="none" stroke="#8B4513" strokeWidth="0.2" opacity="0.4" />
            </g>
          )
        })}

        {/* Rumi (hatayi) yaprak motifleri */}
        {leafRotations.map((rotation) => (
          <g key={rotation} transform={`rotate(${rotation})`}>
            <path
              d="M 50,0 Q 55,-5 60,-3 Q 65,0 63,5 Q 60,8 55,7 Q 50,6 50,0"
              fill="none"
              stroke="#8B4513"
              strokeWidth="0.2"
              opacity="0.35"
            />
          </g>
        ))}
      </g>
    </pattern>
  )
}

export default BackgroundPattern
