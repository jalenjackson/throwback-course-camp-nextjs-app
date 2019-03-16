import React from 'react';
import { Comment, Avatar } from 'antd';

const Instructor = props => (
  <div className='instructor-wrapper column-wrapper'>
    <h1 className="section-title">
      <span>Instructor</span>
    </h1>
    <div className="course-section">
      <div className='course-section-learning'>
        <Comment
          author={<a>{ props.course.creator.name }</a>}
          avatar={(
            <Avatar
              src={ props.course.creator.profileImage ? props.course.creator.profileImage : '/static/icons/profile-image-placeholder.png' } />
          )}
        />
      </div>
    </div>
  </div>
);

export default Instructor;
