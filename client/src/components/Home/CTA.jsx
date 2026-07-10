import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShield,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-700" />

      <div className="absolute -top-28 -left-24 h-96 w-96 rounded-full bg-white/10 blur-[140px]" />

      <div className="absolute -bottom-28 right-0 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="overflow-hidden rounded-[42px] border border-white/20 bg-white/10 backdrop-blur-2xl shadow-[0_40px_90px_rgba(0,0,0,.20)]"
        >

          <div className="grid items-center gap-16 p-12 lg:grid-cols-2 lg:p-20">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 font-semibold text-white backdrop-blur-xl">

                <FiShield />

                Trusted Home Services

              </span>

              <h2 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

                Ready To Hire

                <span className="block text-indigo-200">

                  Your Perfect Helper?

                </span>

              </h2>

              <p className="mt-8 max-w-xl text-lg leading-8 text-indigo-100">

                Join thousands of families already using MaidEase
                to hire trusted maids, babysitters and nannies
                with complete confidence.

              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  to="/workers"
                  className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-indigo-700 shadow-xl transition duration-300 hover:-translate-y-1"
                >
                  Find Helpers

                  <FiArrowRight className="transition group-hover:translate-x-1" />

                </Link>

                <Link
                  to="/signup"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition duration-300 hover:bg-white/20"
                >
                  Create Account
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="grid gap-5">

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20">

                    <FiCheckCircle size={30} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-white">

                      100% Verified

                    </h3>

                    <p className="mt-2 text-indigo-100">

                      Every helper is identity and background verified.

                    </p>

                  </div>

                </div>

              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur-xl"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20">

                    <FiStar size={30} />

                  </div>

                  <div>

                    <h3 className="text-2xl font-black text-white">

                      4.9 ★ Rating

                    </h3>

                    <p className="mt-2 text-indigo-100">

                      Thousands of positive reviews from happy families.

                    </p>

                  </div>

                </div>

              </motion.div>

              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur-xl"
              >

                <div className="grid grid-cols-3 gap-5 text-center">

                  <div>

                    <h3 className="text-4xl font-black text-white">

                      500+

                    </h3>

                    <p className="mt-2 text-indigo-100">

                      Helpers

                    </p>

                  </div>

                  <div>

                    <h3 className="text-4xl font-black text-white">

                      15K+

                    </h3>

                    <p className="mt-2 text-indigo-100">

                      Bookings

                    </p>

                  </div>

                  <div>

                    <h3 className="text-4xl font-black text-white">

                      98%

                    </h3>

                    <p className="mt-2 text-indigo-100">

                      Satisfaction

                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CTA;