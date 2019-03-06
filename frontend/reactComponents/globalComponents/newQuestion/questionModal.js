import React from 'react';
import {Button, Input, Modal} from "antd";
import Body from "./body";

export default class QuestionModal extends React.Component {
  render() {
    const { container } = this.props;
    return (
      <div>
        <Modal
          title='Post a new question'
          centered
          visible={ container.state.visibility }
          onOk={ () => container.updateState('visibility', false) }
          onCancel={ () => container.updateState('visibility', false) }>
          <label style={{ marginTop: 10, display: 'block' }}>Title of your question</label>
          <Input
            value={ container.state.title }
            placeholder='Enter your question. Be specific'
            onChange={ e => container.updateState('title', e.target.value) } />
          <label style={{ marginTop: 10, display: 'block' }}>Body</label>
          <Body container={ container } { ...this.props } />
          <Button
            disabled={ questionNotFilledIn(container.state) }
            type='primary'
            style={{ marginTop: 10, background: this.props.courseColor, border: this.props.courseColor }}
            onClick={ () => container.saveQuestion(this.props) }>Save
          </Button>
        </Modal>
      </div>
    )
  }
}

const questionNotFilledIn = state => {
  return state.title.trim() === '' || state.body.trim() === '';
};