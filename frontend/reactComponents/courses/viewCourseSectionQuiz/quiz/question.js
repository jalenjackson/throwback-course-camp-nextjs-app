import React from 'react';
import Timer from './timer';
import { shuffle } from '../../../../../globalHelpers/shuffleArray';

export default class Question extends React.Component {
  
  componentDidMount() {
    const state = this.props.container.state;
    const { currentQuiz, isPictureQuiz} = this.props;
    this.shuffleQuestions(currentQuiz, state);
  }
  
  render() {
    const state = this.props.container.state;
    const currentQuestion = state.shuffledQuestions[state.currentActiveQuestion];
    const { currentQuiz, isPictureQuiz} = this.props;
    return (
      <div className='quiz-question'>
        { currentQuestion
          ? <div>
              <p className='quiz-question-progress'>
                <span>Question { state.currentActiveQuestion + 1 } of { currentQuiz.length }</span>
              </p>
              <Timer { ...this.props } />
              { currentQuestion.optionalImage !== 'false' && !isPictureQuiz
                  ? <img className='question-image' src={ currentQuestion.optionalImage } />
                  : null
              }
              <h1 className='quiz-question-text'>
                { state.shuffledQuestions.length > 0
                    ? currentQuestion.question
                    : null
                }
              </h1>
            </div>
          : null
        }
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
