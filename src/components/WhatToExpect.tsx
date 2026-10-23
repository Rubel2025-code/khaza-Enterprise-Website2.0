import { WhatToExpectData } from "../data/WhatToExpectData";

// const ICONS: Record<string, string> = {
//   "Customer Comfort First": "",
//   "Reliable Fleet": "",
//   "Competitive Rates": "",
//   "Friendly Staff": "",
//   "Clean and Well-Maintained Cars": "",
// };

export default function WhatToExpect() {
  return (
    <section className="w-full bg-white py-16 px-6">


      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
          What You Can <span className="text-[#8B1A3A]">Expect</span>
        </h2>
       


        {/* Decorative line */}
        <div className="mt-5 flex justify-center gap-1">
          <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
          <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
          <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {WhatToExpectData.map((item, index) => (
          <div
            key={index}
            className={`group relative bg-[#F8F5F2] border border-[#E8E3DF] rounded-2xl p-7
              hover:bg-[#8B1A3A] hover:border-[#8B1A3A] transition-all duration-300
              hover:shadow-xl cursor-default
              
              ${index === 3 ? "lg:col-start-1 lg:translate-x-1/2" : ""}
              ${index === 4 ? "lg:col-start-3 lg:-translate-x-1/2" : ""}
            `}
          >


            <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-white
                           mb-2 transition-colors duration-300 font-['Barlow_Condensed',sans-serif]
                           tracking-tight text-xl">
              {item.title}
            </h3>
            <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed
                          transition-colors duration-300">
              {item.text}
            </p>


            {/* Bottom bar */}
            <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full
                            bg-[#8B1A3A] group-hover:bg-[#D4A843]
                            scale-x-0 group-hover:scale-x-100
                            transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>
    </section>
  );
}