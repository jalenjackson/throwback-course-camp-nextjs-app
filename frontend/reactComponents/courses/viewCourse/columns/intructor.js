import React from 'react';
import { Comment, Avatar } from 'antd';

const Instructor = props => (
  <React.Fragment>
    <h1 className="section-title">
      <span>Instructor</span>
    </h1>
    <div className="course-section">
      <div className='course-section-learning'>
        <Comment
          author={<a>{ props.course.creator.name }</a>}
          avatar={(
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo" />
          )}
          content={(
            <p>Hello! I have a masters in computer science with over 30 years teaching computing.</p>
          )}
        />
      </div>
    </div>
  </React.Fragment>
);

export default Instructor;
