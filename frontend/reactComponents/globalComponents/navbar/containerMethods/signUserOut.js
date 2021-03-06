import Cookies from 'universal-cookie';

export const call = async context => {
  const userCookie = new Cookies();
  userCookie.set('token', { authenticated: false }, { path: '/' });
  context.setState({ authenticated: false, profileDrawerVisibility: false, authorizationToken: '' });
  window.location.reload();
};
