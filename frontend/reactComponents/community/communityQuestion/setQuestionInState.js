import React from 'react';

export default class SetQuestionInState extends React.Component {
  componentWillMount() {
    this.props.container.updateState('forumQuestion', this.props.forumQuestion);
  }
  
  render() {
    return (
      <React.Fragment/>
    )
  }
}