import React from 'react';
import { Button, Icon, message, Upload } from 'antd';
import GlobalLocalization from '../../../../../../globalLocalization';
import { host } from "../../../../../../globalHelpers/axiosCalls";

const ButtonGroup = Button.Group;

export default class AddAnotherAnswer extends React.Component {
  state = {
    isAddingNewQuestion: false,
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
    return (
        <div>
          { this.state.isAddingNewQuestion
            ? <div style={{ marginTop: 10 }}>
                <ButtonGroup style={{ marginTop: 10 }}>
                  <Button onClick={ () => this.setState({ isAddingNewQuestion: false }) }>Cancel</Button>
                  <Upload
                    onChange={ this.handleNewImageUpload }
                    {...props}>
                    <Button>
                      <Icon type={ this.state.savingQuestion ? 'loading' : 'upload' } /> Upload a new image
                    </Button>
                  </Upload>
                </ButtonGroup>
              </div>
            : <Button onClick={ () => this.setState({ isAddingNewQuestion: true }) } style={{ marginTop: 20, marginRight: 1, display: 'block' }} type="dashed">Add Another Answer</Button>
          }
        </div>
    )
  }

  handleNewImageUpload = async info => {
    if (info.file.status === 'done') {
      this.setState({ savingQuestion: true });
      await this.props.container.editAddPictureQuizAddingNewAnswer(this.props.auth, info.file.response.link, this.props.questionIterator);
      this.setState({ editingQuestionTerm: '', isEditingQuestion: false, savingQuestion: false, addingNewQuestionTerm: '', isAddingNewQuestion: false });
    }
    if (info.file.status === 'error') {
      message.error(GlobalLocalization.UnexpectedError);
    }
  };
}

