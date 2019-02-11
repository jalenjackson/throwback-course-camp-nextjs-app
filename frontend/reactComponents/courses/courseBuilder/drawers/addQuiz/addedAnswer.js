import React from 'react';
import { Icon, Input, Button } from 'antd';

const ButtonGroup = Button.Group;


export default class AddedAnswer extends React.Component {
  state = {
    isEditingQuestion: false,
    editingQuestionTerm: '',
    savingQuestion: false
  };

  render() {
    const { isCorrectAnswer, questionIterator, answerIterator, answer, type, question } = this.props;
    return (
      <div>
        { this.state.isEditingQuestion
          ? <div>
              <Input value={ this.state.editingQuestionTerm } className='current-editing-field' style={{ marginTop: 10, width: '95%' }} onChange={ e => this.setState({ editingQuestionTerm: e.target.value } ) } />
              <ButtonGroup style={{ marginTop: 10 }}>
                <Button onClick={ () => this.setState({ isEditingQuestion: false, editingQuestionTerm: '' }) }>Cancel</Button>
                <Button loading={ this.state.savingQuestion } onClick={ () => this.initiateSaveAnswer(questionIterator, answerIterator, type) }>Save Changes</Button>
              </ButtonGroup>
            </div>
          :
            type === 'Answer'
              ? <li style={{ marginTop: 4, color: isCorrectAnswer ? '#33DC65' : '#686b87' }}>
                  { isCorrectAnswer ? 'Correct Answer: ' : null } { answer } <Icon onClick={ () => this.setState({ isEditingQuestion: true, editingQuestionTerm: answer }) } type="edit" />
                </li>
              : <h4 style={{ marginTop: 4 }}>
                   { question } <Icon onClick={ () => this.setState({ isEditingQuestion: true, editingQuestionTerm: question }) } type="edit" />
                </h4>

        }
      </div>
    )
  }

  initiateSaveAnswer = async (questionIterator, answerIterator, type) => {
    this.setState({ savingQuestion: true });
    await this.props.container.editAddQuizAddedAnswer(this.state.editingQuestionTerm, type, this.props.navbarContainer, questionIterator, answerIterator);
    this.setState({ editingQuestionTerm: '', isEditingQuestion: false, savingQuestion: false });
  }
}

