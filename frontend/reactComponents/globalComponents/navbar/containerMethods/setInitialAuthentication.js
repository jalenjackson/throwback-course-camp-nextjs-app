export const call = (context, authenticated, auth) => {
  context.setState({ authenticated });
  if (authenticated) {
    context.setState({ authorizationToken: auth.token });
  }
};
