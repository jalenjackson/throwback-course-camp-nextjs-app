import React from 'react';
import { Menu, Icon, Button, Input, AutoComplete, Badge, Avatar } from 'antd';
import { MoneySVG, PaperWithBulletPointsSVG } from '../../svgs/index';
import { Subscribe } from 'unstated';
import NavbarContainer from '../navbarContainer';
import Localization from '../localization';
import LoginModal from '../../../users/loginModal';
import RegisterModal from '../../../users/registerModal';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const DesktopNavbar = props => (
    <Subscribe to={[NavbarContainer]}>
      { navbarContainer => (
          <div id="navbar">
            <Menu onClick={e => navbarContainer.setContainerState('activeLink', e.key)} selectedKeys={[navbarContainer.state.activeLink]} mode="horizontal">
              <Menu.Item key={ Localization.MenuKeys.Home }>
                <a>{ Localization.CompanyName }</a>
              </Menu.Item>
              <AutoComplete
                  dataSource={navbarContainer.state.autoCompleteDataSource}
                  onSearch={navbarContainer.getAutoCompleteDataResults}
                  placeholder={ Localization.Search.Placeholder }>
                <Input suffix={ <Icon type="search" className="certain-category-icon" /> } />
              </AutoComplete>
              <SubMenu title={
                <span>
              <Icon style={ inlineStyling().PaperWithBulletPointsSVGStyles } component={ PaperWithBulletPointsSVG }  />{ Localization.MenuLinks.LearnAndPractice }
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
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                  <Icon style={ inlineStyling().MoneySVGStyles } component={ MoneySVG } />
                  { Localization.MenuLinks.EarnMoneyTeaching }
                </a>
              </Menu.Item>

              { !props.auth.authenticated
                ? <Menu.Item onClick={() => navbarContainer.setContainerState('registerFormVisibility', true)}
                     style={inlineStyling(navbarContainer.state.authenticated).NonAuthenticatedMenuItems}
                     key={Localization.MenuKeys.Register}>
                    <Button type="dashed">{Localization.MenuLinks.Register}</Button>
                  </Menu.Item> : null
              }

              { !props.auth.authenticated
                  ? <Menu.Item onClick={ () => navbarContainer.setContainerState('loginFormVisibility', true) } style={ inlineStyling(navbarContainer.state.authenticated).NonAuthenticatedMenuItems } key={ Localization.MenuKeys.Login }>
                    <a>{ Localization.MenuLinks.Login }</a>
                    </Menu.Item> : null
              }

              { props.auth.authenticated
                  ? <SubMenu style={ inlineStyling(navbarContainer.state.authenticated).AuthenticatedMenuItems } title={
                      <span>
                        <Avatar shape="circle" size="small" style={ inlineStyling().AuthenticatedAvatar }  />
                      </span>}>
                    <MenuItemGroup title="Jalen Jackson">
                      <SubMenu key="notifications" title="Notifications">
                        <Menu.Item key='notification1'>Notification 1</Menu.Item>
                      </SubMenu>
                      <Menu.Item key='profile'>Profile</Menu.Item>
                      <Menu.Item key='settings'>Settings</Menu.Item>
                      <Menu.Item key='help'>Help</Menu.Item>
                      <Menu.Item onClick={ () => navbarContainer.signUserOut(Menu, SubMenu, MenuItemGroup) } key='signout'>Sign Out</Menu.Item>
                    </MenuItemGroup>
                  </SubMenu> : null
              }
              { props.auth.authenticated
                  ? <SubMenu style={ inlineStyling(navbarContainer.state.authenticated).AuthenticatedMenuItems } title={
                      <span>
                        <Badge style={{ transform: 'translate(12px, -3px)', fontSize: 11 }} count={10}>
                          <Icon type="bell" style={{ fontSize: 24, transform: 'translateY(5px)' }} />
                        </Badge>
                      </span>}>
                      <Menu.Item key='notification1'>Notification 1</Menu.Item>
                    </SubMenu> : null
              }
            </Menu>
            <LoginModal />
            <RegisterModal />
          </div>
      )}
    </Subscribe>
);

const inlineStyling = () => {
  return {
    PaperWithBulletPointsSVGStyles: { width: 20, transform: 'translateY(0.35rem)' },
    MoneySVGStyles: { width: 30, transform: 'translateY(0.29em)' },
    NonAuthenticatedMenuItems: { float: 'right' },
    AuthenticatedMenuItems: { float: 'right' },
    AuthenticatedBadge: { transform: 'translate(-13px, -5px)' },
    AuthenticatedAvatar: { width: 30, height: 30 }
  }
};

export default DesktopNavbar
