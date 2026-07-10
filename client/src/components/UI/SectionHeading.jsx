import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`flex flex-col ${alignment[align]} ${className}`}
    >
      {/* Badge */}

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

      {/* Title */}

      <h2
        className="
          mt-6
          text-4xl
          font-black
          leading-tight
          text-slate-900
          md:text-5xl
          lg:text-6xl
        "
      >
        {title}

        {highlight && (
          <span
            className="
              block
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            {highlight}
          </span>
        )}
      </h2>

      {/* Description */}

      {description && (
        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;