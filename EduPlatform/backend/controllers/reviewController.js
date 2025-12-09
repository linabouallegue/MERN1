const asyncHandler = require('express-async-handler');
const Review = require('../models/Review');
const Course = require('../models/Course');

// ADD REVIEW 
const addReview = asyncHandler(async (req, res) => {
    const { courseId } = req.params;
    const { rating, comment } = req.body;
    const userId = req.userId; // Get from JWT token via protect middleware

    const course = await Course.findById(courseId);
    if (!course) {
        res.status(404);
        throw new Error("Cours non trouvé");
    }

    const review = await Review.create({
        rating,
        comment,
        course: courseId,
        user: userId
    });

    res.status(201).json(review);
});

// GET REVIEWS BY COURSE
const getCourseReviews = asyncHandler(async (req, res) => {
    const { courseId } = req.params;
    const reviews = await Review.find({ course: courseId })
        .populate('user', 'username email')
        .populate('course', 'title');
    res.status(200).json(reviews);
});

// GET USER'S REVIEWS (for "Mes Reviews" page)
const getUserReviews = asyncHandler(async (req, res) => {
    const userId = req.userId; // Get from JWT token via protect middleware
    const reviews = await Review.find({ user: userId })
        .populate('course', 'title instructor')
        .sort({ _id: -1 }); // Most recent first
    res.status(200).json(reviews);
});

module.exports = {
    addReview,
    getCourseReviews,
    getUserReviews
};