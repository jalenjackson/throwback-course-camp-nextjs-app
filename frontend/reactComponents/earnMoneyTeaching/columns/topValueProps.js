import React from 'react';
import { Button } from 'antd';
import { navigateToCreateCourse } from '../helpers';

const TopValueProps = props => (
  <div className='value-props'>
    <div className='value-props-overlay'>
      <div className="overlay-copy">
        <h1>Earn Money Teaching</h1>
        <p>No matter who you are, everyone has a something beneficial to teach. Why not do it for money?</p>
        <Button onClick={ () => navigateToCreateCourse(props) }  size='large' type='primary'>Get Started</Button>
      </div>
    </div>
  </div>
);

export default TopValueProps;