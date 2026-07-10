import { motion } from "framer-motion";

const Skeleton = ({ className }) => (
  <motion.div
    animate={{
      opacity: [0.4, 1, 0.4],
    }}
    transition={{
      repeat: Infinity,
      duration: 1.5,
    }}
    className={`rounded-xl bg-slate-200 ${className}`}
  />
);

const LoadingSkeleton = ({
  type = "cards",
  count = 6,
}) => {
  if (type === "hero") {
    return (
      <section className="bg-slate-100 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <Skeleton className="h-8 w-44" />

          <Skeleton className="mt-8 h-16 w-2/3" />

          <Skeleton className="mt-5 h-6 w-full" />

          <Skeleton className="mt-3 h-6 w-5/6" />

          <Skeleton className="mt-10 h-14 w-52 rounded-2xl" />

        </div>

      </section>
    );
  }

  if (type === "table") {
    return (
      <div className="space-y-5">

        {Array.from({ length: count }).map((_, index) => (

          <div
            key={index}
            className="flex items-center gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <Skeleton className="h-16 w-16 rounded-2xl" />

            <div className="flex-1">

              <Skeleton className="h-5 w-56" />

              <Skeleton className="mt-3 h-4 w-40" />

            </div>

            <Skeleton className="h-10 w-28 rounded-full" />

          </div>

        ))}

      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {Array.from({ length: count }).map((_, index) => (

        <div
          key={index}
          className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-lg"
        >

          <Skeleton className="h-56 w-full rounded-none" />

          <div className="p-7">

            <Skeleton className="h-7 w-44" />

            <Skeleton className="mt-5 h-5 w-32" />

            <Skeleton className="mt-8 h-4 w-full" />

            <Skeleton className="mt-3 h-4 w-5/6" />

            <Skeleton className="mt-8 h-12 w-full rounded-2xl" />

          </div>

        </div>

      ))}

    </div>
  );
};

export default LoadingSkeleton;