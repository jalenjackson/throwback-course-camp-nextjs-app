import React from 'react';
import {Icon, Menu} from "antd";

export default class LeftMenu extends React.Component {
  render() {
    return (
      <Menu theme="dark" onClick={ e => this.handleMenuItemClick(e) } mode="inline" defaultSelectedKeys={['about']}>
        <Menu.Item key="about">
          <Icon type="home" />
          <span className="nav-text">About</span>
        </Menu.Item>
        <Menu.Item key="account">
          <Icon type="user" />
          <span className="nav-text">Account/Profile</span>
        </Menu.Item>
        <Menu.Item key="creatingACourse">
          <Icon type="tool" />
          <span className="nav-text">Creating A Course</span>
        </Menu.Item>
        <Menu.Item key="purchaseAndRefunds">
          <Icon type="dollar" />
          <span className="nav-text">Purchasing A Course</span>
        </Menu.Item>
        <Menu.Item key="termsAndConditions">
          <Icon type="info-circle" />
          <span className="nav-text">Terms And Conditions</span>
        </Menu.Item>
        <Menu.Item key="privacyPolicy">
          <Icon type="info" />
          <span className="nav-text">Privacy Policy</span>
        </Menu.Item>
      </Menu>
    )
  }
  
  handleMenuItemClick = e => {
    if ($(window).width() < 992) {
      this.props.container.updateState('menuCollapsed', true);
    }
    this.props.container.updateState('currentMenuItem', e.key)
  }
}