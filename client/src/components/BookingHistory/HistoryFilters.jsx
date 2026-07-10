import { motion } from "framer-motion";
import {
  FiCalendar,
  FiDownload,
  FiFilter,
  FiSearch,
} from "react-icons/fi";

const HistoryFilters = () => {
  return (
    <section className="pb-12">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .6,
          }}
          className="rounded-[34px] border border-white/40 bg-white/80 p-7 backdrop-blur-2xl shadow-[0_25px_70px_rgba(15,23,42,.08)]"
        >

          <div className="grid gap-5 lg:grid-cols-12">

            {/* Search */}

            <div className="relative lg:col-span-4">

              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

              <input
                type="text"
                placeholder="Search Booking ID..."
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />

            </div>

            {/* Date */}

            <div className="relative lg:col-span-2">

              <FiCalendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

              <input
                type="date"
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              />

            </div>

            {/* Booking Status */}

            <div className="lg:col-span-2">

              <select
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              >

                <option>All Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Cancelled</option>

              </select>

            </div>

            {/* Payment */}

            <div className="lg:col-span-2">

              <select
                className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
              >

                <option>Payment</option>
                <option>Paid</option>
                <option>Refunded</option>
                <option>Pending</option>

              </select>

            </div>

            {/* Button */}

            <div className="lg:col-span-2">

              <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 font-bold text-white shadow-[0_20px_40px_rgba(79,70,229,.35)] transition-all duration-300 hover:-translate-y-1">

                <FiFilter />

                Apply

              </button>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">

            <p className="font-medium text-slate-600">

              Showing <span className="font-bold text-indigo-600">32</span> bookings

            </p>

            <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-indigo-600 hover:text-indigo-600">

              <FiDownload />

              Download History

            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default HistoryFilters;