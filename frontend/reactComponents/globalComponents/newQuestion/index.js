import React from 'react';
import { Modal, Input, Button } from 'antd';
import { Subscribe } from 'unstated';
import NewQuestionContainer from './container';
import Body from './body';

export default class NewQuestion extends React.Component {
  render() {
    return (
      <Subscribe to={[NewQuestionContainer]}>
        { container => (
          <div id='create-new-question'>
            <Modal
              title='Post a new question'
              centered
              visible={ container.state.visibility }>
              <label style={{ marginTop: 10, display: 'block' }}>Title of your question</label>
              <Input
                  value={ container.state.title }
                  placeholder='Enter your question. Be specific'
                  onChange={ e => container.updateState('title', e.target.value) } />
              <label style={{ marginTop: 10, display: 'block' }}>Body</label>
              <Body container={ container } { ...this.props } />
              <Button
                  type="primary"
                  style={{ marginTop: 10, background: this.props.courseColor, border: this.props.courseColor }}
                  onClick={ () => container.saveQuestion(this.props) }>Save
              </Button>
            </Modal>
          </div>
        ) }
      </Subscribe>
    )
  }
}
