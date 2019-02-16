import React from 'react';
import { Button } from 'antd';

const BuyCourse = props => (
  <React.Fragment>
    <div style={{ marginTop: '55px' }}>
      <Button style={{ background: 'rgb(255, 222, 23)', color: 'black' }}>Buy Course For ${ props.course.price }</Button>
    </div>
  </React.Fragment>
);

export default BuyCourse;
