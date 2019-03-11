import React from 'react';
import {shuffle} from "../../../../../globalHelpers/shuffleArray";
import {recordExercisePlayed} from "../../../../../globalHelpers/recordExercisePlayed";

export default class MatchingGame extends React.Component {
  state = {
    isAnswering: false,
    previousMatchId: '',
    previousType: '',
    matchingGame: {},
    correctCount: 0
  };
  
  async componentWillMount() {
    if (!this.props.container.isShuffled) {
      await this.props.container.updateState('shuffledQuestions', shuffle(this.props.matchingGame.questions));
      await this.props.container.updateState('shuffledAnswers', shuffle(this.props.matchingGame.answers));
      this.props.container.updateState('isShuffled', true);
    }
  }
  
  render() {
    return (
      <div>
        { this.props.container.state.isShuffled
          ? <div className='matching-container'>
              { this.props.container.state.shuffledQuestions.map(questionObj => (
                <a
                  style={{ background: this.props.course.color + '26' }}
                  className={ `matching-game-question-${ questionObj.matchId }` }
                  onClick={ e => this.handleSelection(e, 'question', questionObj.question, questionObj.matchId) }>
                  { questionObj.question }
                </a>
              )) }
              { this.props.container.state.shuffledAnswers.map(answerObj => (
                <a
                  style={{ background: this.props.course.color + '26' }}
                  className={ `matching-game-answer-${ answerObj.matchId }` }
                  onClick={ e => this.handleSelection(e, 'answer', answerObj.answer, answerObj.matchId) }>
                  { answerObj.answer }
                </a>
              )) }
            </div>
          : null
        }
      </div>
    )
  }

  handleSelection = async (e, type, value, matchId) => {
    e.target.style.background = '#1890FF';
    e.target.style.color = 'white';
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
        $(`.matching-game-question-${ matchId }`).css({ opacity: 0, pointerEvents: 'none' });
        $(`.matching-game-answer-${ matchId }`).css({ opacity: 0, pointerEvents: 'none' });
        if (this.state.correctCount === this.props.matchingGame.questions.length) {
          this.props.container.updateState('matchingGameEnded', true);
          this.props.afterExerciseModalContainer.updateState('winModalVisible', true);
          return recordExercisePlayed(this.props.course._id, 'matchingGame', 'Completed', this.props.sectionIndex, this.props.videoIndex, this.props.auth);
        }
      } else {
        this.setState({ ...resetStateValues });
        
        $('.matching-container a').addClass('shake');
        
        setTimeout(() => {
          $('.matching-container a').removeClass('shake');
          $('.matching-container a').css({
            background: `${ this.props.course.color }26`,
            color: `rgb(90, 90, 90)` });
        }, 210)
        
      }
    }
  };
  
  shuffle = async (currentQuiz, state) => {
    if (!state.questionsShuffled) {
      await this.props.container.updateState('questionsShuffled', true);
      this.props.container.updateState('shuffledQuestions', shuffle(currentQuiz));
    }
  }
}

const resetStateValues = {
  isAnswering: false,
  previousMatchId: '',
  previousType: ''
};
