import React from 'react';
import {Drawer, Form, Button, Col, Row, Input, Menu} from 'antd';
import { Subscribe } from 'unstated';
import NavbarContainer from '../globalComponents/navbar/navbarContainer';

class LoginModal extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Subscribe to={[NavbarContainer]}>
        { navbarContainer => (
          <div>
            <Drawer
                title="Basic Drawer"
                placement="right"
                closable={false}
                onClose={ () => navbarContainer.setContainerState('loginFormVisibility', false) }
                visible={ navbarContainer.state.loginFormVisibility }>
              <Form onKeyPress={ e => e.key === 'Enter' ? navbarContainer.handleLoginSubmission(this.props.form) : null } id='login-form' layout="horizontal" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item label="Email">
                      {getFieldDecorator('loginEmail', {
                        rules: [{ required: true, message: 'Please enter a valid email address' }],
                      })(<Input onChange={ e => navbarContainer.setContainerState('email', e.target.value) } placeholder="Please enter a valid email address" type="email" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item label="Password">
                      {getFieldDecorator('loginPassword', {
                        rules: [{ required: true, message: 'Please enter a password' }],
                      })(<Input onChange={ e => navbarContainer.setContainerState('password', e.target.value) } placeholder="Please enter a password" type="password" />)}
                    </Form.Item>
                  </Col>
                </Row>
                <p className='modal-auth-error-message'>{ navbarContainer.state.loginErrorMessage }</p>
              </Form>
              <div className='modal-auth-submit-button-container'>
                <Button onClick={() => navbarContainer.setContainerState('loginFormVisibility', false)}>Cancel</Button>
                <Button type="primary" icon="login" loading={navbarContainer.state.loginSubmissionInProgress} onClick={() => navbarContainer.handleLoginSubmission(this.props.form)}>Submit</Button>
              </div>
            </Drawer>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default Form.create()(LoginModal);
