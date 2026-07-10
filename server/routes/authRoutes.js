import express from "express";

import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  getUserProfileBookings,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validationMiddleware.js";

import {
  registerValidator,
  loginValidator,
} from "../utils/validators.js";

const router = express.Router();

// ==============================
// Authentication Routes
// ==============================

// Register User
router.post(
  "/register",
  registerValidator,
  validate,
  registerUser
);

// Login User
router.post(
  "/login",
  loginValidator,
  validate,
  loginUser
);

// Get Logged In User Profile
router.get(
  "/profile",
  protect,
  getUserProfile
);

// Update Logged In User Profile
router.put(
  "/profile",
  protect,
  updateUserProfile
);

// Get Recent Bookings for Logged In User
router.get(
  "/profile/bookings",
  protect,
  getUserProfileBookings
);

export default router;