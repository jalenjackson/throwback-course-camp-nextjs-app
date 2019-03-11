import React from 'react';
import { Drawer, Menu, Icon, Avatar, Badge } from 'antd';
import { Link } from '../../../routes';

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
            <Menu defaultSelectedKeys={['1']}
                  defaultOpenKeys={['1']} onClick={ e => this.props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [this.props.navbarContainer.state.activeLink] } mode="inline">
              <SubMenu key="1" title={
                <span>
                <Avatar src={ this.props.auth.profileImage } shape="circle" size="small"  />
              </span>}>
                <MenuItemGroup title={ this.props.auth.name }>
                  <Menu.Item key='profile'>
                    <Link to={'/profile'}>
                      Profile
                    </Link>
                  </Menu.Item>
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
