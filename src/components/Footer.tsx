
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const linkClass =
  "block text-sm text-slate-300 transition-all duration-200 hover:translate-x-1 hover:text-white";

const headingClass =
  "mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white";

export default function Footer() {
  return (
    <footer className="bg-[#800020] text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:px-10 lg:py-14">

        {/* COMPANY */}
        <div>
          <h3 className={headingClass}>Khaza Enterprise</h3>
          <p className="max-w-xs text-sm leading-7 text-slate-300">
            Reliable vehicle rental services for comfortable journeys,
            business travel, and everyday transportation.
          </p>
          <div className="mt-5 h-1 w-12 rounded-full bg-[#FFFFFF]" />
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className={headingClass}>Explore</h3>
          <ul className="space-y-3">
            <li><Link to="/" className={linkClass}>Home</Link></li>
            <li><Link to="/about" className={linkClass}>About Us</Link></li>
            <li><Link to="/rent" className={linkClass}>Rent a Vehicle</Link></li>
            <li><Link to="/questions" className={linkClass}>FAQs</Link></li>
            <li><Link to="/contact" className={linkClass}>Contact Us</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className={headingClass}>Get in Touch</h3>
          <ul className="space-y-4 text-sm leading-6 text-slate-300">
            <li className="flex items-start gap-3">
              <FaLocationDot className="mt-1 shrink-0 text-[##FFFFFF]" />
              <span>209, North Manda, Mugda, Dhaka-1214</span>
            </li>
            <li className="flex items-start gap-3">
              <FaPhone className="mt-1 shrink-0 text-[##FFFFFF]" />
              <div>
                <a href="tel:01685809403" className="transition hover:text-white">
                  01685-809403
                </a>
                <br />
                <a href="tel:01793358550" className="transition hover:text-white">
                  01793-358550
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <IoMail className="mt-1 shrink-0 text-[#E9A2B4]" />
              <a
                href="mailto:khazaenterprise403@gmail.com"
                className="break-all transition hover:text-white"
              >
                khazaenterprise403@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* SOCIAL & POLICIES */}
        <div>
          <h3 className={headingClass}>Connect With Us</h3>
          <p className="mb-4 text-sm leading-6 text-slate-300">
            Have a question or need a vehicle? Get in touch with our team.
          </p>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24] hover:bg-[#E31E24]"
            >
              <SiFacebook size={17} />
            </a>
            <a
              href="https://wa.me/8801685809403"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E31E24] hover:bg-[#E31E24]"
            >
              <IoLogoWhatsapp size={19} />
            </a>
          </div>

          <div className="mt-6 space-y-3">
            <Link to="/general-conditions" className={linkClass}>
              General Conditions
            </Link>
            <Link to="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* SINGLE COPYRIGHT BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-slate-400 sm:flex-row sm:px-10 sm:text-left">
          <p>© {new Date().getFullYear()} Khaza Enterprise. All rights reserved.</p>
          <p>
            Made with care by{" "}
            <span className="font-semibold text-slate-200">Kryzotech</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
