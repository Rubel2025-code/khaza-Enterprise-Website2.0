import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo/khazaEnterpriseLogo.jpg";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    //command for backend- connect the register API here

    console.log("Register payload:", form);
    navigate("/login");
  };

  // Password-strength

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let score = 0;
    if (p.length >= 8) score++;
    if (/[A-Z]/.test(p)) score++;
    if (/[0-9]/.test(p)) score++;
    if (/[^A-Za-z0-9]/.test(p)) score++;
    return score;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = [
    "",
    "bg-red-400",
    "bg-yellow-400",
    "bg-blue-400",
    "bg-green-500",
  ][strength];

  return (
    <div className="relative min-h-screen bg-[#F8F5F2] flex items-center justify-center px-4 py-12">
      {/* Background overlay with primary color at very low opacity */}
      <div className="absolute inset-0 bg-[#8B1A3A] opacity-5 pointer-events-none" />

      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 text-[#8B1A3A] font-semibold
             hover:underline text-sm z-20"
      >
        ← Back
      </button>

      {/* Card */}
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl overflow-hidden relative z-10">
        <div className="bg-[#8B1A3A] px-8 py-8 text-white text-center">
          <img
            src={logo}
            alt="Khaza Enterprise"
            className="h-14 mx-auto mb-4 rounded-xl object-contain bg-white px-2 py-1"
          />
          <h1 className="text-3xl font-bold tracking-tight font-['Barlow_Condensed',sans-serif]">
            Create Account
          </h1>
          
        </div>

        {/* Form */}
        <div className="px-8 py-8 space-y-5">
          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm
                            rounded-xl px-4 py-3">
              {error}
            </div>
          )}

          {/*Name */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase
                               tracking-widest mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Abdul Karim"
              className="w-full border border-[#E8E3DF] rounded-xl px-4 py-3 text-sm
                         text-gray-800 placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-[#8B1A3A]/40
                         focus:border-[#8B1A3A] transition"
            />
          </div>

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

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase
                               tracking-widest mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+880 1X XX XXX XXX"
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
                placeholder="Min. 8 characters"
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

            {/* Strength-bar */}
            {form.password.length > 0 && (
              <div className="mt-2 space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`flex-1 h-1 rounded-full transition-all duration-300
                                  ${
                                    i <= strength
                                      ? strengthColor
                                      : "bg-gray-200"
                                  }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  Strength:{" "}
                  <span className="font-semibold text-gray-600">
                    {strengthLabel}
                  </span>
                </p>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase
                               tracking-widest mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                className={`w-full border rounded-xl px-4 py-3 text-sm pr-12
                            text-gray-800 placeholder-gray-400
                            focus:outline-none focus:ring-2 transition
                            ${
                              form.confirmPassword &&
                              form.confirmPassword !== form.password
                                ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                                : "border-[#E8E3DF] focus:ring-[#8B1A3A]/40 focus:border-[#8B1A3A]"
                            }`}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400
                           hover:text-[#8B1A3A] transition text-sm"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            {form.confirmPassword &&
              form.confirmPassword !== form.password && (
                <p className="text-xs text-red-500 mt-1">
                  Passwords do not match
                </p>
              )}
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-[#8B1A3A] cursor-pointer"
            />
            <span className="text-sm text-gray-500 leading-relaxed">
              I agree to the{" "}
              <span className="text-[#8B1A3A] font-semibold hover:underline cursor-pointer">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-[#8B1A3A] font-semibold hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </span>
          </label>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#8B1A3A] hover:bg-[#6B1229] text-white
                       font-bold tracking-wide py-3 rounded-xl
                       transition-all duration-200 shadow-md hover:shadow-lg"
          >
            CREATE ACCOUNT
          </button>

          <div className="flex items-center gap-3 py-1">
            <div className="flex-1 h-px bg-[#E8E3DF]" />
            <span className="text-xs text-gray-400 uppercase tracking-widest">
              or
            </span>
            <div className="flex-1 h-px bg-[#E8E3DF]" />
          </div>

          {/* Login link */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#8B1A3A] font-bold hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}