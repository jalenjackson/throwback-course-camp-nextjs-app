import React from 'react';

export default class SetAuthentication extends React.Component {
  componentWillMount() {
    this.props.navbarContainer.setInitialAuthentication(this.props.auth.authenticated, this.props.auth);
  }

  render () {
    return (
      <div />
    )
  }
}
