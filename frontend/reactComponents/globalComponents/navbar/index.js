import React from 'react';
import { Subscribe } from 'unstated';
import NavbarContainer from './navbarContainer';
import DesktopNavbar from './navbars/desktopNavbar';
import MobileNavbar from './navbars/mobileNavbar'
import LoginModal from '../../users/loginModal';
import RegisterModal from '../../users/registerModal';
import SetAuthentication from './setAuthentication';
import ProfileDrawer from "../../users/profileDrawer";

export default class Navbar extends React.Component {
  render() {
    return (
      <Subscribe to={[NavbarContainer]}>
        { navbarContainer => (
          <div>
            <SetAuthentication navbarContainer={ navbarContainer } auth={ this.props.auth } />
            <MobileNavbar navbarContainer={ navbarContainer } auth={ this.props.auth } />
            <DesktopNavbar navbarContainer={ navbarContainer } auth={ this.props.auth } />
            <LoginModal navbarContainer={ navbarContainer } />
            <RegisterModal navbarContainer={ navbarContainer } />
            <ProfileDrawer navbarContainer={ navbarContainer } auth={ this.props.auth } />
          </div>
        )}
      </Subscribe>
    )
  }
}