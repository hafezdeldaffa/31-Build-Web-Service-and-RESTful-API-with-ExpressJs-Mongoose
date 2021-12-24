const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    max: 50,
  },
  phone: {
    type: Number,
    maxlength: 13,
  },
  courses: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Courses',
  },
});

module.exports = mongoose.model('Participant', participantSchema);
