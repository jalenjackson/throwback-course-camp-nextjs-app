import React from 'react';
import { Button, Rate, Input, Modal } from 'antd'
import { saveReview } from "./saveReview";

const { TextArea } = Input;

export default class ReviewCourse extends React.Component {
  state = {
    rating: false,
    textAreaValue: ''
  };
  
  componentWillUnmount() {
    this.props.container.updateState('showReviewModal', false);
  }
  
  render() {
    return (
      <div>
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