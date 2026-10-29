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
      <section className="relative w-full min-h-[calc(100svh-5rem)] overflow-hidden">


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

        <div className="relative z-10 w-full flex items-center py-8 sm:py-10">
  <div
    className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10
               grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8
               items-center"
  >

<div
  id="booking-form"
  className="w-full max-w-md mx-auto md:mx-0 rounded-2xl
             shadow-2xl p-4 sm:p-6 md:p-8 bg-white"
>
  {/* Decorative brand accent */}
  <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-[#6B1229] via-[#8B1A3A] to-[#C66A83]" />

  <div className="mb-7">
    <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-[#8B1A3A]">
      Khaza Enterprise
    </p>
    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
      Book Your Ride
    </h2>
    <p className="mt-2 text-sm leading-relaxed text-gray-500">
      Your journey starts with a few simple details.
    </p>
  </div>

  <div className="space-y-5">
    {/* Pick-up Location */}
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-gray-700">
        Pick-up Location
      </label>
      <div className="group relative">
        <CiLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 transition-colors group-focus-within:text-[#8B1A3A]" />
        <input
          type="text"
          placeholder="Enter pick-up location"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-4 pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#8B1A3A] focus:bg-white focus:ring-4 focus:ring-[#8B1A3A]/10"
        />
      </div>
    </div>

    {/* Drop-off Location */}
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-gray-700">
        Drop-off Location
      </label>
      <div className="group relative">
        <CiLocationOn className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 transition-colors group-focus-within:text-[#8B1A3A]" />
        <input
          type="text"
          placeholder="Enter drop-off location"
          className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 py-4 pl-12 pr-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 focus:border-[#8B1A3A] focus:bg-white focus:ring-4 focus:ring-[#8B1A3A]/10"
        />
      </div>
    </div>

    {/* Start Date */}
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-gray-700">
        Start Date
      </label>
      <input
        type="date"
        className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-4 text-sm text-gray-800 outline-none transition-all duration-300 hover:border-gray-300 focus:border-[#8B1A3A] focus:bg-white focus:ring-4 focus:ring-[#8B1A3A]/10"
      />
    </div>

    {/* Pick-up Time */}
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-gray-700">
        Pick-up Time
      </label>
      <input
        type="time"
        className="w-full rounded-2xl border border-gray-200 bg-gray-50/70 px-4 py-4 text-sm text-gray-800 outline-none transition-all duration-300 hover:border-gray-300 focus:border-[#8B1A3A] focus:bg-white focus:ring-4 focus:ring-[#8B1A3A]/10"
      />
    </div>

    {/* Search Button */}
    <button
      type="button"
      className="group relative mt-3 flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-[#8B1A3A] to-[#6B1229] px-5 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#8B1A3A]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#8B1A3A]/30 active:translate-y-0"
    >
      <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]" />
      <span className="relative">Search Cars</span>
      <span className="relative text-lg transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </button>

    <p className="pt-1 text-center text-xs text-gray-400">
      Comfortable journeys. Reliable service.
    </p>
  </div>
</div>


            {/* RIGHT - TEXT */}
            <div className="text-black p-3 sm:p-4 rounded-xl
                border border-white/10 w-full max-w-xl mx-auto">
              <p className="text-red-400 font-semibold tracking-widest text-sm md:text-base">
                PREMIUM CAR RENTAL
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                RENT A CAR <br />
                <span className="text-red-500">IN DHAKA</span>
              </h1>
              <p className="text-black-800 text-lg mt-3 max-w-md leading-relaxed">
                Reliable and comfortable transport service. Book your car now and travel with ease.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs text-red-500 font-medium">
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