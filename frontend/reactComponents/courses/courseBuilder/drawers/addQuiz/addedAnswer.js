import React from 'react';
import { Icon, Input, Button, Upload } from 'antd';

const ButtonGroup = Button.Group;


export default class AddedAnswer extends React.Component {
  state = {
    isEditingQuestion: false,
    editingQuestionTerm: '',
    savingQuestion: false,
    optionalImageUrl: 'false'
  };

  render() {
    const { isCorrectAnswer, questionIterator, answerIterator, answer, optionalImage, type, question } = this.props;
    return (
      <div>
        { this.state.isEditingQuestion
          ? <div>
              <Input value={ this.state.editingQuestionTerm } className='current-editing-field' style={{ marginTop: 10, width: '95%' }} onChange={ e => this.setState({ editingQuestionTerm: e.target.value } ) } />
              { optionalImage !== 'false'
                ? <div>
                    <label>Edit optional Image</label>
                    <img style={{ width: 25, height: 25, borderRadius: 10, marginRight: 5, marginLeft: 5 }} src={ optionalImage } />
                    <Upload
                        style={{ marginTop: 5, display: 'block' }}
                        disabled={ this.state.optionalImageUrl !== 'false' }
                        accept='image/gif, image/jpeg, image/png'
                        onChange={ this.handleUploadOptionalImage }
                        headers={{ Authorization: `Bearer ${ this.props.auth.token }` }}
                        action="/uploaders/single-upload"
                        name="singleFile">
                      <Button>
                        <Icon type="upload" /> Click to Upload
                      </Button>
                    </Upload>
                  </div>
                : null
              }
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

  handleUploadOptionalImage = info => {
    if (info.file.status === 'done') {
      this.setState({ optionalImageUrl: info.file.response.link });
    }
  };

  initiateSaveAnswer = async (questionIterator, answerIterator, type) => {
    this.setState({ savingQuestion: true });
    await this.props.container.editAddQuizAddedAnswer(this.state.editingQuestionTerm, type, this.props.auth, questionIterator, answerIterator, this.state.optionalImageUrl);
    this.setState({ editingQuestionTerm: '', isEditingQuestion: false, savingQuestion: false });
  }
}

