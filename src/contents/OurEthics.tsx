import OurEthicsData from "../data/OurEthicsData";

export default function OurEthics() {

  const introText = OurEthicsData[0].paragraph || OurEthicsData[0].text;
  const restItems = OurEthicsData.slice(1);

  return (
    <section className="w-full bg-[#F8F5F2] py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
            Our Values
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Code of <span className="text-[#8B1A3A]">Ethics</span>
          </h2>


          {/* Decorative line */}
          <div className="mt-5 flex justify-center gap-1">
            <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
            <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
            <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
          </div>
        </div>

        {/* Intro */}
        {introText && (
          <p className="text-base md:text-lg leading-8 text-gray-700 text-justify md:text-left mb-10">
            {introText}
          </p>
        )}

        {/* Ethics */}
        <div className="space-y-5">
          {restItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E8E3DF] rounded-2xl p-6
                         hover:border-[#8B1A3A] hover:shadow-md transition-all duration-300"
            >
              <h5 className="text-lg font-bold text-[#8B1A3A] mb-2
                             font-['Barlow_Condensed',sans-serif] tracking-tight">
                {item.title}
              </h5>
              <p className="text-base leading-relaxed text-gray-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}