import React from 'react';
import LeftPanelContainer from './leftPanel/leftPanelContainer';
import RightPanelVideoPreviewContainer from './rightPanelVideoPreview/rightPanelVideoPreviewContainer';

const SceneEditContainer = props => (
  <div className='video-scene-edit-container'>
    <div className='video-scene-edit'>
      <LeftPanelContainer { ...props } />
      <RightPanelVideoPreviewContainer { ...props } />
    </div>
  </div>
);

export default SceneEditContainer;
