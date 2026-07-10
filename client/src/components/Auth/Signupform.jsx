import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiUser,
  FiPhone,
  FiMapPin,
  FiCheck,
} from "react-icons/fi";
import toast from "react-hot-toast";

import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";

import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
const SignupForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    if (!formData.terms) {
      return toast.error("Please accept Terms & Conditions");
    }

    try {
      setLoading(true);

      

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        password: formData.password,
      });

      
      login({
        token: response.token,
        user: response.user,
      });

      toast.success(response.message);
      navigate("/", { replace: true });
    } catch (error) {
      
      toast.error(
        error.response?.data?.message ||
        "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("FORM SUBMITTED");
          handleSubmit(e);
        }}
        className="space-y-6"

      >

        {/* Name */}

        <div>

          <label className="mb-3 block font-bold text-slate-700">

            Full Name

          </label>

          <div className="group relative">

            <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600" />

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />

          </div>

        </div>

        {/* Email */}

        <div>

          <label className="mb-3 block font-bold text-slate-700">

            Email Address

          </label>

          <div className="group relative">

            <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600" />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />

          </div>

        </div>

        {/* Phone */}

        <div>

          <label className="mb-3 block font-bold text-slate-700">

            Mobile Number

          </label>

          <div className="group relative">

            <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600" />

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter mobile number"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />

          </div>

        </div>
        {/* Address */}

        <div>

          <label className="mb-3 block font-bold text-slate-700">

            Address

          </label>

          <div className="group relative">

            <FiMapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600" />

            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />

          </div>

        </div>

        {/* Password */}

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm Password */}

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {/* Terms */}

        <label className="flex cursor-pointer items-start gap-3">

          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
            className="hidden"
          />

          <div
            className={`mt-1 flex h-6 w-6 items-center justify-center rounded-md border transition-all duration-300 ${
              formData.terms
                ? "border-indigo-600 bg-indigo-600 text-white"
                : "border-slate-300 bg-white"
            }`}
          >

            {formData.terms && <FiCheck size={14} />}

          </div>

          <span className="text-sm leading-6 text-slate-600">

            I agree to the{" "}

            <span className="font-bold text-indigo-600">

              Terms & Conditions

            </span>{" "}

            and{" "}

            <span className="font-bold text-indigo-600">

              Privacy Policy

            </span>

          </span>

        </label>

        {/* Button */}

        <button
          type="submit"
          onClick={() => console.log("BUTTON CLICKED")}
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 text-lg font-bold text-white"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      {/* Social Login */}

      <SocialLogin />

      {/* Login Link */}

      <div className="mt-8 text-center">

        <p className="text-slate-600">

          Already have an account?{" "}

          <Link
            to="/login"
            className="font-bold text-indigo-600 transition hover:text-violet-600"
          >

            Login

          </Link>

        </p>

      </div>

    </>
  );
};

export default SignupForm;