import React from 'react';

export default class SetInitialStateFromData extends React.Component {
  componentDidMount() {
    try {
      const newCourseLocalState = localStorage.getItem('newCourseLocalState');
      if (newCourseLocalState) {
        this.props.container.setGlobalState(newCourseLocalState);
      }
    } catch (e) {
      localStorage.removeItem('newCourseLocalState');
    }
  }

  render() {
    return (
      <div />
    )
  }
}
