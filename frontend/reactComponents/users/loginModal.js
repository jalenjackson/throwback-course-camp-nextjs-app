import React from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';

class LoginModal extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id='login-modal'>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={ false }
          onClose={ () => this.props.navbarContainer.setContainerState('loginFormVisibility', false) }
          visible={ this.props.navbarContainer.state.loginFormVisibility }>
          <Form onKeyPress={ e => e.key === 'Enter' ? this.props.navbarContainer.handleLoginSubmission(this.props.form) : null } id='login-form' layout="horizontal" hideRequiredMark>
            <Row gutter={ 16 }>
              <Col span={ 24 }>
                <Form.Item label="Email">
                  { getFieldDecorator('loginEmail', {
                    rules: [{ required: true, message: 'Please enter a valid email address' }],
                  })(<Input className="login-email-input" onChange={ e => this.props.navbarContainer.setContainerState('email', e.target.value) } placeholder="Please enter a valid email address" type="email" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={ 16 }>
              <Col span={ 24 }>
                <Form.Item label="Password">
                  { getFieldDecorator('loginPassword', {
                    rules: [{ required: true, message: 'Please enter a password' }],
                  })(<Input onChange={ e => this.props.navbarContainer.setContainerState('password', e.target.value) } placeholder="Please enter a password" type="password" />)}
                </Form.Item>
              </Col>
            </Row>
            <p className='modal-auth-error-message'>{ this.props.navbarContainer.state.loginErrorMessage }</p>
          </Form>
          <div className='modal-auth-submit-button-container'>
            <Button onClick={ () => this.props.navbarContainer.setContainerState('loginFormVisibility', false) }>Cancel</Button>
            <Button type="primary" icon="login" disabled={ this.props.navbarContainer.state.loginSubmissionInProgress } loading={ this.props.navbarContainer.state.loginSubmissionInProgress } onClick={ () => this.props.navbarContainer.handleLoginSubmission(this.props.form) }>Submit</Button>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default Form.create()(LoginModal);
