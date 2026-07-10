import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { FiTrendingUp, FiDollarSign } from "react-icons/fi";

const fallbackRevenueData = [
  { month: "Jan", revenue: 180000 },
  { month: "Feb", revenue: 240000 },
  { month: "Mar", revenue: 210000 },
  { month: "Apr", revenue: 320000 },
  { month: "May", revenue: 390000 },
  { month: "Jun", revenue: 470000 },
  { month: "Jul", revenue: 520000 },
  { month: "Aug", revenue: 610000 },
  { month: "Sep", revenue: 590000 },
  { month: "Oct", revenue: 710000 },
  { month: "Nov", revenue: 790000 },
  { month: "Dec", revenue: 840000 },
];

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

const RevenueChart = ({ stats, loading = false }) => {
  const dashboardStats = stats?.stats || {};
  const revenueData = Array.isArray(stats?.monthlyRevenue) && stats.monthlyRevenue.length > 0
    ? stats.monthlyRevenue
    : fallbackRevenueData;

  const totalRevenue = Number(dashboardStats.totalRevenue || 0);
  const lastMonth = revenueData[revenueData.length - 1]?.revenue || 0;
  const previousMonth = revenueData[revenueData.length - 2]?.revenue || 0;
  const growth = previousMonth > 0 ? ((lastMonth - previousMonth) / previousMonth) * 100 : 0;
  const growthLabel = `${growth >= 0 ? "+" : ""}${growth.toFixed(1)}%`;

  return (
    <section className="pb-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,.08)]"
        >

          {/* Header */}

          <div className="flex flex-col gap-6 border-b border-slate-200 p-8 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">

                Revenue Analytics

              </span>

              <h2 className="mt-5 text-4xl font-black text-slate-900">

                Monthly Revenue

              </h2>

              <p className="mt-3 text-slate-500">

                Revenue generated throughout the year.

              </p>

            </div>

            <div className="flex gap-5">

              <div className="rounded-3xl bg-slate-50 p-5">

                <FiDollarSign className="text-3xl text-indigo-600" />

                <h3 className="mt-3 text-3xl font-black text-slate-900">

                  {loading ? "..." : formatCurrency(totalRevenue)}

                </h3>

                <p className="text-slate-500">

                  Total Revenue

                </p>

              </div>

              <div className="rounded-3xl bg-emerald-50 p-5">

                <FiTrendingUp className="text-3xl text-emerald-600" />

                <h3 className="mt-3 text-3xl font-black text-emerald-700">

                  {loading ? "..." : growthLabel}

                </h3>

                <p className="text-slate-500">

                  Growth

                </p>

              </div>

            </div>

          </div>

          {/* Chart */}

          <div className="h-[420px] p-6">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={revenueData}>

                <defs>

                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#4F46E5"
                      stopOpacity={0.45}
                    />

                    <stop
                      offset="100%"
                      stopColor="#4F46E5"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <CartesianGrid
                  strokeDasharray="5 5"
                  stroke="#E5E7EB"
                />

                <XAxis
                  dataKey="month"
                  tick={{ fill: "#64748B" }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fill: "#64748B" }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  formatter={(value) => [
                    `₹${value.toLocaleString()}`,
                    "Revenue",
                  ]}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#4F46E5"
                  strokeWidth={4}
                  fill="url(#revenueGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default RevenueChart;