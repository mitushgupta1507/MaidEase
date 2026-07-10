import mongoose from "mongoose";

const workerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Worker name is required"],
      trim: true,
    },

    age: {
      type: Number,
      required: [true, "Age is required"],
      min: 18,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    serviceType: {
      type: String,
      enum: ["Maid", "Babysitter", "Nanny"],
      required: true,
    },

    experience: {
      type: Number,
      required: [true, "Experience is required"],
      default: 0,
    },

    availability: {
      type: Boolean,
      default: true,
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    image: {
      type: String,
      default:
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    location: {
      type: String,
      required: [true, "Location is required"],
    },

    verified: {
      type: Boolean,
      default: false,
    },

    status: {
      type: String,
      enum: ["Active", "Pending", "Blocked"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);
// ===============================
// Database Indexes
// ===============================
workerSchema.index({ serviceType: 1 });
workerSchema.index({ location: 1 });
workerSchema.index({ price: 1 });
workerSchema.index({ rating: -1 });
workerSchema.index({ verified: 1 });
workerSchema.index({ availability: 1 });
workerSchema.index({ status: 1 });
workerSchema.index({ name: "text" });
const Worker = mongoose.model("Worker", workerSchema);

export default Worker;