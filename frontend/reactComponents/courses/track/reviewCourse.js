import React from 'react';
import { Button, Rate, Input, Modal } from 'antd'
import { saveReview } from "./saveReview";

const { TextArea } = Input;

export default class ReviewCourse extends React.Component {
  state = {
    rating: false,
    textAreaValue: ''
  };
  
  render() {
    return (
      <div style={{ boxShadow: 'none', background: 'none' }} id='course-track-element-container'>
        <Button type='primary' style={{ marginBottom: 20 }} onClick={ () => this.props.container.updateState('showReviewModal', true) }>Review Course</Button>
        <Modal
          title="Review Course"
          visible={ this.props.container.state.showReviewModal }
          onOk={ () => this.props.container.updateState('showReviewModal', false) }
          onCancel={ () => this.props.container.updateState('showReviewModal', false) } >
          <label>Rate this course</label>
          <Rate style={{ display: 'block', marginBottom: 5 }} onChange={ rating => this.setState({ rating }) } />
          <label>Would you recommend this course to others?</label>
          <TextArea onChange={ e => this.setState({ textAreaValue: e.target.value }) } rows={4} />
          <Button style={{ marginTop: 10 }} onClick={ () => saveReview(this.state.rating, this.state.textAreaValue, this.props) } type='primary'>Submit</Button>
        </Modal>
      </div>
    )
  }
}