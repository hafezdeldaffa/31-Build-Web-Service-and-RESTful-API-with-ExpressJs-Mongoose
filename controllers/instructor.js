const Instructor = require('../models/instructor');

exports.postInstructor = async (req, res, next) => {
  try {
    const { name, dateOfBirth, location } = req.body;

    const newInstructor = new Instructor({
      name: name,
      dateOfBirth: dateOfBirth,
      location: location,
    });

    const instructor = await newInstructor.save();

    res
      .status(201)
      .json({ message: 'new instructor created!', instructor: instructor });
  } catch (error) {
    throw error;
  }
};

exports.getAllInstructor = async (req, res, next) => {
  try {
    const instructor = await Instructor.find();

    res.status(200).json(instructor);
  } catch (error) {
    throw error;
  }
};

exports.getInstuctorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const instructor = await Instructor.findById(id);

    res.status(200).json(instructor);
  } catch (error) {
    throw error;
  }
};

exports.patchInstructor = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, dateOfBirth, location } = req.body;

    const newInstructor = {
      name: name,
      dateOfBirth: dateOfBirth,
      location: location,
    };

    const instructor = await Instructor.findByIdAndUpdate(id, newInstructor);

    res
      .status(200)
      .json({ message: 'instructor data updated', instructor: instructor });
  } catch (error) {
    throw error;
  }
};

exports.deleteInstuctor = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Instructor.findByIdAndDelete(id);

    res.status(200).json({ message: `instructor with ${id} removed` });
  } catch (error) {
    throw error;
  }
};
