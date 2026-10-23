import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import WhatToExpect from "../components/WhatToExpect";
import PartnerCompanies from "../components/PartnerCompanies";

import hero1 from "../assets/images/hero.png";
import hero2 from "../assets/images/hero_2.png";
import hero3 from "../assets/images/hero_3.png";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [hero1, hero2, hero3];

  // 5 seconds image change 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div>
      <section className="relative w-full min-h-screen overflow-hidden">


        {/* Background image  */}
        <div className="absolute inset-0">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
                ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Carousel Indicators */}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${index === currentImageIndex ? "bg-white w-8" : "bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div
            className="w-full max-w-7xl pl-10 md:pl-10 lg:pl-24
                       pr-60 grid grid-cols-1 md:grid-cols-2 gap-5 items-start pt-5"
          >
            <div
              id="booking-form"
              className="rounded-2xl shadow-2xl p-6 md:p-8 bg-white w-full max-w-sm md:max-w-md"
            >
              <h2 className="text-[#8B1A3A] font-bold text-lg mb-5 tracking-wide uppercase">
                Book Your Ride
              </h2>

              <div className="space-y-5">


                {/* Pick-up Location */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                    Pick-up Location
                  </label>
                  <div className="relative">
                    <CiLocationOn className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 text-lg" />
                    <input
                      className="w-full border border-gray-200 rounded-xl py-3 pl-9 pr-3
                                 text-sm text-gray-700 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/30
                                 focus:border-[#8B1A3A] transition"
                      type="text"
                      placeholder="Enter pick-up location"
                    />
                  </div>
                </div>

                {/* Drop-off Location */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                    Drop-off Location
                  </label>
                  <div className="relative">
                    <CiLocationOn className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 text-lg" />
                    <input
                      className="w-full border border-gray-200 rounded-xl py-3 pl-9 pr-3
                                 text-sm text-gray-700 placeholder-gray-400
                                 focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/30
                                 focus:border-[#8B1A3A] transition"
                      type="text"
                      placeholder="Enter drop-off location"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-200 rounded-xl py-3 px-3
                                 text-sm text-gray-700
                                 focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/30
                                 focus:border-[#8B1A3A] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full border border-gray-200 rounded-xl py-3 px-3
                                 text-sm text-gray-700
                                 focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/30
                                 focus:border-[#8B1A3A] transition"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                      Pick-up Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-200 rounded-xl py-3 px-3
                                 text-sm text-gray-700
                                 focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/30
                                 focus:border-[#8B1A3A] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 uppercase tracking-widest mb-1.5">
                      Drop-off Time
                    </label>
                    <input
                      type="time"
                      className="w-full border border-gray-200 rounded-xl py-3 px-3
                                 text-sm text-gray-700
                                 focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/30
                                 focus:border-[#8B1A3A] transition"
                    />
                  </div>
                </div>

                <button className="w-full bg-[#8B1A3A] hover:bg-[#6B1229] text-white
                                   py-4 rounded-xl font-bold tracking-widest text-sm
                                   transition-all duration-200 shadow-md hover:shadow-lg mt-1">
                  SEARCH CAR
                </button>
              </div>
            </div>

            {/* RIGHT - TEXT */}
            <div className="text-black p-4 rounded-xl border border-white/10 w-fit">
              <p className="text-red-400 font-semibold tracking-widest text-sm md:text-base">
                PREMIUM CAR RENTAL
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                RENT A CAR <br />
                <span className="text-red-500">IN DHAKA</span>
              </h1>
              <p className="text-black-800 text-lg mt-3 max-w-md leading-relaxed">
                Reliable and comfortable transport service. Book your car now and travel with ease.
              </p>
              <div className="flex gap-4 text-xs text-red-500 font-medium">
                <span className="bg-white/10 px-2 py-1 rounded-md">✔ Trusted Service</span>
                <span className="bg-white/10 px-2 py-1 rounded-md">✔ 24/7 Support</span>
                <span className="bg-white/10 px-2 py-1 rounded-md">✔ Wide Range</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatToExpect />
      <PartnerCompanies />
    </div>
  );
}