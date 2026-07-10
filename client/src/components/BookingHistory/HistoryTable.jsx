import { motion } from "framer-motion";
import {
  FiDownload,
  FiEye,
  FiStar,
  FiMapPin,
} from "react-icons/fi";

const bookings = [
  {
    id: "#BK1024",
    worker: "Priya Sharma",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    service: "Professional Maid",
    location: "Noida",
    date: "28 Jun 2026",
    amount: "₹599",
    payment: "Paid",
    status: "Completed",
    rating: 5,
  },
  {
    id: "#BK1025",
    worker: "Anjali Verma",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500",
    service: "Babysitter",
    location: "Delhi",
    date: "26 Jun 2026",
    amount: "₹899",
    payment: "Paid",
    status: "Completed",
    rating: 4,
  },
  {
    id: "#BK1026",
    worker: "Neha Gupta",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500",
    service: "Professional Nanny",
    location: "Gurugram",
    date: "22 Jun 2026",
    amount: "₹1,299",
    payment: "Refunded",
    status: "Cancelled",
    rating: 0,
  },
  {
    id: "#BK1027",
    worker: "Kavita Singh",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500",
    service: "House Cleaning",
    location: "Ghaziabad",
    date: "18 Jun 2026",
    amount: "₹749",
    payment: "Paid",
    status: "Completed",
    rating: 5,
  },
];

const statusColor = {
  Completed: "bg-emerald-100 text-emerald-700",
  Cancelled: "bg-red-100 text-red-700",
  Pending: "bg-amber-100 text-amber-700",
};

const paymentColor = {
  Paid: "bg-indigo-100 text-indigo-700",
  Refunded: "bg-orange-100 text-orange-700",
  Pending: "bg-slate-200 text-slate-700",
};

const HistoryTable = () => {
  return (
    <section className="pb-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,.08)]">

          {/* Header */}

          <div className="border-b border-slate-200 px-8 py-6">

            <h2 className="text-3xl font-black text-slate-900">

              Booking History

            </h2>

            <p className="mt-2 text-slate-500">

              View all your previous bookings and receipts.

            </p>

          </div>

          {/* Table */}

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-slate-50">

                <tr>

                  <th className="px-8 py-5 text-left font-bold text-slate-700">
                    Worker
                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">
                    Booking
                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">
                    Amount
                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">
                    Payment
                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">
                    Status
                  </th>

                  <th className="px-6 py-5 text-left font-bold text-slate-700">
                    Rating
                  </th>

                  <th className="px-8 py-5 text-center font-bold text-slate-700">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {bookings.map((booking, index) => (

                  <motion.tr
                    key={booking.id}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    {/* Worker */}

                    <td className="px-8 py-6">

                      <div className="flex items-center gap-4">

                        <img
                          src={booking.image}
                          alt={booking.worker}
                          className="h-16 w-16 rounded-2xl object-cover"
                        />

                        <div>

                          <h3 className="font-bold text-slate-900">

                            {booking.worker}

                          </h3>

                          <p className="text-sm text-indigo-600">

                            {booking.service}

                          </p>

                          <div className="mt-1 flex items-center gap-1 text-sm text-slate-500">

                            <FiMapPin size={14} />

                            {booking.location}

                          </div>

                        </div>

                      </div>

                    </td>

                    {/* Booking */}

                    <td className="px-6 py-6">

                      <h4 className="font-bold text-slate-900">

                        {booking.id}

                      </h4>

                      <p className="mt-1 text-sm text-slate-500">

                        {booking.date}

                      </p>

                    </td>

                    {/* Amount */}

                    <td className="px-6 py-6 font-black text-indigo-600">

                      {booking.amount}

                    </td>

                    {/* Payment */}

                    <td className="px-6 py-6">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${paymentColor[booking.payment]}`}
                      >

                        {booking.payment}

                      </span>

                    </td>

                    {/* Status */}

                    <td className="px-6 py-6">

                      <span
                        className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor[booking.status]}`}
                      >

                        {booking.status}

                      </span>

                    </td>

                    {/* Rating */}

                    <td className="px-6 py-6">

                      <div className="flex gap-1">

                        {[1, 2, 3, 4, 5].map((star) => (

                          <FiStar
                            key={star}
                            className={
                              star <= booking.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-300"
                            }
                          />

                        ))}

                      </div>

                    </td>

                    {/* Actions */}

                    <td className="px-8 py-6">

                      <div className="flex justify-center gap-3">

                        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">

                          <FiEye />

                        </button>

                        <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition hover:bg-emerald-600 hover:text-white">

                          <FiDownload />

                        </button>

                      </div>

                    </td>

                  </motion.tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HistoryTable;