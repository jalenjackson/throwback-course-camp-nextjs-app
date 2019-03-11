import { Container } from 'unstated';
import { Methods } from './containerMethods/index';

class CommunityQuestionContainer extends Container {
  state = {
    newAnswerModalVisible: false,
    newAnswerText: '',
    forumQuestion: false
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
  addAnswer = auth => Methods.addAnswer.call(this, auth);
}

export default CommunityQuestionContainer;
