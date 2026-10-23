import { useEffect, useRef, useState } from "react";

const images = [
  "https://static.wixstatic.com/media/4a2645_33d952393c974e0b8ebea4dc3fa9de68~mv2.jpeg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/4a2645_33d952393c974e0b8ebea4dc3fa9de68~mv2.jpeg",

  "https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6491872d1f962c001de086fa.jpg",

  "https://wander-lush.org/wp-content/uploads/2022/03/Beautiful-places-in-Bangladesh-WMC-hero.jpg",
];

export default function HeroQuestions() {
  const [currentImage, setCurrentImage] = useState(0);
  const [fade, setFade] = useState(true);
  const startX = useRef(0);



  useEffect(() => {
    const interval = setInterval(() => changeImage(1), 5000);
    return () => clearInterval(interval);
  }, []);

  const changeImage = (direction: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + direction + images.length) % images.length);
      setFade(true);
    }, 200);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) changeImage(1);
    else if (diff < -50) changeImage(-1);
  };

  return (
    <section
      className="relative w-full h-[320px] sm:h-[360px] md:h-[420px] overflow-hidden border-b-[0px] border-[#7B1535]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >


    
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[600ms] ease-in-out ${fade ? "opacity-100" : "opacity-0"
          }`}
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      />


      {/* Dark overlay */}

      <div className="absolute inset-0 bg-black/50 z-[1]" />


      {/* Title */}
      <div className="relative z-[2] flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-[60px] font-black tracking-[0.2em] uppercase text-white leading-tight">
          Questions &amp; Conditions
        </h1>
      </div>


      {/* Curve SVG  */}
      <div className="absolute bottom-0 left-0 w-full z-[3]">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[100px] sm:h-[120px] md:h-[140px]"
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