import React from 'react';
import Video from '../../../../globalComponents/video/index';

const RightPanelVideoPreviewContainer = (props) => (
  <div style={{ background: props.container.state.course.color }} className='video-preview'>
    <div className='video-scene-edit-preview'>
      <div className='video-scene-edit-preview-wrap'>
        <Video withTransition={ true } muted={ false } { ...props } />
      </div>
    </div>
  </div>
);

export default RightPanelVideoPreviewContainer
