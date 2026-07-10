import { motion } from "framer-motion";

const PageHeader = ({
  badge,
  title,
  subtitle,
  actions,
  centered = false,
  className = "",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        mb-12
        flex
        flex-col
        gap-6
        ${
          centered
            ? "items-center text-center"
            : "lg:flex-row lg:items-center lg:justify-between"
        }
        ${className}
      `}
    >
      {/* Left */}

      <div>

        {badge && (
          <span
            className="
              inline-flex
              items-center
              rounded-full
              bg-indigo-100
              px-5
              py-2
              text-sm
              font-semibold
              text-indigo-700
            "
          >
            {badge}
          </span>
        )}

        <h1 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">

          {title}

        </h1>

        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">

            {subtitle}

          </p>
        )}

      </div>

      {/* Right */}

      {actions && (
        <div className="flex flex-wrap items-center gap-4">

          {actions}

        </div>
      )}

    </motion.div>
  );
};

export default PageHeader;