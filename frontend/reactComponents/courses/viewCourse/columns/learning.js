import React from 'react';
import { List } from 'antd';

const Learning = props => (
  <div className='learning-wrapper column-wrapper'>
    <h1 className="section-title">
      <span>What you will learn</span>
    </h1>
    <div className="course-section">
      <div className='course-section-learning'>
        <List
          size="small"
          bordered
          dataSource={ props.course.learning.split(',') }
          renderItem={item => (
            <List.Item>
              <div className='checkmark' />
              <span style={{ marginLeft: 7 }}>{item}</span>
            </List.Item>)} />
      </div>
    </div>
  </div>
);

export default Learning;
