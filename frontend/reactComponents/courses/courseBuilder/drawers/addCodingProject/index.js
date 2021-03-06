import React from 'react';
import {Drawer, Button, Popconfirm, message} from 'antd';
import { pluginsEnabled } from "../../../newCourse/steps/addDescription/pluginsEnabled";

const ButtonGroup = Button.Group;


export default class AddCodingProjectDrawer extends React.Component {
  state = {
    summary: '',
    saving: false,
    deleting: false,
    froalaSet: false
  };

  componentDidMount() {
    const currentActiveVideo = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos[this.props.container.state.currentActiveVideoInSection];
    if (currentActiveVideo && currentActiveVideo.codingProject) {
      const { summary } = currentActiveVideo.codingProject;
      this.setState({ summary: atob(summary) });
    }
  }

  componentWillUpdate() {
    if (this.props.container.state.addCodingProjectVisibility && !this.state.froalaSet) {
      setTimeout(() => {
        this.setState({ froalaSet: true });
        $('#coding-project-text-area').froalaEditor({
          key: process.env.froalaKey,
          placeholderText: 'Create a description for this coding challenge!',
          fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
          codeMirror: true,
          pluginsEnabled,
          toolbarSticky: false,
          fontSizeSelection: true,
          emoticonsStep: 4,
          emoticonsSet: [
            { code: '1f600', desc: 'Grinning face' },
            { code: '1f601', desc: 'Grinning face with smiling eyes' },
            { code: '1f602', desc: 'Face with tears of joy' },
            { code: '1f603', desc: 'Smiling face with open mouth' },
            { code: '1f604', desc: 'Smiling face with open mouth and smiling eyes' },
            { code: '1f605', desc: 'Smiling face with open mouth and cold sweat' },
            { code: '1f606', desc: 'Smiling face with open mouth and tightly-closed eyes' },
            { code: '1f607', desc: 'Smiling face with halo' }
          ]
        })
        .on('froalaEditor.contentChanged', e => {
          this.setState({ summary: e.target.value });
        });
      }, 100)
    }
  }

  saveCodingProject = async () => {
    this.setState({ saving: true });
    await this.props.container.saveCodingProject(this.props.auth, this.state.summary);
    this.setState({ saving: false });
  };

  removeCodingProject = async () => {
    this.setState({ deleting: true });
    await this.props.container.removeExercise(this.props.auth, 'codingProject');
    this.setState({
      deleting: false,
    });
    $('#coding-project-text-area').froalaEditor('html.set', '');
    this.props.container.updateState('addCodingProjectVisibility', false);
    message.success('Successfully removed coding project.')
  };

  render() {
    return (
      <div>
        <Drawer
            width={ 520 }
            title='Add A Coding Project'
            placement='left'
            closable={ true }
            onClose={ () => this.props.container.updateState('addCodingProjectVisibility', false) }
            visible={ this.props.container.state.addCodingProjectVisibility }>
          <label style={{ display: 'block', marginTop: 10, marginBottom: 2 }}>Describe the coding project</label>
          <textarea  value={ this.state.summary } id='coding-project-text-area' />
          <ButtonGroup style={{ marginTop: 20 }}>
            <Button loading={ this.state.saving } onClick={ this.saveCodingProject } type='primary'>Save Coding Project</Button>
            <Popconfirm title="Are you sure remove this coding project from this video?" onConfirm={ () => this.removeCodingProject() } okText="Yes" cancelText="No">
              <Button loading={ this.state.deleting } type='danger'>Remove Coding Challenge</Button>
            </Popconfirm>
          </ButtonGroup>
        </Drawer>
      </div>
    )
  }
}
