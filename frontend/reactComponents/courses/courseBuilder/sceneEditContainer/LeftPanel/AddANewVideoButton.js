import React from 'react';
import { Button } from 'antd';

const AddANewVideoButton = () => (
  <div>
    <Button
        style={{ marginTop: 20 }}
        type="primary"
        icon="video-camera"
        className='add-a-new-video-button-course-builder'>
      Add New Video
    </Button>
  </div>
);

export default AddANewVideoButton;
