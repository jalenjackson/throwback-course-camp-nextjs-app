import React from 'react';
import { Drawer, Menu, Icon, Avatar, Badge } from 'antd';

export default class ProfileDrawer extends React.Component {
  state = { visible: false };

  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
        <div>
          <Drawer
              title="Basic Drawer"
              placement="right"
              closable={ false }
              onClose={ () => this.props.navbarContainer.setContainerState('profileDrawerVisibility', false) }
              visible={ this.props.navbarContainer.state.profileDrawerVisibility }>
            <Menu onClick={ e => this.props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [this.props.navbarContainer.state.activeLink] } mode="inline">
              <SubMenu title={
                <span>
                <Badge count={10}>
                  <Icon type="bell" />
                </Badge>
              </span>}>
                <Menu.Item key='notification1'>Notification 1</Menu.Item>
              </SubMenu>
              <SubMenu title={
                <span>
                <Avatar shape="circle" size="small"   />
              </span>}>
                { console.log(this.props.auth) }
                <MenuItemGroup title={ this.props.auth.name }>
                  <Menu.Item key='profile'>Profile</Menu.Item>
                  <Menu.Item key='settings'>Settings</Menu.Item>
                  <Menu.Item key='help'>Help</Menu.Item>
                  <Menu.Item onClick={ () => this.props.navbarContainer.signUserOut(Menu, SubMenu, MenuItemGroup) } key='signout'>Sign Out</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
            </Menu>
          </Drawer>
        </div>
    )
  }
}
