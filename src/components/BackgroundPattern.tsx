const BackgroundPattern = () => {
  return (
    <>
      {/* Ana ağaç silüeti - kökler ve dallar */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#92400e" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#78350f" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#451a03" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Kökler - derinliğe uzanan */}
        <g transform="translate(960, 540)">
          {/* Ana kök */}
          <path d="M 0,0 Q -20,100 -40,200 Q -50,250 -80,320" stroke="url(#treeGradient)" strokeWidth="3" fill="none" />
          <path d="M 0,0 Q 20,100 40,200 Q 50,250 80,320" stroke="url(#treeGradient)" strokeWidth="3" fill="none" />
          <path d="M 0,0 Q 0,120 -30,240 Q -40,280 -60,340" stroke="url(#treeGradient)" strokeWidth="2" fill="none" />
          <path d="M 0,0 Q 0,120 30,240 Q 40,280 60,340" stroke="url(#treeGradient)" strokeWidth="2" fill="none" />

          {/* Yan kökler */}
          <path d="M -40,200 Q -60,220 -90,250" stroke="url(#treeGradient)" strokeWidth="1.5" fill="none" />
          <path d="M 40,200 Q 60,220 90,250" stroke="url(#treeGradient)" strokeWidth="1.5" fill="none" />
          <path d="M -30,240 Q -50,260 -70,290" stroke="url(#treeGradient)" strokeWidth="1" fill="none" />
          <path d="M 30,240 Q 50,260 70,290" stroke="url(#treeGradient)" strokeWidth="1" fill="none" />
        </g>

        {/* Dallar - göğe uzanan */}
        <g transform="translate(960, 540)">
          {/* Ana gövde */}
          <path d="M 0,0 L 0,-200" stroke="url(#treeGradient)" strokeWidth="4" fill="none" />

          {/* Ana dallar */}
          <path d="M 0,-200 Q -30,-250 -80,-300 Q -100,-320 -140,-340" stroke="url(#treeGradient)" strokeWidth="3" fill="none" />
          <path d="M 0,-200 Q 30,-250 80,-300 Q 100,-320 140,-340" stroke="url(#treeGradient)" strokeWidth="3" fill="none" />
          <path d="M 0,-150 Q -40,-200 -90,-240" stroke="url(#treeGradient)" strokeWidth="2.5" fill="none" />
          <path d="M 0,-150 Q 40,-200 90,-240" stroke="url(#treeGradient)" strokeWidth="2.5" fill="none" />

          {/* İnce dallar */}
          <path d="M -80,-300 Q -90,-320 -100,-340" stroke="url(#treeGradient)" strokeWidth="1.5" fill="none" />
          <path d="M -80,-300 Q -85,-315 -95,-325" stroke="url(#treeGradient)" strokeWidth="1" fill="none" />
          <path d="M 80,-300 Q 90,-320 100,-340" stroke="url(#treeGradient)" strokeWidth="1.5" fill="none" />
          <path d="M 80,-300 Q 85,-315 95,-325" stroke="url(#treeGradient)" strokeWidth="1" fill="none" />

          {/* Yaprak dalları */}
          <path d="M -140,-340 Q -145,-350 -150,-355" stroke="url(#treeGradient)" strokeWidth="0.8" fill="none" />
          <path d="M -140,-340 Q -142,-348 -145,-352" stroke="url(#treeGradient)" strokeWidth="0.8" fill="none" />
          <path d="M 140,-340 Q 145,-350 150,-355" stroke="url(#treeGradient)" strokeWidth="0.8" fill="none" />
          <path d="M 140,-340 Q 142,-348 145,-352" stroke="url(#treeGradient)" strokeWidth="0.8" fill="none" />
        </g>
      </svg>

      {/* Kitap sayfası dokusu */}
      <div className="absolute inset-0 opacity-[0.03]"
           style={{
             backgroundImage: `repeating-linear-gradient(
               0deg,
               transparent,
               transparent 2px,
               #92400e08 2px,
               #92400e08 3px
             )`
           }}
      />

      {/* Zarif vurgu ışıkları */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-200/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-amber-100/10 to-transparent rounded-full blur-3xl" />
      </div>
    </>
  )
}

export default BackgroundPattern