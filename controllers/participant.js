const Participant = require('../models/participant');

exports.postParticipant = async (req, res, next) => {
  try {
    const { title, dateOfBirth, email, phone, courses } = req.body;

    const newParticipant = new Participant({
      title: title,
      dateOfBirth: dateOfBirth,
      email: email,
      phone: phone,
      courses: courses,
    });

    const participant = await newParticipant.save();

    res
      .status(201)
      .json({ message: 'new participant created', participant: participant });
  } catch (error) {
    throw error;
  }
};

exports.getAllParticipant = async (req, res, next) => {
  try {
    const participant = await Participant.find().populate('courses');

    res.status(200).json(participant);
  } catch (error) {
    throw error;
  }
};

exports.getParticipantById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const participant = await Participant.findById(id).populate('courses');

    res.status(200).json(participant);
  } catch (error) {
    throw error;
  }
};

exports.patchParticipant = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { title, dateOfBirth, email, phone } = req.body;

    const newParticipant = {
      title: title,
      dateOfBirth: dateOfBirth,
      email: email,
      phone: phone,
    };

    const participant = await Participant.findByIdAndUpdate(id, newParticipant);

    res
      .status(200)
      .json({ message: 'participant data updated', participant: participant });
  } catch (error) {
    throw error;
  }
};

exports.deleteParticipant = async (req, res, next) => {
  try {
    const { id } = req.params;

    await Participant.findByIdAndDelete(id);

    res.status(200).json({ message: `participant with ${id} removed` });
  } catch (error) {
    throw error;
  }
};
