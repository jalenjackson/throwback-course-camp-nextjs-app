import { Container } from 'unstated';
import { Methods } from './containerMethods/index';

class NewQuestionContainer extends Container {
  state = {
    title: '',
    body: '',
    visibility: false,
    successModalVisible: false,
    textAreaInit: false,
    submittedQuestionId: ''
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
  saveQuestion = props => Methods.saveQuestion.call(this, props);
}

export default NewQuestionContainer;
