import React from 'react';
import {manuallyQueryUser} from "../../../../globalHelpers/manuallyQueryUser";

export default class SetAuth extends React.Component {
  async componentWillMount() {
    const auth = await manuallyQueryUser(this.props.auth);
    this.props.container.updateState('auth', auth);
  }
  
  render() {
    return (
      <React.Fragment/>
    )
  }
}