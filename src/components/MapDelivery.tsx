import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail, IoTime } from "react-icons/io5";

export default function MapDelivery() {
  return (
    <div className="border border-red-400 rounded-xl overflow-hidden">
      <div className="px-6 pt-5 pb-5">
        <h3 className="font-bold text-lg mb-4 text-[#440E03]">DELIVERY AND COLLECTION</h3>
        <div className="flex flex-col md:flex-row gap-6">


          {/* Map*/}
          <div className="w-full md:w-64 h-48 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
            <iframe
              title="Khaza Enterprise Delivery Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3652.4933111121095!2d90.43338227479134!3d23.72978173956855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s209%20North%20Manda%20Mugda%20Dhaka%201214!5e0!3m2!1sen!2sbd!4v1779798636944!5m2!1sen!2sbd"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>


          {/* Info */}
          <div className="flex flex-col gap-3 text-sm text-[#440E03]">
            <p className="flex gap-2">
              <FaLocationDot className="text-[#440E03] mt-0.5 flex-shrink-0" />
              209, North Manda, Mugda, Dhaka-1214
            </p>
            <p className="flex gap-2">
              <FaPhone className="text-[#440E03] mt-0.5 flex-shrink-0" />
              <span>
                01685-809403
                <br />
                <span className="text-[#440E03] text-xs">
                  (national mobile network)
                </span>
              </span>
            </p>
            <p className="flex gap-2">
              <IoMail className="text-[#440E03] mt-0.5 flex-shrink-0" />
              khazaenterprise403@gmail.com
            </p>
            <p className="flex gap-2">
              <IoTime className="text-[#440E03] mt-0.5 flex-shrink-0" />
              <span>
                Mon - Fri: 04:30 - 23:45
                <br />
                Sat - Sun: 04:30 - 23:45
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}