interface MainHeadingProps {
  className?: string
}

const MainHeading = ({ className = '' }: MainHeadingProps) => {
  return (
    <h1 className={`text-center mb-12 ${className}`}>
      <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white leading-tight mb-4">
        Sözcüklerin Kökünü
        <br />
        Derinleştiren Dil,
      </span>
      <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-white leading-tight">
        Düşüncenin Dallarını
        <br />
        Göğe Uzatır
      </span>
    </h1>
  )
}

export default MainHeading