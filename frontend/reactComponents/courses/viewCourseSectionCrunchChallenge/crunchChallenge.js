import React from 'react';
import { Button, Input, Icon } from 'antd';
import {recordExercisePlayed} from "../../../../globalHelpers/recordExercisePlayed";

export default class CrunchChallenge extends React.Component {
  state = {
    answerValue: ''
  };

  render() {
    return (
      <div className='crunch-challenge-container'>
        <div className='entered-answers'>
          { this.props.container.state.addedAnswers.map((answerObj) => (
            <a>{ answerObj.answer } <Icon
                type={ answerObj.isCorrect ? 'check-circle' : 'close-circle' }
                theme="twoTone"
                twoToneColor={ answerObj.isCorrect ? '#52c41a' : '#eb2f96' } />
            </a>
          )) }
        </div>
        <div className='crunch-challenge-enter-answer'>
          <Input
            onChange={ e => this.setState({ answerValue: e.target.value }) }
            value={ this.state.answerValue }
            onKeyDown={ e => this.addAnswer(e) }
            placeholder="Answer..."
          />
          <Button style={{ background: this.props.course.color, borderColor: this.props.course.color }} type='primary'>Answer</Button>
        </div>
      </div>
    )
  }

  addAnswer = async e => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      const state = this.props.container.state;
      const addedAnswers = state.addedAnswers;
      const value = e.target.value.toLowerCase();
      const elemIndex = this.props.crunchChallenge.definitions.split(',').findIndex(item => value.toLowerCase() === item.toLowerCase());
  
      if (this.props.container.state.addedAnswers.findIndex(item => item.answer === value ) > -1) {
        await this.setState({ answerValue: '' });
        return
      }
  
      if (elemIndex !== -1) {
        addedAnswers.push({
          answer: value,
          isCorrect: true,
        });
        await this.props.container.updateState('addedAnswers', addedAnswers);
        await this.props.container.updateState('correctAnswers', this.props.container.state.correctAnswers + 1)
      } else {
        addedAnswers.push({
          answer: value,
          isCorrect: false
        });
        await this.props.container.updateState('addedAnswers', addedAnswers);
      }
      
      if (+this.props.container.state.correctAnswers === +this.props.crunchChallenge.definitions.split(',').length) {
        this.props.container.updateState('gameOver', true);
        this.props.afterExerciseContainer.updateState('winModalVisible', true);
        const endScore = `${ this.props.container.state.correctAnswers }/${ this.props.crunchChallenge.definitions.split(',').length }`;
        
        return recordExercisePlayed(this.props.course._id, 'crunchChallenge', endScore, this.props.sectionIndex, this.props.videoIndex, this.props.auth);
      }
      
      this.setState({ answerValue: '' });
    }
  }
}
