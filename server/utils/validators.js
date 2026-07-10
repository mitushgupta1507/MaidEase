import { body } from "express-validator";

// ============================
// User Register Validation
// ============================

export const registerValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 digits"),

  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address is required"),
];

// ============================
// User Login Validation
// ============================

export const loginValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];

// ============================
// Worker Validation
// ============================

export const workerValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Worker name is required"),

  body("age")
    .isInt({ min: 18, max: 70 })
    .withMessage("Age must be between 18 and 70"),

  body("gender")
    .isIn(["Male", "Female", "Other"])
    .withMessage("Invalid gender"),

  body("serviceType")
    .isIn(["Maid", "Babysitter", "Nanny"])
    .withMessage("Invalid service type"),

  body("experience")
    .isNumeric()
    .withMessage("Experience must be numeric"),

  body("availability")
    .isBoolean()
    .withMessage("Availability must be true or false"),

  body("price")
    .isNumeric()
    .withMessage("Price must be numeric"),

  body("image")
    .trim()
    .notEmpty()
    .withMessage("Image URL is required"),

  body("rating")
    .optional()
    .isFloat({ min: 0, max: 5 })
    .withMessage("Rating must be between 0 and 5"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("location")
    .trim()
    .notEmpty()
    .withMessage("Location is required"),

  body("verified")
    .optional()
    .isBoolean()
    .withMessage("Verified must be true or false"),
];

// ============================
// Booking Validation
// ============================

export const bookingValidator = [
  body("worker")
    .notEmpty()
    .withMessage("Worker ID is required"),

  body("serviceDate")
    .notEmpty()
    .withMessage("Service date is required"),

  body("duration")
    .isNumeric()
    .withMessage("Duration must be numeric"),

  body("servicePlan")
    .trim()
    .notEmpty()
    .withMessage("Service plan is required"),
];

// ============================
// Review Validation
// ============================

export const reviewValidator = [
  body("worker")
    .notEmpty()
    .withMessage("Worker ID is required"),

  body("rating")
    .isFloat({ min: 1, max: 5 })
    .withMessage("Rating must be between 1 and 5"),

  body("comment")
    .trim()
    .notEmpty()
    .withMessage("Comment is required"),
];