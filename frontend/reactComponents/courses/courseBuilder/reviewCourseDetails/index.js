import React from 'react';
import NewCourse from '../../newCourse/index';

export default class ReviewCourseDetails extends React.Component {
  render() {
    return (
      <div>
        <NewCourse auth={ this.props.auth } course={ this.props.container.state.course } isFromBuildCourse={ true } />
      </div>
    )
  }
}
