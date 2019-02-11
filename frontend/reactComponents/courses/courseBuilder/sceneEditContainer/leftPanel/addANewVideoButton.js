import React from 'react';
import { Upload, Button, Icon } from 'antd';
import { handleUnauthenticatedButFrontEndThinksWeAre } from '../../../../../../globalHelpers/handleUnauthenticatedButFrontEndThinksWeAre';

export default class AddANewVideoButton extends React.Component {
  state = {
    currentSectionWhenUploading: 0
  };
  render() {
    return (
      <div>
        <Upload
            beforeUpload={ this.catchCurrentActiveSection }
            accept='video/mp4,video/x-m4v,video/*'
            name='singleVideo'
            action='/uploaders/single-video'
            headers={{ Authorization: `Bearer ${ this.props.navbarContainer.state.authorizationToken }` }}
            onChange={ info => this.startVideoUploadProcess(info) }>
          <Button>
            <Icon type="upload" /> Add A New Video
          </Button>
        </Upload>
      </div>
    )
  }

  catchCurrentActiveSection = async () => {
    await this.setState({ currentSectionWhenUploading: this.props.container.state.currentActiveSection });
  };

  startVideoUploadProcess = async info => {
    if (info.file.status === 'done') {
      await this.props.container.handleSectionVideoUpload(info.file.response.link, this.state.currentSectionWhenUploading);
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

