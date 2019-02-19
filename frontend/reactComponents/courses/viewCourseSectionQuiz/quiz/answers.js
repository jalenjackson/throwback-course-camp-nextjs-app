import React from 'react';
import { shuffle } from '../../../../../globalHelpers/shuffleArray';

export default class Answers extends React.Component {
  render () {
    const state = this.props.container.state;
    const { isPictureQuiz } = this.props;
    this.shuffleAnswers(state);
    return (
      <div className="quiz-answers">
        { state.currentShuffledAnswers.map((shuffledAnswer, i) => (
          <div
              onMouseEnter={ e => this.handleAnswerMouseEnterAndLeave(e, 'enter') }
              onMouseLeave={ e => this.handleAnswerMouseEnterAndLeave(e, 'leave') }
              onClick={ e => this.props.container.answerQuestion(shuffledAnswer.isCorrect, e, this.props) }
              style={  state.shuffledQuestions.length > 0 && i === state.shuffledQuestions[state.currentActiveQuestion].answers.split(',').length - 1 ? {  borderBottom: 'none' } : {}} className='answer'>
            <div className="letter-container">
              <div
                  style={{ border: `3px solid ${ this.props.course.color }80` }} className='letter'>
                <h1 style={{ color: `${ this.props.course.color }80` }}>{ i + 1 }</h1>
              </div>
            </div>
            <div className='answer-text-container'>
              { isPictureQuiz
                ? <img src={ shuffledAnswer.answer } />
                : <p>{ shuffledAnswer.answer }</p>
              }
            </div>
          </div>
        )) }
      </div>
    )
  }

  handleAnswerMouseEnterAndLeave = (e, type) => {
    $(e.currentTarget).find('.letter')
      .css({ border: `3px solid ${ this.props.course.color }${ type === 'leave' ? '80' : 'FF' }` })
      .find('h1').css({ color: `${ this.props.course.color }${ type === 'leave' ? '80' : 'FF' }` });
  };

  shuffleAnswers = async state => {
    if (!state.answersShuffled && state.shuffledQuestions.length > 0) {
      const answers = state.shuffledQuestions[state.currentActiveQuestion].answers.split(',');
      const answersMapped = [];
      answersMapped.push({ answer: answers[0], isCorrect: true });
      answers.map((answer, i) => {
        if (i !== 0) {
          answersMapped.push({answer, isCorrect: false});
        }
      });
      await this.props.container.updateState('answersShuffled', true);
      this.props.container.updateState('currentShuffledAnswers', shuffle(answersMapped));
    }
  }
}
