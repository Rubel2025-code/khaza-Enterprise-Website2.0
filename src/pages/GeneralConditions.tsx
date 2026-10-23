import HeroAbout from "../components/HeroAbout";

const SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    body: "By using the services of Khaza Enterprise, you agree to be bound by these General Conditions. If you do not agree with any part of these terms, please do not use our services. Khaza Enterprise reserves the right to update these conditions at any time without prior notice.",
  },
  {
    title: "2. Rental Agreement",
    body: "All vehicle rentals are subject to the availability of the requested vehicle at the time of booking. A confirmed booking constitutes a binding agreement between the client and Khaza Enterprise. The client must be at least 18 years of age and hold a valid driving licence where applicable.",
  },
  {
    title: "3. Payment Terms",
    body: "Payment for services must be made as agreed at the time of booking. Khaza Enterprise accepts cash and bank transfer. All prices are quoted in Bangladeshi Taka (BDT) and are inclusive of applicable taxes unless otherwise stated.",
  },
  {
    title: "4. Cancellation Policy",
    body: "Cancellations must be made at least 24 hours before the scheduled pick-up time. Late cancellations or no-shows may be subject to a cancellation fee. Khaza Enterprise reserves the right to cancel a booking in cases of force majeure, vehicle unavailability, or breach of these conditions.",
  },
  {
    title: "5. Use of Vehicles",
    body: "Vehicles rented from Khaza Enterprise must only be used for lawful purposes. The client is responsible for ensuring the vehicle is used carefully and returned in the same condition as received. Any damage caused during the rental period will be the financial responsibility of the client.",
  },
  {
    title: "6. Driver Conduct",
    body: "All Khaza Enterprise drivers are professionally trained and licenced. Clients are expected to treat drivers with respect. Any abusive, threatening, or unlawful behaviour towards our staff may result in immediate termination of the service without refund.",
  },
  {
    title: "7. Liability",
    body: "Khaza Enterprise is not liable for any indirect, incidental, or consequential losses arising from the use of our services. Our liability is limited to the value of the service provided. We are not responsible for delays caused by traffic, weather, or other circumstances beyond our control.",
  },
  {
    title: "8. Governing Law",
    body: "These General Conditions are governed by the laws of the People's Republic of Bangladesh. Any disputes arising from these conditions shall be subject to the exclusive jurisdiction of the courts of Dhaka, Bangladesh.",
  },
  {
    title: "9. Contact",
    body: "For any queries regarding these General Conditions, please contact us at khazaenterprise403@gmail.com or call 01685-809403 / 01793-358550.",
  },
];

export default function GeneralConditions() {
  return (
    <div className="bg-[#F8F5F2] min-h-screen">
      <HeroAbout />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            General <span className="text-[#8B1A3A]">Conditions</span>
          </h1>
          
          <div className="mt-5 flex justify-center gap-1">
            <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
            <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
            <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-5">
          {SECTIONS.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-[#E8E3DF] rounded-2xl p-6
                         hover:border-[#8B1A3A] hover:shadow-md transition-all duration-300"
            >
              <h2 className="text-lg font-bold text-[#8B1A3A] mb-2
                             font-['Barlow_Condensed',sans-serif] tracking-tight">
                {section.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}