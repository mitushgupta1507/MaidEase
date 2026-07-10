import express from "express";
import {
  deleteAdminWorker,
  getAdminUsers,
  getAdminWorkers,
  getDashboardStats,
  updateAdminWorkerStatus,
} from "../controllers/adminController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// Admin Dashboard
router.get("/dashboard", protect, adminOnly, getDashboardStats);
router.get("/users", protect, adminOnly, getAdminUsers);
router.get("/workers", protect, adminOnly, getAdminWorkers);
router.delete("/workers/:id", protect, adminOnly, deleteAdminWorker);
router.patch("/workers/:id/status", protect, adminOnly, updateAdminWorkerStatus);

export default router;