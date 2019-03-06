import React from 'react';
import { Button } from 'antd';
import { Link } from '../../../../../routes';

export default class ContinueLearningButton extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
          <span>{ this.props.auth.name } continue learning</span>
        </h1>
        <Link route={ `/courses/view/${ this.props.course._id }/track` }>
          <Button type="primary">Explore</Button>
        </Link>
      </div>
    )
  }
}