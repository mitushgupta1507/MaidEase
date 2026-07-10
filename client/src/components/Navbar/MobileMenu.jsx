import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiUser,
  FiGrid,
  FiLogOut,
} from "react-icons/fi";

import {
  getCurrentUser,
  isAuthenticated,
  logoutUser,
} from "../../services/authService";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  const authenticated = isAuthenticated();
  const user = getCurrentUser();

  const navItems =
    authenticated && user?.role === "admin"
      ? [
          {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: <FiGrid />,
          },
          {
            name: "Workers",
            path: "/admin/workers",
            icon: <FiUsers />,
          },
          {
            name: "Users",
            path: "/admin/users",
            icon: <FiUser />,
          },
          {
            name: "Bookings",
            path: "/admin/bookings",
            icon: <FiCalendar />,
          },
        ]
      : [
          {
            name: "Home",
            path: "/",
            icon: <FiHome />,
          },
          {
            name: "Helpers",
            path: "/workers",
            icon: <FiUsers />,
          },
          {
            name: "Bookings",
            path: "/bookings",
            icon: <FiCalendar />,
          },
          {
            name: "History",
            path: "/booking-history",
            icon: <FiClock />,
          },
        ];

  const handleLogout = () => {
    logoutUser();
    setIsOpen(false);
    window.location.href = "/";
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden absolute left-0 right-0 top-[95px] px-5"
        >
          <div className="overflow-hidden rounded-[30px] border border-white/30 bg-white/85 backdrop-blur-2xl shadow-2xl">

            {/* Navigation */}
            <div className="space-y-3 p-5">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <motion.div
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-lg"
                          : "text-slate-700 hover:bg-indigo-50"
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>

                      <span className="font-semibold">
                        {item.name}
                      </span>
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </div>

            {/* Bottom */}
            <div className="space-y-4 border-t border-slate-200 p-5">

              {!authenticated ? (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsOpen(false)}
                    className="block w-full rounded-2xl border border-slate-300 py-4 text-center font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 py-4 font-bold text-white shadow-xl transition hover:scale-[1.02]"
                  >
                    Get Started
                    <FiArrowRight />
                  </Link>
                </>
              ) : (
                <>
                  {user?.role !== "admin" && (
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-3 rounded-2xl border border-indigo-200 py-4 font-semibold text-indigo-700 transition hover:bg-indigo-50"
                    >
                      <FiUser />
                      Profile
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 font-bold text-white transition hover:bg-red-600"
                  >
                    <FiLogOut />
                    Logout
                  </button>
                </>
              )}

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;