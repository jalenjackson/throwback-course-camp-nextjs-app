import React from 'react';
import { Methods } from '../containerMethods/index'
import { Progress } from 'antd';

export default class Timer extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.timer = setInterval(this.handleTime, 1000);
    }, 300)
  }
  
  componentWillUnmount() {
    this.props.container.updateState('countdownTime', 10);
    clearInterval(this.timer)
  }
  
  handleTime = () => {
    const container = this.props.container;
    
    if (container.state.gameStarted) {
      if (container.state.countdownTime !== 0 && !container.state.isNavigating) {
        container.updateState('countdownTime', container.state.countdownTime - 1);
      } else {
        if (!container.state.isNavigating) {
          Methods.navigateToNextQuestion.call(this.props.container, this.props);
        }
      }
    }
  };

  render() {
    return (
      <Progress
          strokeColor={ this.props.course.color }
          width={ 60 }
          className='timer'
          type="circle"
          percent={ this.props.container.state.countdownTime * 10 }
          format={ () =>
            <span style={{ fontSize: 23 }}>
              { this.props.container.state.countdownTime }
            </span> } />
    )
  }
}
