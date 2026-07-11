import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FiMail, FiCheck } from "react-icons/fi";

import toast from "react-hot-toast";



import PasswordInput from "./PasswordInput";

import SocialLogin from "./SocialLogin";



import { loginUser } from "../../services/authService";

import { useAuth } from "../../Context/AuthContext";



const LoginForm = () => {

  const navigate = useNavigate();



  const { login } = useAuth();



  const [loading, setLoading] = useState(false);



  const [formData, setFormData] = useState({

    email: "",

    password: "",

    remember: false,

  });

  

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;



    setFormData((prev) => ({

      ...prev,

      [name]: type === "checkbox" ? checked : value,

    }));

  };



  const handleSubmit = async (e) => {

    e.preventDefault();



    try {

      setLoading(true);



      const response = await loginUser({

        email: formData.email,

        password: formData.password,

      });



      login({
        token: response.token,
        user: response.user,
      });

      toast.success("Login Successful");



      if (response.user.role === "admin") {
        navigate("/admin/dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {

      toast.error(

        error.response?.data?.message ||

          "Login failed"

      );

    } finally {

      setLoading(false);

    }

  };



  return (

    <>

      <form

        onSubmit={handleSubmit}

        className="space-y-7"

      >

        

        {/* Email */}



        <div>

          <label className="mb-3 block text-sm font-bold text-slate-700">

            Email Address

          </label>



          <div className="group relative">

            <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 transition-all duration-300 group-focus-within:text-indigo-600" />



            <input

              type="email"

              name="email"

              required

              value={formData.email}

              onChange={handleChange}

              placeholder="Enter your email"

              className="

              h-14

              w-full

              rounded-2xl

              border

              border-slate-200

              bg-slate-50

              pl-14

              pr-5

              outline-none

              transition-all

              duration-300

              focus:border-indigo-600

              focus:bg-white

              focus:ring-4

              focus:ring-indigo-100

              "

            />

          </div>

        </div>

      

        {/* Password */}



        <PasswordInput

          value={formData.password}

          onChange={handleChange}

          name="password"

        />



        {/* Remember */}



        <div className="flex flex-wrap items-center justify-between gap-4">

          <label className="flex cursor-pointer items-center gap-3">

            <input

              type="checkbox"

              name="remember"

              checked={formData.remember}

              onChange={handleChange}

              className="hidden"

            />



            <div

              className={`flex h-6 w-6 items-center justify-center rounded-md border transition-all duration-300 ${

                formData.remember

                  ? "border-indigo-600 bg-indigo-600 text-white"

                  : "border-slate-300 bg-white"

              }`}

            >

              {formData.remember && (

                <FiCheck size={15} />

              )}

            </div>



            <span className="font-medium text-slate-600">

              Remember Me

            </span>

          </label>



          <Link

            to="/forgot-password"

            className="font-semibold text-indigo-600 transition hover:text-violet-600"

          >

            Forgot Password?

          </Link>

        </div>



        {/* Button */}



        <button

          type="submit"

          disabled={loading}

          className="

          group

          flex

          h-14

          w-full

          items-center

          justify-center

          rounded-2xl

          bg-gradient-to-r

          from-indigo-600

          via-violet-600

          to-purple-600

          text-lg

          font-bold

          text-white

          shadow-[0_20px_40px_rgba(79,70,229,.35)]

          transition-all

          duration-300

          hover:-translate-y-1

          hover:shadow-[0_30px_60px_rgba(79,70,229,.45)]

          disabled:cursor-not-allowed

          disabled:opacity-70

          "

        >

          {loading

            ? "Logging in..."

            : "Login To MaidEase"}

        </button>

      </form>



      {/* Social */}



      <SocialLogin />



      {/* Signup */}



      <div className="mt-8 text-center">

        <p className="text-slate-600">

          Don't have an account?{" "}

          <Link

            to="/signup"

            className="font-bold text-indigo-600 transition hover:text-violet-600"

          >

            Create Account

          </Link>

        </p>

      </div>

    </>

  );

};



export default LoginForm;