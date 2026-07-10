import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheckCircle,
  FiPlayCircle,
  FiShield,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">

      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-[130px]" />

      <div className="absolute top-0 right-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[130px]" />

      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-purple-400/20 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-20 lg:px-8">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white px-5 py-3 shadow-xl">

              <FiShield className="text-indigo-600" />

              <span className="font-semibold text-slate-700">

                Trusted By 2,500+ Families

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-slate-900 md:text-6xl xl:text-7xl">

              Hire

              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

                Trusted Home

              </span>

              Professionals

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              MaidEase helps families hire verified maids,
              babysitters and nannies through a secure,
              technology-driven platform with transparent
              pricing and background verification.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/workers"
                className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-4 font-bold text-white shadow-[0_20px_45px_rgba(79,70,229,.35)] transition duration-300 hover:-translate-y-1"
              >

                Explore Helpers

                <FiArrowRight className="transition group-hover:translate-x-1" />

              </Link>

              <button
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-lg transition duration-300 hover:border-indigo-300 hover:text-indigo-600"
              >

                <FiPlayCircle className="text-xl" />

                Watch Demo

              </button>

            </div>

            {/* Features */}

            <div className="mt-12 grid grid-cols-2 gap-5">

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-xl text-emerald-500" />

                <span className="font-medium text-slate-700">

                  Background Verified

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-xl text-emerald-500" />

                <span className="font-medium text-slate-700">

                  Instant Booking

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-xl text-emerald-500" />

                <span className="font-medium text-slate-700">

                  Trusted Reviews

                </span>

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-xl text-emerald-500" />

                <span className="font-medium text-slate-700">

                  Secure Payments

                </span>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="relative hidden lg:block"
          >

            <div className="relative h-[650px]">

              {/* Main Image */}

              <motion.img
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900"
                alt="Helper"
                className="absolute right-0 h-[620px] w-[430px] rounded-[42px] object-cover shadow-[0_40px_80px_rgba(15,23,42,.25)]"
              />
                            {/* Floating Rating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute left-0 top-10 w-72 rounded-[28px] border border-white/40 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Customer Rating
                    </p>

                    <h3 className="mt-2 text-3xl font-black text-slate-900">
                      4.9
                    </h3>
                  </div>

                  <div className="flex gap-1 text-yellow-400">
                    <FiStar className="fill-yellow-400" />
                    <FiStar className="fill-yellow-400" />
                    <FiStar className="fill-yellow-400" />
                    <FiStar className="fill-yellow-400" />
                    <FiStar className="fill-yellow-400" />
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Based on 2,300+ verified reviews.
                </p>
              </motion.div>

              {/* Active Helpers Card */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="absolute -left-5 bottom-28 w-72 rounded-[28px] border border-white/40 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white">
                    <FiUsers size={30} />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-slate-900">
                      500+
                    </h3>

                    <p className="text-slate-500">
                      Verified Helpers
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Security Card */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-0 bottom-0 rounded-[28px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-7 text-white shadow-[0_30px_70px_rgba(79,70,229,.45)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-xl">
                    <FiShield size={28} />
                  </div>

                  <div>
                    <h3 className="font-bold text-xl">
                      100% Verified
                    </h3>

                    <p className="mt-1 text-sm text-indigo-100">
                      Background Checked Professionals
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;