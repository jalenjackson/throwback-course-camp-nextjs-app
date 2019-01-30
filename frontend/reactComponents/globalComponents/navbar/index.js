import React from 'react';
import { Subscribe } from 'unstated';
import NavbarContainer from './navbarContainer';
import DesktopNavbar from "./navbars/desktopNavbar";
import SetAuthentication from './SetAuthentication';
import MobileNavbar from './navbars/mobileNavbar'

const Navbar = props => (
  <Subscribe to={[NavbarContainer]}>
    { navbarContainer => (
      <div>
        <SetAuthentication navbarContainer={ navbarContainer } authenticated={ props.auth.authenticated } />
        <MobileNavbar />
        <DesktopNavbar auth={ props.auth } />
      </div>
    )}
  </Subscribe>
);

export default Navbar
