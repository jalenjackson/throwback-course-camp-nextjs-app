import React from 'react';
import { Modal, List, Avatar, Rate, Button } from "antd";
import BuyCourse from "./buyCourse";

export default class Reviews extends React.Component {
  state = {
    showModal: false
  };
  
  render() {
    return (
      <div className='buy-course-wrapper column-wrapper'>
        <div style={{ marginTop: '55px' }}>
          <h1 style={{ transform: 'translateY(-8px)', marginTop: 35 }} className="section-title">
            <span>Reviews</span>
          </h1>
          <Rate style={{ marginBottom: 15 }} disabled defaultValue={ this.props.rating }  />
          <Button style={{ display: 'block', background: this.props.course.color, border: this.props.course.color }} onClick={ () => this.setState({ showModal: true }) } type='primary'>View Reviews</Button>
          <Modal
            title="Reviews"
            centered
            visible={ this.state.showModal }
            onOk={ () => this.setState({ showModal: false }) }
            onCancel={ () => this.setState({ showModal: false }) }>
            { this.renderReviews() }
          </Modal>
        </div>
      </div>
    )
  }
  
  renderReviews = () => {
    if (this.props.reviews && this.props.reviews.length > 0) {
      return (
        <div>
          <List
            itemLayout="horizontal"
            dataSource={ this.props.reviews }
            renderItem={review => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={ review.userId.profileImage ? review.userId.profileImage : '/static/icons/profile-image-placeholder.png' } alt={ review.userId.name } />}
                  title={<div>{ review.userId.name } <Rate disabled defaultValue={ review.rating }  /></div>}
                  description={ review.description }
                />
              </List.Item>
            )}
          />
        </div>
      )
    }
  }
}