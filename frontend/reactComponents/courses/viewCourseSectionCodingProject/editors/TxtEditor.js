import React from 'react';

const TxtEditor = ({ summary }) => (
  <div className='coding-project-summary-container'>
    <div className='coding-project-summary'>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  </div>
);

export default TxtEditor;
