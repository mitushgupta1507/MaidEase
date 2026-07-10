import Worker from "../models/Worker.js";
import cloudinary from "../config/cloudinary.js";

import {
  successResponse,
  errorResponse,
  paginatedResponse,
} from "../utils/apiResponse.js";

// ==========================================
// @desc    Get All Workers
// @route   GET /api/workers
// @access  Public
// ==========================================
export const getWorkers = async (req, res) => {
  try {
    const {
      search,
      serviceType,
      availability,
      verified,
      location,
      minPrice,
      maxPrice,
      minExperience,
      minRating,
      sort,
      page = 1,
      limit = 10,
    } = req.query;

    const filter = {};

    // Search by name
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    // Service Type
    if (serviceType && serviceType !== "All") {
      filter.serviceType = serviceType;
    }

    // Availability
    if (availability !== undefined) {
      filter.availability = availability === "true";
    }

    // Verified
    if (verified !== undefined) {
      filter.verified = verified === "true";
    }

    // Location
    if (location) {
      filter.location = {
        $regex: location,
        $options: "i",
      };
    }

    // Price
    if (minPrice || maxPrice) {
      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }
    }

    // Experience
    if (minExperience) {
      filter.experience = {
        $gte: Number(minExperience),
      };
    }

    // Rating
    if (minRating) {
      filter.rating = {
        $gte: Number(minRating),
      };
    }

    // Only active workers
    
    let sortOption = {
      createdAt: -1,
    };

    switch (sort) {
      case "price":
        sortOption = {
          price: 1,
        };
        break;

      case "-price":
        sortOption = {
          price: -1,
        };
        break;

      case "rating":
        sortOption = {
          rating: -1,
        };
        break;

      case "experience":
        sortOption = {
          experience: -1,
        };
        break;

      case "name":
        sortOption = {
          name: 1,
        };
        break;

      default:
        sortOption = {
          createdAt: -1,
        };
    }
    console.log("REQUEST QUERY:", req.query);
    console.log("FILTER:", filter);

    const totalWorkers = await Worker.countDocuments(filter);
    console.log("TOTAL:", await Worker.countDocuments({}));

    const workers = await Worker.find(filter)
      .sort(sortOption)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    return paginatedResponse(
      res,
      200,
      "Workers fetched successfully",
      workers,
      {
        currentPage: Number(page),
        totalPages: Math.ceil(
          totalWorkers / Number(limit)
        ),
        totalWorkers,
        count: workers.length,
      }
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

// ==========================================
// @desc    Get Worker By ID
// @route   GET /api/workers/:id
// @access  Public
// ==========================================
export const getWorkerById = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);

    if (!worker) {
      return errorResponse(
        res,
        404,
        "Worker not found"
      );
    }

    return successResponse(
      res,
      200,
      "Worker fetched successfully",
      worker
    );
  } catch (error) {
    return errorResponse(
      res,
      500,
      error.message
    );
  }
};
// ==========================================
// @desc    Create Worker
// @route   POST /api/workers
// @access  Admin
// ==========================================
export const createWorker = async (req, res) => {
  try {
    let imageUrl =
      "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    if (req.file) {
      imageUrl = req.file.path;
    }

    const worker = await Worker.create({
      name: req.body.name,
      age: Number(req.body.age),
      gender: req.body.gender,
      serviceType: req.body.serviceType,
      experience: Number(req.body.experience),
      availability:
        req.body.availability === "true" ||
        req.body.availability === true,
      price: Number(req.body.price),
      rating: Number(req.body.rating) || 0,
      description: req.body.description,
      location: req.body.location,
      verified:
        req.body.verified === "true" ||
        req.body.verified === true,
      image: imageUrl,
      status: "Active",
    });

    return successResponse(
      res,
      201,
      "Worker created successfully",
      worker
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

// ==========================================
// @desc    Update Worker
// @route   PUT /api/workers/:id
// @access  Admin
// ==========================================
export const updateWorker = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);

    if (!worker) {
      return errorResponse(
        res,
        404,
        "Worker not found"
      );
    }

    if (req.file) {
      if (
        worker.image &&
        worker.image.includes("res.cloudinary.com")
      ) {
        try {
          const publicId = worker.image
            .split("/")
            .slice(-3)
            .join("/")
            .split(".")[0];

          await cloudinary.uploader.destroy(publicId);
        } catch (err) {
          console.log(
            "Cloudinary delete failed:",
            err.message
          );
        }
      }

      req.body.image = req.file.path;
    }

    const updatedWorker =
      await Worker.findByIdAndUpdate(
        req.params.id,
        {
          ...req.body,

          age:
            req.body.age !== undefined
              ? Number(req.body.age)
              : worker.age,

          experience:
            req.body.experience !== undefined
              ? Number(req.body.experience)
              : worker.experience,

          price:
            req.body.price !== undefined
              ? Number(req.body.price)
              : worker.price,

          rating:
            req.body.rating !== undefined
              ? Number(req.body.rating)
              : worker.rating,

          availability:
            req.body.availability !== undefined
              ? req.body.availability === "true" ||
                req.body.availability === true
              : worker.availability,

          verified:
            req.body.verified !== undefined
              ? req.body.verified === "true" ||
                req.body.verified === true
              : worker.verified,
        },
        {
          new: true,
          runValidators: true,
        }
      );

    return successResponse(
      res,
      200,
      "Worker updated successfully",
      updatedWorker
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

// ==========================================
// @desc    Delete Worker
// @route   DELETE /api/workers/:id
// @access  Admin
// ==========================================
export const deleteWorker = async (req, res) => {
  try {
    const worker = await Worker.findById(req.params.id);

    if (!worker) {
      return errorResponse(
        res,
        404,
        "Worker not found"
      );
    }

    if (
      worker.image &&
      worker.image.includes(
        "res.cloudinary.com"
      )
    ) {
      try {
        const publicId = worker.image
          .split("/")
          .slice(-3)
          .join("/")
          .split(".")[0];

        await cloudinary.uploader.destroy(publicId);
      } catch (err) {
        console.log(
          "Cloudinary delete failed:",
          err.message
        );
      }
    }

    await worker.deleteOne();

    return successResponse(
      res,
      200,
      "Worker deleted successfully"
    );
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};