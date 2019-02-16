import React from 'react';

export default class SetInitialStateFromData extends React.Component {
  componentDidMount() {
    if (!this.props.isFromBuildCourse) {
      try {
        const newCourseLocalState = localStorage.getItem('newCourseLocalState');
        if (newCourseLocalState) {
          this.props.container.setGlobalState(newCourseLocalState);
        }
      } catch (e) {
        localStorage.removeItem('newCourseLocalState');
      }
    } else {
      this.props.container.setGlobalState(this.props.course, true);
    }
  }

  render() {
    return (
      <div />
    )
  }
}
