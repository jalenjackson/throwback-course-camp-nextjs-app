import React from 'react';
import ViewCourseSectionQuizComponent from '../viewCourseSectionQuiz/index';

export default class ViewCourseSectionPictureQuiz extends React.Component {
  componentDidMount () {
    $('body').css({
      background: `linear-gradient(rgb(255,245,245), ${ this.props.course.color }80)`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    })
  }

  render() {
    return (
      <div className='view-course-section-picture-quiz'>
        <ViewCourseSectionQuizComponent { ...this.props } isPictureQuiz={ true } />
      </div>
    )
  }
}
