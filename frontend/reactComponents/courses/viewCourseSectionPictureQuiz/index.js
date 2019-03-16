import React from 'react';
import ViewCourseSectionQuizComponent from '../viewCourseSectionQuiz/index';

export default class ViewCourseSectionPictureQuiz extends React.Component {
  componentDidMount() {
    $(window).scrollTop(0);
  }
  
  render() {
    return (
      <div className='view-course-section-picture-quiz'>
        <ViewCourseSectionQuizComponent { ...this.props } isPictureQuiz={ true } />
      </div>
    )
  }
}
