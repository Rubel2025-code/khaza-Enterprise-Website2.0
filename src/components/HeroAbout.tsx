
import hero from "../assets/images/AboutPageHero.png";

export default function Hero() {
  return (
    <section className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] lg:h-[460px] overflow-hidden">


      {/* BACKGROUND IMAGE */}
      <img
        src={hero}
        alt="Dhaka city"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          ABOUT KHAZA ENTERPRISE
        </h1>

    
      </div>

      {/* CURVE SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[140px]"
          preserveAspectRatio="none"
        >

          {/* WHITE CUT SHAPE */}

          <path
            fill="#ffffff"
            d="
        M0,80
        C480,180 960,180 1440,80
        L1440,200
        L0,200
        Z
      " />
          

          {/* RED CURVE LINE */}
          
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
