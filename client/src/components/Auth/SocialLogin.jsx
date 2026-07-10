import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="w-full">

      {/* Divider */}

      <div className="relative my-8">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200"></div>
        </div>

        <div className="relative flex justify-center">

          <span className="bg-white px-6 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">

            Or Continue With

          </span>

        </div>

      </div>

      {/* Buttons */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        {/* Google */}

        <motion.button
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            flex
            items-center
            justify-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-4
            shadow-lg
            transition-all
            duration-300
            hover:border-indigo-500
            hover:shadow-xl
          "
        >

          <FcGoogle size={28} />

          <span className="font-semibold text-slate-700 group-hover:text-indigo-700">

            Google

          </span>

        </motion.button>

        {/* GitHub */}

        <motion.button
          whileHover={{
            y: -3,
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            group
            flex
            items-center
            justify-center
            gap-4
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-6
            py-4
            shadow-lg
            transition-all
            duration-300
            hover:border-indigo-500
            hover:shadow-xl
          "
        >

          <FaGithub
            size={26}
            className="text-slate-800"
          />

          <span className="font-semibold text-slate-700 group-hover:text-indigo-700">

            GitHub

          </span>

        </motion.button>

      </div>

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-slate-500">

        Secure authentication powered by{" "}

        <span className="font-semibold text-indigo-600">

          MaidEase

        </span>

      </p>

    </div>
  );
};

export default SocialLogin;