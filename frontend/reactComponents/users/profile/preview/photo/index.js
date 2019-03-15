import React from 'react';
import { Button, Icon, Upload } from 'antd';
import { host } from "../../../../../../globalHelpers/axiosCalls";

export default class Photo extends React.Component {
  state = {
    imageUrl: false,
    fileList: []
  };
  
  render() {
    const { auth } = this.props.container.state;
    return (
      <div id="photo-item">
        <h3>Upload a profile Image</h3>
        <Upload
          accept='image/gif, image/jpeg, image/png'
          onChange={ this.handleUploadOptionalImage }
          headers={{ Authorization: `Bearer ${ auth.token }` }}
          action={`${ host }/uploaders/single-upload`}
          fileList={ this.state.fileList }
          beforeUpload={ (file) => {
            this.setState(state => ({
              fileList: [...state.fileList, file],
            }));
          } }
          name="singleFile">
          <Button style={{ marginBottom: 30 }}>
            <Icon type="upload" /> { auth.profileImage ? 'Upload a different Image' : 'Upload Image' }
          </Button>
        </Upload>
        <img src={ auth.profileImage } />
      </div>
    )
  }
  
  handleUploadOptionalImage = (info) => {
    if (info.file.status === 'done') {
      this.props.container.uploadProfileImage(info.file.response.link);
      this.setState({ imageUrl: info.file.response.link, fileList: [] });
    }
  };
}