import { VerifyAuthentication } from './verifyAuthentication';

export const handleAuthentication = ctx => {
  if (!VerifyAuthentication(ctx).authenticated) {
    return typeof document === 'undefined'
      ? ctx.res.redirect('/')
      : window.location.href = '/';
  }
};
