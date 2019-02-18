import { animateQuestionText } from '../helpers';
import TweenMax, { Power4 } from 'gsap/TweenMax';

export const call = async (context, props) => {
  await context.setState({
    isNavigating: true,
    countdownTime: context.state.countdownTime,
  });
  setTimeout(() => {
    $('.quiz-section-overlay').addClass('animate-question-switch');
  }, 550)
  setTimeout(() => {
    TweenMax.to('.timer', 0.3, { transform: 'scale(0)', ease: Power4.easeOut, delay: 0.5 });
    resetAnswerChoiceUI();
  }, 650);
  setTimeout(async () => {
    if (context.state.currentActiveQuestion !== props.currentVideo.quiz.length - 1) {
      await context.setState({
        currentActiveQuestion: context.state.currentActiveQuestion + 1,
        answeredQuestion: false,
        showWrongAlert: false,
        showCorrectAlert: false,
        countdownTime: 10,
        answersShuffled: false
      });
      TweenMax.to('.timer', 0.3, { transform: 'scale(1.1)', ease: Power4.easeOut, delay: 0.5 });
      TweenMax.to('.timer', 0.3, { transform: 'scale(1)', ease: Power4.easeOut, delay: 0.8 });
      animateQuestionText('.quiz-question h1')
    } else {
      return context.setState({
        gameOver: true
      })
    }
  }, 1000);
  setTimeout(() => {
    $('.quiz-section-overlay').removeClass('animate-question-switch');
    context.setState({
      isNavigating: false
    })
  }, 1500)
};

const resetAnswerChoiceUI = () => {
  $('div.letter')
    .removeClass('correct-answer-letter')
    .removeClass('wrong-answer-letter')
    .find('h1')
    .removeClass('correct-answer-inner-letter')
    .removeClass('wrong-answer-inner-letter');
};
