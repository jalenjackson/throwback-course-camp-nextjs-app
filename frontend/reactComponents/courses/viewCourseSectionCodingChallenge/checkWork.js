import React from 'react';
import { Button } from 'antd';

const CheckWork = props => (
  <div className='coding-challenge-check-work'>
    <Button
        onClick={ () => props.container.executeCode() }
        style={{ background: props.course.color, border: `1px solid ${ props.course.color }` }}
        type="primary">Check Work</Button>
  </div>
);

export default CheckWork
