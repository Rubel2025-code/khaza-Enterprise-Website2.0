import ke from "../assets/logo/ke_logo.png";
import khazaLogo from "../assets/logo/khaza_enterprise-removebg-preview.png";
import { SiFacebook } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function FooterTop() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-8">

      {/*Social */}
      <div className="flex flex-col gap-6">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img src={ke} className="h-12" alt="KE Logo" />
          <div className="w-0.5 h-12 bg-gray-400" />
          <img src={khazaLogo} className="h-12" alt="Khaza Logo" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-3">

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-[#E63946] text-white rounded hover:bg-[#8B1A3A] transition"
          >
            <SiFacebook size={18} />
          </a>

          <a
            href="https://wa.me/8801685809403"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-[#E63946] text-white rounded hover:bg-[#8B1A3A] transition"
          >
            <IoLogoWhatsapp size={18} />
          </a>

        </div>
      </div>

      {/* RIGHT SECTION - Contact Info */}
      <div className="text-sm space-y-3 text-gray-800">

        {/* Address */}
        <p className="flex items-start gap-2">
          <FaLocationDot className="mt-1 text-[#8B1A3A] flex-shrink-0" size={16} />
          <span>209, North Manda, Mugda, Dhaka-1214</span>
        </p>

        {/* Phone */}
        <p className="flex items-center gap-2">
          <FaPhone className="text-[#8B1A3A] flex-shrink-0" size={16} />
          <span>01685-809403, 01793-358550</span>
        </p>

        {/* Email */}
        <p className="flex items-center gap-2">
          <IoMail className="text-[#8B1A3A] flex-shrink-0" size={16} />
          <a
            href="mailto:khazaenterprise403@gmail.com"
            className="hover:text-[#8B1A3A] transition"
          >
            khazaenterprise403@gmail.com
          </a>
        </p>

      </div>
    </div>
  );
}