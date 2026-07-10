import Review from "../models/Review.js";
import Worker from "../models/Worker.js";

// @desc Create Review
// @route POST /api/reviews
// @access Private
export const createReview = async (req, res) => {
  try {
    const { worker, rating, comment } = req.body;

    const review = await Review.create({
      user: req.user._id,
      worker,
      rating,
      comment,
    });

    const reviews = await Review.find({ worker });

    const averageRating =
      reviews.reduce((acc, item) => acc + item.rating, 0) /
      reviews.length;

    await Worker.findByIdAndUpdate(worker, {
      rating: averageRating.toFixed(1),
    });

    res.status(201).json({
      success: true,
      message: "Review added successfully",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc Get Worker Reviews
// @route GET /api/reviews/:workerId
// @access Public
export const getWorkerReviews = async (req, res) => {
  try {
    const reviews = await Review.find({
      worker: req.params.workerId,
    }).populate("user", "name");

    res.status(200).json({
      success: true,
      count: reviews.length,
      reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};