import React from 'react';
import _ from 'lodash';
import { Icon, Popconfirm } from 'antd';

const SectionList = props => (
  <div className='scenes'>
    { renderSections(props) }
  </div>
);

const renderSections = props => {
  return props.container.state.course.sections.map((section, i) => (
    <div onClick={ () => props.container.changeCurrentActiveSection(i) } className='video-wrap'>
      <div className='video-scene'>
        <Popconfirm placement="topLeft" title="Are you sure delete this entire section?" onConfirm={ () => props.container.deleteSection(i, props.navbarContainer) } okText="Yes" cancelText="No">
          <div className='delete-section'><Icon style={{ fontSize: 15, color: 'white' }} type='delete' /></div>
        </Popconfirm>
        <div style={ dynamicBorder(i === props.container.state.currentActiveSection) } className='video-overlay'>
          <h1>{ _.truncate('First section', { 'length': 10 }) }</h1>
        </div>
      </div>
    </div>
  ));
};

const dynamicBorder = isCurrentActiveSection => {
  return { border: isCurrentActiveSection ? '3px solid #1890FF' : '3px solid transparent' }
};

export default SectionList;
