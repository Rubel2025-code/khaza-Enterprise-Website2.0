
import { Link } from "react-router-dom";
import kryzotech from "../assets/logo/kryzotech-removebg-preview.png";

export default function FooterBottom() {
  return (
    <div className="border-t border-gray-400 py-4 px-6 flex flex-col items-center justify-center gap-3 text-sm text-center bg-[#FCCDD3]">

      {/* General Conditions */}
      <Link
        to="/general-conditions"
        className="text-gray-800 hover:text-[#8B1A3A] transition font-medium"
      >
        General Conditions
      </Link>

      {/* Privacy Policy */}
      <Link
        to="/privacy-policy"
        className="text-gray-800 hover:text-[#8B1A3A] transition font-medium"
      >
        Privacy Policy
      </Link>

      {/* Made by Kryzotech */}
      <div className="flex items-center justify-center gap-1">
        <span className="text-gray-800 font-medium">Made by</span>
        <img
          src={kryzotech}
          className="h-10 w-auto"
          alt="Kryzotech Logo"
        />
      </div>

      {/* Copyright */}
      <p className="text-gray-800 font-medium">© 2026</p>

    </div>
  );
}
