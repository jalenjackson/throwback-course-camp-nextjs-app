import { Methods } from '../containerMethods/index'

export const call = (context, isCorrect, e, props) => {
  if (!context.state.answeredQuestion) {
    if (isCorrect) {
      $('div.letter').removeClass('wrong-answer-letter').find('h1').removeClass('wrong-answer-inner-letter');
      $(e.currentTarget).find('div.letter').addClass('correct-answer-letter').find('h1').addClass('correct-answer-inner-letter');
      context.setState({
        correctAnswers: context.state.correctAnswers + 1,
        showCorrectAlert: true,
        showWrongAlert: false,
        answeredQuestion: true,
      });
      Methods.navigateToNextQuestion.call(context, props);
    } else {
      $('div.letter').removeClass('correct-answer-letter').find('h1').removeClass('correct-answer-inner-letter');
      $(e.currentTarget).find('div.letter').addClass('wrong-answer-letter').find('h1').addClass('wrong-answer-inner-letter');
      context.setState({
        showWrongAlert: true,
        showCorrectAlert: false,
        answeredQuestion: true,
      });

      Methods.navigateToNextQuestion.call(context, props);
    }
  }
};
