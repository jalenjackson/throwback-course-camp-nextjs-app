import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import { manuallyQueryUser } from './manuallyQueryUser';

export const VerifyAuthentication = async ctx => {
  try {
    const checkForAuthenticationCookie = (ctx === 'client' || typeof document !== 'undefined')
      ? new Cookies()
      : new Cookies(ctx.req.headers.cookie);
    const authenticationToken = checkForAuthenticationCookie.get('token');
    if (authenticationToken && authenticationToken.trim() !== '') {
      try {
        jwt.verify(authenticationToken, process.env.JWT_SECRET_KEY);
        const auth = await manuallyQueryUser(authenticationToken);
        return { ...auth, authenticated: true }
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
