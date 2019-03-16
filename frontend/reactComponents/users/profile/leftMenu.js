import React from 'react';
import { Icon, Menu } from 'antd';

export default class LeftMenu extends React.Component {
  render() {
    return (
      <Menu theme="dark" onClick={ e => this.handleMenuItemClick(e) } defaultSelectedKeys={['profile']} mode="inline">
        <Menu.Item key="profile">
          <Icon type="profile" />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="photo">
          <Icon type="picture" />
          <span>Photo</span>
        </Menu.Item>
        <Menu.Item key="your-courses">
          <Icon type="smile" />
          <span>Your Courses</span>
        </Menu.Item>
        <Menu.Item key="purchased-courses">
          <Icon type="unlock" />
          <span>Purchased Courses</span>
        </Menu.Item>
        <Menu.Item key="payoutHistory">
          <Icon type="dollar" />
          <span>Payout History</span>
        </Menu.Item>
      </Menu>
    )
  }
  
  handleMenuItemClick = e => {
    if ($(window).width() < 992) {
      this.props.container.updateState('menuCollapsed', true);
    }
    this.props.container.updateState('menuKey', e.key)
  }
}