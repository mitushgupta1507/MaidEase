import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMenu,
  FiSearch,
  FiArrowRight,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

import Logo from "./Navbar/Logo";
import DesktopMenu from "./Navbar/DesktopMenu";
import MobileMenu from "./Navbar/MobileMenu";

import {
  getCurrentUser,
  isAuthenticated,
  logoutUser,
} from "../services/authService";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const authenticated = isAuthenticated();
  const user = getCurrentUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    window.location.href = "/";
  };

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">

          <div
            className={`rounded-[32px] transition-all duration-500 ${
              scrolled
                ? "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl"
                : "bg-white/60 backdrop-blur-xl border border-white/30"
            }`}
          >

            <div className="h-[88px] px-8 flex items-center justify-between">

              {/* Logo */}
              <Logo />

              {/* Desktop Menu */}
              <DesktopMenu />

              {/* Right Side */}
              <div className="hidden lg:flex items-center gap-4">

                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-2xl bg-slate-100 hover:bg-indigo-50 flex items-center justify-center text-slate-700 hover:text-indigo-600 transition-all duration-300"
                >
                  <FiSearch size={20} />
                </motion.button>

                {!authenticated ? (
                  <>
                    <Link
                      to="/login"
                      className="font-semibold text-slate-700 hover:text-indigo-600 transition-all"
                    >
                      Login
                    </Link>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <Link
                        to="/signup"
                        className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-7 py-4 font-bold text-white shadow-2xl"
                      >
                        Get Started

                        <FiArrowRight className="transition-all duration-300 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {user?.role !== "admin" && (
                      <Link
                        to="/profile"
                        className="flex items-center gap-2 rounded-2xl border border-indigo-200 px-5 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
                      >
                        <FiUser />
                        Profile
                      </Link>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={handleLogout}
                      className="flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-3 font-bold text-white shadow-xl transition hover:bg-red-600"
                    >
                      <FiLogOut />
                      Logout
                    </motion.button>
                  </>
                )}

              </div>

              {/* Mobile Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-12 h-12 rounded-2xl bg-slate-100 hover:bg-indigo-100 transition-all duration-300 flex items-center justify-center"
              >
                <FiMenu size={24} />
              </button>

            </div>

          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-[120px]" />
    </>
  );
};

export default Navbar;