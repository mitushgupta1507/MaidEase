import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiShield } from "react-icons/fi";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-4">
      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.08,
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-3xl bg-indigo-500 blur-xl opacity-40"></div>

        {/* Logo */}
        <div className="relative w-14 h-14 rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 flex items-center justify-center shadow-2xl">
          <FiShield className="text-white text-2xl" />
        </div>
      </motion.div>

      <div>
        <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-indigo-700 via-violet-600 to-purple-600 bg-clip-text text-transparent">
          MaidEase
        </h1>

        <p className="text-[11px] uppercase tracking-[0.35em] text-slate-500 mt-1">
          Premium Home Services
        </p>
      </div>
    </Link>
  );
};

export default Logo;