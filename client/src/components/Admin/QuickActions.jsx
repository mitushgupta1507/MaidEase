import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiUserPlus,
  FiUsers,
  FiCalendar,
  FiDollarSign,
  FiBarChart2,
  FiSettings,
  FiArrowRight,
} from "react-icons/fi";

const actions = [
  {
    title: "Add Worker",
    description: "Register and verify a new worker.",
    icon: FiUserPlus,
    color: "from-indigo-600 via-violet-600 to-purple-600",
    path: "/admin/workers",
  },
  {
    title: "Manage Users",
    description: "View and manage customer accounts.",
    icon: FiUsers,
    color: "from-sky-500 to-cyan-500",
    path: "/admin/users",
  },
  {
    title: "Bookings",
    description: "Track and manage all bookings.",
    icon: FiCalendar,
    color: "from-emerald-500 to-teal-500",
    path: "/admin/bookings",
  },
  {
    title: "Revenue",
    description: "View revenue reports and financial overview.",
    icon: FiDollarSign,
    color: "from-orange-500 to-amber-500",
    path: "/admin/dashboard",
  },
  {
    title: "Analytics",
    description: "Business insights and platform performance.",
    icon: FiBarChart2,
    color: "from-pink-500 to-rose-500",
    path: "/admin/dashboard",
  },
  {
    title: "Settings",
    description: "Configure platform preferences.",
    icon: FiSettings,
    color: "from-slate-600 to-slate-800",
    path: "/profile",
  },
];
const QuickActions = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="rounded-full bg-indigo-100 px-5 py-2 font-semibold text-indigo-700">
            Quick Actions
          </span>

          <h2 className="mt-5 text-5xl font-black text-slate-900">
            Admin Shortcuts
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Access frequently used management tools from one centralized
            location.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {actions.map((action, index) => {
            const Icon = action.icon;

            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-[34px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-[0_30px_70px_rgba(15,23,42,.12)]"
              >
                {/* Icon */}

                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${action.color} text-white shadow-xl`}
                >
                  <Icon size={34} />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-3xl font-black text-slate-900">
                  {action.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-8 text-slate-600">
                  {action.description}
                </p>

                {/* Button */}

                <Link
                  to={action.path}
                  className={`mt-8 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r ${action.color} px-6 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  Open

                  <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;