import { motion } from "framer-motion";
import {
  FiUsers,
  FiUserCheck,
  FiCalendar,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";

const formatCurrency = (value) => {
  const amount = Number(value || 0);

  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)}Cr`;
  }

  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }

  return `₹${amount.toLocaleString()}`;
};

const DashboardHero = ({ stats, loading = false }) => {
  const dashboardStats = stats?.stats || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 pt-36 pb-28">
      {/* Background */}

      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[150px]" />

      <div className="absolute -right-20 bottom-0 h-[450px] w-[450px] rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-xl">
              <FiTrendingUp />
              Admin Dashboard
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">
              Business

              <span className="block bg-gradient-to-r from-indigo-300 via-violet-300 to-purple-300 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Monitor bookings, revenue, workers and customers with real-time
              business analytics from one centralized dashboard.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {/* Total Users */}

            <div className="rounded-[34px] border border-white/10 bg-white/10 p-8 backdrop-blur-xl">
              <FiUsers className="text-5xl text-indigo-300" />

              <h2 className="mt-6 text-5xl font-black text-white">
                {loading
                  ? "..."
                  : (dashboardStats.totalUsers ?? 0).toLocaleString()}
              </h2>

              <p className="mt-3 text-slate-300">
                Registered Users
              </p>
            </div>

            {/* Workers */}

            <div className="rounded-[34px] bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 p-8 shadow-2xl">
              <FiUserCheck className="text-5xl text-white" />

              <h2 className="mt-6 text-5xl font-black text-white">
                {loading
                  ? "..."
                  : (dashboardStats.totalWorkers ?? 0).toLocaleString()}
              </h2>

              <p className="mt-3 text-indigo-100">
                Verified Workers
              </p>
            </div>

            {/* Bookings */}

            <div className="rounded-[34px] bg-white p-8 shadow-2xl">
              <FiCalendar className="text-5xl text-indigo-600" />

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                {loading
                  ? "..."
                  : (dashboardStats.totalBookings ?? 0).toLocaleString()}
              </h2>

              <p className="mt-3 text-slate-600">
                Total Bookings
              </p>
            </div>

            {/* Revenue */}

            <div className="rounded-[34px] bg-white p-8 shadow-2xl">
              <FiDollarSign className="text-5xl text-emerald-600" />

              <h2 className="mt-6 text-4xl font-black text-slate-900">
                {loading
                  ? "..."
                  : formatCurrency(dashboardStats.totalRevenue)}
              </h2>

              <p className="mt-3 text-slate-600">
                Total Revenue
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHero;