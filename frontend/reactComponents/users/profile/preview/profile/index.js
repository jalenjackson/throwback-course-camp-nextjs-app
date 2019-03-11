import React from 'react';
import { Form, Input, Statistic, Button, Icon, Modal } from 'antd';
import NumericInput from '../../numberField';

export default class Profile extends React.Component {
  state = {
    showModalToTransferFunds: false,
    moneyAmount: '',
    emailToSendTo: '',
  };
  
  render() {
    return (
      <div>
        <Statistic prefix={<Icon type="dollar" />} title="Money You Made In Total" value={ this.props.container.state.auth.moneyMade } precision={ 2 } />
        <Button
          onClick={ () => this.setState({ showModalToTransferFunds: true }) }
          style={{ marginTop: 16, marginBottom: 20 }} type="primary">Transfer To A PayPal Account</Button>
        <Form>
          <Form.Item>
            <Input value={ this.props.container.state.auth.email } placeholder="email" />
          </Form.Item>
          <Form.Item>
            <Input value={ this.props.container.state.auth.name } placeholder="name" />
          </Form.Item>
        </Form>
        <Modal
          title="Vertically centered modal dialog"
          visible={ this.state.showModalToTransferFunds }
          onOk={ () => this.handleModalClose() }
          onCancel={ () => this.handleModalClose() }>
          { !this.props.container.state.payoutSuccess && !this.props.container.state.isPayingOut
            ? <div>
              <label>Enter the PayPal email address you would like to transfer funds to</label>
              <Input placeholder='Enter email here...' onChange={ e => this.setState({ emailToSendTo: e.target.value }) } />
              <label>How much do you money do you want to transfer out of your account?</label>
              <NumericInput { ...this.props } />
              <p style={{ color: '#E64A3B', marginTop: 10 }}>{ this.props.container.state.transferFundsErrorMessage }</p>
              <Button onClick={ () => this.props.container.submitPayout(this.props.container.state.auth, this.state.emailToSendTo, this.props.container.state.transferFundsAmount) } type="primary">Submit</Button>
            </div>
            : <div>
              <h1>Your transfer was successfully placed into a queue!</h1>
              <p>Give it about a few minutes to show up into your account!
                Your transfer will appear in your payout history once the transfer is completed
              </p>
            </div>
          }
          { this.props.container.state.isPayingOut
            ? <Icon type='loading' />
            : null
          }
        </Modal>
      </div>
    )
  }
  
  handleModalClose = () => {
    this.setState({ showModalToTransferFunds: false, moneyAmount: 0 });
    this.props.container.updateState('isPayingOut', false);
    this.props.container.updateState('payoutSuccess', false);
  }
}