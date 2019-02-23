import React from 'react';
import BuyCourse from '../../../globalComponents/buyCourse';

const BuyCourseWrapper = props => (
  <React.Fragment>
    <div style={{ marginTop: '55px' }}>
      { typeof window !== 'undefined'
        ? <BuyCourse
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
