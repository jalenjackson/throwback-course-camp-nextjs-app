import React from 'react';
import { Icon } from 'antd';

const AddNewSectionButton = () => (
  <div className='video-add'>
    <button>
      <div className="add-video-icon">
        <Icon style={{ fontSize: 20 }} type='plus' />
      </div>
      <div className="add-video-label">Add Section</div>
    </button>
  </div>
);

export default AddNewSectionButton;
