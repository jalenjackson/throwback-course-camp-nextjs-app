import React from 'react';
import AddANewVideoButton from './AddANewVideoButton';
import { Input, Tooltip } from 'antd';
import { pluginsEnabled } from '../../../newCourse/steps/addDescription/pluginsEnabled';

export default class LeftPanelContainer extends React.Component {
  componentDidMount() {
    const textArea = $('#build-course-section-description-text-area');
    textArea.froalaEditor({
      placeholderText: 'Create a description for this section!',
      fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
      codeMirror: true,
      pluginsEnabled
    });
    textArea.on('froalaEditor.contentChanged', e => {
      // update the state
    });
  }
  render () {
    return (
      <div className='left-view'>
        <div className='left-view-fields-inside'>
          <h1 className='left-view-section-title'>Title</h1>
          <label>Title</label>
          <Tooltip
              trigger={['focus']}
              title='This will be the title of this section'
              placement="topLeft"
              overlayClassName="numeric-input">
            <Input  allowClear placeholder="Type in the title for this section" />
          </Tooltip>
          <label style={{ marginTop: '20px', display: 'block' }}>Category</label>
          <Tooltip
              trigger={['focus']}
              title='This will be the category for this section'
              placement="topLeft"
              overlayClassName="numeric-input">
            <Input allowClear placeholder="Type in a category for this section" />
          </Tooltip>
          <label style={{ marginTop: '20px', display: 'block' }}>Description</label>
          <textarea id='build-course-section-description-text-area' />
          <AddANewVideoButton />
        </div>
      </div>
    )
  }
}
