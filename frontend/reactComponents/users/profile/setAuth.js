import React from 'react';

export default class SetAuth extends React.Component {
  async componentWillMount() {
    this.props.container.updateState('auth', this.props.auth);
  }
  
  render() {
    return (
      <React.Fragment/>
    )
  }
}