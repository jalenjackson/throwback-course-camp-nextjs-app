import React from 'react';
import BuyCourse from '../../../globalComponents/buyCourse';

const BuyCourseWrapper = props => (
  <div className='buy-course-wrapper column-wrapper'>
    <div style={{ marginTop: '55px' }}>
      <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
        <span>Purchase Course With PayPal For ${ props.course.price }</span>
      </h1>
      { typeof window !== 'undefined'
        ? <BuyCourse
            { ...props }
            auth={ props.auth }
            course={ props.course }
            style={{ background: 'rgb(255, 222, 23)', color: 'black' }}>
            Buy Course For ${ props.course.price }
          </BuyCourse>
        : null
      }
    </div>
  </div>
);

export default BuyCourseWrapper;
