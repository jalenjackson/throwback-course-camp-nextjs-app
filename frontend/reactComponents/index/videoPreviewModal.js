import React from 'react';
import { Modal } from 'antd';
import Video from '../globalComponents/video/index';

const VideoPreviewModal = props => (
  <Modal
      className="video-preview-modal"
      title={ props.container.state.videoPreviewCourse.title }
      centered
      width={ '70%' }
      visible={ props.container.state.videoPreviewModalVisibility }
      onCancel={ () => closeVideoPreviewModal(props) }>
    <Video withTransition={ false } muted={ false } { ...props } />
  </Modal>
);

const closeVideoPreviewModal = props => {
  props.container.updateState('videoPlaying', false);
  props.container.updateState('videoPreviewModalVisibility', false);
};

export default VideoPreviewModal;
