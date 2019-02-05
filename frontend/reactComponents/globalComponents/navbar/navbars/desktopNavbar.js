import React from 'react';
import { Menu, Icon, Button, Input, AutoComplete, Badge, Avatar } from 'antd';
import { MoneySVG, PaperWithBulletPointsSVG } from '../../svgs/index';
import Localization from '../localization';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const DesktopNavbar = props => (
  <div id="navbar">
    <Menu onClick={ e => props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [props.navbarContainer.state.activeLink] } mode="horizontal">
      <Menu.Item key={ Localization.MenuKeys.Home }>
        <a>{ Localization.Home }</a>
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
          <Menu.Item key={ Localization.MenuKeys.Community }>{ Localization.MenuLinks.Community }</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title={ Localization.MenuLinks.Practice }>
          <SubMenu key={ Localization.MenuKeys.Quizzes } title={ Localization.MenuLinks.Quizzes }>
            <Menu.Item key={ Localization.MenuKeys.Quizzes }>{ Localization.MenuLinks.AllQuizzes }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.QuizCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
          </SubMenu>
          <SubMenu key={ Localization.MenuKeys.PictureQuizzes } title={ Localization.MenuLinks.PictureQuizzes }>
            <Menu.Item key={ Localization.MenuKeys.PictureQuizzes }>{ Localization.MenuLinks.PictureQuizzes }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.PictureQuizCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
          </SubMenu>
          <SubMenu key={ Localization.MenuKeys.MatchingGames }  title={ Localization.MenuLinks.MatchingGames }>
            <Menu.Item key={ Localization.MenuKeys.MatchingGames }>{ Localization.MenuLinks.MatchingGames }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.MatchingGameCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
          </SubMenu>
          <SubMenu key={ Localization.MenuKeys.CrunchChallenges } title={ Localization.MenuLinks.CrunchChallenges }>
            <Menu.Item key={ Localization.MenuKeys.CrunchChallenges }>{ Localization.MenuLinks.MatchingGames }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.CrunchChallengeCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
          </SubMenu>
          <SubMenu key={ Localization.MenuKeys.CodingChallenges } title={ Localization.MenuLinks.CodingChallenges }>
            <Menu.Item key={ Localization.MenuKeys.CodingChallenges }>{ Localization.MenuLinks.CodingChallenges }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.CodingChallengeCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
          </SubMenu>
          <SubMenu key={ Localization.MenuKeys.CodingProjects } title={ Localization.MenuLinks.CodingProjects }>
            <Menu.Item key={ Localization.MenuKeys.CodingProjects }>{ Localization.MenuLinks.CodingProjects }</Menu.Item>
            <Menu.Item key={ Localization.MenuKeys.CodingProjectCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
          </SubMenu>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key={ Localization.MenuKeys.BecomeATeacher }>
        <Icon className="navbar-money-svg" component={ MoneySVG } />
        { Localization.MenuLinks.EarnMoneyTeaching }
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
