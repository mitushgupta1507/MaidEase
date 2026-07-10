import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const PrimaryButton = ({
  to,
  children,
  fullWidth = false,
  className = "",
}) => {
  const classes = `
    inline-flex items-center justify-center gap-3
    rounded-2xl
    px-8
    py-4
    font-bold
    text-white
    bg-gradient-to-r
    from-indigo-600
    via-violet-600
    to-purple-600
    shadow-[0_20px_40px_rgba(79,70,229,0.35)]
    hover:shadow-[0_30px_60px_rgba(79,70,229,0.45)]
    transition-all
    duration-300
    ${fullWidth ? "w-full" : ""}
    ${className}
  `;

  if (to) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        <Link to={to} className={classes}>
          {children}
          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
      <FiArrowRight />
    </motion.button>
  );
};

export default PrimaryButton;