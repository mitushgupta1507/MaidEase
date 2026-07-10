import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./docs/swagger.js";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import workerRoutes from "./routes/workerRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

import {
  notFound,
  errorHandler,
} from "./middleware/errorMiddleware.js";

dotenv.config();

// ===============================
// Database Connection
// ===============================
connectDB();

const app = express();

// ===============================
// Body Parser
// ===============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// CORS
// ===============================
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://127.0.0.1:5173",
  "http://localhost:3000",
];

app.use(
  cors({
    origin(origin, callback) {
      // Allow Postman and server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ===============================
// Logger
// ===============================
app.use(morgan("dev"));

// ===============================
// Root Route
// ===============================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "MaidEase Backend API is running 🚀",
    version: "1.0.0",
    status: "Healthy",
    timestamp: new Date(),
  });
});

// ===============================
// Swagger Documentation
// ===============================
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// ===============================
// API Routes
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/workers", workerRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/admin", adminRoutes);

// ===============================
// Error Handling
// ===============================
app.use(notFound);
app.use(errorHandler);

// ===============================
// Server
// ===============================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});