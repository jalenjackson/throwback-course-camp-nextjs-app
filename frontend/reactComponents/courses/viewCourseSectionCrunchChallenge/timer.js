import React from 'react';
import { Progress } from 'antd';

export default class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(this.handleTime, 1000);
  }

  handleTime = () => {
    const state = this.props.container.state;
    if (state.countdownTime === 0) {
      return this.props.container.updateState('matchingGameEnded', true);
    }
    this.props.container.updateState('countdownTime', this.props.container.state.countdownTime - 1);
  };

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
