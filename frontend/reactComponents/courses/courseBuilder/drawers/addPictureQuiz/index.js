import React from 'react';
import {Form, Icon, Button, Drawer, Upload, Input, Collapse, Popconfirm} from 'antd';
import AddedAnswer from "./addedAnswer";
import AddAnotherAnswer from "./addAnotherAnswer";

const Panel = Collapse.Panel;


class AddPictureDrawer extends React.Component {
  state = {
    questionTerm : '',
    fileList: [],
    queryingAPI: false,
  };

  handleUploaderChangeEvent = ({ fileList }) => {
    this.setState({ fileList });
  };

  savePictureQuestion = async () => {
    if (this.state.questionTerm.trim() !== '') {
      this.setState({ queryingAPI: true });
      const fileLocationArray = [];
      this.state.fileList.map((file) => {
        fileLocationArray.push(file.response.link);
      });
      await this.props.container.savePictureQuizQuestion(this.props.auth, this.state.questionTerm, fileLocationArray);
      this.setState({ fileList: [], questionTerm: '', queryingAPI: false });
    }
  };

  handleQuestionDelete = async i => {
    this.setState({ queryingAPI: true });
    await this.props.container.deleteAddPictureQuizQuestion(this.props.auth, i);
    this.setState({ queryingAPI: false });
  };

  render () {
    const currentActiveVideo = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos[this.props.container.state.currentActiveVideoInSection];

    const uploaderOptions = {
      name: 'singleFile',
      action: '/uploaders/single-upload',
      listType: 'picture',
      className: 'upload-list-inline',
      fileList: this.state.fileList,
      headers: {
        Authorization: `Bearer ${ this.props.auth.token }`
      }
    };

    return (
        <div id='add-picture-quiz-drawer'>
          <Drawer
              width={ 520 }
              title='Add A Picture Quiz'
              placement='left'
              closable={ true }
              onClose={ () => this.props.container.updateState('addPictureQuizDrawerVisibility', false) }
              visible={ this.props.container.state.addPictureQuizDrawerVisibility }>
            <Icon type="info-circle" /> The first image you upload will be considered the correct answer to the question you ask. <br/><br/>
            <label>Enter a question</label>
            <Input value={ this.state.questionTerm } onChange={ e => this.setState({ questionTerm: e.target.value }) } />
            <Upload accept='image/gif, image/jpeg, image/png' onChange={ this.handleUploaderChangeEvent } { ...uploaderOptions }>
              <Button style={{ marginTop: 10 }}>
                <Icon type="upload" /> Upload an answer
              </Button>
            </Upload>
            <Button loading={ this.state.queryingAPI } style={{ marginTop: 10 }} disabled={ this.state.questionTerm.trim() === '' || this.state.fileList.length < 2 } onClick={ this.savePictureQuestion } type='primary'>Save Question</Button>

            { !currentActiveVideo || !currentActiveVideo.pictureQuiz || currentActiveVideo.pictureQuiz.length === 0
                ? null
                : <Collapse style={{ marginTop: 20, marginBottom: 20 }} accordion>
                  { currentActiveVideo.pictureQuiz.map((questionObj, i) =>
                      <Panel header={ questionObj.question } key={ i }>
                        <AddedAnswer { ...this.props } type='Question' question={ questionObj.question } questionIterator={ i } />
                        { questionObj.answers.split(',').map((answer, j) => (
                            <AddedAnswer { ...this.props } type='Answer' answer={ answer } questionIterator={ i } answerIterator={ j } isCorrectAnswer={ j === 0 }/>
                        )) }
                        <AddAnotherAnswer { ...this.props } questionIterator={ i } />
                        <Popconfirm title="Are you sure delete this question?" onConfirm={ () => this.handleQuestionDelete(i) } okText="Yes" cancelText="No">
                          <Button loading={ this.state.queryingAPI } style={{ marginTop: 10, marginRight: 1, display: 'block' }} type="danger">Delete Question</Button>
                        </Popconfirm>
                      </Panel>
                  )}
                </Collapse>
            }
          </Drawer>
        </div>
    )
  }
}

export default Form.create()(AddPictureDrawer);
