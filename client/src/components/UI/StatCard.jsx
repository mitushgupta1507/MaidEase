import { motion } from "framer-motion";
import { FiTrendingUp } from "react-icons/fi";

const colorVariants = {
  indigo: {
    gradient: "from-indigo-600 via-violet-600 to-purple-600",
    badge: "bg-indigo-100 text-indigo-700",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  orange: {
    gradient: "from-orange-500 to-amber-500",
    badge: "bg-orange-100 text-orange-700",
  },
  red: {
    gradient: "from-red-500 to-rose-500",
    badge: "bg-red-100 text-red-700",
  },
  pink: {
    gradient: "from-pink-500 to-rose-500",
    badge: "bg-pink-100 text-pink-700",
  },
  sky: {
    gradient: "from-sky-500 to-cyan-500",
    badge: "bg-sky-100 text-sky-700",
  },
};

const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
  color = "indigo",
  progress = 80,
}) => {
  const theme = colorVariants[color] || colorVariants.indigo;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
      className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,.08)]"
    >
      {/* Top Gradient */}

      <div
        className={`h-2 bg-gradient-to-r ${theme.gradient}`}
      />

      <div className="p-8">

        {/* Top */}

        <div className="flex items-center justify-between">

          <div
            className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${theme.gradient} text-white shadow-xl`}
          >
            {Icon && <Icon size={30} />}
          </div>

          {change && (
            <div
              className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold ${theme.badge}`}
            >
              <FiTrendingUp />

              {change}
            </div>
          )}

        </div>

        {/* Value */}

        <h2 className="mt-8 text-5xl font-black text-slate-900">

          {value}

        </h2>

        {/* Title */}

        <p className="mt-3 text-lg font-semibold text-slate-600">

          {title}

        </p>

        {/* Progress */}

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${progress}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className={`h-full rounded-full bg-gradient-to-r ${theme.gradient}`}
          />

        </div>

      </div>

    </motion.div>
  );
};

export default StatCard;