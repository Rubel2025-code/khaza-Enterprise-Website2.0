import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo/khazaEnterpriseLogo.jpg";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    // command for backend - connect Auth Api here 

    console.log("Login payload:", form);
    navigate("/");
  };

  return (
    
  <div className="relative min-h-screen bg-[#F8F5F2] flex items-center justify-center px-4 py-12">
<button
  onClick={() => navigate(-1)}
  className="absolute top-6 left-6 text-[#8B1A3A] font-semibold
             hover:underline text-sm"
>
  ← Back
</button>

      {/* Card */}

      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-[#8B1A3A] px-8 py-8 text-white text-center">
          <img
            src={logo}
            alt="Khaza Enterprise"
            className="h-14 mx-auto mb-4 rounded-xl object-contain bg-white px-2 py-1"
          />
          <h1 className="text-3xl font-bold tracking-tight font-['Barlow_Condensed',sans-serif]">
            Welcome Back
          </h1>
          <p className="text-white/70 text-sm mt-1">
            Sign in to your Khaza Enterprise account
          </p>
        </div>

        {/* Form */}

        <div className="px-8 py-8 space-y-5">

          {/*Error */}

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm
                            rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase
                               tracking-widest mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="abc@gmail.com"
              className="w-full border border-[#E8E3DF] rounded-xl px-4 py-3 text-sm
                         text-gray-800 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/40
                         focus:border-[#8B1A3A] transition"
            />
          </div>


          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase
                               tracking-widest mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full border border-[#E8E3DF] rounded-xl px-4 py-3 text-sm
                           text-gray-800 placeholder-gray-400 pr-12
                           focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/40
                           focus:border-[#8B1A3A] transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400
                           hover:text-[#8B1A3A] transition text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="text-right mt-1.5">
              <span className="text-xs text-[#8B1A3A] hover:underline cursor-pointer font-medium">
                Forgot password?
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#8B1A3A] hover:bg-[#6B1229] text-white
                       font-bold tracking-wide py-3 rounded-xl
                       transition-all duration-200 shadow-md hover:shadow-lg mt-2"
          >
            SIGN IN
          </button>
          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-[#E8E3DF]" />
            <span className="text-xs text-gray-400 uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-[#E8E3DF]" />
          </div>

          {/* Register*/}
          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-[#8B1A3A] font-bold hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}