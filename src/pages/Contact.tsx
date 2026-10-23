import HeroContact from "../components/HeroContact";
import MapAirportTransfer from "../components/MapAirportTransfer";
import MapDelivery from "../components/MapDelivery";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="w-full">
      <HeroContact />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#440E03] mb-10">
          WE ARE 20-30 MINUTES AWAY FROM SHAHEED MINAR,DHAKA UNIVERSITY
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/*Maps */}
          <div className="flex flex-col gap-8 flex-1">
            <MapAirportTransfer />
            <MapDelivery />
          </div>


          {/*Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}