import { motion } from "framer-motion";
import {
  FiCalendar,
  FiDollarSign,
  FiStar,
  FiHeart,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  {
    title: "Total Bookings",
    value: "32",
    icon: FiCalendar,
    color: "from-indigo-600 via-violet-600 to-purple-600",
    change: "+18%",
  },
  {
    title: "Total Spent",
    value: "₹48.5K",
    icon: FiDollarSign,
    color: "from-emerald-500 to-teal-500",
    change: "+₹6,200",
  },
  {
    title: "Average Rating",
    value: "4.9",
    icon: FiStar,
    color: "from-amber-500 to-orange-500",
    change: "+0.2",
  },
  {
    title: "Favourite Helpers",
    value: "12",
    icon: FiHeart,
    color: "from-pink-500 to-rose-500",
    change: "+3",
  },
];

const HistoryStats = () => {
  return (
    <section className="-mt-16 relative z-20 pb-14">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: .5,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group overflow-hidden rounded-[34px] border border-white/40 bg-white/80 backdrop-blur-2xl shadow-[0_25px_70px_rgba(15,23,42,.08)]"
              >

                {/* Top Gradient */}

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

                  <h2 className="mt-8 text-5xl font-black text-slate-900">

                    {item.value}

                  </h2>

                  <p className="mt-3 text-lg font-semibold text-slate-600">

                    {item.title}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
};

export default HistoryStats;