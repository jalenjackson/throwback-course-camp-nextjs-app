import React from 'react';
import { Drawer, Menu, Icon, AutoComplete, Input, Avatar, Badge } from 'antd';
import Localization from '../localization';

export default class MobileNavbar extends React.Component {
  state = { visible: false };

  render() {
    const SubMenu = Menu.SubMenu;
    const MenuItemGroup = Menu.ItemGroup;
    return (
      <div id='mobile-navbar'>
        <a>Logo</a>
        <img alt="mobile menu" onClick={ () => this.setState({ visible: true }) } src='/static/icons/hamburger.png' />
        <Drawer
            title="Basic Drawer"
            placement="right"
            closable={ false }
            onClose={ () => this.setState({ visible: false }) }
            visible={ this.state.visible }>
          <Menu onClick={ e => this.props.navbarContainer.setContainerState('activeLink', e.key) } selectedKeys={ [this.props.navbarContainer.state.activeLink] } mode="inline">
            <AutoComplete
                dataSource={ this.props.navbarContainer.state.autoCompleteDataSource }
                onSearch={ this.props.navbarContainer.getAutoCompleteDataResults }
                placeholder={ Localization.Search.Placeholder }>
              <Input suffix={ <Icon type="search" className="certain-category-icon" /> } />
            </AutoComplete>
            <Menu.Item key={ Localization.MenuKeys.Home }>
              <a>{ Localization.Home }</a>
            </Menu.Item>
            { this.props.navbarContainer.state.authenticated
                ? <SubMenu title={
                  <span>
                    <Badge count={10}>
                      <Icon type="bell" />
                    </Badge>
                  </span>}>
                  <Menu.Item key='notification1'>Notification 1</Menu.Item>
                </SubMenu> : null
            }
            { this.props.navbarContainer.state.authenticated
                ? <SubMenu  title={
                  <span>
                    <Avatar shape="circle" size="small"   />
                  </span>}>
                  <MenuItemGroup title={ this.props.auth.name }>
                    <Menu.Item key='profile'>Profile</Menu.Item>
                    <Menu.Item key='settings'>Settings</Menu.Item>
                    <Menu.Item key='help'>Help</Menu.Item>
                    <Menu.Item onClick={ () => this.props.navbarContainer.signUserOut(Menu, SubMenu, MenuItemGroup) } key='signout'>Sign Out</Menu.Item>
                  </MenuItemGroup>
                </SubMenu> : null
            }
            <SubMenu title={<span>{ Localization.MenuLinks.Learn }</span>}>
              <SubMenu key={ Localization.MenuKeys.Courses } title={ Localization.MenuLinks.Courses }>
                <Menu.Item key={ Localization.MenuKeys.Courses }>{ Localization.MenuLinks.AllCourses }</Menu.Item>
                <Menu.Item key={ Localization.MenuKeys.CourseCategories }>{ Localization.MenuLinks.Categories }</Menu.Item>
              </SubMenu>
              <Menu.Item key={ Localization.MenuKeys.Community }>{ Localization.MenuLinks.Community }</Menu.Item>
            </SubMenu>
            <SubMenu title={<span>{ Localization.MenuLinks.Practice }</span>}>
              <MenuItemGroup>
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
              { Localization.MenuLinks.EarnMoneyTeaching }
            </Menu.Item>

            { !this.props.navbarContainer.state.authenticated
              ? <Menu.Item onClick={ () => this.props.navbarContainer.setContainerState('loginFormVisibility', true) }  key={ Localization.MenuKeys.Login }>
                  <a>{ Localization.MenuLinks.Login }</a>
                </Menu.Item> : null
            }

            { !this.props.navbarContainer.state.authenticated
                ? <Menu.Item onClick={() => this.props.navbarContainer.setContainerState('registerFormVisibility', true)}
                    key={ Localization.MenuKeys.Register }>
                  <a>{ Localization.MenuLinks.Register }</a>
                </Menu.Item> : null
            }
          </Menu>
        </Drawer>
      </div>
    )
  }
}
