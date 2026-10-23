import { useState } from "react";
import { PartnerCompaniesData, PARTNER_TRACK_RECORD, type Partner } from "../data/PartnerCompaniesData";




//  Modal 

function PartnerModal({ partner, onClose }: { partner: Partner; onClose: () => void }) {
  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >


      {/* Panel */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl max-h-[85vh]
                   overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >


      
        <div className="bg-[#8B1A3A] rounded-t-3xl px-8 pt-8 pb-6 text-white">
         
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center
                       rounded-full bg-white/20 hover:bg-white/30 transition text-white
                       text-lg font-bold"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center
                          shadow-md mb-4 overflow-hidden">
            {partner.logo ? (
              <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
            ) : (
              <span className="text-[#8B1A3A] font-black text-3xl">
                {partner.name.charAt(0)}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight leading-snug font-['Barlow_Condensed',sans-serif]">
            {partner.name}
          </h3>
          <p className="text-white/70 text-xs uppercase tracking-widest mt-1">
            {partner.tagline}
          </p>


          {/* Years badge */}
          <div className="inline-flex items-center gap-2 mt-3 bg-[#D4A843] rounded-full
                          px-4 py-1 text-white text-xs font-bold uppercase tracking-wide">
            {partner.years}+ year{partner.years !== 1 ? "s" : ""} of partnership
          </div>
        </div>


        {/* Body */}
        <div className="px-8 py-6 space-y-5">
          <div className="bg-[#F8F5F2] rounded-2xl p-5 border border-[#E8E3DF]">
            <p className="text-[#8B1A3A] text-xs font-bold uppercase tracking-widest mb-1">
              {PARTNER_TRACK_RECORD.heading}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {PARTNER_TRACK_RECORD.body}
            </p>
          </div>


          {/*description */}
          <p className="text-gray-700 text-sm leading-relaxed">
            {partner.description}
          </p>


          {/*list */}
          {partner.projects && partner.projects.length > 0 && (
            <div>
              <p className="text-[#1A1A1A] font-bold text-sm mb-2 uppercase tracking-wide">
                Projects Supported
              </p>
              <ul className="space-y-2">
                {partner.projects.map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-[3px] w-4 h-4 rounded-full bg-[#8B1A3A] flex-shrink-0
                                     flex items-center justify-center text-white text-[8px] font-black">
                      ✓
                    </span>
                    {p.label}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {partner.fleet && (
            <div className="bg-[#8B1A3A]/5 border border-[#8B1A3A]/20 rounded-xl p-4">
              <p className="text-[#8B1A3A] text-xs font-bold uppercase tracking-widest mb-1">
                Fleet Provided
              </p>
              <p className="text-gray-700 text-sm">{partner.fleet}</p>
            </div>
          )}

        
          <button
            onClick={onClose}
            className="w-full mt-2 py-3 rounded-xl bg-[#8B1A3A] text-white
                       font-bold tracking-wide hover:bg-[#6B1229] transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}


export default function PartnerCompanies() {
  const [selected, setSelected] = useState<Partner | null>(null);

  return (
    <>
      <section className="w-full bg-[#F8F5F2] py-16 px-6 border-t border-[#E8E3DF]">


        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
            Trusted By
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Our <span className="text-[#8B1A3A]">Partners</span>
          </h2>
          
          <div className="mt-5 flex justify-center gap-1">
            <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
            <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
            <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
          </div>
        </div>


        {/* Partner Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {PartnerCompaniesData.map((partner) => (
            <button
              key={partner.id}
              onClick={() => setSelected(partner)}
              className="group flex flex-col items-center justify-center gap-3
                         bg-white border border-[#E8E3DF] rounded-2xl p-5
                         hover:border-[#8B1A3A] hover:shadow-lg
                         transition-all duration-300 cursor-pointer text-left w-full"
            >

              {/* Logo*/}

              <div className="w-16 h-16 flex items-center justify-center">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0
                               transition-all duration-300"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#F8F5F2] border-2 border-dashed
                                  border-[#D4A843] flex items-center justify-center
                                  text-[#8B1A3A] font-black text-xl
                                  group-hover:bg-[#8B1A3A] group-hover:border-[#8B1A3A]
                                  group-hover:text-white transition-all duration-300">
                    {partner.name.charAt(0)}
                  </div>
                )}
              </div>


              {/* Name */}

              <p className="text-xs font-semibold text-gray-500 group-hover:text-[#8B1A3A]
                            text-center tracking-wide transition-colors duration-300 uppercase
                            leading-snug">
                {partner.name}
              </p>


              {/* Years */}
              <span className="text-[10px] bg-[#F8F5F2] group-hover:bg-[#8B1A3A]/10
                               text-[#8B1A3A] px-2 py-0.5 rounded-full font-semibold
                               border border-[#E8E3DF] group-hover:border-[#8B1A3A]/30
                               transition-all duration-300">
                {partner.years}+ yrs
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <PartnerModal partner={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}