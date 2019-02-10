const { courses } = require('./courses/courses');
const { singleCourse } = require('./courses/singleCourse');
const { createCourse } = require('./courses/createCourse');
const { addSectionToCourse } = require('./courses/addSectionToCourse');
const { addVideoToSection } = require('./courses/addVideoToSection');
const { deleteSection } = require('./courses/deleteSection');
const { deleteVideo } = require('./courses/deleteVideo');
const { addQuizQuestionToVideo } = require('./courses/addQuizQuestionToVideo');
const { updateSectionDetails } = require('./courses/updateSectionDetails');
const { updateVideoDetails } = require('./courses/updateVideoDetails');

module.exports = {
  courses,
  singleCourse,
  createCourse,
  addSectionToCourse,
  addVideoToSection,
  deleteSection,
  deleteVideo,
  addQuizQuestionToVideo,
  updateSectionDetails,
  updateVideoDetails
};
