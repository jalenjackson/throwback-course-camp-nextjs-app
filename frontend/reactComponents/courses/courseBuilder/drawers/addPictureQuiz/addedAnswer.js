import React from 'react';
import { Icon, Input, Button, Upload, message } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { host } from "../../../../../../globalHelpers/axiosCalls";

const ButtonGroup = Button.Group;


export default class AddedAnswer extends React.Component {
  state = {
    isEditingQuestion: false,
    editingQuestionTerm: '',
    savingQuestion: false
  };

  render() {
    const props = {
      name: 'singleFile',
      action: `${ host }/uploaders/single-upload`,
      headers: {
        Authorization: `Bearer ${ this.props.auth.token }`,
      }
    };
    const { isCorrectAnswer, questionIterator, answerIterator, answer, type, question } = this.props;
    return (
        <div>
          { this.state.isEditingQuestion
            ?
              type === 'Answer' ?
              <div style={{ marginTop: 10 }}>
                <ButtonGroup style={{ marginTop: 10 }}>
                  <Button onClick={ () => this.setState({ isEditingQuestion: false }) }>Cancel</Button>
                  <Upload
                    onChange={ info => this.handleNewImageUpload(info, questionIterator, answerIterator, type) }
                    {...props}>
                    <Button>
                      <Icon type={ this.state.savingQuestion ? 'loading' : 'upload' } /> Upload a new image
                    </Button>
                  </Upload>
                </ButtonGroup>
              </div>
              : <div>
                  <Input
                    value={ this.state.editingQuestionTerm }
                    className='current-editing-field'
                    style={{ marginTop: 10, width: '95%' }}
                    onChange={ e => this.setState({ editingQuestionTerm: e.target.value } ) } />
                  <ButtonGroup style={{ marginTop: 10 }}>
                    <Button onClick={ () => this.setState({ isEditingQuestion: false, editingQuestionTerm: '' }) }>Cancel</Button>
                    <Button
                      loading={ this.state.savingQuestion }
                      onClick={ () => this.updateQuestion(questionIterator, answerIterator, type) }>Save Changes</Button>
                  </ButtonGroup>
                </div>
            :
            type === 'Answer'
              ? <div style={{ marginTop: 5 }} className='added-picture-answer'>
                  <img src={ answer } style={{ marginTop: 4, border: isCorrectAnswer ? '3px solid #33DC65' : '3px solid transparent' }} />
                  { isCorrectAnswer ? ' Correct Answer: ' : null }
                  <Icon onClick={ () => this.setState({ isEditingQuestion: true, editingQuestionTerm: answer }) } type="edit" />
                </div>
              : <h4 style={{ marginTop: 4 }}>
                  { question }
                  <Icon onClick={ () => this.setState({ isEditingQuestion: true, editingQuestionTerm: question }) } type="edit" />
                </h4>
          }
        </div>
    )
  }

  handleNewImageUpload = async (info, questionIterator, answerIterator, type) => {
    if (info.file.status === 'done') {
      this.setState({ savingQuestion: true });
      await this.props.container.editAddPictureQuizAddedAnswer(info.file.response.link, type, this.props.auth, questionIterator, answerIterator);
      this.setState({ isEditingQuestion: false, savingQuestion: false });
    }
    if (info.file.status === 'error') {
      message.error(GlobalLocalization.UnexpectedError);
    }
  };

  updateQuestion = async (questionIterator, answerIterator, type) => {
    this.setState({ savingQuestion: true });
    await this.props.container.editAddPictureQuizAddedAnswer(this.state.editingQuestionTerm, type, this.props.auth, questionIterator, answerIterator);
    this.setState({ editingQuestionTerm: '', isEditingQuestion: false, savingQuestion: false });
  }
}

