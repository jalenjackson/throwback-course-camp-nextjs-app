import React from 'react';
import { Modal, List, Avatar, Rate, Button, Pagination } from "antd";

export default class Reviews extends React.Component {
  state = {
    showModal: false,
    reviewSkip: 0
  };
  
  render() {
    return (
      <div className='review-wrapper column-wrapper'>
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
            { !this.props.reviews || this.props.reviews.length < 1
              ? <h3>No reviews written yet</h3>
              : <Pagination
                style={{ marginTop: 15 }}
                showQuickJumper
                pageSize={5}
                onChange={ page => this.handlePaginationChange(page) }
                defaultCurrent={ 1 }
                total={ this.props.reviews.length } />
            }
          </Modal>
        </div>
      </div>
    )
  }
  
  handlePaginationChange = page => {
    this.setState({ reviewSkip: getSkipAmount(page) });
  };
  
  renderReviews = () => {
    let reviews = this.props.reviews.slice(this.state.reviewSkip, this.state.reviewSkip + 5);
    if (this.state.reviewSkip === 0) {
      reviews = this.props.reviews.slice(this.state.reviewSkip, 5);
    }
    if (reviews && reviews.length > 0) {
      return (
        <div>
          <List
            itemLayout="horizontal"
            dataSource={ reviews }
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

const getSkipAmount = page => {
  if (page === 1) return 0;
  return 5 * (page - 1);
};