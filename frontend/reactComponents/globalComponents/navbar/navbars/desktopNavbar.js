import React from 'react';
import { Menu, Icon, Button, Input, AutoComplete, Badge, Avatar } from 'antd';
import _ from 'lodash';
import {BrainFlopLogoSVG, MoneySVG, PaperWithBulletPointsSVG} from '../../svgs/index';
import Localization from '../localization';
import GlobalLocalization from '../../../../../globalLocalization';
import { Router, Link } from '../../../../../routes';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const DesktopNavbar = props => (
  <div id="navbar">
    <Menu onClick={ e => props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [props.navbarContainer.state.activeLink] } mode="horizontal">
      <Menu.Item key={ Localization.MenuKeys.Home }>
        <Link to='/'>
          <a>{ Localization.Home }</a>
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
            <Link to='/community'>
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
      <Menu.Item key='brainflop'>
        <a target='_blank' href='https://brainflop.com'>
          <Icon className="navbar-brainflop-svg" component={ BrainFlopLogoSVG } />
          BrainFlop
        </a>
      </Menu.Item>
      { !props.navbarContainer.state.authenticated
        ? <Menu.Item onClick={() => props.navbarContainer.setContainerState('registerFormVisibility', true)}
             style={ inlineStyling(props.navbarContainer.state.authenticated).NonAuthenticatedMenuItems }
             key={ Localization.MenuKeys.Register }>
            <Button type="dashed">{ Localization.MenuLinks.Register }</Button>
          </Menu.Item> : null
      }
      { !props.navbarContainer.state.authenticated
          ? <Menu.Item onClick={ () => props.navbarContainer.setContainerState('loginFormVisibility', true) } style={ inlineStyling(props.navbarContainer.state.authenticated).NonAuthenticatedMenuItems } key={ Localization.MenuKeys.Login }>
              <a>{ Localization.MenuLinks.Login }</a>
            </Menu.Item> : null
      }
      { props.navbarContainer.state.authenticated ?
         <Menu.Item style={ inlineStyling(props.navbarContainer.state.authenticated).AuthenticatedMenuItems } onClick={ () => props.navbarContainer.setContainerState('profileDrawerVisibility', true) }>
           <span>
             <Badge className="navbar-authenticated-badge" style={{ transform: 'translate(12px, -3px)', fontSize: 11 }} count={10}>
               <Avatar src={ props.auth.profileImage } className="navbar-authenticated-avatar" shape="circle" size="small"  />
             </Badge>
            </span>
         </Menu.Item> : null
      }
    </Menu>
  </div>
);

const navigateToSearch = async (e, props, isClicked) => {
  if (isClicked || e.key === 'Enter') {
    await props.navbarContainer.setContainerState('isNavigating', true);
    await Router.pushRoute(`/courses/search/${ _.kebabCase(props.navbarContainer.state.autocompleteTerm) }?page=1`);
    props.navbarContainer.setContainerState('isNavigating', false);
  }
};

const inlineStyling = () => {
  return {
    NonAuthenticatedMenuItems: { float: 'right' },
    AuthenticatedMenuItems: { float: 'right', marginRight: '20px' },
    AuthenticatedBadge: { transform: 'translate(-13px, -5px)' },
  }
};

export default DesktopNavbar
