import ApiError from "../utils/ApiError.js";

// 404 Handler
export const notFound = (req, res, next) => {
  next(new ApiError(404, `Route not found - ${req.originalUrl}`));
};

// Global Error Handler
export const errorHandler = (err, req, res, next) => {
  let error = err;

  // Default Error
  if (!(error instanceof ApiError)) {
    let message = error.message || "Internal Server Error";
    let statusCode = error.statusCode || 500;

    // Invalid MongoDB ObjectId
    if (error.name === "CastError") {
      message = `Resource not found. Invalid ID: ${error.value}`;
      statusCode = 400;
    }

    // Duplicate Key Error
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      message = `${field} already exists`;
      statusCode = 400;
    }

    // Mongoose Validation Error
    if (error.name === "ValidationError") {
      message = Object.values(error.errors)
        .map((item) => item.message)
        .join(", ");

      statusCode = 400;
    }

    // JWT Errors
    if (error.name === "JsonWebTokenError") {
      message = "Invalid token";
      statusCode = 401;
    }

    if (error.name === "TokenExpiredError") {
      message = "Token expired";
      statusCode = 401;
    }

    error = new ApiError(statusCode, message);
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    errors: error.errors || [],
    ...(process.env.NODE_ENV === "development" && {
      stack: error.stack,
    }),
  });
};