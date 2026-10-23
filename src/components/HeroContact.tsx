export default function HeroContact() {
  return (
    <section className="relative w-full h-[300px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden">

      {/* Background Image */}
      <img
        src="https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
        alt="Contact Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Title */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-widest">
          CONTACTS
        </h1>
      </div>

      {/* Curve SVG */}
      <div className="absolute bottom-0 left-0 w-full z-[3]">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[90px] sm:h-[110px] md:h-[130px]"
          preserveAspectRatio="none"
        >

          {/* White fill shape */}
          <path
            fill="#ffffff"
            d="
              M0,80
              C480,180 960,180 1440,80
              L1440,200
              L0,200
              Z
            "
          />
          
          {/* Red stroke line */}
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