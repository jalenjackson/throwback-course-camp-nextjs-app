const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumQuestionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course'
  }
});

module.exports = mongoose.model('ForumQuestion', ForumQuestionSchema);
