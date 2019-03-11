import React from 'react';
import { Button, Icon, Upload } from 'antd';

export default class Photo extends React.Component {
  state = {
    imageUrl: false
  };
  
  render() {
    return (
      <div>
        <img src={ this.props.container.state.auth.profileImage } />
        <Upload
          disabled={ this.state.imageUrl !== false }
          accept='image/gif, image/jpeg, image/png'
          onChange={ this.handleUploadOptionalImage }
          headers={{ Authorization: `Bearer ${ this.props.container.state.auth.token }` }}
          action="/uploaders/single-upload"
          name="singleFile">
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </div>
    )
  }
  
  handleUploadOptionalImage = (info) => {
    if (info.file.status === 'done') {
      this.setState({ imageUrl: info.file.response.link });
      this.props.container.uploadProfileImage(info.file.response.link);
    }
  };
}