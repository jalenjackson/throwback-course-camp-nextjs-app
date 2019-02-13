import React from 'react';
import {Drawer, Input, List, Button, Icon} from 'antd';

const ButtonGroup = Button.Group;

export default class AddCrunchChallengeDrawer extends React.Component {
  state = {
    target: '',
    definitions: [],
    definitionTerm: '',
    saving: false,
    deleting: false
  };

  componentDidMount() {
    const currentActiveVideo = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos[this.props.container.state.currentActiveVideoInSection];
    if (currentActiveVideo.crunchChallenge && currentActiveVideo.crunchChallenge.definitions.length > 0) {
      this.setState({ definitions: currentActiveVideo.crunchChallenge.definitions.split(',') })
    }
    if (currentActiveVideo.crunchChallenge && currentActiveVideo.crunchChallenge.target) {
      this.setState({ target: currentActiveVideo.crunchChallenge.target })
    }
    $('.ant-empty-description').text('You have not entered any descriptions yet')
  }

  addDefinition = e => {
    if ((e ===  'add' || e.key === 'Enter') && (this.state.target.trim() !== '' && this.state.definitionTerm.trim() !== '')) {
      const definitions = this.state.definitions;
      definitions.push(e === 'add' ? this.state.definitionTerm : e.target.value);
      this.setState({ definitions, definitionTerm: '' })
    }
  };

  saveCrunchChallenge = async () => {
    if (this.state.target.trim() !== '' && this.state.definitions.length !== 0) {
      this.setState({saving: true});
      await this.props.container.saveCrunchChallenge(this.props.navbarContainer, this.state.target, this.state.definitions);
      this.setState({saving: false});
    }
  };

  removeCrunchChallenge = async () => {
    this.setState({deleting: true});
    await this.props.container.removeExercise(this.props.navbarContainer, 'crunchChallenge');
    this.setState({ deleting: false, definitions: [] });
    this.props.container.updateState('addCrunchChallengeVisibility', false);
  };

  deleteAddedCrunchItem = i => {
    const definitions = this.state.definitions;
    definitions.splice(i, 1);
    this.setState({ definitions });
  };

  render() {
    return (
      <div>
        <Drawer
            width={ 520 }
            title='Add A Crunch Challenge'
            placement='left'
            closable={ true }
            onClose={ () => this.props.container.updateState('addCrunchChallengeVisibility', false) }
            visible={ this.props.container.state.addCrunchChallengeVisibility }>
          <Icon type="info-circle" /> Make sure to click the "Save Crunch Challenge" Button When Finished.<br/><br/>
          <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>Enter a topic</label>
          <Input placeholder="ex. Celebrities"  value={ this.state.target } onChange={ e => this.setState({ target: e.target.value }) }  />
          <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>Enter a term that is related to the topic</label>
          <Input placeholder="ex. Justin Beiber. (Press enter or add when finished)"  suffix={<Button disabled={ (this.state.target.trim() === '' || this.state.definitionTerm.trim() === '') } style={{ transform: 'translateX(13px)', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} onClick={ () => this.addDefinition('add') } type="primary">ADD</Button>} value={ this.state.definitionTerm } onKeyDown={ e => this.addDefinition(e) } onChange={ e => this.setState({ definitionTerm: e.target.value }) } />

          { this.state.definitions.length > 0
            ? <div>
                <b style={{ marginTop: 20, textAlign: 'center', display: 'block', marginBottom: 3 }}>All terms related to { this.state.target ? this.state.target : '...' }</b>
                <List
                    bordered
                    dataSource={ this.state.definitions }
                    renderItem={(item, i) => (<List.Item>{ item } <Icon style={{ transform: 'translate(10px, 3.5px)', cursor: 'pointer' }} onClick={ () => this.deleteAddedCrunchItem(i) } type='delete' /></List.Item>)}
                />
              </div>
            : null
          }

          <ButtonGroup style={{ marginTop: 20 }}>
            <Button disabled={ this.state.target.trim() === '' || this.state.definitions.length === 0 } icon="upload" type="primary" loading={ this.state.saving } onClick={ this.saveCrunchChallenge }>Save Crunch Challenge</Button>
            <Button icon="delete" type="danger" loading={ this.state.deleting } onClick={ this.removeCrunchChallenge }>Remove Crunch Challenge</Button>
          </ButtonGroup>

        </Drawer>
      </div>
    )
  }
}
