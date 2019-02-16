import React from 'react';
import Video from '../../../../globalComponents/video';

const RightPanelVideoPreviewContainer = (props) => (
  <div style={{ background: props.container.state.course.color }} className='video-preview'>
    <div className='video-scene-edit-preview'>
      <div className='video-scene-edit-preview-wrap'>
        <Video withTransition={ true } muted={ true } { ...props } />
      </div>
    </div>
  </div>
);

export default RightPanelVideoPreviewContainer
