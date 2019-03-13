import React from 'react';
import { Upload, Button, Icon, message } from 'antd';
import { host } from '../../../../../../globalHelpers/axiosCalls';
import GlobalLocalization from "../../../../../../globalLocalization";

export default class AddANewVideoButton extends React.Component {
  state = {
    currentSectionWhenUploading: 0
  };
  render() {
    return (
      <div style={{ marginBottom: 50, marginTop: 30 }}>
        <Upload
            accept='video/mp4,video/x-m4v,video/*'
            name='singleVideo'
            action={`${ host }/uploaders/single-video`}
            headers={{
              Authorization: `Bearer ${ this.props.auth.token }`,
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
      message.error(GlobalLocalization.UnexpectedError);
    }
  };
}

