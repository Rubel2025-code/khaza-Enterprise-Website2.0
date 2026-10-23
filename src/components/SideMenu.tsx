import { useNavigate } from "react-router-dom";
import khazaLogo from "../assets/logo/ke_logo.png";

type Props = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export default function SideMenu({ open, setOpen }: Props) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setOpen(false);
  };

  const isLoggedIn = false;

  return (
    <>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300
                    ${open ? "opacity-100 visible" : "opacity-0 invisible"} z-[998]`}
      />


      {/* Side Panel */}
      <aside
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[70%] md:w-[400px]
                    bg-red-950 shadow-2xl flex flex-col
                    transition-transform duration-300 ease-in-out
                    ${open ? "translate-x-0" : "translate-x-full"} z-[999]`}
      >

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          <img src={khazaLogo} alt="Khaza Logo" className="h-10" />
          <button
            onClick={() => setOpen(false)}
            className="text-white/70 hover:text-white text-xl font-bold transition"
          >
            ✕
          </button>
        </div>


        {/* Nav Items */}
        <div className="flex flex-col text-zinc-200 font-semibold flex-1">
          <MenuItem title="Home" onClick={() => handleNavigate("/")} />
          <MenuItem title="About Khaza Enterprise" onClick={() => handleNavigate("/about")} />
          <MenuItem title="Questions and Conditions" onClick={() => handleNavigate("/questions")} />
          <MenuItem title="Contacts" onClick={() => handleNavigate("/contact")} />
          <MenuItem title="Rent Vehicle" onClick={() => handleNavigate("/rent")} />


          {/* Divider */}
          <div className="border-t border-white/10 my-2" />

          {isLoggedIn ? (
            <MenuItem
              title="Log Out"
              icon="🚪"
              onClick={() => {
                handleNavigate("/");
              }}
            />
          ) : (
            <>
              <MenuItem title="Log In" icon="" onClick={() => handleNavigate("/login")} />
              <MenuItem title="Register" icon="" onClick={() => handleNavigate("/register")} />
            </>
          )}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-white/40 pb-5 pt-3 border-t border-white/10">
          © 2026 Khaza Enterprise. All rights reserved.
        </div>
      </aside>
    </>
  );
}

function MenuItem({
  title,
  onClick,
  icon,
}: {
  title: string;
  onClick: () => void;
  icon?: string;
}) {
  return (
    <div
      className="border-t border-white/10 px-6 py-4 hover:bg-white/10
                 cursor-pointer flex items-center gap-3 transition-colors duration-150"
      onClick={onClick}
    >
      {icon && <span className="text-base">{icon}</span>}
      {title}
    </div>
  );
}