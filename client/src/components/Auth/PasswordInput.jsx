import { useState } from "react";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label className="mb-3 block font-bold text-slate-700">
        {label}
      </label>

      <div className="group relative">
        <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600" />

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          required
          className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-14 pr-14 outline-none transition-all duration-300 focus:border-indigo-600 focus:bg-white focus:ring-4 focus:ring-indigo-100"
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500"
        >
          {show ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;