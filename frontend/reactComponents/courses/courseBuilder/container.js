import { Container } from 'unstated';
import { Methods } from './containerMethods';

class CourseBuilderContainer extends Container {
  state = {
    currentPane: 'courseBuilder',
    currentPaneNumber: 0,
    sectionTitleTerm: '',
    sectionDescriptionTerm: '',
    videoTitleTerm: '',
    videoDescriptionTerm: '',
    sectionCategoryTerm: '',
    course: {},
    sectionLoading: false,
    currentActiveSection: 0,
    currentActiveVideoInSection: 0,
    addQuizDrawerVisibility: false,
    addPictureQuizDrawerVisibility: false,
    addMatchingGameDrawerVisibility: false,
    addCrunchChallengeVisibility: false,
    addCodingChallengeVisibility: false,
    addCodingProjectVisibility: false,
    courseStatusText: '',
    courseColor: '',
    videoPreviewModalVisibility: false,
    videoDuration: '00:00',
    videoPlaying: true,
    playedSeconds: 0,
    seeking: false,
    played: 0,
    currentVideoLocation: '',
    videoPreviewCourse: {},
    playbackRate: 1.0,
    loop: false,
    volume: 0.8
  };

  // misc
  setInitialStateFromData = course => Methods.setInitialStateFromData.call(this, course);
  updateState = (state, value) => Methods.updateState.call(this, state, value);

  // sections
  addNewSection = (auth, token) => Methods.addNewSection.call(this, auth, token);
  deleteSection = (i, auth) => Methods.deleteSection.call(this, i, auth);
  changeCurrentActiveSection = (i, e) => Methods.changeCurrentActiveSection.call(this, i, e);
  updateSectionDetails = (type, state, value, auth, currentActiveSection) => Methods.updateSectionDetails.call(this, type, state, value, auth, currentActiveSection);
  handleSectionVideoUpload = (videoLocation, currentActiveSection) => Methods.handleSectionVideoUpload.call(this, videoLocation, currentActiveSection);
  reorderSections = (auth, newSections) => Methods.reorderSections.call(this, auth, newSections);

  // videos
  deleteAddedVideo = (i, auth, videoLocation) => Methods.deleteAddedVideo.call(this, i, auth, videoLocation);
  updateVideoDetails = (type, i, term, auth) => Methods.updateVideoDetails.call(this, type, i, term, auth);
  reorderVideos = (auth, i) => Methods.reorderVideos.call(this, auth, i);

  // exercises - addQuiz
  saveAddQuizQuestion = (e, auth, question, answers, optionalImage) => Methods.saveAddQuizQuestion.call(e, auth, this, question, answers, optionalImage);
  editAddQuizAddedAnswer  = (term, type, auth, questionIterator, answerIterator, optionalImage) => Methods.editAddQuizAddedAnswer.call(this, term, type, auth, questionIterator, answerIterator, optionalImage);
  editAddQuizAddingNewAnswer = (auth, term, questionIterator) => Methods.editAddQuizAddingNewAnswer.call(this, auth, term, questionIterator);
  deleteAddQuizQuestion = (auth, questionIndex) => Methods.deleteAddQuizQuestion.call(this, auth, questionIndex);

  // exercises - addPictureQuiz
  savePictureQuizQuestion = (auth, question, answers) => Methods.savePictureQuizQuestion.call(this, auth, question, answers);
  deleteAddPictureQuizQuestion = (auth, questionIndex) => Methods.deleteAddPictureQuizQuestion.call(this, auth, questionIndex);
  editAddPictureQuizAddedAnswer  = (term, type, auth, questionIterator, answerIterator) => Methods.editAddPictureQuizAddedAnswer.call(this, term, type, auth, questionIterator, answerIterator);
  editAddPictureQuizAddingNewAnswer = (auth, term, questionIterator) => Methods.editAddPictureQuizAddingNewAnswer.call(this, auth, term, questionIterator);

  // exercises - addMatchingGame
  saveMatchingGameQuestion = (auth, question, answer, timeAllotted, matchId) => Methods.saveMatchingGameQuestion.call(this, auth, question, answer, timeAllotted, matchId);
  deleteMatchingGameQuestion = (auth, matchId) => Methods.deleteMatchingGameQuestion.call(this, auth, matchId);
  editMatchingGameQuestion = (auth, term, type, timeAllotted, matchId) => Methods.editMatchingGameQuestion.call(this, auth, term, type, timeAllotted, matchId);

  // exercises - addCrunchChallenge
  saveCrunchChallenge = (auth, target, definitions) => Methods.saveCrunchChallenge.call(this, auth, target, definitions);

  // remove exercise
  removeExercise = (auth, key) => Methods.removeExercise.call(this, auth, key);

  // exercises - addCodingChallenge
  saveCodingChallenge = (auth, title, description, functionText, returnValue, functionName, functionParams, addedParams) => Methods.saveCodingChallenge.call(this, auth, title, description, functionText, returnValue, functionName, functionParams, addedParams);

  // exercises - addCodingProject
  saveCodingProject = (auth, summary) => Methods.saveCodingProject.call(this, auth, summary);

  // exercises - changeCourseStatus
  changeCourseStatus = (auth, status) => Methods.changeCourseStatus.call(this, auth, status);
}

export default CourseBuilderContainer;
