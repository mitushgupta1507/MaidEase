import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiDollarSign,
  FiStar,
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

const TopWorkers = ({ workers = [], loading = false }) => {
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

                Top Performing Workers

              </h2>

              <p className="mt-2 text-slate-500">

                Highest rated professionals this month

              </p>

            </div>

            <button className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">

              View All

            </button>

          </div>

          {/* Cards */}

          <div className="grid gap-8 p-8 md:grid-cols-2 xl:grid-cols-4">

            {loading ? (
              <div className="p-8 text-center text-slate-500">Loading workers...</div>
            ) : workers.length === 0 ? (
              <div className="p-8 text-center text-slate-500">No top workers found.</div>
            ) : workers.map((worker, index) => (

              <motion.div
                key={worker._id || worker.id}
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
                  delay: index * .12,
                }}
                whileHover={{
                  y: -10,
                }}
                className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg transition-all hover:shadow-2xl"
              >

                {/* Badge */}

                <div className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">

                  {`#${index + 1}`}

                </div>

                {/* Image */}

                <img
                  src={worker.image}
                  alt={worker.name}
                  className="h-64 w-full object-cover"
                />

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-2xl font-black text-slate-900">

                    {worker.name}

                  </h3>

                  <p className="mt-2 font-semibold text-indigo-600">

                    {worker.serviceType || "Professional Worker"}

                  </p>

                  {/* Rating */}

                  <div className="mt-6 flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <FiStar className="fill-yellow-400 text-yellow-400" />

                      <span className="font-bold">

                        {Number(worker.rating || 0).toFixed(1)}

                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <FiAward className="text-indigo-600" />

                      <span className="font-semibold">

                        Elite

                      </span>

                    </div>

                  </div>

                  {/* Stats */}

                  <div className="mt-8 space-y-4">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2 text-slate-600">

                        <FiCalendar />

                        Bookings

                      </div>

                      <span className="font-bold">

                        {worker.bookings || 0}

                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-2 text-slate-600">

                        <FiDollarSign />

                        Earnings

                      </div>

                      <span className="font-black text-emerald-600">

                        {formatCurrency(worker.earnings || worker.price * (worker.bookings || 0))}

                      </span>

                    </div>

                  </div>

                  {/* Button */}

                  <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1">

                    View Profile

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default TopWorkers;