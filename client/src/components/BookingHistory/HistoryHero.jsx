import { motion } from "framer-motion";
import {
  FiFileText,
  FiTrendingUp,
  FiCheckCircle,
  FiDollarSign,
} from "react-icons/fi";

const HistoryHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-36 pb-28">

      {/* Background */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[160px]" />

      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl text-white">

              <FiFileText />

              Booking History

            </span>

            <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-white">

              Your Complete

              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">

                Service History

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Access every previous booking, payment,
              receipt and service history from one
              beautifully designed dashboard.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            className="grid grid-cols-2 gap-6"
          >

            <div className="rounded-[34px] bg-white/10 backdrop-blur-xl p-8 border border-white/10">

              <FiTrendingUp className="text-5xl text-indigo-300" />

              <h2 className="mt-6 text-5xl font-black text-white">

                32

              </h2>

              <p className="mt-3 text-slate-300">

                Total Bookings

              </p>

            </div>

            <div className="rounded-[34px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-8 shadow-2xl">

              <FiCheckCircle className="text-5xl text-white" />

              <h2 className="mt-6 text-5xl font-black text-white">

                30

              </h2>

              <p className="mt-3 text-indigo-100">

                Completed

              </p>

            </div>

            <div className="col-span-2 rounded-[34px] bg-white p-8 shadow-2xl">

              <FiDollarSign className="text-5xl text-indigo-600" />

              <h2 className="mt-6 text-3xl font-black text-slate-900">

                ₹48,560

              </h2>

              <p className="mt-3 text-slate-600">

                Total amount spent on trusted home
                services through MaidEase.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HistoryHero;