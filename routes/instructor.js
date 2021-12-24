const express = require('express');
const {
  getAllInstructor,
  getInstuctorById,
  postInstructor,
  patchInstructor,
  deleteInstuctor,
} = require('../controllers/instructor');
const router = express.Router();

router.get('/instructor', getAllInstructor);
router.get('/instructor/:id', getInstuctorById);
router.post('/instructor', postInstructor);
router.patch('/instructor/:id', patchInstructor);
router.delete('/instructor/:id', deleteInstuctor);

module.exports = router;
