import React from 'react';
import { Button, Icon, Input } from 'antd';

const ButtonGroup = Button.Group;

export default class AddedElement extends React.Component {
  state = {
    editingTerm: this.props.type === 'Question' ? this.props.elementText : this.props.answer,
    isEditing: false,
    isQueryingAPI: false,
    timeAllotted: ''
  };

  render() {
    const { type } = this.props;
    return (
      <div>
        { this.state.isEditing
          ? <div>
              { type === 'Time'
                ? <div>
                    <Input
                      value={ this.state.timeAllotted }
                      onChange={ this.onNumberFieldChange }
                      placeholder="Edit time allotted"
                      maxLength={25} />
                    <ButtonGroup style={{ marginTop: 10 }}>
                      <Button onClick={ () => this.setState({ isEditing: false, editingTerm: '' }) }>Cancel</Button>
                      <Button loading={ this.state.isQueryingAPI } onClick={ () => this.initiateSaveAnswer() }>Save Changes</Button>
                    </ButtonGroup>
                  </div>
                : <div>
                    <Input value={ this.state.editingTerm } style={{ marginTop: 10 }} onChange={ e => this.setState({ editingTerm: e.target.value }) } placeholder={ `Edit ${ type === 'Question' ? 'Question' : 'Answer' }` }  />
                    <ButtonGroup style={{ marginTop: 10 }}>
                      <Button onClick={ () => this.setState({ isEditing: false, editingTerm: '' }) }>Cancel</Button>
                      <Button loading={ this.state.isQueryingAPI } onClick={ () => this.initiateSaveAnswer() }>Save Changes</Button>
                    </ButtonGroup>
                  </div>
              }
            </div>
          : <div>
              <li style={{ marginTop: 10 }}>{ type === 'Time' ? 'Time Allotted' : type === 'Question' ? 'Question' : 'Answer' }:
                <b>{ type === 'Time' ? ` ${ this.props.timeAllotted }` : type === 'Question' ? this.props.elementText + ' ' : this.props.answer + ' ' }</b>
                <Icon onClick={ () => this.setState({ isEditing: true }) } style={{ cursor: 'pointer' }} type="edit" />
              </li>
            </div>
        }
      </div>
    )
  }

  onNumberFieldChange = (e) => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!Number.isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.setState({ timeAllotted: value });
    }
  };

  initiateSaveAnswer = async () => {
    this.setState({ isQueryingAPI: true });
    await this.props.container.editMatchingGameQuestion(this.props.auth, this.state.editingTerm, this.props.type, this.state.timeAllotted, this.props.matchId);
    this.setState({ isQueryingAPI: false, editingTerm: '', isEditing: false });
  }
}
