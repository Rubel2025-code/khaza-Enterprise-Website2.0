import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function MapAirportTransfer() {
  return (
    <div className="border border-red-400 rounded-xl overflow-hidden">
      <div className="px-6 pt-5 pb-5">
        <h3 className="font-bold text-lg mb-4 text-[#440E03]">
          DISTANCE FROM SHAHEED MINAR, DHAKA UNIVERSITY
        </h3>
        <div className="flex flex-col md:flex-row gap-6">

          {/* Map */}
          
          <div className="w-full md:w-64 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <iframe
              title="Khaza Enterprise Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3652.4933111121095!2d90.43338227479134!3d23.72978173956855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s209%20North%20Manda%20Mugda%20Dhaka%201214!5e0!3m2!1sen!2sbd!4v1779798636944!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{border: "0"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3 text-sm text-[#440E03]">
            <p className="flex gap-2">
              <FaLocationDot className="mt-0.5 flex-shrink-0 text-[#570303]" />
              209, North Manda, Mugda, Dhaka-1214
            </p>

            <p className="flex gap-2">
              <FaPhone className="mt-0.5 flex-shrink-0 text-[#440E03]" />
              <span>
                01685-809403, 01793-358550
                <br />
                <span className="text-[#440E03] text-xs">
                  (national mobile network)
                </span>
              </span>
            </p>

            <p className="flex gap-2">
              <IoMail className="mt-0.5 flex-shrink-0 text-[#440E03]" />
              khazaenterprise403@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}