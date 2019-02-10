import React from 'react';
import AddANewVideoButton from './addANewVideoButton';
import { Input } from 'antd';
import { pluginsEnabled } from '../../../newCourse/steps/addDescription/pluginsEnabled';
import { message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import AddedVideosList from './addedVideosList';

export default class LeftPanelContainer extends React.Component {
  componentDidMount() {
    const textArea = $('#build-course-section-description-text-area');
    textArea.froalaEditor({
      placeholderText: 'Create a description for this section!',
      fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
      codeMirror: true,
      pluginsEnabled,
      fontSizeSelection: true,
      imageUploadParam: 'singleFile',
      imageUploadURL: 'http://localhost:5000/uploaders/single-upload',
      imageUploadMethod: 'POST',
      imageMaxSize: 5 * 1024 * 1024,
      imageAllowedTypes: ['jpeg', 'jpg', 'png'],
      requestHeaders: {
        Authorization: `Bearer ${ this.props.auth.token }`
      },
      requestWithCredentials: true
    })
    .on('froalaEditor.image.removed', (e, editor, $img) => {
      this.props.container.deleteSectionImageInFroalaEditor($img);
    })
    .on('froalaEditor.image.error', () => {
      message.error(GlobalLocalization.UnexpectedError)
    })
    .on('froalaEditor.contentChanged', e => {
      this.props.container.updateSectionDetails('description', 'sectionDescriptionTerm', e.target.value, this.props.navbarContainer);
    });
  }
  render () {
    const container = this.props.container;
    return (
      <div className='left-view'>
        <div className='left-view-fields-inside'>
          <h1 className='left-view-section-title'>{ container.state.sectionTitleTerm }</h1>
          <label>Title</label>
          <Input value={ container.state.sectionTitleTerm } onChange={ e => container.updateSectionDetails('title', 'sectionTitleTerm', e.target.value, this.props.navbarContainer) } allowClear placeholder="Type in the title for this section" />
          <label style={{ marginTop: '20px', display: 'block' }}>Category</label>
          <Input value={ container.state.sectionCategoryTerm } onChange={ e => container.updateSectionDetails('category', 'sectionCategoryTerm', e.target.value, this.props.navbarContainer) } allowClear placeholder="Type in a category for this section" />
          <label style={{ marginTop: '20px', display: 'block' }}>Description</label>
          <textarea value={ container.state.sectionDescriptionTerm } id='build-course-section-description-text-area' />
          <AddANewVideoButton { ...this.props } />
          <AddedVideosList { ...this.props } />
        </div>
      </div>
    )
  }
}
