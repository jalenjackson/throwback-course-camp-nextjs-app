import { Container } from 'unstated';
import { Methods } from './containerMethods';

class ViewCourseSectionCrunchChallengeContainer extends Container {
  state = {
    countdownTime: 30,
    matchingGameEnded: false,
    addedAnswers: [],
    crunchChallengeAnswers: [],
    gameOver: false,
    correctAnswers: 0
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
}

export default ViewCourseSectionCrunchChallengeContainer;
