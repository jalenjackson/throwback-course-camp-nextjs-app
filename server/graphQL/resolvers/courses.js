const { courses } = require('./courses/courses');
const { singleCourse } = require('./courses/singleCourse');
const { createCourse } = require('./courses/createCourse');
const { globalAutocomplete } = require('./courses/globalAutocomplete');

module.exports = {
  courses,
  singleCourse,
  createCourse,
  globalAutocomplete
};
