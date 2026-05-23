import { Link } from "react-router-dom";
import { Mail, Lock, User, Eye, EyeOff, Phone } from "lucide-react";

import { useState } from "react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#2D142C] text-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[#510A32]/70 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-lg">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">Create Account</h1>

        <p className="text-gray-400 text-center mt-3">
          Join SocLoop and start creating sustainable impact.
        </p>

        {/* Google Signup */}
        <button className="w-full mt-8 flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 transition py-4 rounded-xl font-semibold">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-white/10"></div>

          <p className="text-gray-500 text-sm">OR</p>

          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div className="flex items-center gap-3 bg-[#2D142C] border border-white/10 rounded-xl px-4 overflow-hidden">
            <User className="text-[#FE4540] shrink-0" size={22} />

            <input
              type="text"
              placeholder="Full name"
              className="w-full bg-transparent text-white py-4 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-[#2D142C] border border-white/10 rounded-xl px-4 overflow-hidden">
            <Mail className="text-[#FE4540] shrink-0" size={22} />

            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent text-white py-4 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 bg-[#2D142C] border border-white/10 rounded-xl px-4 overflow-hidden">
            <Phone className="text-[#FE4540] shrink-0" size={22} />

            <input
              type="tel"
              placeholder="Phone number"
              className="w-full bg-transparent text-white py-4 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Password */}
          <div className="flex items-center gap-3 bg-[#2D142C] border border-white/10 rounded-xl px-4 overflow-hidden">
            <Lock className="text-[#FE4540] shrink-0" size={22} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-transparent text-white py-4 outline-none placeholder:text-gray-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-white transition"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit */}
          <button className="w-full bg-[#FE4540] hover:bg-[#C72C41] transition py-4 rounded-xl font-semibold shadow-lg shadow-[#FE4540]/20">
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-[#FE4540] hover:underline">
            Login
          </Link>
        </p>

        {/* Back */}
        <Link
          to="/"
          className="block text-center text-gray-500 hover:text-white transition mt-5 text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
