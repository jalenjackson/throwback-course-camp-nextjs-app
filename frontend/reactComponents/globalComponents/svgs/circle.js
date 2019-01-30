import React from 'react';

const Circle = () => (
  <div style={ styles.Circle } className='circle' />
);

const styles = {
  Circle: {
    borderRadius: '100%',
    width: '15px',
    height: '15px',
    background: 'none'
  }
};

export default Circle;
