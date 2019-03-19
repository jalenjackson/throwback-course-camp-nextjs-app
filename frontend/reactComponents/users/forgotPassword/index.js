import React from 'react';
import { Input, Button } from 'antd';
import { GraphQlDevURI, GraphQlMutate } from "../../../../globalHelpers/axiosCalls";
import GlobalLocalization from "../../../../globalLocalization";

export default class ForgotPassword extends React.Component {
  state = {
    password: ''
  };
  
  render() {
    return (
      <div style={{ width: '85%', display: 'block', margin: '0 auto', marginTop: 60 }}>
        { console.log(this.props.userId) }
        <h2>Reset Password</h2>
        <label>Password</label>
        <Input type='password' onChange={ e => this.setState({ password: e.target.value }) } placeholder='Enter password here...' />
        <Button onClick={ () => this.savePassword() } style={{ marginTop: 10 }} type='primary'>Submit</Button>
      </div>
    )
  }
  
  savePassword = async () => {
    try {
      await GraphQlMutate(GraphQlDevURI, `
      mutation {
        changePassword(password: "${ this.state.password }", userId: "${ this.props.userId }") {
          name
        }
      }
    `);
      window.location.href = '/';
    } catch (e) {
      message.error(GlobalLocalization.UnexpectedError)
    }
  }
}