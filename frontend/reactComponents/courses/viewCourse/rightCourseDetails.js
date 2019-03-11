import React from 'react';

const RightCourseDetails = props => (
  <div>
    <div style={{ background: props.course.color }} className='course-information'>
      <div className='course-information-text-container'>
        <h1 style={{ width: '90%' }}>{ props.course.title }</h1>
        <p style={{ width: '90%' }} className="summary">{ props.course.summary }</p>
        <div className="divider" />
        <div dangerouslySetInnerHTML={{ __html: props.course.description }} className='description' />
      </div>
    </div>
  </div>
);

export default RightCourseDetails;
