const express = require('express');
const {
  getAllCourses,
  getCoursesById,
  postCourses,
  patchCourses,
  deleteCourses,
} = require('../controllers/courses');
const router = express.Router();

router.get('/courses', getAllCourses);
router.get('/courses/:id', getCoursesById);
router.post('/courses', postCourses);
router.patch('/courses/:id', patchCourses);
router.delete('/courses/:id', deleteCourses);

module.exports = router;
