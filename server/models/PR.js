const mongoose = require('mongoose');

const PRSchema = new mongoose.Schema({
  exercise: {
    type: String,
    required: [true, 'Please add an exercise name']
  },
  weight: {
    type: Number,
    required: [true, 'Please add the weight']
  },
  reps: {
    type: Number,
    required: [true, 'Please add the number of reps']
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('PR', PRSchema);