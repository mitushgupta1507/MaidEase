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

const DashboardStats = ({ stats, loading = false }) => {
  const dashboardStats = stats?.stats || {};

  const statCards = [
    {
      title: "Total Users",
      value: loading ? (
        <div className="h-10 w-24 animate-pulse rounded bg-slate-200"></div>
      ) : (
        (dashboardStats.totalUsers ?? 0).toLocaleString()
      ),
      change: "+12.4%",
      icon: FiUsers,
      color: "from-indigo-600 via-violet-600 to-purple-600",
      progress: 92,
    },
    {
      title: "Verified Workers",
      value: loading ? (
        <div className="h-10 w-24 animate-pulse rounded bg-slate-200"></div>
      ) : (
        (dashboardStats.totalWorkers ?? 0).toLocaleString()
      ),
      change: "+8.1%",
      icon: FiUserCheck,
      color: "from-emerald-500 to-teal-500",
      progress: 84,
    },
    {
      title: "Bookings",
      value: loading ? (
        <div className="h-10 w-24 animate-pulse rounded bg-slate-200"></div>
      ) : (
        (dashboardStats.totalBookings ?? 0).toLocaleString()
      ),
      change: "+16.8%",
      icon: FiCalendar,
      color: "from-orange-500 to-amber-500",
      progress: 78,
    },
    {
      title: "Revenue",
      value: loading ? (
        <div className="h-10 w-24 animate-pulse rounded bg-slate-200"></div>
      ) : (
        formatCurrency(dashboardStats.totalRevenue)
      ),
      change: "+24.6%",
      icon: FiDollarSign,
      color: "from-pink-500 via-rose-500 to-red-500",
      progress: 96,
    },
  ];

  return (
    <section className="relative z-20 -mt-16 pb-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 35,
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
                  duration: 0.5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group overflow-hidden rounded-[34px] border border-white/40 bg-white/80 shadow-[0_25px_70px_rgba(15,23,42,.08)] backdrop-blur-2xl transition-all duration-300"
              >
                <div
                  className={`h-2 w-full bg-gradient-to-r ${item.color}`}
                />

                <div className="p-8">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color} text-white shadow-xl`}
                    >
                      <Icon size={30} />
                    </div>

                    <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-sm font-bold text-emerald-700">
                      <FiTrendingUp />
                      {item.change}
                    </div>
                  </div>

                  <div className="mt-8">
                    {loading ? (
                      <div className="h-10 w-24 animate-pulse rounded-xl bg-slate-200"></div>
                    ) : (
                      <h2 className="text-5xl font-black text-slate-900">
                        {item.value}
                      </h2>
                    )}
                  </div>

                  <p className="mt-3 text-lg font-semibold text-slate-600">
                    {item.title}
                  </p>

                  <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.progress}%`,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.2,
                        duration: 1,
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DashboardStats;