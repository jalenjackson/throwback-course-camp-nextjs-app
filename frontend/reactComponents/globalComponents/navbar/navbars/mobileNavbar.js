import React from 'react';
import { Drawer, Menu, Icon, AutoComplete, Input, Avatar, Badge, Button } from 'antd';
import Localization from '../localization';
import { Link } from '../../../../../routes'
import { navigateToSearch } from "./navigateToSearch";
import {MoneySVG, PaperWithBulletPointsSVG} from "../../svgs";
import GlobalLocalization from "../../../../../globalLocalization";
import { inlineStyling } from "./navigateToSearch";
import _ from "lodash";
import Router from 'next/router';

export default class MobileNavbar extends React.Component {
  state = { visible: false };

  render() {
  
    Router.events.on('routeChangeStart', () => {
      if (this.state.visible) {
        this.setState({ visible: false });
      }
    });
    
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div id='mobile-navbar'>
        <Link to='/'>
          <a><img src='/static/icons/logo.svg' /> Course Camp</a>
        </Link>
        <img className='hamburger' alt="mobile menu" onClick={ () => this.setState({ visible: true }) } src='/static/icons/hamburger.png' />
        <Drawer
            title="Menu"
            placement="right"
            closable={ false }
            onClose={ () => this.setState({ visible: false }) }
            visible={ this.state.visible }>
          <Menu onClick={ e => this.props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [this.props.navbarContainer.state.activeLink] } mode="inline">
            <AutoComplete
              dataSource={ this.props.navbarContainer.state.autoCompleteDataSource }
              value={ this.props.navbarContainer.state.autocompleteTerm }
              onChange={ term => this.props.navbarContainer.setContainerState('autocompleteTerm', term) }
              onSearch={ this.props.navbarContainer.getAutoCompleteDataResults }
              placeholder={ Localization.Search.Placeholder }>
              <Input onKeyDown={ e => navigateToSearch(e, this.props, false) } suffix={
                <Icon
                  onClick={ e => navigateToSearch(e, this.props, true) }
                  type={ !this.props.navbarContainer.state.isNavigating ? 'search' : 'loading' }
                  className="certain-category-icon" />
              } />
            </AutoComplete>
            <Menu.Item key={ Localization.MenuKeys.Home }>
              <Link route='/'>
                <a>{ Localization.Home }</a>
              </Link>
            </Menu.Item>
            
            { this.props.auth.authenticated
                ? <SubMenu  title={
                    <span>
                      <Avatar shape="circle" size="small"   />
                    </span>}>
                    <MenuItemGroup title={ this.props.auth.name }>
                      <Menu.Item key='profile'>
                        <Link route='/profile'>Profile</Link>
                      </Menu.Item>
                      <Menu.Item key='help'><Link route='/help-center'>Help</Link></Menu.Item>
                      <Menu.Item onClick={ () => this.props.navbarContainer.signUserOut(Menu, SubMenu, MenuItemGroup) } key='signout'>Sign Out</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu> : null
            }
            <SubMenu title={
              <span>
                <Icon className="navbar-paper-with-bullets" component={ PaperWithBulletPointsSVG } />{ Localization.MenuLinks.LearnAndPractice }
              </span>}>
              <MenuItemGroup title={ Localization.MenuLinks.Learn }>
                <Menu.Item key={ Localization.MenuKeys.Courses }>
                  <Link to='/courses/all-courses?page=1'>
                    { Localization.MenuLinks.AllCourses }
                  </Link>
                </Menu.Item>
                <SubMenu key={ Localization.MenuKeys.CourseCategories } title={ Localization.MenuLinks.Categories }>
                  { GlobalLocalization.coruseCategories.map((category) => (
                    <Menu.Item>
                      <Link to={`/courses/category/${ _.kebabCase(category) }?page=1`}>
                        { category }
                      </Link>
                    </Menu.Item>
                  )) }
                </SubMenu>
                <Menu.Item key={ Localization.MenuKeys.Community }>
                  <Link to='/community?page=1'>
                    { Localization.MenuLinks.Community }
                  </Link>
                </Menu.Item>
              </MenuItemGroup>
            </SubMenu>
  
            <Menu.Item key={ Localization.MenuKeys.BecomeATeacher }>
              <Link to='/teach'>
                <a>
                  <Icon className="navbar-money-svg" component={ MoneySVG } />
                  { Localization.MenuLinks.EarnMoneyTeaching }
                </a>
              </Link>
            </Menu.Item>
  
            { !this.props.auth.authenticated
              ? <Menu.Item onClick={() => this.props.navbarContainer.setContainerState('registerFormVisibility', true)}
                           style={ inlineStyling(this.props.auth.authenticated).NonAuthenticatedMenuItems }
                           key={ Localization.MenuKeys.Register }>
                <Button type="dashed">{ Localization.MenuLinks.Register }</Button>
              </Menu.Item> : null
            }
            { !this.props.auth.authenticated
              ? <Menu.Item onClick={ () => this.props.navbarContainer.setContainerState('loginFormVisibility', true) } style={ inlineStyling(this.props.navbarContainer.state.authenticated).NonAuthenticatedMenuItems } key={ Localization.MenuKeys.Login }>
                <a>{ Localization.MenuLinks.Login }</a>
              </Menu.Item> : null
            }
          </Menu>
        </Drawer>
      </div>
    )
  }
}
