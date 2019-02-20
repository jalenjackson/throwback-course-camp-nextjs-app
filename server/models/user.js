const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    }
  ],
  createdForumQuestions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ForumQuestion'
    }
  ],
  createdQuizzes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Quiz'
    }
  ]
});

module.exports = mongoose.model('User', UserSchema);
