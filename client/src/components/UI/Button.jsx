import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 text-white shadow-[0_20px_40px_rgba(79,70,229,.35)] hover:shadow-[0_30px_60px_rgba(79,70,229,.45)]",

  secondary:
    "bg-white border border-slate-200 text-slate-700 hover:border-indigo-600 hover:text-indigo-600",

  success:
    "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-[0_20px_40px_rgba(16,185,129,.30)]",

  danger:
    "bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-[0_20px_40px_rgba(239,68,68,.30)]",

  dark:
    "bg-slate-900 text-white hover:bg-slate-800",

  outline:
    "border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-6 py-3 rounded-2xl",
  lg: "px-8 py-4 text-lg rounded-2xl",
};

const Button = ({
  children,
  icon: Icon,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  onClick,
}) => {
  return (
    <motion.button
      whileHover={
        disabled
          ? {}
          : {
              y: -3,
              scale: 1.02,
            }
      }
      whileTap={
        disabled
          ? {}
          : {
              scale: 0.98,
            }
      }
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-3
        font-bold
        transition-all
        duration-300
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${
          disabled
            ? "cursor-not-allowed opacity-60"
            : ""
        }
      `}
    >
      {Icon && <Icon size={20} />}

      {children}
    </motion.button>
  );
};

export default Button;