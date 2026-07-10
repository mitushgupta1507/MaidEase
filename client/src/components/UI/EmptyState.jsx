import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiInbox, FiArrowRight } from "react-icons/fi";

const EmptyState = ({
  icon: Icon = FiInbox,
  title = "Nothing Found",
  description = "There is no data available at the moment.",
  buttonText = "Go Back",
  buttonLink = "/",
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="flex justify-center py-20"
    >
      <div className="w-full max-w-3xl rounded-[36px] border border-slate-200 bg-white p-10 text-center shadow-[0_25px_70px_rgba(15,23,42,.08)]">

        {/* Icon */}

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 shadow-[0_20px_45px_rgba(79,70,229,.35)]">

          <Icon
            size={52}
            className="text-white"
          />

        </div>

        {/* Title */}

        <h2 className="mt-10 text-4xl font-black text-slate-900">

          {title}

        </h2>

        {/* Description */}

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">

          {description}

        </p>

        {/* Button */}

        <Link
          to={buttonLink}
          className="group mt-10 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-4 font-bold text-white shadow-[0_20px_40px_rgba(79,70,229,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(79,70,229,.45)]"
        >
          {buttonText}

          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

        </Link>

      </div>
    </motion.div>
  );
};

export default EmptyState;