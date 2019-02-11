const { courses } = require('./courses/courses');
const { singleCourse } = require('./courses/singleCourse');
const { createCourse } = require('./courses/createCourse');
const { addSectionToCourse } = require('./courses/sections/addSectionToCourse');
const { addVideoToSection } = require('./courses/sections/addVideoToSection');
const { deleteSection } = require('./courses/sections/deleteSection');
const { deleteVideo } = require('./courses/videos/deleteVideo');
const { addQuizQuestionToVideo } = require('./courses/drawers/addQuiz/addQuizQuestionToVideo');
const { updateSectionDetails } = require('./courses/sections/updateSectionDetails');
const { updateVideoDetails } = require('./courses/videos/updateVideoDetails');
const { updateQuizQuestion } = require('./courses/drawers/addQuiz/updateQuizQuestion');
const { addAnotherQuizQuestionToQuiz } = require('./courses/drawers/addQuiz/addAnotherQuizQuestionToQuiz');
const { deleteAddQuizQuestion } = require('./courses/drawers/addQuiz/deleteAddQuizQuestion');
const { addPictureQuizQuestionToVideo } = require('./courses/drawers/addPictureQuiz/addPictureQuizQuestionToVideo');
const { deleteAddPictureQuizQuestion } = require('./courses/drawers/addPictureQuiz/deleteAddPictureQuizQuestion');
const { updatePictureQuizQuestion } = require('./courses/drawers/addPictureQuiz/updatePictureQuizQuestion');
const { addAnotherPictureQuizQuestionToQuiz } = require('./courses/drawers/addPictureQuiz/addAnotherPictureQuizQuestionToQuiz');

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
  updateVideoDetails,
  updateQuizQuestion,
  addAnotherQuizQuestionToQuiz,
  deleteAddQuizQuestion,
  addPictureQuizQuestionToVideo,
  deleteAddPictureQuizQuestion,
  updatePictureQuizQuestion,
  addAnotherPictureQuizQuestionToQuiz
};
