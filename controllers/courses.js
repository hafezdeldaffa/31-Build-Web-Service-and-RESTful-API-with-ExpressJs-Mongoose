const Courses = require('../models/courses');

exports.postCourses = async (req, res, next) => {
  try {
    const { title, description, instructor, scheduleDateTime } = req.body;

    const newCourses = new Courses({
      title: title,
      description: description,
      instructor: instructor,
      scheduleDateTime: scheduleDateTime,
    });

    const courses = await newCourses.save();

    res.status(201).json({ message: 'new courses created', courses: courses });
  } catch (error) {
    throw error;
  }
};

exports.getAllCourses = async (req, res, next) => {
  try {
    const courses = await Courses.find().populate('instructor');

    res.status(200).json(courses);
  } catch (error) {
    throw error;
  }
};

exports.getCoursesById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const courses = await Courses.findById(id).populate('instructor');

    res.status(200).json(courses);
  } catch (error) {
    throw error;
  }
};

exports.patchCourses = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { title, description, scheduleDateTime } = req.body;

    const newCourses = {
      title: title,
      description: description,
      scheduleDateTime: scheduleDateTime,
    };

    const courses = await Courses.findByIdAndUpdate(id, newCourses);

    res.status(200).json({ message: 'courses data updated', courses: courses });
  } catch (error) {
    throw error;
  }
};

exports.deleteCourses = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Courses.findByIdAndDelete(id);

    res.status(200).json({ message: `courses with ${id} removed` });
  } catch (error) {
    throw error;
  }
};
