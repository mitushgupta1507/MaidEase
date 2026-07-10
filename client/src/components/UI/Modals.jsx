import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  const sizes = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-7xl",
  };

  return (
    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-6"
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 40,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={(e) => e.stopPropagation()}
            className={`
              relative
              w-full
              ${sizes[size]}
              overflow-hidden
              rounded-[34px]
              border
              border-slate-200
              bg-white
              shadow-[0_40px_90px_rgba(15,23,42,.25)]
            `}
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

              <h2 className="text-3xl font-black text-slate-900">

                {title}

              </h2>

              <button
                onClick={onClose}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition hover:bg-red-500 hover:text-white"
              >

                <FiX size={22} />

              </button>

            </div>

            {/* Body */}

            <div className="max-h-[75vh] overflow-y-auto p-8">

              {children}

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default Modal;