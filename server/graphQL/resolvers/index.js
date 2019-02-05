const UserResolver = require('./users');
const CourseResolver = require('./courses');
const QuizResolver = require('./quizzes');
const { globalAutocomplete } = require('./globalAutocomplete');

const RootResolver = {
  ...UserResolver,
  ...CourseResolver,
  ...QuizResolver,
  globalAutocomplete
};

module.exports = RootResolver;
