import React from 'react';
import ReviewCourse from "../../globalComponents/reviewCourse/index";
import { Subscribe } from 'unstated';
import EndCourseContainer from './container';

export default class extends React.Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  
  render () {
    return (
      <Subscribe to={[EndCourseContainer]}>
        { container => (
          <div>
            <ReviewCourse fromEndCourse={ true } container={ container } { ...this.props } />
          </div>
        ) }
      </Subscribe>
    )
  }
}