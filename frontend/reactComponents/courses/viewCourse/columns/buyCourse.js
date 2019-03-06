import React from 'react';
import BuyCourse from '../../../globalComponents/buyCourse';

const BuyCourseWrapper = props => (
  <React.Fragment>
    <div style={{ marginTop: '55px' }}>
      <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
        <span>Purchase Course With PayPal</span>
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
  </React.Fragment>
);

export default BuyCourseWrapper;
