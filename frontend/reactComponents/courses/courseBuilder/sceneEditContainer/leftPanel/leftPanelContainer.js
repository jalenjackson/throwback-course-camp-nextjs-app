import React from 'react';
import AddANewVideoButton from './addANewVideoButton';
import { Input, message, Empty, Button } from 'antd';
import { pluginsEnabled } from '../../../newCourse/steps/addDescription/pluginsEnabled';
import GlobalLocalization from '../../../../../../globalLocalization';
import AddedVideosList from './addedVideosList';

export default class LeftPanelContainer extends React.Component {
  state = {
    froalaEditorDestroyed: false
  };

  componentDidMount() {
    this.initiateFroalaEditor();
  }

  async componentDidUpdate() {
    if (this.props.container.state.course.sections.length === 0) {
      if (!this.state.froalaEditorDestroyed) {
        this.setState({ froalaEditorDestroyed: true });
        const textArea = $('#build-course-section-description-text-area');
        textArea.froalaEditor('destroy');
        textArea.hide();
      }
    }
    if (this.props.container.state.course.sections.length > 0 && this.state.froalaEditorDestroyed) {
      this.setState({ froalaEditorDestroyed: false });
      this.initiateFroalaEditor();
    }
  }
  
  componentWillUnmount() {
    const textArea = $('#build-course-section-description-text-area');
    textArea.froalaEditor('destroy');
  }
  
  initiateFroalaEditor = () => {
    const textArea = $('#build-course-section-description-text-area');
    if (this.props.container.state.course.sections.length !== 0 && textArea.froalaEditor) {
      textArea.froalaEditor({
        placeholderText: 'Create a description for this section!',
        fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
        codeMirror: true,
        pluginsEnabled,
        toolbarSticky: false,
        fontSizeSelection: true,
      })
      .on('froalaEditor.contentChanged', e => {
        this.props.container.updateSectionDetails('description', 'sectionDescriptionTerm', e.target.value, this.props.navbarContainer, this.props.container.state.currentActiveSection);
      });
    } else {
      textArea.hide();
    }
  };

  render () {
    const container = this.props.container;
    return (
      <div className='left-view'>
        <div className='left-view-fields-inside'>
          { container.state.course.sections.length !== 0
            ? <div>
                <h1 className='left-view-section-title'>{ container.state.sectionTitleTerm }</h1>
                <label>Title</label>
                <Input value={ container.state.sectionTitleTerm } onChange={ e => container.updateSectionDetails('title', 'sectionTitleTerm', e.target.value, this.props.navbarContainer, this.props.container.state.currentActiveSection) } allowClear placeholder="Type in the title for this section" />
                <label style={{ marginTop: '20px', display: 'block' }}>Category</label>
                <Input value={ container.state.sectionCategoryTerm } onChange={ e => container.updateSectionDetails('category', 'sectionCategoryTerm', e.target.value, this.props.navbarContainer, this.props.container.state.currentActiveSection) } allowClear placeholder="Type in a category for this section" />
                <label style={{ marginTop: '20px', display: 'block' }}>Description</label>
              </div>
              : null
            }
          <textarea value={ container.state.sectionDescriptionTerm } id='build-course-section-description-text-area' />
          { container.state.course.sections.length !== 0
            ? <div>
                <AddANewVideoButton { ...this.props } />
                <AddedVideosList { ...this.props } />
              </div>
            :
              <div>
                <Empty
                    style={{ marginTop: 50 }}
                    image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                    description={
                      <span>
                      Add your first section to get started
                    </span>
                    }>
                  <Button onClick={ () => container.addNewSection(this.props.navbarContainer) } type="primary">Add New Section</Button>
                </Empty>
              </div>
            }
          </div>
        </div>
    )
  }
}
