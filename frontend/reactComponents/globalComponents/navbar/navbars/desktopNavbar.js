import React from 'react';
import { Menu, Icon, Button, Input, AutoComplete, Badge, Avatar } from 'antd';
import { MoneySVG, PaperWithBulletPointsSVG } from '../../svgs/index';
import Localization from '../localization';
import { Link } from '../../../../../routes';

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
        onSearch={ props.navbarContainer.getAutoCompleteDataResults }
        placeholder={ Localization.Search.Placeholder }>
        <Input suffix={ <Icon type="search" className="certain-category-icon" /> } />
      </AutoComplete>
      <SubMenu title={
        <span>
          <Icon className="navbar-paper-with-bullets" component={ PaperWithBulletPointsSVG } />{ Localization.MenuLinks.LearnAndPractice }
        </span>}>
        <MenuItemGroup title={ Localization.MenuLinks.Learn }>
          <SubMenu key={ Localization.MenuKeys.Courses } title={ Localization.MenuLinks.Courses }>
            <Menu.Item key={ Localization.MenuKeys.Courses }>{ Localization.MenuLinks.AllCourses }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.CourseCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
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
               <Avatar className="navbar-authenticated-avatar" shape="circle" size="small"  />
             </Badge>
            </span>
         </Menu.Item> : null
      }
    </Menu>
  </div>
);

const inlineStyling = () => {
  return {
    NonAuthenticatedMenuItems: { float: 'right' },
    AuthenticatedMenuItems: { float: 'right', marginRight: '20px' },
    AuthenticatedBadge: { transform: 'translate(-13px, -5px)' },
  }
};

export default DesktopNavbar
