const UserResolver = require('./users/auth');
const CourseResolver = require('./courses/index');
const ForumQuestionResolver = require('./forumQuestions/index');
const { globalAutocomplete } = require('./global/globalAutocomplete');

const RootResolver = {
  ...UserResolver,
  ...CourseResolver,
  ...ForumQuestionResolver,
  globalAutocomplete
};

module.exports = RootResolver;
