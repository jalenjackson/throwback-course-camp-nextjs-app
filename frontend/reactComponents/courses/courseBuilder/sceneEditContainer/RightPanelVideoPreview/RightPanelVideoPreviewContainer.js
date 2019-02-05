import React from 'react';
import Video from './Video';

const RightPanelVideoPreviewContainer = (props) => (
  <div className='video-preview'>
    <div className='video-scene-edit-preview'>
      <div className='video-scene-edit-preview-wrap'>
        <Video { ...props } />
      </div>
    </div>
  </div>
);

export default RightPanelVideoPreviewContainer
