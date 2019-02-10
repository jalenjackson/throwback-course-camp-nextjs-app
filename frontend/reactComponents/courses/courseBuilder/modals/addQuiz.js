import React from 'react';
import { Form, Input, Icon, Button, Drawer } from 'antd';

let id = 0;

class AddQuizModal extends React.Component {
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

  render () {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const answers = keys.map((k, i) => (
      <div style={{ marginTop: 15 }} key={ k } >
        <Input placeholder={`${ i === 0 ? 'Correct Answer' : 'Wrong Answer ' + (i) }`} style={{ width: '95%', marginRight: 8 }} />
        {keys.length > 1 ? (
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
      <div>
        <Drawer
            width={ 520 }
            title="Add A Quiz"
            placement='left'
            closable={ false }
            visible={ true }>
          <Form>
            <Form.Item>
              <label>Enter A Question</label>
              <Input />
            </Form.Item>
            { answers }
            <Button.Group style={{  marginTop: 25 }}>
              <Button type="dashed" onClick={ this.addNewAnswer }>
                <Icon type="plus" /> Add New Answer
              </Button>
              <Button disabled={ answers.length === 0 } icon="upload" type="primary" htmlType="submit">Save Question</Button>
            </Button.Group>
          </Form>
        </Drawer>
      </div>
    )
  }
}

export default Form.create()(AddQuizModal);
