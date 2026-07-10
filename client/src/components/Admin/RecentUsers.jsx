import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiCalendar,
  FiEye,
} from "react-icons/fi";

const statusColor = {
  Active: "bg-emerald-100 text-emerald-700",
  Pending: "bg-amber-100 text-amber-700",
};

const RecentUsers = ({ users = [], loading = false }) => {
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

          <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

            <div>

              <h2 className="text-3xl font-black text-slate-900">

                Recent Users

              </h2>

              <p className="mt-2 text-slate-500">

                Newly registered customers

              </p>

            </div>

            <button className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700">

              View All

            </button>

          </div>

          {/* Users */}

          <div className="divide-y divide-slate-100">

            {loading ? (
              <div className="p-8 text-center text-slate-500">Loading users...</div>
            ) : users.length === 0 ? (
              <div className="p-8 text-center text-slate-500">No recent users found.</div>
            ) : users.map((user, index) => (

              <motion.div
                key={user._id || user.id}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex flex-col gap-6 p-8 transition hover:bg-slate-50 lg:flex-row lg:items-center lg:justify-between"
              >

                {/* Left */}

                <div className="flex items-center gap-5">

                  <img
                    src={user.image || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"}
                    alt={user.name}
                    className="h-20 w-20 rounded-3xl object-cover"
                  />

                  <div>

                    <h3 className="text-xl font-black text-slate-900">

                      {user.name}

                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-slate-500">

                      <FiMail />

                      {user.email}

                    </div>

                    <div className="mt-2 flex items-center gap-2 text-slate-500">

                      <FiPhone />

                      {user.phone || "N/A"}

                    </div>

                  </div>

                </div>

                {/* Right */}

                <div className="flex flex-wrap items-center gap-5">

                  <div className="flex items-center gap-2 text-slate-600">

                    <FiCalendar />

                    {new Date(user.createdAt).toLocaleDateString()}

                  </div>

                  <span className="rounded-full bg-emerald-100 px-4 py-2 font-semibold text-emerald-700">
                    Active
                  </span>

                  <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 transition hover:bg-indigo-600 hover:text-white">

                    <FiEye />

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

export default RecentUsers;