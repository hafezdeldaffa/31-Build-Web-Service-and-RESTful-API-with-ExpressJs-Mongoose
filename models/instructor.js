const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
  },
});

module.exports = mongoose.model('Instructor', instructorSchema);
