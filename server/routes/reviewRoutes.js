import express from "express";
import {
  createReview,
  getWorkerReviews,
} from "../controllers/reviewController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Review
router.post("/", protect, createReview);

// Get Reviews of a Worker
router.get("/:workerId", getWorkerReviews);

export default router;