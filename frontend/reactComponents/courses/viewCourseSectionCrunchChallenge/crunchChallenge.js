import React from 'react';
import { Button, Input, Icon } from 'antd';

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

  addAnswer = e => {
    if (e.key === 'Enter') {
      const state = this.props.container.state;
      const addedAnswers = state.addedAnswers;
      const value = e.target.value;
      const elemIndex = this.props.crunchChallenge.definitions.split(',').findIndex(item => value.toLowerCase() === item.toLowerCase());

      if (elemIndex !== -1) {
        addedAnswers.push({
          answer: e.target.value,
          isCorrect: true
        });
      } else {
        addedAnswers.push({
          answer: e.target.value,
          isCorrect: false
        });
      }
      this.props.container.updateState('addedAnswers', addedAnswers);
      this.setState({ answerValue: '' });
    }
  }
}
