import { Link } from "react-router-dom";
import kryzotech from "../assets/logo/kryzotech-removebg-preview.png";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-400 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm bg-[#FCCDD3]">
      {/* Copyright */}
      <p className="text-gray-800 font-medium">© 2026</p>

      {/* Links with Routing */}
      <div className="flex gap-8 text-sm">
        <Link
          to="/general-conditions"
          className="text-gray-800 hover:text-[#8B1A3A] transition font-medium"
        >
          General Conditions
        </Link>
        <Link
          to="/privacy-policy"
          className="text-gray-800 hover:text-[#8B1A3A] transition font-medium"
        >
          Privacy Policy
        </Link>
      </div>

      {/* Made by Kryzotech */}
      <div className="flex items-center gap-0.25">
        <span className="text-gray-800 font-medium">Made by</span>
        <img src={kryzotech} className="h-15 w-auto" alt="Kryzotech Logo" />
      </div>
    </div>
  );
}