import React from 'react';
import { Drawer, Form, Button, Col, Row, Input } from 'antd';
import { Subscribe } from 'unstated';
import NavbarContainer from '../globalComponents/navbar/navbarContainer';

class RegisterModal extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <Subscribe to={[NavbarContainer]}>
          { navbarContainer => (
            <div>
              <Drawer
                  placement="right"
                  closable={false}
                  title="Create a new account"
                  onClose={() => navbarContainer.setContainerState('registerFormVisibility', false)}
                  visible={navbarContainer.state.registerFormVisibility}>
                <Form onKeyPress={ e => e.key === 'Enter' ? navbarContainer.handleRegistrationSubmission(this.props.form) : null } layout="horizontal" hideRequiredMark>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item label="Name">
                        {getFieldDecorator('name', {
                          rules: [{ required: true, message: 'Please enter your name' }],
                        })(<Input onChange={ e => navbarContainer.setContainerState('name', e.target.value) } placeholder="Please enter your name" type="name" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item label="Email">
                        {getFieldDecorator('email', {
                          rules: [{ required: true, message: 'Please enter a valid email address' }],
                        })(<Input onChange={ e => navbarContainer.setContainerState('email', e.target.value) } placeholder="Please enter a valid email address" type="email" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={24}>
                      <Form.Item label="Password">
                        {getFieldDecorator('password', {
                          rules: [{ required: true, message: 'Please enter a password' }],
                        })(<Input onChange={ e => navbarContainer.setContainerState('password', e.target.value) } placeholder="Please enter a password" type="password" />)}
                      </Form.Item>
                    </Col>
                  </Row>
                  <p className='modal-auth-error-message'>{ navbarContainer.state.registerErrorMessage }</p>
                </Form>
                <div className='modal-auth-submit-button-container'>
                  <Button onClick={() => navbarContainer.setContainerState('registerFormVisibility', false)} style={{ marginRight: 8 }}>Cancel</Button>
                  <Button type="primary" icon="user" loading={navbarContainer.state.registerSubmissionInProgress} onClick={() => navbarContainer.handleRegistrationSubmission(this.props.form)}>Submit</Button>
                </div>
              </Drawer>
            </div>
          )}
        </Subscribe>
    );
  }
}

export default Form.create()(RegisterModal);
