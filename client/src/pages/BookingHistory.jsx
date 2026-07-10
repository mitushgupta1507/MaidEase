import { useCallback, useEffect, useMemo, useState } from "react";

import BookingCard from "../components/Bookings/BookingCard";
import { getMyBookings } from "../services/bookingService";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = useCallback(async () => {
    try {
      const response = await getMyBookings();

      setBookings(response?.bookings || []);
    } catch (error) {
      console.error("Failed to fetch booking history:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const sortedBookings = useMemo(() => {
    return [...bookings].sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    );
  }, [bookings]);

  return (
    <main className="min-h-screen bg-slate-50 py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-12">

          <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
            Booking History
          </span>

          <h1 className="mt-6 text-5xl font-black text-slate-900">
            Your Previous Bookings
          </h1>

          <p className="mt-4 text-lg text-slate-500">
            {loading
              ? "Loading..."
              : `${sortedBookings.length} Booking(s) Found`}
          </p>

        </div>

        {/* Loading */}

        {loading ? (
          <div className="rounded-[34px] bg-white p-16 text-center shadow-xl">

            <h2 className="text-3xl font-black text-slate-900">
              Loading Bookings...
            </h2>

            <p className="mt-4 text-slate-500">
              Please wait while we fetch your bookings.
            </p>

          </div>
        ) : sortedBookings.length > 0 ? (
          <div className="space-y-8">

            {sortedBookings.map((booking) => (
              <BookingCard
                key={booking._id}
                booking={booking}
              />
            ))}

          </div>
        ) : (
          <div className="rounded-[34px] bg-white p-16 text-center shadow-xl">

            <h2 className="text-3xl font-black text-slate-900">
              No Bookings Yet
            </h2>

            <p className="mt-4 text-slate-500">
              Your booking history will appear here after you
              book your first service.
            </p>

          </div>
        )}

      </div>

    </main>
  );
};

export default BookingHistory;