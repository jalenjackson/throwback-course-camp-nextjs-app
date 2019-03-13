import React from 'react';
import { Modal } from 'antd';

export default class extends React.Component {
  state = {
    modalVisible: true
  };
  
  render() {
    return (
      <div>
        <Modal
          centered
          title="Basic Modal"
          visible={ this.state.modalVisible }
          onOk={ () => this.handleCloseModal() }
          onCancel={ () => this.handleCloseModal() }>
          <img style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto', borderRadius: '3px' }} src="/static/backgroundImages/manOnComputer.svg" />
          <br />
          <h2>Welcome to our powerful Course Builder!</h2>
          <p>This is were you will create your amazing course! Add as many videos in each section as you want. Add quizzes, picture quizzes, matching games,
            coding challenges, coding projects, and crunch challenges. Most importantly have fun doing it! Good Luck! When you are finished submit your course for review in the Publish section at the top.
          </p>
        </Modal>
      </div>
    )
  }
  
  handleCloseModal = () => {
    this.setState({ modalVisible: false });
  }
}