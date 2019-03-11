import React from 'react';
import { Button } from 'antd';
import { navigateToCreateCourse } from '../helpers';

const GetStartedTeachingCTA = props => (
  <div className='get-started-teaching-cta'>
    <h1>Become a teacher today!</h1>
    <Button size='large' onClick={ () => navigateToCreateCourse(props) } type="primary">Get Started</Button>
  </div>
);

export default GetStartedTeachingCTA;