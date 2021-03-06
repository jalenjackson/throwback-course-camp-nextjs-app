import React from 'react';
import { Menu, Icon, Button, Input, AutoComplete, Badge, Avatar } from 'antd';
import _ from 'lodash';
import {MoneySVG, PaperWithBulletPointsSVG, Logo} from '../../svgs/index';
import Localization from '../localization';
import GlobalLocalization from '../../../../../globalLocalization';
import { Router, Link } from '../../../../../routes';
import { navigateToSearch, inlineStyling } from "./navigateToSearch";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const DesktopNavbar = props => (
  <div id="navbar">
    <Menu onClick={ e => props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [props.navbarContainer.state.activeLink] } mode="horizontal">
      <Menu.Item key={ Localization.MenuKeys.Home }>
        <Link to='/'>
          <a>
            <Icon style={{ width: 35, height: 35, transform: 'translateY(10px)' }} className="navbar-paper-with-bullets" component={ Logo } />{ Localization.Home }
          </a>
        </Link>
      </Menu.Item>
      <AutoComplete
        style={{ width: 500 }}
        dataSource={ props.navbarContainer.state.autoCompleteDataSource }
        value={ props.navbarContainer.state.autocompleteTerm }
        onChange={ term => props.navbarContainer.setContainerState('autocompleteTerm', term) }
        onSearch={ props.navbarContainer.getAutoCompleteDataResults }
        placeholder={ Localization.Search.Placeholder }>
        <Input onKeyDown={ e => navigateToSearch(e, props, false) } suffix={
          <Icon
            onClick={ e => navigateToSearch(e, props, true) }
            type={ !props.navbarContainer.state.isNavigating ? 'search' : 'loading' }
            className="certain-category-icon" />
        } />
      </AutoComplete>
      <SubMenu title={
        <span>
          <Icon className="navbar-paper-with-bullets" component={ PaperWithBulletPointsSVG } />{ Localization.MenuLinks.LearnAndPractice }
        </span>}>
        <MenuItemGroup title={ Localization.MenuLinks.Learn }>
          <Menu.Item key={ Localization.MenuKeys.Courses }>
            { typeof window !== 'undefined' ? window.location.pathname.split('/')[2] === 'all-courses'
              ? <a href={ `/courses/all-courses?page=1` }>{ Localization.MenuLinks.AllCourses }</a>
              : <Link to={ `/courses/all-courses?page=1`}>
                  { Localization.MenuLinks.AllCourses }
                </Link>
              : null
            }
          </Menu.Item>
          <SubMenu key={ Localization.MenuKeys.CourseCategories } title={ Localization.MenuLinks.Categories }>
            { GlobalLocalization.coruseCategories.map((category) => (
              <Menu.Item>
                { typeof window !== 'undefined' ? window.location.pathname.split('/')[2] === 'category'
                    ? <a href={ `/courses/category/${ _.kebabCase(category) }?page=1` }>{ category }</a>
                    : <Link to={ `/courses/category/${ _.kebabCase(category) }?page=1`}>
                        { category }
                      </Link>
                  : null
                }
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
      { !props.auth.authenticated
        ? <Menu.Item onClick={() => props.navbarContainer.setContainerState('registerFormVisibility', true)}
             style={ inlineStyling(props.navbarContainer.state.authenticated).NonAuthenticatedMenuItems }
             key={ Localization.MenuKeys.Register }>
            <Button type="dashed">{ Localization.MenuLinks.Register }</Button>
          </Menu.Item> : null
      }
      { !props.auth.authenticated
          ? <Menu.Item onClick={ () => props.navbarContainer.setContainerState('loginFormVisibility', true) } style={ inlineStyling(props.navbarContainer.state.authenticated).NonAuthenticatedMenuItems } key={ Localization.MenuKeys.Login }>
              <a>{ Localization.MenuLinks.Login }</a>
            </Menu.Item> : null
      }
      { props.auth.authenticated ?
         <Menu.Item style={ inlineStyling(props.navbarContainer.state.authenticated).AuthenticatedMenuItems } onClick={ () => props.navbarContainer.setContainerState('profileDrawerVisibility', true) }>
           <span>
             <Avatar src={ props.auth.profileImage ? props.auth.profileImage : '/static/icons/profile-image-placeholder.png' } className="navbar-authenticated-avatar" shape="circle" size="small"  />
            </span>
         </Menu.Item> : null
      }
    </Menu>
  </div>
);

export default DesktopNavbar
