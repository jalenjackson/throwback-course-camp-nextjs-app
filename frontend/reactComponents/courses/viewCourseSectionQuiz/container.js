import { Container } from 'unstated';
import { Methods } from './containerMethods';

class ViewCourseSectionQuizContainer extends Container {
  state = {
    currentActiveQuestion: 0,
    correctAnswers: 0,
    showCorrectAlert: false,
    showWrongAlert: false,
    answeredQuestion: false,
    countdownTime: 10,
    timerFinished: false,
    gameOver: false,
    isNavigating: false,
    answersShuffled: false,
    questionsShuffled: false,
    currentShuffledAnswers: [],
    shuffledQuestions: [],
    gameStarted: false
  };

  updateState = (state, value) => Methods.updateState.call(this, state, value);
  answerQuestion = (isCorrect, e, props) => Methods.answerQuestion.call(this, isCorrect, e, props);
  navigateToNextQuestion = props => Methods.navigateToNextQuestion.call(this, props);
}

export default ViewCourseSectionQuizContainer;
