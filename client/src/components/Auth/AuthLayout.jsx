import { motion } from "framer-motion";
import {
  FiShield,
  FiCheckCircle,
  FiUsers,
  FiStar,
} from "react-icons/fi";

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">

      {/* Background */}

      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-indigo-600/25 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="hidden lg:block"
          >

            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-xl">

              <FiShield />

              Trusted By 2,500+ Families

            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight text-white">

              Welcome To

              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">

                MaidEase

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              India's premium platform to hire verified maids,
              babysitters and nannies with complete confidence.

            </p>

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-[30px] bg-white/10 p-7 backdrop-blur-xl">

                <FiUsers className="text-5xl text-indigo-300" />

                <h2 className="mt-6 text-5xl font-black text-white">

                  500+

                </h2>

                <p className="mt-2 text-slate-300">

                  Verified Helpers

                </p>

              </div>

              <div className="rounded-[30px] bg-white/10 p-7 backdrop-blur-xl">

                <FiStar className="text-5xl text-yellow-400" />

                <h2 className="mt-6 text-5xl font-black text-white">

                  4.9

                </h2>

                <p className="mt-2 text-slate-300">

                  Customer Rating

                </p>

              </div>

            </div>

            <div className="mt-10 space-y-5">

              {[
                "100% Verified Professionals",
                "Secure Online Booking",
                "24×7 Customer Support",
                "Instant Confirmation",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <FiCheckCircle className="text-emerald-400 text-xl" />

                  <span className="text-slate-200">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <div className="rounded-[40px] border border-white/20 bg-white/80 p-10 shadow-[0_35px_80px_rgba(15,23,42,.25)] backdrop-blur-3xl">

              <h2 className="text-4xl font-black text-slate-900">

                {title}

              </h2>

              <p className="mt-3 text-slate-500">

                {subtitle}

              </p>

              <div className="mt-10">

                {children}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AuthLayout;