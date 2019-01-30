const UserResolver = require('./users');
const CourseResolver = require('./courses');

const RootResolver = {
  ...UserResolver,
  ...CourseResolver
};

module.exports = RootResolver;
