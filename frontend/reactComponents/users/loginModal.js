import React from 'react';
import { Drawer, Form, Button, Col, Row, Input, Modal } from 'antd';
import { Link } from '../../../routes';
import axios from "axios";
import {GraphQlDevURI, headers} from "../../../globalHelpers/axiosCalls";
import GlobalLocalization from "../../../globalLocalization";

class LoginModal extends React.Component {
  state = {
    forgotPassModal: false,
    forgotPassEmail: '',
    passwordSent: false,
    error: false
  };
  
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
            <a onClick={ () => this.setState({ forgotPassModal: true }) } style={{ display: 'block', marginBottom: 10 }}>Forgot Password?</a>
            <p style={{ opacity: 0.7 }}>When you sign up you are agreeing to our <Link route="/help-center">terms and conditions</Link></p>
            <p className='modal-auth-error-message'>{ this.props.navbarContainer.state.loginErrorMessage }</p>
          </Form>
          <div className='modal-auth-submit-button-container'>
            <Button onClick={ () => this.props.navbarContainer.setContainerState('loginFormVisibility', false) }>Cancel</Button>
            <Button type="primary" icon="login" disabled={ this.props.navbarContainer.state.loginSubmissionInProgress } loading={ this.props.navbarContainer.state.loginSubmissionInProgress } onClick={ () => this.props.navbarContainer.handleLoginSubmission(this.props.form) }>Submit</Button>
          </div>
        </Drawer>
  
        <Modal
          title="Forgot Password"
          centered
          visible={ this.state.forgotPassModal }
          onOk={ () => this.setState({ forgotPassModal: false, passwordSent: false }) }
          onCancel={ () => this.setState({ forgotPassModal: false, passwordSent: false }) }>
          { this.state.passwordSent
            ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <img style={{ width: 150, height: 'auto' }} src='/static/icons/happy-face.svg' />
                <h1>Check your email!</h1>
                <p>We sent a special link that will help you reset your password. If you do not see it please check your junk.</p>
              </div>
            : <div>
                <h2>Don't worry we got you covered</h2>
                <p>We will send a link to your email address on file</p>
                <label>What is your email address?</label>
                <Input onChange={ e => this.setState({ forgotPassEmail: e.target.value }) } placeholder='Enter here...' />
                { this.state.error
                  ? <p style={{ color: 'crimson' }}>That email does not exist in our system</p>
                  : null
                }
                <Button type="primary" style={{ marginTop: 20 }} onClick={ () => this.forgotPassword(this.state.forgotPassEmail) }>Send</Button>
              </div>
          }
        </Modal>
      </div>
    );
  }
  
  forgotPassword = async email => {
    try {
      const query = `
      mutation($email: String) {
        forgotPassword(email: $email) {
          name
        }
      }
    `;
     const newUserPassword = await axios.post(GraphQlDevURI, JSON.stringify({
        query,
        variables: {
          email
        }
      }), { headers: headers('undefined') });
      
     if (newUserPassword.data.errors) {
       return this.setState({ error: true });
     }
      
      this.setState({ passwordSent: true, error: false });
    } catch (e) {
      message.error(GlobalLocalization.UnexpectedError);
    }
  };
}

export default Form.create()(LoginModal);
