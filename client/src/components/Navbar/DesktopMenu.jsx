import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiClock,
  FiUser,
  FiGrid,
} from "react-icons/fi";
import {
  getCurrentUser,
  isAuthenticated,
} from "../../services/authService";

const DesktopMenu = () => {
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

  return (
    <div className="hidden lg:flex items-center gap-2">
      {navItems.map((item) => (
        <NavLink key={item.path} to={item.path}>
          {({ isActive }) => (
            <motion.div
              whileHover={{
                y: -3,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className={`relative flex items-center gap-2 px-5 py-3 rounded-2xl overflow-hidden transition-all duration-300 ${
                isActive
                  ? "text-white shadow-xl"
                  : "text-slate-700 hover:text-indigo-700"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="navbarActive"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span className="relative z-10 text-lg">
                {item.icon}
              </span>

              <span className="relative z-10 font-semibold">
                {item.name}
              </span>
            </motion.div>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default DesktopMenu;