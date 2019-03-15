import { VerifyAuthentication } from './verifyAuthentication';

export const handleAuthentication = async ctx => {
  const auth = await VerifyAuthentication(ctx);
  if (!auth.authenticated) {
    return typeof document === 'undefined'
      ? ctx.res.redirect('/')
      : window.location.href = '/';
  }
};
