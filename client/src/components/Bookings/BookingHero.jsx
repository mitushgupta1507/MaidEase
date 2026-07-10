import { motion } from "framer-motion";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiHome,
} from "react-icons/fi";

const BookingHero = ({ bookings = [], loading = false }) => {
  const activeBookings = bookings.filter((booking) =>
    ["Pending", "Accepted", "In Progress"].includes(booking.status)
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-36 pb-28">

      {/* Background */}

      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-xl">

              <FiCalendar />

              Booking Dashboard

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Manage Your

              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">

                Home Services

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              View active bookings, upcoming appointments,
              completed services and track every booking
              from one premium dashboard.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >

            {/* Active */}

            <div className="rounded-[34px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">

              <FiClock className="text-5xl text-indigo-300" />

              <h2 className="mt-6 text-5xl font-black text-white">

                {loading ? "..." : activeBookings}

              </h2>

              <p className="mt-3 text-slate-300">

                Active Bookings

              </p>

            </div>

            {/* Completed */}

            <div className="rounded-[34px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-8 shadow-2xl">

              <FiCheckCircle className="text-5xl text-white" />

              <h2 className="mt-6 text-5xl font-black text-white">

                {loading ? "..." : completedBookings}

              </h2>

              <p className="mt-3 text-indigo-100">

                Completed

              </p>

            </div>

            {/* Info */}

            <div className="col-span-2 rounded-[34px] bg-white p-8 shadow-2xl">

              <FiHome className="text-5xl text-indigo-600" />

              <h2 className="mt-6 text-3xl font-black text-slate-900">

                Trusted Services

              </h2>

              <p className="mt-4 leading-8 text-slate-600">

                Keep track of all your maid, babysitter and
                nanny bookings with real-time updates and
                booking history.

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default BookingHero;