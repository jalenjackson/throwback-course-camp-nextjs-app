import React from 'react';
import { Button, Input } from 'antd';

const ButtonGroup = Button.Group;

export default class AddAnotherAnswer extends React.Component {
  state = {
    isAddingNewQuestion: false,
    addingNewQuestionTerm: '',
    savingQuestion: false
  };

  render() {
    return (
      <div>
        { this.state.isAddingNewQuestion
          ? <div>
              <Input value={ this.state.addingNewQuestionTerm } style={{ marginTop: 10, width: '95%' }} onChange={ e => this.setState({ addingNewQuestionTerm: e.target.value } ) } />
              <ButtonGroup style={{ marginTop: 10 }}>
                <Button onClick={ () => this.setState({ isAddingNewQuestion: false, addingNewQuestionTerm: '' }) }>Cancel</Button>
                <Button loading={ this.state.savingQuestion } onClick={ this.initiateSaveAnswer }>Save Changes</Button>
              </ButtonGroup>
            </div>
          : <Button onClick={ () => this.setState({ isAddingNewQuestion: true }) } style={{ marginTop: 20, marginRight: 1, display: 'block' }} type="dashed">Add Another Answer</Button>
        }
      </div>
    )
  }

  initiateSaveAnswer = async () => {
    this.setState({ savingQuestion: true });
    await this.props.container.editAddQuizAddingNewAnswer(this.props.auth, this.state.addingNewQuestionTerm, this.props.questionIterator);
    this.setState({ editingQuestionTerm: '', isEditingQuestion: false, savingQuestion: false, addingNewQuestionTerm: '', isAddingNewQuestion: false });
  };
}

