export default function HeroRent() {
  return (
    <section className="relative w-full h-[360px] sm:h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://wallpaperaccess.com/full/2102370.jpg"
        alt="Rent a Vehicle"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
       
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
          RENT A VEHICLE
        </h1>
        
      </div>

      {/* Curve SVG */}
      
      <div className="absolute bottom-0 left-0 w-full z-[3]">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[100px] sm:h-[120px] md:h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#F8F5F2"
            d="M0,80 C480,180 960,180 1440,80 L1440,200 L0,200 Z"
          />
          <path
            d="M0,80 C480,180 960,180 1440,80"
            fill="none"
            stroke="#8B0D2F"
            strokeWidth="6"
          />
        </svg>
      </div>
    </section>
  );
}