import { message } from 'antd';
import GlobalLocalization from '../globalLocalization';

export const handleUnauthenticatedButFrontEndThinksWeAre = navbarContainer => {
  navbarContainer.setState({
    authenticated: false,
    loginFormVisibility: true
  });
  return message.error(GlobalLocalization.SessionExpired);
};
