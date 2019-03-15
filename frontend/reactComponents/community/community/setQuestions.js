import React from 'react';

export default class SetQuestions extends React.Component {
  componentWillMount() {
    this.props.container.updateState('forumQuestions', this.props.forumQuestions)
  }
  
  render() {
    return (
      <React.Fragment />
    )
  }
}