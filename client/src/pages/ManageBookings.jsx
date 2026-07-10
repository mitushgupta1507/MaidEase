import { useEffect, useMemo, useState } from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getAllBookings,
  updateBookingStatus,
} from "../services/bookingService";

const ManageBookings = () => {
  

  const [search, setSearch] = useState("");

  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  const [updatingId, setUpdatingId] = useState(null);

  // ==========================
  // Fetch Bookings
  // ==========================

  const fetchBookings = async () => {
    try {
      setLoading(true);

      const response = await getAllBookings();

      setBookings(response.bookings || []);
    } catch (error) {
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ==========================
  // Search
  // ==========================

  const filteredBookings = useMemo(() => {
    const query = search.toLowerCase();

    return bookings.filter((booking) => {
      const bookingId = booking._id || "";

      const customer =
        booking.user?.name || "";

      const worker =
        booking.worker?.name || "";

      const service =
        booking.worker?.serviceType || "";

      return (
        bookingId.toLowerCase().includes(query) ||
        customer.toLowerCase().includes(query) ||
        worker.toLowerCase().includes(query) ||
        service.toLowerCase().includes(query)
      );
    });
  }, [bookings, search]);

  // ==========================
  // Statistics
  // ==========================

  const stats = useMemo(() => {
    const total = bookings.length;

    const completed = bookings.filter(
      (b) => b.status === "Completed"
    ).length;

    const pending = bookings.filter(
      (b) => b.status === "Pending"
    ).length;

    const revenue = bookings
      .filter(
        booking =>
            booking.paymentStatus === "Paid"
      )
      .reduce(
        (sum, booking) =>
          sum + Number(booking.totalAmount || 0),
        0
      );

    return {
      total,
      completed,
      pending,
      revenue,
    };
  }, [bookings]);

  // ==========================
  // Status Badge
  // ==========================

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-700";

      case "Accepted":
        return "bg-blue-100 text-blue-700";

      case "In Progress":
        return "bg-purple-100 text-purple-700";

      case "Completed":
        return "bg-emerald-100 text-emerald-700";

      default:
        return "bg-red-100 text-red-700";
    }
  };

  // ==========================
  // Booking Status Flow
  // ==========================

  const getNextStatus = (status) => {
    switch (status) {
      case "Pending":
        return "Accepted";

      case "Accepted":
        return "In Progress";

      case "In Progress":
        return "Completed";

      default:
        return status;
    }
  };

  // ==========================
  // Update Status
  // ==========================

  const handleStatusUpdate = async (
    bookingId,
    currentStatus
  ) => {
    try {
      setUpdatingId(bookingId);

      const nextStatus =
        getNextStatus(currentStatus);

      const response =
        await updateBookingStatus(
          bookingId,
          nextStatus
        );

      setBookings((prev) =>
        prev.map((booking) =>
          booking._id === bookingId
            ? {
                ...booking,
                status:
                  response.booking?.status ||
                  nextStatus,
              }
            : booking
        )
      );

      toast.success(
        `Booking marked as ${nextStatus}`
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to update booking"
      );
    } finally {
      setUpdatingId(null);
    }
  };
  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-slate-50">

      {/* Hero */}

      <section className="relative overflow-hidden">

        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-16">

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

                Booking Management

              </span>

              <h1 className="mt-6 text-5xl font-black text-slate-900 lg:text-7xl">

                Manage

                <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

                  Bookings

                </span>

              </h1>

              <p className="mt-5 max-w-2xl text-lg text-slate-600">

                Track bookings, update statuses, monitor revenue and manage all customer reservations from one dashboard.

              </p>

            </div>

            <button
              className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-4 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105"
            >

              Export Report

            </button>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-[35px] bg-white p-8 shadow-xl">

            <h2 className="text-5xl font-black text-indigo-600">

              {stats.total}

            </h2>

            <p className="mt-3 text-slate-500">

              Total Bookings

            </p>

          </div>

          <div className="rounded-[35px] bg-white p-8 shadow-xl">

            <h2 className="text-5xl font-black text-emerald-600">

              {stats.completed}

            </h2>

            <p className="mt-3 text-slate-500">

              Completed

            </p>

          </div>

          <div className="rounded-[35px] bg-white p-8 shadow-xl">

            <h2 className="text-5xl font-black text-amber-500">

              {stats.pending}

            </h2>

            <p className="mt-3 text-slate-500">

              Pending

            </p>

          </div>

          <div className="rounded-[35px] bg-white p-8 shadow-xl">

            <h2 className="text-5xl font-black text-violet-600">

              ₹{stats.revenue.toLocaleString()}

            </h2>

            <p className="mt-3 text-slate-500">

              Revenue

            </p>

          </div>

        </div>

      </section>

      {/* Booking Table */}

      <section className="mx-auto max-w-7xl px-6 py-10 pb-24">

        <div className="overflow-hidden rounded-[35px] bg-white shadow-xl">

          <div className="border-b border-slate-100 p-8">

            <div className="flex flex-col justify-between gap-4 lg:flex-row">

              <h2 className="text-3xl font-bold text-slate-900">

                Booking Directory

              </h2>

              <input
                type="text"
                placeholder="Search bookings..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500 lg:w-96"
              />

            </div>

          </div>
          <div className="overflow-x-auto">

  {loading ? (

    <div className="flex h-60 items-center justify-center">

      <div className="text-center">

        <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>

        <p className="mt-5 font-semibold text-slate-500">

          Loading bookings...

        </p>

      </div>

    </div>

  ) : (

    <table className="w-full">

      <thead>

        <tr className="bg-slate-50">

          <th className="p-6 text-left">
            Booking ID
          </th>

          <th className="p-6 text-left">
            Customer
          </th>

          <th className="p-6 text-left">
            Worker
          </th>

          <th className="p-6 text-left">
            Service
          </th>

          <th className="p-6 text-left">
            Amount
          </th>

          <th className="p-6 text-left">
            Date
          </th>

          <th className="p-6 text-left">
            Status
          </th>

          <th className="p-6 text-left">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {filteredBookings.length === 0 ? (

          <tr>

            <td
              colSpan="8"
              className="p-12 text-center"
            >

              <div className="space-y-3">

                <h3 className="text-2xl font-bold text-slate-700">

                  No Bookings Found

                </h3>

                <p className="text-slate-500">

                  Try searching with another keyword.

                </p>

              </div>

            </td>

          </tr>

        ) : (

          filteredBookings.map((booking) => (

            <tr
              key={booking._id}
              className="border-b border-slate-100 transition hover:bg-slate-50"
            >

              <td className="p-6 font-bold text-indigo-600">

                BK-
                {booking._id
                  .slice(-6)
                  .toUpperCase()}

              </td>

              <td className="p-6">

                <div>

                  <h4 className="font-semibold text-slate-900">

                    {booking.user?.name || "N/A"}

                  </h4>

                  <p className="text-sm text-slate-500">

                    {booking.user?.email}

                  </p>

                </div>

              </td>

              <td className="p-6">

                <div>

                  <h4 className="font-semibold text-slate-900">

                    {booking.worker?.name || "N/A"}

                  </h4>

                  <p className="text-sm text-slate-500">

                    {booking.worker?.serviceType}

                  </p>

                </div>

              </td>

              <td className="p-6">

                {booking.servicePlan}

              </td>

              <td className="p-6 font-bold text-indigo-600">

                ₹
                {Number(
                  booking.totalAmount
                ).toLocaleString()}

              </td>

              <td className="p-6">

                {new Date(
                  booking.serviceDate
                ).toLocaleDateString()}

              </td>

              <td className="p-6">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(
                    booking.status
                  )}`}
                >

                  {booking.status}

                </span>

              </td>

              <td className="p-6">

                <div className="flex flex-wrap gap-2">

  <button
    className="rounded-xl bg-indigo-100 px-4 py-2 font-semibold text-indigo-700 transition hover:bg-indigo-200"
  >
    View
  </button>

  {booking.status !== "Completed" &&
    booking.status !== "Cancelled" && (

      <button
        disabled={updatingId === booking._id}
        onClick={() => {
          const nextStatus = {
            Pending: "Accepted",
            Accepted: "In Progress",
            "In Progress": "Completed",
          };

          handleStatusUpdate(
            booking._id,
            booking.status
          );
        }}
        className="rounded-xl bg-emerald-100 px-4 py-2 font-semibold text-emerald-700 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {updatingId === booking._id
          ? "Updating..."
          : booking.status === "Pending"
          ? "Accept"
          : booking.status === "Accepted"
          ? "Start"
          : "Complete"}
      </button>

    )}

</div>

              </td>

            </tr>

          ))

        )}

      </tbody>

    </table>

  )}

</div>

{/* Footer */}

<div className="flex items-center justify-between bg-slate-50 p-6">

  <span className="text-slate-500">

    Showing

    <span className="mx-1 font-bold text-slate-800">

      {filteredBookings.length}

    </span>

    booking(s)

  </span>

  <div className="flex gap-2">

    <button className="h-10 w-10 rounded-xl bg-white shadow transition hover:bg-slate-100">

      1

    </button>

    <button className="h-10 w-10 rounded-xl bg-indigo-600 text-white shadow">

      2

    </button>

    <button className="h-10 w-10 rounded-xl bg-white shadow transition hover:bg-slate-100">

      3

    </button>

  </div>

</div>

          </div>

        </section>

      </main>

      <Footer />

    </>

  );

};

export default ManageBookings;