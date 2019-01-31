import React from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';

class RegisterModal extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Drawer
          placement="right"
          closable={ false }
          title="Create a new account"
          onClose={ () => this.props.navbarContainer.setContainerState('registerFormVisibility', false) }
          visible={ this.props.navbarContainer.state.registerFormVisibility }>
          <Form onKeyPress={ e => e.key === 'Enter' ? this.props.navbarContainer.handleRegistrationSubmission(this.props.form) : null } layout="horizontal" hideRequiredMark>
            <Row gutter={ 16 }>
              <Col span={ 24 }>
                <Form.Item label="Name">
                  { getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter your name' }],
                  })(<Input onChange={ e => this.props.navbarContainer.setContainerState('name', e.target.value) } placeholder="Please enter your name" type="name" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter= { 16 }>
              <Col span={ 24 }>
                <Form.Item label="Email">
                  { getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please enter a valid email address' }],
                  })(<Input onChange={ e => this.props.navbarContainer.setContainerState('email', e.target.value) } placeholder="Please enter a valid email address" type="email" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={ 16 }>
              <Col span={ 24 }>
                <Form.Item label="Password">
                  { getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please enter a password' }],
                  })(<Input onChange={ e => this.props.navbarContainer.setContainerState('password', e.target.value) } placeholder="Please enter a password" type="password" />)}
                </Form.Item>
              </Col>
            </Row>
            <p className='modal-auth-error-message'>{ this.props.navbarContainer.state.registerErrorMessage }</p>
          </Form>
          <div className='modal-auth-submit-button-container'>
            <Button onClick={() => this.props.navbarContainer.setContainerState('registerFormVisibility', false)} style={{ marginRight: 8 }}>Cancel</Button>
            <Button type="primary" icon="user" loading={ this.props.navbarContainer.state.registerSubmissionInProgress } onClick={() => this.props.navbarContainer.handleRegistrationSubmission(this.props.form)}>Submit</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(RegisterModal);
