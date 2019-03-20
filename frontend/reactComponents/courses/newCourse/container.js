import { Container } from 'unstated';
import { Methods } from './containerMethods/index';

class NewCourseContainer extends Container {
  state = {
    currentStep: 0,
    title: '',
    description: '',
    price: '',
    color: '',
    category: '',
    learning: [],
    learningTerm: '',
    language: 'English',
    isSavingCourse: false,
    summary: ''
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
  nextStep = (props) => Methods.moveStep.callNextStep(this, props);
  prevStep = () => Methods.moveStep.callPrevStep(this);
  onNumberFieldBlur = props => Methods.numberFieldFunctions.callNumberFieldBlur(this, props);
  onNumberFieldChange = (e, props) => Methods.numberFieldFunctions.callNumberFieldChange(this, e, props);
  saveCourse = async auth => Methods.saveCourse.callSaveCourse(this, auth);
  addNewLearning = (props, e) => Methods.addNewLearning.callAddNewLearning(this, props, e);
  removeNewLearning = (props, removedLearning) => Methods.removeNewLearning.callRemoveNewLearning(this, props, removedLearning);
  setGlobalState = (localCourseState, isFromBuildCourse) => Methods.setGlobalState.callSetGlobalState(this, localCourseState, isFromBuildCourse);
  updateCourse = (auth, course, type, value) => Methods.updateCourse.call(this, auth, course, type, value);
}

export default NewCourseContainer;
