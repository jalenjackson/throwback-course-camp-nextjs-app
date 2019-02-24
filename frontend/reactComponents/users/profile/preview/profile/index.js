import React from 'react';
import { Form, Input, Statistic, Button } from 'antd';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <Statistic title="Account Balance" value={112893} precision={2} />
        <Button style={{ marginTop: 16, marginBottom: 20 }} type="primary">Transfer To PayPal Account</Button>
        <Form>
          <Form.Item>
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="name" />
          </Form.Item>
        </Form>
      </div>
    )
  }
}