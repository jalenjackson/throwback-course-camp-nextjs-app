import React from 'react';

export default class MatchingGame extends React.Component {
  state = {
    isAnswering: false,
    previousMatchId: '',
    previousType: '',
    matchingGame: {},
    correctCount: 0
  };

  render() {
    return (
      <div className='matching-container'>
        { this.props.matchingGame.questions.map((questionObj, i) => (
          <a className={ `matching-game-question-${ i }` } onClick={ e => this.handleSelection(e, 'question', questionObj.question, questionObj.matchId, i) }>{ questionObj.question }</a>
        )) }
        { this.props.matchingGame.answers.map((answerObj, i) => (
          <a className={ `matching-game-answer-${ i }` } onClick={ e => this.handleSelection(e, 'answer', answerObj.answer, answerObj.matchId, i) }>{ answerObj.answer }</a>
        )) }
      </div>
    )
  }

  handleSelection = async (e, type, value, matchId, i) => {
    e.target.style.background = `${ this.props.course.color }1A`;
    if (!this.state.isAnswering) {
      this.setState({
        isAnswering: true,
        previousMatchId: matchId,
        previousType: type
      });
    } else {
      if (matchId === this.state.previousMatchId && type !== this.state.previousType) {
        await this.setState({ ...resetStateValues, correctCount: this.state.correctCount + 1 });
        $('.matching-container a').css({ border: 'none' });
        $(`.matching-game-question-${ i }`).css({ opacity: 0, pointerEvents: 'none' });
        $(`.matching-game-answer-${ i }`).css({ opacity: 0, pointerEvents: 'none' });
        if (this.state.correctCount === this.props.matchingGame.questions.length) {
          this.props.container.updateState('matchingGameEnded', true);
        }
      } else {
        this.setState({ ...resetStateValues });
        $('.matching-container a').css({ background: 'white' });
      }
    }
  }
}

const resetStateValues = {
  isAnswering: false,
  previousMatchId: '',
  previousType: ''
};
