const express = require('express');
const router = express.Router();
const {
  createCourse,
  getCourses,
  getCourseById,
  enrollUserInCourse,
  getCourseStudents
} = require('../controllers/courseController');
const {
  addReview,
  getCourseReviews
} = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(createCourse)
  .get(getCourses);

router.route('/:id')
  .get(getCourseById);

router.route('/:courseId/enroll')
  .post(protect, enrollUserInCourse);

router.route('/:courseId/students')
  .get(getCourseStudents);

router.route('/:courseId/reviews')
  .post(protect, addReview)
  .get(getCourseReviews);

module.exports = router;
