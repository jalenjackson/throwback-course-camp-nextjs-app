import React from 'react';
import Timer from './timer';
import { shuffle } from '../../../../../globalHelpers/shuffleArray';

export default class Question extends React.Component {
  render() {
    const state = this.props.container.state;
    const { currentQuiz } = this.props;
    this.shuffleQuestions(currentQuiz, state);
    return (
      <div className='quiz-question'>
        <p className='quiz-question-progress'>
          <span>Question { state.currentActiveQuestion + 1 } of { currentQuiz.length }</span>
        </p>
        <Timer { ...this.props } />
        <h1 className='quiz-question-text'>{ state.shuffledQuestions.length > 0
          ? state.shuffledQuestions[state.currentActiveQuestion].question
          : null
        }</h1>
      </div>
    )
  }

  shuffleQuestions = async (currentQuiz, state) => {
    if (!state.questionsShuffled) {
      await this.props.container.updateState('questionsShuffled', true);
      this.props.container.updateState('shuffledQuestions', shuffle(currentQuiz));
    }
  }
}
