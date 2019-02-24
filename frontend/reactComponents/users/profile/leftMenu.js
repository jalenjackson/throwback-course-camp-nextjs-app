import React from 'react';
import { Icon, Menu } from 'antd';

export default class LeftMenu extends React.Component {
  render() {
    return (
      <Menu onClick={ e => this.props.container.updateState('menuKey', e.key) } defaultSelectedKeys={['profile']} mode="inline">
        <Menu.Item key="profile">
          <Icon type="pie-chart" />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="photo">
          <Icon type="desktop" />
          <span>Photo</span>
        </Menu.Item>
        <Menu.Item key="payout">
          <Icon type="desktop" />
          <span>PayPal Settings</span>
        </Menu.Item>
        <Menu.Item key="paymentHistory">
          <Icon type="desktop" />
          <span>Payment History</span>
        </Menu.Item>
        <Menu.Item key="closeAccount">
          <Icon type="desktop" />
          <span>Close Account</span>
        </Menu.Item>
      </Menu>
    )
  }
}