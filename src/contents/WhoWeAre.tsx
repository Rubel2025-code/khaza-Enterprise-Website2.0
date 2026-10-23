import WhoWeAreData from "../data/WhoWeAre";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header*/}
        <div className="text-center mb-10">
          <p className="text-[#8B1A3A] font-semibold tracking-widest text-xs uppercase mb-2">
            About Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            {WhoWeAreData.title.includes("Who") ? (
              <>Who We <span className="text-[#8B1A3A]">Are</span></>
            ) : (
              <span>{WhoWeAreData.title}</span>
            )}
          </h2>


          {/* Decorative line */}
          <div className="mt-5 flex justify-center gap-1">
            <div className="w-12 h-1 rounded-full bg-[#8B1A3A]" />
            <div className="w-3 h-1 rounded-full bg-[#D4A843]" />
            <div className="w-3 h-1 rounded-full bg-[#8B1A3A] opacity-30" />
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-5">
          {WhoWeAreData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg leading-8 text-gray-700 text-justify md:text-left"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}