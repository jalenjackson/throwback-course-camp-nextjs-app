const { courses } = require('./courses/courses');
const { singleCourse } = require('./courses/singleCourse');
const { createCourse } = require('./courses/createCourse');
const { addSectionToCourse } = require('./courses/sections/addSectionToCourse');
const { addVideoToSection } = require('./courses/sections/addVideoToSection');
const { deleteSection } = require('./courses/sections/deleteSection');
const { deleteVideo } = require('./courses/videos/deleteVideo');
const { addQuizQuestionToVideo } = require('./courses/exercises/addQuiz/addQuizQuestionToVideo');
const { updateSectionDetails } = require('./courses/sections/updateSectionDetails');
const { updateVideoDetails } = require('./courses/videos/updateVideoDetails');
const { updateQuizQuestion } = require('./courses/exercises/addQuiz/updateQuizQuestion');
const { addAnotherQuizQuestionToQuiz } = require('./courses/exercises/addQuiz/addAnotherQuizQuestionToQuiz');
const { deleteAddQuizQuestion } = require('./courses/exercises/addQuiz/deleteAddQuizQuestion');
const { addPictureQuizQuestionToVideo } = require('./courses/exercises/addPictureQuiz/addPictureQuizQuestionToVideo');
const { deleteAddPictureQuizQuestion } = require('./courses/exercises/addPictureQuiz/deleteAddPictureQuizQuestion');
const { updatePictureQuizQuestion } = require('./courses/exercises/addPictureQuiz/updatePictureQuizQuestion');
const { addAnotherPictureQuizQuestionToQuiz } = require('./courses/exercises/addPictureQuiz/addAnotherPictureQuizQuestionToQuiz');
const { addMatchingGameToVideo } = require('./courses/exercises/addMatchingGame/addMatchingGameToVideo');
const { deleteMatchingGameQuestion } = require('./courses/exercises/addMatchingGame/deleteMatchingGameQuestion');
const { editMatchingGameQuestion } = require('./courses/exercises/addMatchingGame/editMatchingGameQuestion');

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
  addAnotherPictureQuizQuestionToQuiz,
  addMatchingGameToVideo,
  deleteMatchingGameQuestion,
  editMatchingGameQuestion
};
