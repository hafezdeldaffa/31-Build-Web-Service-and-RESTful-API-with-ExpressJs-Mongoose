const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  description: {
    type: String,
    required: true,
    min: 1,
    max: 500,
  },
  instructor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Instructor',
  },
  scheduleDateTime: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Courses', coursesSchema);
