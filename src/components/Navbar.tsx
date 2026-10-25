
import logo from "../assets/logo/khazaEnterpriseLogo.jpg";
import { MdPersonOutline, MdLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = false;
  const userName = "";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Rent a Vehicle", path: "/rent" },
    { label: "Questions", path: "/questions" },
    { label: "Contact Us", path: "/contact" },
  ];

  const handleAuthClick = () => {
    if (isLoggedIn) {
      console.log("Logging out...");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="w-full bg-white min-h-20 flex flex-wrap justify-between items-center gap-4 px-4 md:px-8 py-3 shadow-sm">
      {/* Logo */}
      <button
        onClick={() => navigate("/")}
        className="shrink-0"
        aria-label="Khaza Enterprise Home"
      >
        <img
          src={logo}
          alt="Khaza Enterprise"
          className="h-12 md:h-16 w-auto"
        />
      </button>


{/* Visible horizontal navigation */}
<div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 lg:gap-x-7 xl:gap-x-8">
  {navItems.map((item) => {
    const isActive = location.pathname === item.path;

    return (
      <button
        key={item.path}
        onClick={() => navigate(item.path)}
        className={`group relative whitespace-nowrap py-2 text-base lg:text-lg font-semibold
          transition-all duration-300 ease-out
          hover:-translate-y-0.5
          ${
            isActive
              ? "text-[#8B1A3A]"
              : "text-gray-700 hover:text-[#8B1A3A]"
          }`}
      >
        {item.label}

        {/* Animated underline */}
        <span
          className={`absolute bottom-0 left-0 h-[2px] rounded-full
            bg-[#8B1A3A] transition-all duration-300 ease-out
            ${
              isActive
                ? "w-full"
                : "w-0 group-hover:w-full"
            }`}
        />
      </button>
    );
  })}
</div>


      {/* Login button */}
      <button
        onClick={handleAuthClick}
        className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#8B1A3A] px-4 py-2 text-[#8B1A3A] transition-all duration-200 hover:bg-[#8B1A3A] hover:text-white"
      >
        {isLoggedIn ? (
          <>
            <MdLogout className="text-lg" />
            <span className="text-xs font-semibold uppercase">
              {userName ? `Hi, ${userName.split(" ")[0]}` : "Log Out"}
            </span>
          </>
        ) : (
          <>
            <MdPersonOutline className="text-lg" />
            <span className="text-xs font-semibold uppercase">Log In</span>
          </>
        )}
      </button>
    </nav>
  );
}