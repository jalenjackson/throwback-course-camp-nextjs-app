const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  course: {
    type: 'String',
    ref: 'Course'
  },
  rating: {
    type: Number,
  },
  language: {
    type: String,
  },
});

module.exports = mongoose.model('Quiz', QuizSchema);
