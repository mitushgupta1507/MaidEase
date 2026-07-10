import express from "express";

import {
  getWorkers,
  getWorkerById,
  createWorker,
  updateWorker,
  deleteWorker,
} from "../controllers/workerController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";
import { validate } from "../middleware/validationMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import { workerValidator } from "../utils/validators.js";

const router = express.Router();

// =============================
// Public Routes
// =============================

// Get all workers
router.get("/", getWorkers);

// Get worker by ID
router.get("/:id", getWorkerById);

// =============================
// Admin Routes
// =============================

// Create Worker
router.post(
  "/",
  protect,
  adminOnly,
  upload.single("image"),
  createWorker
);

// Update Worker
router.put(
  "/:id",
  protect,
  adminOnly,
  upload.single("image"),
  updateWorker
);

// Delete Worker
router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteWorker
);

export default router;