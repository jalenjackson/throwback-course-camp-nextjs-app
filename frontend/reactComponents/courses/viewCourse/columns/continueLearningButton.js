import React from 'react';
import { Button, message } from 'antd';
import { Link } from '../../../../../routes';

export default class ContinueLearningButton extends React.Component {
  render() {
    return (
      <div className='continue-learning-wrapper column-wrapper'>
        <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
          <span>{ this.props.auth.name } { `${ this.props.course.price === 0 ? 'explore ' + this.props.course.title  : 'continue learning' }` }</span>
        </h1>
        { this.props.auth.authenticated
          ? <Link
              route={ `/courses/view/${ this.props.course._id }/track` }>
              <Button type="primary">Explore</Button>
            </Link>
          : <Button onClick={ () => message.info('Please sign up to access this course') } type="primary">Explore</Button>
        }
      </div>
    )
  }
}