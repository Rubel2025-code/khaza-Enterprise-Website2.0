import React, { useState, useMemo } from "react";
import { CARS } from "../data/carsData";
import CarCard from "../components/CarCard";
import CarDetailModal from "../components/CarDetailModal";
import Comments from "../components/Comments";
import HeroRent from "../components/HeroRent";
import type { Car, CategoryType } from "../types/car.types";

const ALL_CATEGORIES: ("All" | CategoryType)[] = [
  "All", "Sedan", "SUV", "Van", "Pickup", "MPV", "Luxury", "Minibus", "Bus",
];

const RentVehicle: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"All" | CategoryType>("All");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const highlights = useMemo(() => CARS.filter((c) => c.highlight), []);

  const filteredCars = useMemo(() => {
    if (activeCategory === "All") return CARS;
    return CARS.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#F8F5F2] min-h-screen font-['Barlow',sans-serif]">

      <HeroRent />

      {/* Highlights */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-2">
        <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
          Top Picks
        </p>
        <h2 className="text-[#1A1A1A] font-bold text-4xl md:text-5xl tracking-tight font-['Barlow_Condensed',sans-serif]">
          Highlights
        </h2>
       
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {highlights.map((car) => (
          <CarCard key={car.id} car={car} onClick={setSelectedCar} />
        ))}
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-[#E8E3DF] sticky top-0 z-10 flex px-6 overflow-x-auto">
        {ALL_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              shrink-0 px-5 py-[18px] text-sm font-bold uppercase tracking-wide
              font-['Barlow_Condensed',sans-serif] border-b-[3px] transition-all duration-200
              ${activeCategory === cat
                ? "border-[#8B1A3A] text-[#8B1A3A]"
                : "border-transparent text-gray-400 hover:text-gray-600"}
            `}
          >
            {cat}
          </button>
        ))}
        <div className="ml-auto flex items-center pr-1 pl-4">
          <span className="text-xs text-gray-400 italic whitespace-nowrap">
            {filteredCars.length} vehicle{filteredCars.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* All Vehicles */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-2">
        <h2 className="text-[#1A1A1A] font-bold text-3xl md:text-4xl tracking-tight font-['Barlow_Condensed',sans-serif]">
          {activeCategory === "All" ? "All Vehicles" : `${activeCategory} Vehicles`}
        </h2>
      </div>

      {filteredCars.length > 0 ? (
        <div className="max-w-7xl mx-auto px-6 pb-16 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} onClick={setSelectedCar} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 text-base">
          No vehicles found in this category.
        </div>
      )}

      <Comments />
      <CarDetailModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </div>
  );
};

export default RentVehicle;