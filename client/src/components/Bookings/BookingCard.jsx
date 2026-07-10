import { motion } from "framer-motion";

import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiEye,
  FiXCircle,
  FiCheckCircle,
} from "react-icons/fi";

import toast from "react-hot-toast";

import { cancelBooking } from "../../services/bookingService";

const BookingCard = ({ booking }) => {
  const worker = booking.worker || {};

  const statusStyle = {
    Pending: "bg-amber-100 text-amber-700",

    Accepted: "bg-blue-100 text-blue-700",

    "In Progress":
      "bg-purple-100 text-purple-700",

    Completed:
      "bg-emerald-100 text-emerald-700",

    Cancelled:
      "bg-red-100 text-red-700",
  };

  const handleCancel = async () => {
    try {
      await cancelBooking(booking._id);

      toast.success(
        "Booking cancelled successfully"
      );

      window.location.reload();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to cancel booking"
      );
    }
  };
    return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-[0_30px_70px_rgba(15,23,42,.12)]"
    >
      {/* Top */}

      <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <img
              src={worker.image}
              alt={worker.name}
              className="h-16 w-16 rounded-2xl border-2 border-white object-cover"
            />

            <div>

              <h3 className="text-xl font-black text-white">
                {worker.name}
              </h3>

              <p className="text-indigo-100">
                {worker.serviceType}
              </p>

            </div>

          </div>

          <span
            className={`rounded-full px-4 py-2 text-sm font-bold ${
              statusStyle[booking.status]
            }`}
          >
            {booking.status}
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="p-7">

        <div className="grid gap-5 md:grid-cols-2">

          <div className="flex items-center gap-3">

            <FiCalendar className="text-indigo-600" />

            <span>
              {new Date(
                booking.serviceDate
              ).toLocaleDateString()}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <FiClock className="text-indigo-600" />

            <span>
              {booking.servicePlan}
            </span>

          </div>

          <div className="flex items-center gap-3">

            <FiMapPin className="text-indigo-600" />

            <span>{worker.location}</span>

          </div>

          <div className="flex items-center gap-3">

            <FiUser className="text-indigo-600" />

            <span>
              {booking.duration} Hour(s)
            </span>

          </div>

        </div>

        {/* Payment */}

        <div className="mt-8 flex items-center justify-between rounded-2xl bg-slate-50 p-5">

          <div>

            <p className="text-sm text-slate-500">
              Total Amount
            </p>

            <h3 className="mt-2 text-3xl font-black text-slate-900">
              ₹{booking.totalAmount}
            </h3>

          </div>

          <span
            className={`rounded-full px-5 py-2 font-bold ${
              booking.paymentStatus === "Paid"
                ? "bg-emerald-100 text-emerald-700"
                : booking.paymentStatus === "Failed"
                ? "bg-red-100 text-red-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {booking.paymentStatus}
          </span>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1"
          >
            <FiEye />

            View Details

          </button>

          {booking.status !== "Completed" &&
            booking.status !== "Cancelled" && (

              <button
                onClick={handleCancel}
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl border border-red-200 bg-red-50 py-4 font-bold text-red-600 transition hover:bg-red-100"
              >

                <FiXCircle />

                Cancel Booking

              </button>

            )}

          {booking.status === "Completed" && (

            <button
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 py-4 font-bold text-emerald-700"
            >

              <FiCheckCircle />

              Service Completed

            </button>

          )}

        </div>

      </div>

    </motion.div>
  );
};

export default BookingCard;