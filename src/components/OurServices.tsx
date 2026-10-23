import { OurServicesData } from "../data/OurServicesData";

export default function OurServices() {
  return (
    <section className="w-full bg-white py-16 px-6">


      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
          What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
          Our <span className="text-[#8B1A3A]">Services</span>
        </h2>
        


        {/* Decorative line */}

        <div className="mt-5 flex justify-center gap-1">
          <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
          <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
          <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
        </div>
      </div>

      {/* Service Cards */}

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {OurServicesData.map((service) => (
          <div
            key={service.id}
            className={`group relative bg-[#F8F5F2] border border-[#E8E3DF] rounded-2xl p-7
              hover:bg-[#8B1A3A] hover:border-[#8B1A3A]
              transition-all duration-300 hover:shadow-xl cursor-default overflow-hidden

              ${service.id === 5
                ? "lg:col-start-2"
                : ""
              }
            `}
          >



            <h3 className="text-[17px] font-bold text-[#1A1A1A] group-hover:text-white
                           mb-2 transition-colors duration-300
                           font-['Barlow_Condensed',sans-serif] tracking-tight leading-snug">
              {service.title}
            </h3>

            <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed
                          transition-colors duration-300">
              {service.text}
            </p>

            {/* Bottom bar */}

            <div className="absolute bottom-0 left-6 right-6 h-[3px] rounded-full
                            bg-[#8B1A3A] group-hover:bg-[#D4A843]
                            scale-x-0 group-hover:scale-x-100
                            transition-transform duration-300 origin-left" />
          </div>
        ))}

        <div className="group relative bg-[#8B1A3A] border border-[#8B1A3A] rounded-2xl p-7
                        flex flex-col justify-center items-center text-center
                        hover:bg-[#6B1229] transition-all duration-300 hover:shadow-xl">

          <h3 className="text-white font-bold text-xl mb-2
                         font-['Barlow_Condensed',sans-serif] tracking-tight">
            Need a Custom Package?
          </h3>
          <p className="text-white/75 text-sm leading-relaxed">
            Contact us and we'll tailor a solution for your specific requirements.
          </p>
          <div className="mt-4 px-5 py-2 bg-[#D4A843] text-white text-xs font-bold
                          uppercase tracking-widest rounded-full">
            Get in Touch
          </div>
        </div>
      </div>
    </section>
  );
}