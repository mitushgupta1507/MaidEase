import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  padding = "p-8",
  rounded = "rounded-[34px]",
  border = true,
  shadow = true,
}) => {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              scale: 1.01,
            }
          : {}
      }
      transition={{
        duration: 0.3,
      }}
      className={`
        bg-white
        ${padding}
        ${rounded}
        ${border ? "border border-slate-200" : ""}
        ${
          shadow
            ? "shadow-[0_25px_70px_rgba(15,23,42,.08)]"
            : ""
        }
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default Card;