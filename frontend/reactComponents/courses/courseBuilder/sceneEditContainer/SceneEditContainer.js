import React from 'react';
import LeftPanelContainer from './LeftPanel/LeftPanelContainer';
import RightPanelVideoPreviewContainer from './RightPanelVideoPreview/RightPanelVideoPreviewContainer';

const SceneEditContainer = props => (
  <div className='video-scene-edit-container'>
    <div className='video-scene-edit'>
      <LeftPanelContainer { ...props } />
      <RightPanelVideoPreviewContainer { ...props } />
    </div>
  </div>
);

export default SceneEditContainer;
