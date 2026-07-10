const colors = {
  primary:
    "bg-indigo-100 text-indigo-700",

  success:
    "bg-emerald-100 text-emerald-700",

  warning:
    "bg-amber-100 text-amber-700",

  danger:
    "bg-red-100 text-red-700",

  info:
    "bg-sky-100 text-sky-700",

  purple:
    "bg-purple-100 text-purple-700",

  dark:
    "bg-slate-900 text-white",

  light:
    "bg-slate-100 text-slate-700",

  pink:
    "bg-pink-100 text-pink-700",

  orange:
    "bg-orange-100 text-orange-700",
};

const sizes = {
  sm: "px-3 py-1 text-xs",

  md: "px-4 py-2 text-sm",

  lg: "px-5 py-2.5 text-base",
};

const Badge = ({
  children,
  color = "primary",
  size = "md",
  rounded = "full",
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-semibold
        whitespace-nowrap
        transition-all
        duration-300
        ${colors[color]}
        ${sizes[size]}
        ${
          rounded === "full"
            ? "rounded-full"
            : "rounded-xl"
        }
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;