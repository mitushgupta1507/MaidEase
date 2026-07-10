import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    worker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Worker",
      required: true,
    },

    serviceDate: {
      type: Date,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    servicePlan: {
      type: String,
      enum: ["Hourly", "Daily", "Weekly", "Monthly"],
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "Accepted",
        "In Progress",
        "Completed",
        "Cancelled",
      ],
      default: "Pending",
    },

    paymentStatus: {
      type: String,
      enum: ["Pending", "Paid", "Failed"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);
// ===============================
// Database Indexes
// ===============================
bookingSchema.index({ user: 1 });
bookingSchema.index({ worker: 1 });
bookingSchema.index({ status: 1 });
bookingSchema.index({ paymentStatus: 1 });
bookingSchema.index({ createdAt: -1 });
const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;