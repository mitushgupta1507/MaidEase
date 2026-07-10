import express from "express";

import {
  createBooking,
  getMyBookings,
  cancelBooking,
  getAllBookings,
  updateBookingStatus,
} from "../controllers/bookingController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";
import { validate } from "../middleware/validationMiddleware.js";

import { bookingValidator } from "../utils/validators.js";

const router = express.Router();

// =======================================
// User Routes
// =======================================

// Create Booking
router.post(
  "/",
  protect,
  bookingValidator,
  validate,
  createBooking
);

// Get Logged In User Bookings
router.get(
  "/",
  protect,
  getMyBookings
);

// Cancel Booking
router.put(
  "/:id/cancel",
  protect,
  cancelBooking
);

// =======================================
// Admin Routes
// =======================================

// Update Booking Status
router.put(
  "/:id/status",
  protect,
  adminOnly,
  updateBookingStatus
);

// Get All Bookings
router.get(
  "/admin/all",
  protect,
  adminOnly,
  getAllBookings
);

export default router;