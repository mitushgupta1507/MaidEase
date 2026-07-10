import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

import { createWorker } from "../../services/workerService";

const initialState = {
  name: "",
  age: "",
  gender: "Female",
  serviceType: "Maid",
  experience: "",
  location: "",
  price: "",
  rating: 5,
  availability: true,
  verified: true,
  description: "",
  image: null,
};

const AddWorkerModal = ({
  open,
  onClose,
  onSuccess,
}) => {
  const [formData, setFormData] =
    useState(initialState);

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleImage = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.age ||
      !formData.location ||
      !formData.price ||
      !formData.description
    ) {
      return toast.error(
        "Please fill all required fields."
      );
    }

    try {
      console.log("START SUBMIT");

      setLoading(true);

      const data = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      console.log("FORMDATA");

      for (const pair of data.entries()) {
        console.log(pair[0], pair[1]);
      }

      console.log("CALLING API");

      const response = await createWorker(data);

      console.log("SUCCESS", response);

      resetForm();

      onClose();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to add worker."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>

      {open && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-[999] flex items-center justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-6"
        >

          <motion.div
            initial={{
              y: 40,
              scale: 0.9,
            }}
            animate={{
              y: 0,
              scale: 1,
            }}
            exit={{
              y: 40,
              scale: 0.9,
            }}
            transition={{
              duration: 0.25,
            }}
            
          >className="w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[36px] bg-white shadow-2xl"

            {/* Header */}

            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-8 py-6">

              <h2 className="text-3xl font-black text-white">
                Add New Worker
              </h2>

              <p className="mt-2 text-indigo-100">
                Register a new maid,
                babysitter or nanny.
              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="p-8"
            >

              <div className="grid gap-6 md:grid-cols-2">

                {/* Name */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Age */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Age
                  </label>

                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Gender */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                  >
                    <option>Female</option>
                    <option>Male</option>
                    <option>Other</option>
                  </select>

                </div>

                {/* Service */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Service Type
                  </label>

                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3"
                  >
                    <option>Maid</option>
                    <option>Babysitter</option>
                    <option>Nanny</option>
                  </select>

                </div>
                                {/* Experience */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Experience (Years)
                  </label>

                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Location */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Price */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Price (Per Day)
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Rating */}

                <div>

                  <label className="mb-2 block font-semibold">
                    Rating
                  </label>

                  <input
                    type="number"
                    min="0"
                    max="5"
                    step="0.1"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Image */}

                <div className="md:col-span-2">

                  <label className="mb-2 block font-semibold">
                    Worker Image
                  </label>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className="w-full rounded-2xl border border-slate-200 p-3"
                  />

                </div>

                {/* Description */}

                <div className="md:col-span-2">

                  <label className="mb-2 block font-semibold">
                    Description
                  </label>

                  <textarea
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none focus:border-indigo-500"
                  />

                </div>

                {/* Availability */}

                <div className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    name="availability"
                    checked={formData.availability}
                    onChange={handleChange}
                    className="h-5 w-5 accent-indigo-600"
                  />

                  <label className="font-semibold">
                    Available
                  </label>

                </div>

                {/* Verified */}

                <div className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    name="verified"
                    checked={formData.verified}
                    onChange={handleChange}
                    className="h-5 w-5 accent-indigo-600"
                  />

                  <label className="font-semibold">
                    Verified Worker
                  </label>

                </div>

              </div>

              <div className="mt-10 flex justify-end gap-4">

                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="rounded-2xl border border-slate-300 px-8 py-4 font-bold text-slate-700 transition hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 disabled:opacity-60"
                >
                  {loading
                    ? "Adding..."
                    : "Add Worker"}
                </button>

              </div>

            </form>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default AddWorkerModal;