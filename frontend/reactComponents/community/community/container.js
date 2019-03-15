import { Container } from 'unstated';
import { Methods } from './containerMethods/index';

class QuestionsContainer extends Container {
  state = {
   forumQuestions: [],
    isPaginating: false
  };
  
  updateState = (state, value) => Methods.updateState.call(this, state, value);
  getMoreQuestions = skipAmount => Methods.getMoreQuestions.call(this, skipAmount);
}

export default QuestionsContainer;
