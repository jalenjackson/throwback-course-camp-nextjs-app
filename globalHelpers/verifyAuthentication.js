import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';

export const VerifyAuthentication = ctx => {
  const checkForAuthenticationCookie = typeof document === 'undefined'
    ? new Cookies(ctx.req.headers.cookie)
    : new Cookies();
  const authenticationCookie = checkForAuthenticationCookie.get('auth');
  if (authenticationCookie) {
    try {
      jwt.verify(authenticationCookie.token, process.env.JWT_SECRET_KEY);
      return { ...authenticationCookie, authenticated: true }
    } catch (e) {
      return { authenticated: false }
    }
  } else {
    return { authenticated: false }
  }
};
