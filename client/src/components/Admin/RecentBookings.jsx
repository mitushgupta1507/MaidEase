import { motion } from "framer-motion";
import {
  FiEye,
  FiMapPin,
  FiCalendar,
} from "react-icons/fi";

const statusColors = {
  Completed: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
  Accepted: "bg-blue-100 text-blue-700",
  "In Progress": "bg-purple-100 text-purple-700",
  Cancelled: "bg-red-100 text-red-700",
};

const RecentBookings = ({ bookings = [], loading = false }) => {
  return (
    <section className="pb-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,.08)]"
        >

          {/* Header */}

          <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

            <div>

              <h2 className="text-3xl font-black text-slate-900">

                Recent Bookings

              </h2>

              <p className="mt-2 text-slate-500">

                Latest customer bookings

              </p>

            </div>

            <button className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">

              View All

            </button>

          </div>

          {/* Table */}

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-8 py-5 text-left font-bold text-slate-700">

                    Customer

                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">

                    Booking

                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">

                    Worker

                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">

                    Amount

                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">

                    Status

                  </th>

                  <th className="px-8 py-5 text-center font-bold text-slate-700">

                    Action

                  </th>

                </tr>

              </thead>

              <tbody>

                {loading ? (
                  <tr>
                    <td colSpan="6" className="px-8 py-10 text-center text-slate-500">
                      Loading bookings...
                    </td>
                  </tr>
                ) : bookings.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="px-8 py-10 text-center text-slate-500">
                      No recent bookings found.
                    </td>
                  </tr>
                ) : bookings.map((booking, index) => (

                  <motion.tr
                    key={booking._id || booking.id}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * .08,
                    }}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    {/* Customer */}

                    <td className="px-8 py-6">

                      <div className="flex items-center gap-4">

                        <img
                          src={booking.worker?.image || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"}
                          alt={booking.user?.name || "Customer"}
                          className="h-14 w-14 rounded-2xl object-cover"
                        />

                        <div>

                          <h3 className="font-bold text-slate-900">

                            {booking.user?.name || "N/A"}

                          </h3>

                          <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">

                            <FiMapPin size={14} />

                            {booking.worker?.location || "N/A"}

                          </div>

                        </div>

                      </div>

                    </td>

                    {/* Booking */}

                    <td className="px-6 py-6">

                      <h4 className="font-bold text-slate-900">

                        {`#BK-${String(booking._id).slice(-6).toUpperCase()}`}

                      </h4>

                      <p className="text-sm text-indigo-600">

                        {booking.worker?.serviceType || "Service"}

                      </p>

                      <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">

                        <FiCalendar size={14} />

                        {new Date(booking.serviceDate).toLocaleDateString()}

                      </div>

                    </td>

                    {/* Worker */}

                    <td className="px-6 py-6 font-semibold text-slate-700">

                      {booking.worker?.name || "N/A"}

                    </td>

                    {/* Amount */}

                    <td className="px-6 py-6 text-xl font-black text-indigo-600">

                      ₹{Number(booking.totalAmount || 0).toLocaleString()}

                    </td>

                    {/* Status */}

                    <td className="px-6 py-6">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-bold ${statusColors[booking.status] || "bg-slate-100 text-slate-700"}`}
                      >

                        {booking.status}

                      </span>

                    </td>

                    {/* Action */}

                    <td className="px-8 py-6">

                      <div className="flex justify-center">

                        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">

                          <FiEye />

                        </button>

                      </div>

                    </td>

                  </motion.tr>

                ))}

              </tbody>

            </table>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default RecentBookings;