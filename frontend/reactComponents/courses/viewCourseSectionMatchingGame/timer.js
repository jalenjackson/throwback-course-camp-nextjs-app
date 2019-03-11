import React from 'react';
import { Progress } from 'antd';
import {recordExercisePlayed} from "../../../../globalHelpers/recordExercisePlayed";

export default class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(this.handleTime, 1000);
  }

  handleTime = async () => {
    const state = this.props.container.state;
    if (state.countdownTime === 0) {
       this.props.container.updateState('matchingGameEnded', true);
       this.props.afterExerciseModalContainer.updateState('loseModalVisible', true);
       this.props.container.updateState('timeRanOut', true);
    }
    this.props.container.updateState('countdownTime', this.props.container.state.countdownTime - 1);
  };
  
  componentWillUnmount() {
    this.props.container.updateState('countdownTime', 10);
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <div className='matching-game-timer-container'>
          <div className='matching-game-timer'>
            <Progress
                strokeColor={ this.props.course.color }
                width={ 60 }
                type="circle"
                percent={ this.props.container.state.countdownTime }
                format={ () =>
                    <span style={{ fontSize: 23 }}>
                { this.props.container.state.countdownTime }
              </span> } />
          </div>
        </div>
      </div>
    )
  }
}
