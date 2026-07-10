import { motion } from "framer-motion";
import { FiSearch, FiShield, FiStar, FiUsers } from "react-icons/fi";

const WorkersHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-36 pb-28">

      {/* Background Blur */}

      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-500/25 blur-[140px]" />

      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl px-5 py-3">

              <FiShield className="text-indigo-300" />

              <span className="text-white font-semibold">

                100% Verified Professionals

              </span>

            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">

              Find Your

              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">

                Perfect Helper

              </span>

            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-300 max-w-xl">

              Browse verified maids, babysitters and nannies with
              transparent pricing, verified reviews and instant booking.

            </p>

            {/* Search Preview */}

            <div className="mt-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-5 shadow-2xl">

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 flex items-center justify-center text-white">

                  <FiSearch size={24} />

                </div>

                <div>

                  <h3 className="font-bold text-white text-lg">

                    Search Instantly

                  </h3>

                  <p className="text-slate-300">

                    Find professionals near your location

                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="rounded-[34px] bg-white/10 backdrop-blur-xl border border-white/10 p-8">

              <FiUsers className="text-5xl text-indigo-300" />

              <h2 className="mt-8 text-5xl font-black text-white">

                500+

              </h2>

              <p className="mt-3 text-slate-300">

                Verified Helpers

              </p>

            </div>

            <div className="rounded-[34px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-8 shadow-2xl">

              <FiStar className="text-5xl text-white" />

              <h2 className="mt-8 text-5xl font-black text-white">

                4.9

              </h2>

              <p className="mt-3 text-indigo-100">

                Average Rating

              </p>

            </div>

            <div className="col-span-2 rounded-[34px] bg-white p-8 shadow-2xl">

              <h3 className="text-3xl font-black text-slate-900">

                Hire With Confidence

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                Every profile is verified with identity checks,
                background verification and customer ratings so
                you can hire with complete peace of mind.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default WorkersHero;