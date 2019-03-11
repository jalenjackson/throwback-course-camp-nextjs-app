import React from 'react';
import { Modal, Input, Button } from "antd";

const { TextArea } = Input;

export default class AnswerQuestion extends React.Component {
  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={ this.props.container.state.newAnswerModalVisible }
        onOk={ () => this.props.container.updateState('newAnswerModalVisible', false) }
        onCancel={ () => this.props.container.updateState('newAnswerModalVisible', false) }>
        <TextArea onChange={ e => this.props.container.updateState('newAnswerText', e.target.value) } rows={4} />
        <Button onClick={ () => this.props.container.addAnswer(this.props.auth) } type='primary'>Submit</Button>
      </Modal>
    )
  }
}