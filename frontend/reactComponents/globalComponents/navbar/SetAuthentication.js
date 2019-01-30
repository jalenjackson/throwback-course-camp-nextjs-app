import React from 'react';

export default class SetAuthentication extends React.Component {
  componentWillMount() {
    this.props.navbarContainer.setContainerState('authenticated', this.props.authenticated)
  }

  render() {
    return (<div />)
  }
}
