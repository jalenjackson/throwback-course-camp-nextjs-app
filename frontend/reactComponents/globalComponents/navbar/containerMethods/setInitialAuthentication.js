export const call = async (context, authenticated, auth) => {
  await context.setState({ authenticated, auth, initialStateSet: true });
  if (authenticated) {
    await context.setState({ authorizationToken: auth.token });
  }
};
