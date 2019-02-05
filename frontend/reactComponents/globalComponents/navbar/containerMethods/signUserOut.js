import Cookies from 'universal-cookie';
import { message } from 'antd';
import Localization from '../localization';

export const call = async context => {
  const userCookie = new Cookies();
  userCookie.set('auth', { authenticated: false }, { path: '/' });
  context.setState({ authenticated: false, profileDrawerVisibility: false, authorizationToken: '' });
  message.success(Localization.NavbarContainer.SignOutFinished, 2.5);
};
