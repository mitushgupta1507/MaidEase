import { motion } from "framer-motion";
import {
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const BookingStats = ({ bookings = [], loading = false }) => {
  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) =>
      booking.status === "Pending" ||
      booking.status === "Accepted" ||
      booking.status === "In Progress"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  // Count unique workers booked
  const favouriteHelpers = new Set(
    bookings
      .filter((booking) => booking.worker?._id)
      .map((booking) => booking.worker._id)
  ).size;

  const stats = [
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: FiCalendar,
      color: "from-indigo-600 via-violet-600 to-purple-600",
      change: "+100%",
    },
    {
      title: "Active",
      value: pendingBookings,
      icon: FiClock,
      color: "from-orange-500 to-amber-500",
      change: `${pendingBookings}`,
    },
    {
      title: "Completed",
      value: completedBookings,
      icon: FiCheckCircle,
      color: "from-emerald-500 to-teal-500",
      change: `${completedBookings}`,
    },
    {
      title: "Helpers Hired",
      value: favouriteHelpers,
      icon: FiHeart,
      color: "from-pink-500 to-rose-500",
      change: `${favouriteHelpers}`,
    },
  ];

  return (
    <section className="-mt-14 relative z-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group overflow-hidden rounded-[32px] border border-white/40 bg-white/80 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-2xl"
              >
                <div
                  className={`h-2 bg-gradient-to-r ${item.color}`}
                />

                <div className="p-7">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color} text-white shadow-xl`}
                    >
                      <Icon size={30} />
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-700">
                      <FiTrendingUp />

                      {loading ? "..." : item.change}
                    </div>
                  </div>

                  <h2 className="mt-8 text-5xl font-black text-slate-900">
                    {loading ? "..." : item.value}
                  </h2>

                  <p className="mt-3 text-lg font-semibold text-slate-600">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookingStats;