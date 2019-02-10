const UserResolver = require('./users');
const CourseResolver = require('./courses');
const { globalAutocomplete } = require('./globalAutocomplete');

const RootResolver = {
  ...UserResolver,
  ...CourseResolver,
  globalAutocomplete
};

module.exports = RootResolver;
