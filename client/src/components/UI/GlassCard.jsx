import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
}) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        rounded-[32px]
        border
        border-white/40
        bg-white/70
        backdrop-blur-2xl
        shadow-[0_25px_60px_rgba(15,23,42,0.08)]
        transition-all
        duration-500
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;