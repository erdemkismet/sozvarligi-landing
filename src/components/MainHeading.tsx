interface MainHeadingProps {
  className?: string
}

const MainHeading = ({ className = '' }: MainHeadingProps) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h1 className="mb-8">
        <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-amber-900 leading-tight mb-4">
          Sözcüklerin Kökünü
          <br />
          Derinleştiren Dil,
        </span>
        <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-light text-amber-900 leading-tight">
          Düşüncenin Dallarını
          <br />
          Göğe Uzatır.
        </span>
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl text-amber-800/70 font-light max-w-3xl mx-auto">
        Türkçe'nin doğal dil işlemesi ve büyük dil modelleri üzerine...
      </p>
    </div>
  )
}

export default MainHeading