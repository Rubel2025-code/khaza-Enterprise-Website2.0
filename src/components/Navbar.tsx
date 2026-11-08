
import logo from "../assets/logo/khazaEnterpriseLogo.jpg";
import { MdPersonOutline, MdLogout } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn: boolean = false;
  const userName: string = "";

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
    <nav
      className="relative z-50 flex w-full flex-col bg-white shadow-sm
                 lg:h-[76px] lg:flex-row lg:items-center lg:justify-between
                 lg:gap-4 lg:px-6 xl:px-8"
    >
      <div className="flex h-16 w-full shrink-0 items-center justify-between
                      px-3 sm:px-5 lg:h-full lg:w-auto lg:px-0">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="shrink-0"
          aria-label="Khaza Enterprise Home"
        >
          <img
            src={logo}
            alt="Khaza Enterprise"
            className="h-11 w-auto sm:h-12 lg:h-14"
          />
        </button>

        <button
          type="button"
          onClick={handleAuthClick}
          className="flex shrink-0 items-center justify-center gap-2
                     rounded-full border border-[#8B1A3A] px-3 py-2
                     text-[#8B1A3A] transition-all duration-200
                     hover:bg-[#8B1A3A] hover:text-white sm:px-4
                     lg:hidden"
        >
          {isLoggedIn ? <MdLogout className="text-lg" /> : <MdPersonOutline className="text-lg" />}
          <span className="text-xs font-semibold uppercase">
            {isLoggedIn
              ? (userName ? `Hi, ${userName.split(" ")[0]}` : "Log Out")
              : "Log In"}
          </span>
        </button>
      </div>

      {/* Horizontal navigation */}
      <div className="flex w-full items-center gap-x-5 overflow-x-auto
                      whitespace-nowrap px-3 pb-2 sm:px-5
                      lg:w-auto lg:flex-1 lg:justify-center
                      lg:gap-x-4 lg:overflow-visible lg:px-0 lg:pb-0
                      xl:gap-x-7">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              type="button"
              onClick={() => navigate(item.path)}
              className={`group relative shrink-0 py-2 text-sm
                font-semibold transition-all duration-300
                hover:-translate-y-0.5 lg:text-sm xl:text-base
                ${
                  isActive
                    ? "text-[#8B1A3A]"
                    : "text-gray-700 hover:text-[#8B1A3A]"
                }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 h-[2px] rounded-full
                  bg-[#8B1A3A] transition-all duration-300
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

      {/* Desktop login button */}
      <button
        type="button"
        onClick={handleAuthClick}
        className="hidden shrink-0 items-center justify-center gap-2
                   rounded-full border border-[#8B1A3A] px-4 py-2
                   text-[#8B1A3A] transition-all duration-200
                   hover:bg-[#8B1A3A] hover:text-white lg:flex"
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
