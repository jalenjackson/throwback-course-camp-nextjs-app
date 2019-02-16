import React from 'react';

const RightCourseDetails = props => (
  <React.Fragment>
    <div style={{ background: props.course.color }} className='course-information'>
      <div className='course-information-text-container'>
        <h1>The Complete Drawing Course</h1>
        <p className="summary">Learn to draw like a professional!</p>
        <div className="divider" />
        <div dangerouslySetInnerHTML={{ __html: props.course.description }} className='description' />
      </div>
    </div>
  </React.Fragment>
);

export default RightCourseDetails;
