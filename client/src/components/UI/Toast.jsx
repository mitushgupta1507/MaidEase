import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiAlertTriangle,
  FiX,
} from "react-icons/fi";

const variants = {
  success: {
    icon: FiCheckCircle,
    iconColor: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    title: "text-emerald-700",
  },

  error: {
    icon: FiAlertCircle,
    iconColor: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    title: "text-red-700",
  },

  warning: {
    icon: FiAlertTriangle,
    iconColor: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    title: "text-amber-700",
  },

  info: {
    icon: FiInfo,
    iconColor: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    title: "text-indigo-700",
  },
};

const Toast = ({
  show,
  onClose,
  title = "Notification",
  message = "",
  type = "success",
  duration = 3000,
}) => {
  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [show, duration, onClose]);

  const theme = variants[type] || variants.success;
  const Icon = theme.icon;

  return (
    <AnimatePresence>

      {show && (

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.9,
          }}
          transition={{
            duration: 0.25,
          }}
          className="fixed top-6 right-6 z-[9999]"
        >

          <div
            className={`
              w-[380px]
              rounded-3xl
              border
              p-5
              shadow-[0_25px_60px_rgba(15,23,42,.15)]
              backdrop-blur-xl
              ${theme.bg}
              ${theme.border}
            `}
          >

            <div className="flex items-start gap-4">

              {/* Icon */}

              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  shadow-md
                  ${theme.iconColor}
                `}
              >

                <Icon size={24} />

              </div>

              {/* Content */}

              <div className="flex-1">

                <h3
                  className={`text-lg font-black ${theme.title}`}
                >

                  {title}

                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">

                  {message}

                </p>

              </div>

              {/* Close */}

              <button
                onClick={onClose}
                className="rounded-xl p-2 text-slate-400 transition hover:bg-white hover:text-slate-700"
              >

                <FiX size={18} />

              </button>

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default Toast;