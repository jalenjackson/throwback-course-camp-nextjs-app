import React from 'react';
import AddANewVideoButton from './AddANewVideoButton';
import Header from '../../headers/Header';

const LeftPanelContainer = () => (
  <div className='left-view'>
    <div>
      <Header />
      <h1>Title</h1>
      <input  />
      <input />
      <textarea />
      <AddANewVideoButton />
    </div>
  </div>
);

export default LeftPanelContainer;
