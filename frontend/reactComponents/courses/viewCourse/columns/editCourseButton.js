import React from 'react';
import { Button } from 'antd';
import { Link } from '../../../../../routes';

export default class EditCourseButton extends React.Component {
  render() {
    return (
      <div className='edit-course-wrapper column-wrapper'>
        <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
          <span>You are the creator of this course { this.props.auth.name }!</span>
        </h1>
        <Link route={ `/courses/build/${ this.props.course._id }` }>
          <Button type='primary'>Edit</Button>
        </Link>
      </div>
    )
  }
}