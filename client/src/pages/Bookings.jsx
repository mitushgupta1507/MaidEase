import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";

import BookingHero from "../components/Bookings/BookingHero";
import BookingStats from "../components/Bookings/BookingStats";
import BookingCard from "../components/Bookings/BookingCard";
import BookingTimeline from "../components/Bookings/BookingTimeline";

import {
  getMyBookings,
  createBooking,
} from "../services/bookingService";

const Bookings = () => {
  const location = useLocation();

  const selectedWorker = location.state?.worker || null;

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showBookingModal, setShowBookingModal] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [bookingForm, setBookingForm] = useState({
    bookingDate: "",
    bookingTime: "",
    hours: 1,
    address: "",
    notes: "",
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const data = await getMyBookings();

      setBookings(data.bookings || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setBookingForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBooking = async () => {
    if (!bookingForm.bookingDate)
      return toast.error("Select booking date");

    if (!bookingForm.bookingTime)
      return toast.error("Select booking time");

    try {
      setSubmitting(true);

      // Merge Date + Time
      const serviceDate = new Date(
        `${bookingForm.bookingDate}T${bookingForm.bookingTime}`
      );

      await createBooking({
        worker: selectedWorker._id,

        serviceDate,

        duration: Number(bookingForm.hours),

        servicePlan: "Hourly",

        totalAmount:
          Number(selectedWorker.price) *
          Number(bookingForm.hours),
      });

      toast.success("Booking created successfully");

      setShowBookingModal(false);

      setBookingForm({
        bookingDate: "",
        bookingTime: "",
        hours: 1,
        address: "",
        notes: "",
      });

      fetchBookings();

    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Booking failed"
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50">

      <BookingHero
        bookings={bookings}
        loading={loading}
      />

      <BookingStats
        bookings={bookings}
        loading={loading}
      />

      {selectedWorker && (
        <section className="pb-10">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="rounded-[32px] border border-indigo-100 bg-white p-8 shadow-xl">

              <h2 className="mb-6 text-3xl font-black">
                Selected Worker
              </h2>

              <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <img
                  src={selectedWorker.image}
                  alt={selectedWorker.name}
                  className="h-36 w-36 rounded-3xl object-cover"
                />

                <div className="flex-1">

                  <h3 className="text-2xl font-bold">
                    {selectedWorker.name}
                  </h3>

                  <p className="mt-2 font-semibold text-indigo-600">
                    {selectedWorker.serviceType}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-5">

                    <span>
                      ⭐ {selectedWorker.rating}
                    </span>

                    <span>
                      📍 {selectedWorker.location}
                    </span>

                    <span>
                      💼 {selectedWorker.experience} Years
                    </span>

                    <span className="font-bold text-indigo-600">
                      ₹{selectedWorker.price}/hr
                    </span>

                  </div>

                  <button
                    onClick={() =>
                      setShowBookingModal(true)
                    }
                    className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"
                  >
                    Continue Booking
                  </button>

                </div>

              </div>

            </div>

          </div>
        </section>
      )}

      {/* Booking Modal */}

      {showBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">

          <div className="w-full max-w-2xl rounded-[32px] bg-white p-8">

            <h2 className="mb-8 text-3xl font-black">
              Complete Your Booking
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block font-semibold">
                  Booking Date
                </label>

                <input
                  type="date"
                  name="bookingDate"
                  value={
                    bookingForm.bookingDate
                  }
                  onChange={handleChange}
                  className="w-full rounded-2xl border p-4"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Booking Time
                </label>

                <input
                  type="time"
                  name="bookingTime"
                  value={
                    bookingForm.bookingTime
                  }
                  onChange={handleChange}
                  className="w-full rounded-2xl border p-4"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Hours
                </label>

                <input
                  type="number"
                  min="1"
                  max="24"
                  name="hours"
                  value={
                    bookingForm.hours
                  }
                  onChange={handleChange}
                  className="w-full rounded-2xl border p-4"
                />

              </div>

              <div>

                <label className="mb-2 block font-semibold">
                  Total Price
                </label>

                <div className="rounded-2xl bg-indigo-50 p-4 text-xl font-bold text-indigo-700">

                  ₹
                  {selectedWorker.price *
                    bookingForm.hours}

                </div>

              </div>

              <div className="md:col-span-2">

                <label className="mb-2 block font-semibold">
                  Address
                </label>

                <textarea
                  rows="3"
                  name="address"
                  value={
                    bookingForm.address
                  }
                  onChange={handleChange}
                  className="w-full rounded-2xl border p-4"
                />

              </div>

              <div className="md:col-span-2">

                <label className="mb-2 block font-semibold">
                  Special Instructions
                </label>

                <textarea
                  rows="3"
                  name="notes"
                  value={
                    bookingForm.notes
                  }
                  onChange={handleChange}
                  className="w-full rounded-2xl border p-4"
                />

              </div>

              <div className="flex gap-4 md:col-span-2">

                <button
                  onClick={handleBooking}
                  disabled={submitting}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting
                    ? "Booking..."
                    : "Confirm Booking"}
                </button>

                <button
                  onClick={() => setShowBookingModal(false)}
                  className="flex-1 rounded-2xl border border-slate-300 py-4 font-bold text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>

              </div>
            </div>

          </div>

        </div>
      )}

      {/* Booking Cards */}

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-12 flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-black text-slate-900">
                My Bookings
              </h2>

              <p className="mt-3 text-slate-600">
                Manage your upcoming and completed bookings.
              </p>

            </div>

            <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
              {loading
                ? "Loading..."
                : `${bookings.length} Bookings`}
            </span>

          </div>

          {!loading && bookings.length === 0 ? (

            <div className="rounded-[34px] border border-dashed border-slate-300 bg-white p-16 text-center shadow-sm">

              <h3 className="text-3xl font-black text-slate-900">
                No Bookings Yet
              </h3>

              <p className="mt-4 text-slate-500">
                You haven't booked any maid, babysitter or nanny services yet.
              </p>

            </div>

          ) : (

            <div className="space-y-8">

              {loading ? (

                <div className="rounded-[34px] bg-white p-12 text-center text-slate-500 shadow-lg">
                  Loading bookings...
                </div>

              ) : (

                bookings.map((booking) => (
                  <BookingCard
                    key={booking._id}
                    booking={booking}
                  />
                ))

              )}

            </div>

          )}

        </div>
      </section>

      {/* Timeline */}

      <BookingTimeline />

    </main>
  );
};

export default Bookings;