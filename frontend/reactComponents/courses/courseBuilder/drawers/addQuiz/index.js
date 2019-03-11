import React from 'react';
import { Form, Input, Icon, Button, Drawer, Collapse, Popconfirm, Upload } from 'antd';
import AddedAnswer from './addedAnswer';
import AddAnotherAnswer from './addAnotherAnswer';

const Panel = Collapse.Panel;

let id = 0;

class AddQuizDrawer extends React.Component {
  state = {
    question: '',
    isEditingQuestion: false,
    queryingAPI: false,
    optionalImageUrl: 'false'
  };

  removeAddedAnswer = (k) => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  addNewAnswer = () => {
    const { form } = this.props;
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  initiateQuestionSave = async e => {
    this.setState({ queryingAPI: true });
    await this.props.container.saveAddQuizQuestion(e, this.props.auth, this.state.question, this.props.form.getFieldsValue().names, this.state.optionalImageUrl);
    this.props.form.resetFields();
    this.setState({ question: '', queryingAPI: false, optionalImageUrl: 'false' });
    $('.ant-upload-list-item .anticon-close').click();
  };

  handleDeleteQuestion = i => {
    this.setState({ queryingAPI: true });
    this.props.container.deleteAddQuizQuestion(this.props.auth, i);
    this.setState({ queryingAPI: false });
  };

  render () {
    const currentActiveVideo = this.props.container.state.course.sections[this.props.container.state.currentActiveSection].videos[this.props.container.state.currentActiveVideoInSection];
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const answers = keys.map((k, i) => (
      <div style={{ marginTop: 15 }} key={ k } >
        { getFieldDecorator(`names[${k}]`, {})(
          <Input placeholder={`${ i === 0 ? 'Correct Answer' : 'Wrong Answer ' + (i) }`} style={{ width: '95%', marginRight: 8 }} />
        )}
        { keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={ keys.length === 1 }
            onClick={ () => this.removeAddedAnswer(k) }
          />
        ) : null}
      </div>
    ));
    return (
      <Drawer
          width={ 520 }
          title='Add A Quiz'
          placement='left'
          closable={ true }
          onClose={ () => this.props.container.updateState('addQuizDrawerVisibility', false) }
          visible={ this.props.container.state.addQuizDrawerVisibility }>
        <Form onSubmit={ e => this.initiateQuestionSave(e) }>
          <Form.Item>
            <label>Enter A Question</label>
            <Input value={ this.state.question } onChange={ e => this.setState({ question: e.target.value }) } />
          </Form.Item>
          <Form.Item>
            <label style={{ marginRight: 5 }}>Add Optional Image</label>
            <Upload
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
          </Form.Item>
          { answers }
          <Button.Group style={{  marginTop: 25 }}>
            <Button type="dashed" onClick={ this.addNewAnswer }>
              <Icon type="plus" /> Add New Answer
            </Button>
            <Button loading={ this.state.queryingAPI } disabled={ answers.length < 2 } icon="upload" type="primary" htmlType="submit">Save Question</Button>
          </Button.Group>
        </Form>
        { !currentActiveVideo || !currentActiveVideo.quiz || currentActiveVideo.quiz.length === 0
          ? null
          : <Collapse style={{ marginTop: 20, marginBottom: 20 }} accordion>
              { currentActiveVideo.quiz.map((questionObj, i) =>
                <Panel header={ questionObj.question } key={ i }>
                  <AddedAnswer { ...this.props } type='Question' optionalImage={ questionObj.optionalImage } question={ questionObj.question } questionIterator={ i } />
                  { questionObj.answers.split(',').map((answer, j) => (
                    <AddedAnswer { ...this.props } type='Answer' questionObj={ questionObj } answer={ answer } questionIterator={ i } answerIterator={ j } isCorrectAnswer={ j === 0 }/>
                  )) }
                  <AddAnotherAnswer { ...this.props } questionIterator={ i } />
                  <Popconfirm title="Are you sure delete this question?" onConfirm={ () => this.handleDeleteQuestion(i) } okText="Yes" cancelText="No">
                    <Button loading={ this.state.queryingAPI } style={{ marginTop: 10, marginRight: 1, display: 'block' }} type="danger">Delete Question</Button>
                  </Popconfirm>
                </Panel>
              )}
            </Collapse>
        }
      </Drawer>
    )
  }

  handleUploadOptionalImage = (info) => {
    if (info.file.status === 'done') {
      this.setState({ optionalImageUrl: info.file.response.link });
    }
  };
}

export default Form.create()(AddQuizDrawer);
