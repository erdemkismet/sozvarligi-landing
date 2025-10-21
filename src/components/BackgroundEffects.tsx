const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0">
      {/* Osmanlı mürekkep ve hat sanatı hissi veren zarif çerçeve */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="inkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78350f" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#92400e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Üst ve alt zarif süsleme çizgileri */}
        <line x1="10%" y1="10%" x2="90%" y2="10%" stroke="url(#inkGradient)" strokeWidth="0.5" />
        <line x1="15%" y1="12%" x2="85%" y2="12%" stroke="url(#inkGradient)" strokeWidth="0.3" />

        <line x1="10%" y1="90%" x2="90%" y2="90%" stroke="url(#inkGradient)" strokeWidth="0.5" />
        <line x1="15%" y1="88%" x2="85%" y2="88%" stroke="url(#inkGradient)" strokeWidth="0.3" />

        {/* Sol ve sağ kenar süslemeleri */}
        <circle cx="5%" cy="50%" r="80" stroke="url(#inkGradient)" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="5%" cy="50%" r="60" stroke="url(#inkGradient)" strokeWidth="0.3" fill="none" opacity="0.2" />

        <circle cx="95%" cy="50%" r="80" stroke="url(#inkGradient)" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="95%" cy="50%" r="60" stroke="url(#inkGradient)" strokeWidth="0.3" fill="none" opacity="0.2" />

        {/* Köşe süslemeleri - klasik kitap köşe desenleri */}
        <g opacity="0.4">
          {/* Sol üst köşe */}
          <path d="M 50,50 L 50,100 L 100,50 Z" stroke="url(#inkGradient)" strokeWidth="0.5" fill="none" />
          <circle cx="75" cy="75" r="10" stroke="url(#inkGradient)" strokeWidth="0.3" fill="none" />

          {/* Sağ üst köşe */}
          <path d="M 1870,50 L 1870,100 L 1820,50 Z" stroke="url(#inkGradient)" strokeWidth="0.5" fill="none" />
          <circle cx="1845" cy="75" r="10" stroke="url(#inkGradient)" strokeWidth="0.3" fill="none" />

          {/* Sol alt köşe */}
          <path d="M 50,1030 L 50,980 L 100,1030 Z" stroke="url(#inkGradient)" strokeWidth="0.5" fill="none" />
          <circle cx="75" cy="1005" r="10" stroke="url(#inkGradient)" strokeWidth="0.3" fill="none" />

          {/* Sağ alt köşe */}
          <path d="M 1870,1030 L 1870,980 L 1820,1030 Z" stroke="url(#inkGradient)" strokeWidth="0.5" fill="none" />
          <circle cx="1845" cy="1005" r="10" stroke="url(#inkGradient)" strokeWidth="0.3" fill="none" />
        </g>
      </svg>

      {/* Eski kitap sayfası kırışıklık efekti */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, transparent 40%, #92400e03 50%, transparent 60%),
            radial-gradient(circle at 80% 70%, transparent 40%, #78350f03 50%, transparent 60%),
            radial-gradient(circle at 60% 20%, transparent 35%, #92400e02 45%, transparent 55%)
          `
        }}
      />

      {/* Minimal ışık vurgusu - okuma lambası hissi */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-50/20 via-transparent to-transparent rounded-full blur-3xl" />
    </div>
  )
}

export default BackgroundEffects