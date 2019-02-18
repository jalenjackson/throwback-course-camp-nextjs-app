import React from 'react';
import Answers from './answers';
import AnsweredAlert from './answeredAlert';
import Question from './question';

export default class Quiz extends React.Component {
  render() {
    return (
      <div>
        <div className="quiz-section">
          <div className="quiz-section-overlay" />
          <Question { ...this.props }  />
          <AnsweredAlert { ...this.props } />
          <Answers { ...this.props } />
        </div>
      </div>
    )
  }
}
