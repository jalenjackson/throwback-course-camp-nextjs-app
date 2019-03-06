import React from 'react';
import { Subscribe } from 'unstated';
import NavbarContainer from './navbarContainer';
import DesktopNavbar from './navbars/desktopNavbar';
import MobileNavbar from './navbars/mobileNavbar'
import LoginModal from '../../users/loginModal';
import RegisterModal from '../../users/registerModal';
import SetAuthentication from './setAuthentication';
import ProfileDrawer from '../../users/profileDrawer';
import { BarLoader } from 'react-spinners';

export default class Navbar extends React.Component {
  state = {
    loaded: false
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 600);
  }
  
  render() {
    return (
      <Subscribe to={[NavbarContainer]}>
        { navbarContainer => (
          <div>
            <div style={{ position: this.state.loaded ? 'relative' : 'absolute', opacity: this.state.loaded ? 1 : 0 }}>
              <SetAuthentication navbarContainer={ navbarContainer } auth={ this.props.auth } />
              <MobileNavbar navbarContainer={ navbarContainer } auth={ this.props.auth } />
              <DesktopNavbar navbarContainer={ navbarContainer } auth={ this.props.auth } />
              <LoginModal navbarContainer={ navbarContainer } />
              <RegisterModal navbarContainer={ navbarContainer } />
              <ProfileDrawer navbarContainer={ navbarContainer } auth={ this.props.auth } />
            </div>
            { this.state.loaded
              ? null
              : <div style={ loaderStyles }>
                <BarLoader color={'#43A5FF'} />
              </div>
            }
          </div>
        )}
      </Subscribe>
    )
  }
}

const loaderStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white',
  borderBottom: '1px solid #e8e8e8',
  boxShadow: 'box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)',
  height: '46px',
};