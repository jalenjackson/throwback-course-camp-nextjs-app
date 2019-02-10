import React from 'react';
import { Icon } from 'antd';

const AddNewSectionButton = props => (
  <div className='video-add'>
    <button>
      <div onClick={ () => props.container.addNewSection(props.navbarContainer) } className='add-video-icon'>
        { props.container.state.creatingSectionLoading
          ? <Icon style={{ fontSize: 20 }} type='loading' />
          : <Icon style={{ fontSize: 20 }} type='plus' />
        }
      </div>
      <div className='add-video-label'>Add Section</div>
    </button>
  </div>
);

export default AddNewSectionButton;
