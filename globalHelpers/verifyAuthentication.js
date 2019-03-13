import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';

export const VerifyAuthentication = ctx => {
  try {
    const checkForAuthenticationCookie = (ctx === 'client' || typeof document !== 'undefined')
      ? new Cookies()
      : new Cookies(ctx.req.headers.cookie);
    const authenticationCookie = checkForAuthenticationCookie.get('auth');
    if (authenticationCookie && authenticationCookie.token) {
      try {
        jwt.verify(authenticationCookie.token, process.env.JWT_SECRET_KEY);
        return { ...authenticationCookie, authenticated: true }
      } catch (e) {
        return { authenticated: false }
      }
    } else {
      return { authenticated: false }
    }
  } catch (e) {
    return { authenticated: false }
  }
};
