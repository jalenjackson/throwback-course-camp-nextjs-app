import React from 'react';

export default class SetTimer extends React.Component {
  componentWillMount() {
    this.props.container.updateState('countdownTime', this.props.matchingGame.timeAllotted)
  }

  render() {
    return (
      <React.Fragment />
    )
  }
}
