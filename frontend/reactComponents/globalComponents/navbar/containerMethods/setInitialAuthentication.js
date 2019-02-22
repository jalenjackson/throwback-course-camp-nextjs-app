export const call = async (context, authenticated, auth) => {
  await context.setState({ authenticated });
  if (authenticated) {
    await context.setState({ authorizationToken: auth.token });
  }
};
