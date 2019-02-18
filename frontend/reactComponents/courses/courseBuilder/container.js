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
  addNewSection = (navbarContainer, token) => Methods.addNewSection.call(this, navbarContainer, token);
  deleteSection = (i, navbarContainer) => Methods.deleteSection.call(this, i, navbarContainer);
  changeCurrentActiveSection = (i, e) => Methods.changeCurrentActiveSection.call(this, i, e);
  updateSectionDetails = (type, state, value, navbarContainer, currentActiveSection) => Methods.updateSectionDetails.call(this, type, state, value, navbarContainer, currentActiveSection);
  handleSectionVideoUpload = (videoLocation, currentActiveSection) => Methods.handleSectionVideoUpload.call(this, videoLocation, currentActiveSection);
  reorderSections = (navbarContainer, newSections) => Methods.reorderSections.call(this, navbarContainer, newSections);

  // videos
  deleteAddedVideo = (i, navbarContainer, videoLocation) => Methods.deleteAddedVideo.call(this, i, navbarContainer, videoLocation);
  updateVideoDetails = (type, i, term, navbarContainer) => Methods.updateVideoDetails.call(this, type, i, term, navbarContainer);
  reorderVideos = (navbarContainer, i) => Methods.reorderVideos.call(this, navbarContainer, i);

  // exercises - addQuiz
  saveAddQuizQuestion = (e, navbarContainer, question, answers) => Methods.saveAddQuizQuestion.call(e, navbarContainer, this, question, answers);
  editAddQuizAddedAnswer  = (term, type, navbarContainer, questionIterator, answerIterator) => Methods.editAddQuizAddedAnswer.call(this, term, type, navbarContainer, questionIterator, answerIterator);
  editAddQuizAddingNewAnswer = (navbarContainer, term, questionIterator) => Methods.editAddQuizAddingNewAnswer.call(this, navbarContainer, term, questionIterator);
  deleteAddQuizQuestion = (navbarContainer, questionIndex) => Methods.deleteAddQuizQuestion.call(this, navbarContainer, questionIndex);

  // exercises - addPictureQuiz
  savePictureQuizQuestion = (navbarContainer, question, answers) => Methods.savePictureQuizQuestion.call(this, navbarContainer, question, answers);
  deleteAddPictureQuizQuestion = (navbarContainer, questionIndex) => Methods.deleteAddPictureQuizQuestion.call(this, navbarContainer, questionIndex);
  editAddPictureQuizAddedAnswer  = (term, type, navbarContainer, questionIterator, answerIterator) => Methods.editAddPictureQuizAddedAnswer.call(this, term, type, navbarContainer, questionIterator, answerIterator);
  editAddPictureQuizAddingNewAnswer = (navbarContainer, term, questionIterator) => Methods.editAddPictureQuizAddingNewAnswer.call(this, navbarContainer, term, questionIterator);

  // exercises - addMatchingGame
  saveMatchingGameQuestion = (navbarContainer, question, answer, matchId) => Methods.saveMatchingGameQuestion.call(this, navbarContainer, question, answer, matchId);
  deleteMatchingGameQuestion = (navbarContainer, matchId) => Methods.deleteMatchingGameQuestion.call(this, navbarContainer, matchId);
  editMatchingGameQuestion = (navbarContainer, term, type, matchId) => Methods.editMatchingGameQuestion.call(this, navbarContainer, term, type, matchId);

  // exercises - addCrunchChallenge
  saveCrunchChallenge = (navbarContainer, target, definitions) => Methods.saveCrunchChallenge.call(this, navbarContainer, target, definitions);

  // remove exercise
  removeExercise = (navbarContainer, key) => Methods.removeExercise.call(this, navbarContainer, key);

  // exercises - addCodingChallenge
  saveCodingChallenge = (navbarContainer, title, description, functionText, returnValue, functionName, functionParams, addedParams) => Methods.saveCodingChallenge.call(this, navbarContainer, title, description, functionText, returnValue, functionName, functionParams, addedParams);

  // exercises - addCodingProject
  saveCodingProject = (navbarContainer, summary) => Methods.saveCodingProject.call(this, navbarContainer, summary);

  // exercises - changeCourseStatus
  changeCourseStatus = (navbarContainer, status) => Methods.changeCourseStatus.call(this, navbarContainer, status);
}

export default CourseBuilderContainer;
