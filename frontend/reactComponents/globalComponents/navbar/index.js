import React from 'react';
import { Subscribe } from 'unstated';
import NavbarContainer from './navbarContainer';
import DesktopNavbar from './navbars/desktopNavbar';
import MobileNavbar from './navbars/mobileNavbar'
import LoginModal from '../../users/loginModal';
import RegisterModal from '../../users/registerModal';
import SetAuthentication from './setAuthentication';
import ProfileDrawer from "../../users/profileDrawer";

const Navbar = props => (
  <Subscribe to={[NavbarContainer]}>
    { navbarContainer => (
      <div>
        <SetAuthentication navbarContainer={ navbarContainer } auth={ props.auth } />
        <MobileNavbar navbarContainer={ navbarContainer } auth={ props.auth } />
        <DesktopNavbar navbarContainer={ navbarContainer } auth={ props.auth } />
        <LoginModal navbarContainer={ navbarContainer } />
        <RegisterModal navbarContainer={ navbarContainer } />
        <ProfileDrawer navbarContainer={ navbarContainer } auth={ props.auth } />
      </div>
    )}
  </Subscribe>
);

export default Navbar
