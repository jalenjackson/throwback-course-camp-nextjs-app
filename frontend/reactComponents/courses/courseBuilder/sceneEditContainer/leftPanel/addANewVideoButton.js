import React from 'react';
import { Upload, Button, Icon } from 'antd';
import { handleUnauthenticatedButFrontEndThinksWeAre } from '../../../../../../globalHelpers/handleUnauthenticatedButFrontEndThinksWeAre';
let test = null;

export default class AddANewVideoButton extends React.Component {
  state = {
    currentSectionWhenUploading: 0
  };
  render() {
    return (
      <div>
        <Upload
            accept='video/mp4,video/x-m4v,video/*'
            name='singleVideo'
            action='/uploaders/single-video'
            headers={{
              Authorization: `Bearer ${ this.props.navbarContainer.state.authorizationToken }`,
              currentSection: `${ this.props.container.state.currentActiveSection }` }}
            onChange={ info => this.startVideoUploadProcess(info) }>
          <Button>
            <Icon type="upload" /> Add A New Video
          </Button>
        </Upload>
      </div>
    )
  }

  startVideoUploadProcess = async info => {
    if (info.file.status === 'done') {
      await this.props.container.handleSectionVideoUpload(info.file.response.link, info.file.response.currentSection);
      $('.video-transition').css({ opacity: 1 });
      setTimeout(() => {
        this.props.container.updateState('currentVideoLocation', info.file.response.link);
      }, 300);
      setTimeout(() => {
        $('.video-transition').css({ opacity: 0 });
      }, 400);
    } else if (info.file.status === 'error') {
      if (info.file.response.unauthenticated) {
        handleUnauthenticatedButFrontEndThinksWeAre(this.props.navbarContainer);
      }
    }
  };
}

