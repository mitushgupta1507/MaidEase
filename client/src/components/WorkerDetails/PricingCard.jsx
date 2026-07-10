import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiShield,
} from "react-icons/fi";

import { createBooking } from "../../services/bookingService";
import { useAuth } from "../../Context/AuthContext";

const PricingCard = ({ worker }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const [bookingData, setBookingData] = useState({
    servicePlan: "Daily",
    serviceDate: today,
  });

  if (!worker) return null;

  const getPrice = (plan) => {
    switch (plan) {
      case "Hourly":
        return Math.round(worker.price / 8);

      case "Daily":
        return worker.price;

      case "Weekly":
        return worker.price * 7;

      case "Monthly":
        return worker.price * 30;

      default:
        return worker.price;
    }
  };

  const getDuration = (plan) => {
    switch (plan) {
      case "Hourly":
        return 1;

      case "Daily":
        return 1;

      case "Weekly":
        return 7;

      case "Monthly":
        return 30;

      default:
        return 1;
    }
  };

  const totalAmount = getPrice(bookingData.servicePlan);

  const handleBooking = async () => {
    if (!isAuthenticated) {
      toast.error("Please login first.");
      navigate("/login");
      return;
    }

    if (!bookingData.serviceDate) {
      toast.error("Please select service date.");
      return;
    }

    try {
      setLoading(true);

      const response = await createBooking({
        worker: worker._id,
        serviceDate: bookingData.serviceDate,
        duration: getDuration(bookingData.servicePlan),
        servicePlan: bookingData.servicePlan,
        totalAmount,
      });

      toast.success(response.message || "Booking Successful");

      setTimeout(() => {
        navigate("/bookings");
      }, 1200);
    } catch (error) {
      toast.error(error.response?.data?.message || "Booking Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
              <FiCalendar />
              Booking Information
            </span>

            <h2 className="mt-8 text-4xl font-black text-slate-900">Service Pricing</h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-600">
              Choose a flexible booking plan that best suits your household requirements. Transparent pricing with no hidden charges.
            </p>

            <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {['Hourly', 'Daily', 'Weekly', 'Monthly'].map((plan) => (
                <button
                  key={plan}
                  type="button"
                  onClick={() =>
                    setBookingData((prev) => ({
                      ...prev,
                      servicePlan: plan,
                    }))
                  }
                  className={`cursor-pointer rounded-3xl border p-7 text-left transition-all duration-300 hover:border-indigo-500 ${
                    bookingData.servicePlan === plan
                      ? "border-indigo-600 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 text-white shadow-2xl"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  {(plan === "Daily" || plan === "Hourly") && (
                    <span
                      className={`rounded-full px-4 py-1 text-sm ${
                        bookingData.servicePlan === plan
                          ? "bg-white/20 text-white"
                          : "bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      {plan === "Daily" ? "Most Popular" : "Flexible"}
                    </span>
                  )}

                  <h3
                    className={`mt-5 text-lg font-bold ${
                      bookingData.servicePlan === plan ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {plan}
                  </h3>

                  <h2
                    className={`mt-4 text-5xl font-black ${
                      bookingData.servicePlan === plan ? "text-white" : "text-indigo-600"
                    }`}
                  >
                    ₹{getPrice(plan).toLocaleString()}
                  </h2>

                  <p
                    className={`mt-2 ${
                      bookingData.servicePlan === plan ? "text-indigo-100" : "text-slate-500"
                    }`}
                  >
                    {plan === "Hourly"
                      ? "Per Hour"
                      : plan === "Daily"
                      ? "Per Day"
                      : plan === "Weekly"
                      ? "Per Week"
                      : "Per Month"}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-12">
              <label className="mb-3 block font-semibold text-slate-700">
                Preferred Service Date
              </label>

              <input
                type="date"
                min={today}
                value={bookingData.serviceDate}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    serviceDate: e.target.value,
                  }))
                }
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white"
              />
            </div>

            <div className="mt-14 grid md:grid-cols-2 gap-5">
              {[
                "Verified Professional",
                "Background Checked",
                "Free Cancellation",
                "Instant Confirmation",
                "24×7 Customer Support",
                "Secure Payments",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5">
                  <FiCheckCircle className="text-xl text-emerald-500" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-28 h-fit rounded-[36px] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 p-8 shadow-[0_35px_80px_rgba(79,70,229,.35)]"
          >
            <h2 className="text-3xl font-black text-white">Book This Helper</h2>

            <p className="mt-4 leading-8 text-indigo-100">
              Confirm your booking in just a few clicks and hire a trusted professional instantly.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                <FiClock className="text-2xl text-white" />
                <div>
                  <h4 className="font-bold text-white">Availability</h4>
                  <p className="text-indigo-100">
                    {worker.availability ? "Available Today" : "Currently Unavailable"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                <FiShield className="text-2xl text-white" />
                <div>
                  <h4 className="font-bold text-white">Secure Booking</h4>
                  <p className="text-indigo-100">Protected by MaidEase</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur-xl">
                <FiCreditCard className="text-2xl text-white" />
                <div>
                  <h4 className="font-bold text-white">Easy Payments</h4>
                  <p className="text-indigo-100">UPI • Cards • Net Banking</p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-3xl bg-white/10 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Booking Summary</h3>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-indigo-100">
                  <span>Selected Plan</span>
                  <span className="font-semibold text-white">{bookingData.servicePlan}</span>
                </div>

                <div className="flex justify-between text-indigo-100">
                  <span>Service Date</span>
                  <span className="font-semibold text-white">{bookingData.serviceDate}</span>
                </div>

                <div className="flex justify-between text-indigo-100">
                  <span>Duration</span>
                  <span className="font-semibold text-white">
                    {bookingData.servicePlan === "Hourly"
                      ? "1 Hour"
                      : `${getDuration(bookingData.servicePlan)} Day${
                          getDuration(bookingData.servicePlan) > 1 ? "s" : ""
                        }`}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-white/20 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-indigo-100">Total Amount</span>
                  <span className="text-4xl font-black text-white">₹{totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              disabled={loading || !worker.availability}
              className="mt-10 w-full rounded-2xl bg-white py-5 text-lg font-black text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Booking..." : worker.availability ? "Book Now" : "Unavailable"}
            </button>

            <p className="mt-5 text-center text-sm text-indigo-100">
              No hidden charges • Instant confirmation
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;