
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div>
      <section
        className="relative min-h-[calc(100svh-64px)] w-full
                   overflow-hidden lg:h-[calc(100svh-76px)]
                   lg:min-h-[540px]"
      >
        {/* Background carousel */}
        <div className="absolute inset-0">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center
                transition-opacity duration-1000
                ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl
                        items-center px-4 py-6 sm:px-6
                        lg:h-full lg:px-8 lg:py-3">

          <div className="grid w-full grid-cols-1 items-center gap-7
                          md:grid-cols-2 md:gap-6
                          lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">

            {/* Booking form */}
            <div
              id="booking-form"
              className="relative mx-auto w-full max-w-[540px]
                         rounded-2xl bg-white p-4 shadow-2xl
                         sm:p-5 lg:mx-0 lg:p-5 xl:p-6"
            >
              <div className="absolute left-0 top-0 h-1.5 w-full
                              rounded-t-2xl bg-gradient-to-r
                              from-[#6B1229] via-[#8B1A3A] to-[#C66A83]" />

              <div className="mb-4">
                <p className="mb-1 text-[11px] font-bold uppercase
                              tracking-[0.25em] text-[#8B1A3A]">
                  Khaza Enterprise
                </p>

                <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Book Your Ride
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Your journey starts with a few simple details.
                </p>
              </div>

              <div className="space-y-3">
                {/* Pick-up location */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold
                                    uppercase tracking-wide text-gray-700">
                    Pick-up Location
                  </label>

                  <div className="group relative">
                    <CiLocationOn className="absolute left-4 top-1/2
                      -translate-y-1/2 text-xl text-gray-400
                      group-focus-within:text-[#8B1A3A]" />

                    <input
                      type="text"
                      placeholder="Enter pick-up location"
                      className="w-full rounded-xl border border-gray-200
                        bg-gray-50/70 py-3 pl-12 pr-4 text-sm
                        text-gray-800 outline-none transition-all
                        placeholder:text-gray-400
                        focus:border-[#8B1A3A] focus:bg-white
                        focus:ring-4 focus:ring-[#8B1A3A]/10"
                    />
                  </div>
                </div>

                {/* Drop-off location */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold
                                    uppercase tracking-wide text-gray-700">
                    Drop-off Location
                  </label>

                  <div className="group relative">
                    <CiLocationOn className="absolute left-4 top-1/2
                      -translate-y-1/2 text-xl text-gray-400
                      group-focus-within:text-[#8B1A3A]" />

                    <input
                      type="text"
                      placeholder="Enter drop-off location"
                      className="w-full rounded-xl border border-gray-200
                        bg-gray-50/70 py-3 pl-12 pr-4 text-sm
                        text-gray-800 outline-none transition-all
                        placeholder:text-gray-400
                        focus:border-[#8B1A3A] focus:bg-white
                        focus:ring-4 focus:ring-[#8B1A3A]/10"
                    />
                  </div>
                </div>

                {/* Date and time side by side */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="min-w-0">
                    <label className="mb-1.5 block text-xs font-bold
                                      uppercase tracking-wide text-gray-700">
                      Start Date
                    </label>

                    <input
                      type="date"
                      className="w-full min-w-0 rounded-xl border
                        border-gray-200 bg-gray-50/70 px-2 py-3
                        text-xs text-gray-800 outline-none
                        focus:border-[#8B1A3A] focus:bg-white
                        focus:ring-4 focus:ring-[#8B1A3A]/10
                        sm:px-3 sm:text-sm"
                    />
                  </div>

                  <div className="min-w-0">
                    <label className="mb-1.5 block text-xs font-bold
                                      uppercase tracking-wide text-gray-700">
                      Pick-up Time
                    </label>

                    <input
                      type="time"
                      className="w-full min-w-0 rounded-xl border
                        border-gray-200 bg-gray-50/70 px-2 py-3
                        text-xs text-gray-800 outline-none
                        focus:border-[#8B1A3A] focus:bg-white
                        focus:ring-4 focus:ring-[#8B1A3A]/10
                        sm:px-3 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Search button */}
                <button
                  type="button"
                  className="group relative mt-2 flex w-full
                    items-center justify-center gap-3 overflow-hidden
                    rounded-xl bg-gradient-to-r from-[#8B1A3A]
                    to-[#6B1229] px-5 py-3 text-sm font-extrabold
                    uppercase tracking-widest text-white shadow-lg
                    transition-all duration-300 hover:-translate-y-0.5
                    hover:shadow-xl active:translate-y-0"
                >
                  <span className="absolute inset-0
                    -translate-x-full bg-gradient-to-r
                    from-transparent via-white/15 to-transparent
                    transition-transform duration-700
                    group-hover:translate-x-full" />

                  <span className="relative">Search Cars</span>
                  <span className="relative text-lg
                    transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="pt-0.5 text-center text-xs text-gray-400">
                  Comfortable journeys. Reliable service.
                </p>
              </div>
            </div>

            {/* Promotional content */}
            <div className="mx-auto w-full max-w-xl rounded-2xl
                            border border-white/20 bg-white/10
                            p-5 sm:p-7 lg:p-8">
              <p className="mb-2 text-sm font-semibold
                            tracking-[0.18em] text-red-500">
                PREMIUM CAR RENTAL
              </p>

              <h1 className="text-4xl font-extrabold leading-tight
                             text-black sm:text-5xl xl:text-6xl">
                RENT A CAR
                <br />
                <span className="text-red-500">IN DHAKA</span>
              </h1>

              <p className="mt-4 max-w-md text-base leading-relaxed
                            text-black sm:text-lg">
                Reliable and comfortable transport service.
                Book your car now and travel with ease.
              </p>

              <div className="mt-4 flex flex-wrap gap-2
                              text-xs font-medium text-red-600 sm:text-sm">
                <span className="rounded-md bg-white/50 px-2 py-1">
                  ✔ Trusted Service
                </span>
                <span className="rounded-md bg-white/50 px-2 py-1">
                  ✔ 24/7 Support
                </span>
                <span className="rounded-md bg-white/50 px-2 py-1">
                  ✔ Wide Range
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-3 left-1/2 z-20 flex
                        -translate-x-1/2 gap-2 lg:bottom-4">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300
                ${index === currentImageIndex
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <WhatToExpect />
      <PartnerCompanies />
    </div>
  );
}
