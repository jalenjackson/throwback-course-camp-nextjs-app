import { Container } from 'unstated';
import { Methods } from './containerMethods';

class ViewCourseSectionMatchingGameContainer extends Container {
  state = {
    countdownTime: 0,
    matchingGameEnded: false
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default ViewCourseSectionMatchingGameContainer;
