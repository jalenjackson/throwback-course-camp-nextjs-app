import React from 'react';
import {Drawer, Input, Button, Popconfirm, message} from 'antd';
import {pluginsEnabled} from "../../../newCourse/steps/addDescription/pluginsEnabled";

const ButtonGroup = Button.Group;


export default class AddCodingChallenge extends React.Component {
  state = {
    title: '',
    description: '',
    functionName: '',
    functionParams: '',
    returnValue: '',
    addedFunctionParams: '',
    saving: false,
    deleting: false
  };

  componentWillMount() {
    const currentActiveVideo = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos[this.props.container.state.currentActiveVideoInSection];
    if (currentActiveVideo && currentActiveVideo.codingChallenge) {
      const { title, description, functionName, functionParams, returnValue, addedFunctionParams } = currentActiveVideo.codingChallenge;

      this.setState({
        title,
        description: atob(description),
        functionName,
        functionParams,
        returnValue,
        addedFunctionParams
      });
    }
  }

  componentWillUpdate() {
    if (this.props.container.state.addCodingChallengeVisibility) {
      setTimeout(() => {
        $('#add-coding-challenge-description').froalaEditor({
          key: process.env.froalaKey,
          placeholderText: 'Create a description for this coding challenge!',
          fontFamily: { 'GothamMedium, sans-serif': 'GothamMedium' },
          codeMirror: true,
          pluginsEnabled,
          toolbarSticky: false,
          fontSizeSelection: true,
        })
        .on('froalaEditor.contentChanged', e => {
          this.setState({ description: e.target.value });
        });
      }, 100)
    }
  }

  saveCodingChallenge = async () => {
    this.setState({ saving: true });
    const functionText = `
function ${ this.state.functionName }(${ this.state.functionParams }) {
  /* your code goes here */
}

${ this.state.functionName }(${ $('.function-parameter').val() })
    `;

    await this.props.container.saveCodingChallenge(
      this.props.auth,
      this.state.title,
      this.state.description,
      functionText,
      this.state.returnValue,
      this.state.functionName,
      this.state.functionParams,
      this.state.addedFunctionParams);
    this.setState({ saving: false });
  };

  splitCharacters = async e => {
    await this.setState({ addedFunctionParams: e.target.value });
    let returnParamString = '';
    if(this.state.addedFunctionParams !== '') {
      let paramArray = this.state.addedFunctionParams.trim().split(',');
      paramArray = paramArray.filter(function(str) {
        return /\S/.test(str);
      });
      const paramAmount = paramArray.length;
      if(paramAmount === 2) {
        returnParamString += 'param1, param2';
      } else {
        for(let i = 0; i < paramAmount; i++) {
          switch(i) {
            case 0: {
              returnParamString += 'param1';
              break;
            }
            case 1: {
              returnParamString += ', param2, ';
              break;
            }
            case (paramAmount - 1): {
              returnParamString += `param${i + 1}`;
              break;
            }
            default: {
              returnParamString += `param${i + 1}, `
            }
          }
        }
      }
    }
    this.setState({ functionParams: returnParamString });
  };

  removeCodingChallenge = async () => {
    this.setState({ deleting: true });
    await this.props.container.removeExercise(this.props.auth, 'codingChallenge');
    this.setState({
      title: '',
      description: '',
      functionName: '',
      functionParams: '',
      returnValue: '',
      addedFunctionParams: '',
      saving: false,
      deleting: false
    });
    $('#add-coding-challenge-description').froalaEditor('html.set', '');
    message.success('Coding Challenge successfully removed');
  };

  render() {
    return (
      <div id='add-coding-challenge'>
        <Drawer
            width={ 520 }
            title='Add A Coding Challenge'
            placement='left'
            closable={ true }
            onClose={ () => this.props.container.updateState('addCodingChallengeVisibility', false) }
            visible={ this.props.container.state.addCodingChallengeVisibility }>
          <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>Enter a title</label>
          <Input value={ this.state.title } onChange={ e => this.setState({ title: e.target.value }) } />
          <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>Enter a description</label>
          <textarea value={ this.state.description } id='add-coding-challenge-description' />
          <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>Fill in the blanks</label>
          <div className='add-coding-challenge-function'>
              <pre><span style={{ color: '#9E7DA4', fontFamily: 'monospace', fontStyle: 'italic', fontWeight: 'bold' }}>function</span>
                <input value={ this.state.functionName } onChange={ e => this.setState({ functionName: e.target.value }) } style={{ marginRight: 5 }} placeholder='ex. twoSum' className='function-name' />({ this.state.functionParams })
{` {
  /* The user will input their answer here */
}`}
{`

${ this.state.functionName === '' ? 'twoSum' : this.state.functionName }(`} <input value={ this.state.addedFunctionParams } onChange={ e => this.splitCharacters(e) } placeholder='ex. 1, 2' className='function-parameter' /> {');'}
              </pre>
          </div>
          <label style={{ marginTop: 10, display: 'block', marginBottom: 2 }}>What will this function return?</label>
          <Input value={ this.state.returnValue } onChange={ e => this.setState({ returnValue: e.target.value }) } placeholder='Enter return value' />
          <ButtonGroup style={{ marginTop: 20 }}>
            <Button loading={ this.state.saving } disabled={
              this.state.title.trim() === ''
              || this.state.description.trim() === ''
              || this.state.functionName.trim() === ''
              || this.state.functionParams.trim() === ''
              || this.state.returnValue.trim() === ''
            } type="primary" onClick={ () => this.saveCodingChallenge() } style={{ marginTop: 20 }}>Save Coding Challenge</Button>
            <Popconfirm title="Are you sure delete this coding challenge from this video?" onConfirm={ () => this.removeCodingChallenge() } okText="Yes" cancelText="No">
              <Button loading={ this.state.deleting } type='danger'>Remove Coding Challenge</Button>
            </Popconfirm>
          </ButtonGroup>
        </Drawer>
      </div>
    )
  }
}

