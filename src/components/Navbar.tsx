import logo from "../assets/logo/khazaEnterpriseLogo.jpg";
import { MdPersonOutline, MdLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsMenuOpen: (val: boolean) => void;
};

export default function Navbar({ setIsMenuOpen }: Props) {
  const navigate = useNavigate();
  const isLoggedIn = false;
  const userName: string = ""; 
  const handleAuthClick = () => {
    if (isLoggedIn) {
      
      console.log("Logging out...");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="w-full bg-white h-20 flex justify-between items-center px-4 md:px-8 shadow-sm">

      {/* Logo */}

      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="h-12 md:h-16" />
      </div>


      {/* Right side */}
      <div className="flex items-center gap-4 md:gap-6">


        {/* Auth button */}
        <button
          onClick={handleAuthClick}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#8B1A3A]
                     text-[#8B1A3A] hover:bg-[#8B1A3A] hover:text-white
                     transition-all duration-200 group"
        >
          {isLoggedIn ? (
            <>
              <MdLogout className="text-[18px]" />
              <span className="text-[12px] md:text-[13px] font-semibold uppercase tracking-wide">
                {userName ? `Hi, ${userName.split(" ")[0]}` : "Log Out"}
              </span>
            </>
          ) : (
            <>
              <MdPersonOutline className="text-[18px]" />
              <span className="text-[12px] md:text-[13px] font-semibold uppercase tracking-wide">
                Log In
              </span>
            </>
          )}
        </button>

       
        <FaBars
          className="text-[18px] md:text-[22px] cursor-pointer text-gray-700
                     hover:text-[#8B1A3A] transition-colors duration-200"
          onClick={() => setIsMenuOpen(true)}
        />
      </div>
    </nav>
  );
}